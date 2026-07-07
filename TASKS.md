# Living Tongues — Session Breakdown

## Project Overview
A personal, non-commercial web app that teaches people how to physically produce sounds from endangered languages by showing animated mouth/vocal tract cross-sections. The architecture:

- **IPA sounds are the atomic unit**: every IPA symbol maps to a set of Pink Trombone vocal tract parameters that drive an animated 2D cross-section of the mouth.
- **Dee-ni (Siletz) is the first language**: Dee-ni words are defined as sequences of IPA symbols — no language-specific visuals needed.
- **Pink Trombone** (Neil Thapen, open source) provides the browser-native 2D vocal tract cross-section canvas.
- Audio placeholders: Wikimedia Commons IPA `.ogg` files (public domain).

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS
- React Router v6
- Pink Trombone (adapted JS, no npm package — source embedded)
- Web Audio API (no library)
- No backend — fully static

## Dependency Order
```
Session 1 (scaffold)
     ├── Session 2 (IPA data)      ─┐
     ├── Session 3 (Dee-ni data)    ├── Session 5 (word player UI)
     └── Session 4 (canvas component) ─┘
```
Sessions 1, 2, 3 can run in parallel.
Session 4 depends on Session 1 being complete.
Session 5 depends on Sessions 2, 3, and 4 being complete.

---

## Session 1 — Project Scaffold

**Goal**: A running Vite + React + TypeScript app with Tailwind and routing. No real data or logic — just the skeleton every other session builds on.

**Prompt for Devin**:

```
You are building the scaffold for a web app called "Living Tongues". 
The repo is at /Users/prestonpressoir/Desktop/living-tongues (already git-initialized, currently empty).

Tech stack:
- Vite + React + TypeScript (use `npm create vite@latest . -- --template react-ts`)
- Tailwind CSS v3
- React Router v6

Tasks:
1. Initialize the Vite React TS project in the existing repo directory (do not create a subdirectory).
2. Install and configure Tailwind CSS v3.
3. Install React Router v6.
4. Create the following route structure in App.tsx:
   - "/" → <PhonemeGrid /> (placeholder: just renders "Phoneme Browser — coming soon")
   - "/word/:id" → <WordDetail /> (placeholder: just renders "Word Detail — coming soon")
   - "/phoneme/:ipa" → <PhonemeDetail /> (placeholder: just renders "Phoneme Detail — coming soon")
5. Create a persistent top nav with the app name "Living Tongues" and links to "/" (Browse Sounds) and a placeholder About link.
6. Create the following empty placeholder component files (just export a stub component):
   - src/components/PhonemeGrid.tsx
   - src/components/PhonemeCard.tsx
   - src/components/WordCard.tsx
   - src/components/WordDetail.tsx
   - src/components/PhonemeDetail.tsx
   - src/components/VocalTractCanvas.tsx
   - src/components/PhonemeSequencePlayer.tsx
   - src/hooks/useVocalTract.ts
   - src/hooks/useAudioPlayer.ts
   - src/data/ipaPhonemes.ts (export an empty array `export const ipaPhonemes = []`)
   - src/data/deeniWords.ts (export an empty array `export const deeniWords = []`)
7. Make sure `npm run dev` and `npm run build` both succeed with no errors.
8. Style: dark background (#0f0f0f), off-white text (#f0ede8), accent color a muted teal (#3d8c8c). Apply these as Tailwind config custom colors.
9. Commit everything with message "feat: project scaffold".
```

---

## Session 2 — IPA Data Layer

**Goal**: Build the complete IPA phoneme data file. This is pure research + data — no UI work.

**Prompt for Devin**:

```
You are building the IPA data layer for a web app called "Living Tongues".
The repo is at /Users/prestonpressoir/Desktop/living-tongues.

Your only task is to populate src/data/ipaPhonemes.ts with a well-typed, comprehensive
mapping of IPA symbols to Pink Trombone vocal tract parameters and articulation metadata.

## Background on Pink Trombone
Pink Trombone (https://dood.al/pinktrombone/) models the vocal tract as a 2D tube.
Key parameters you need to research and calibrate:
- `tongueIndex` (number, ~12–40): position along the tract where the tongue creates a constriction
- `tongueDiameter` (number, ~0.5–3.5): how open the constriction is (0 = complete closure)
- `constrictionIndex` (number, ~0–44): secondary constriction point
- `constrictionDiameter` (number): diameter at secondary constriction
- `velumTarget` (number, ~0.01 = closed/oral, ~0.4 = open/nasal)
- `glottal` (boolean): whether there's a simultaneous glottal closure (for ejectives)

Research the Pink Trombone source code (https://dood.al/pinktrombone/ — view source, or 
https://github.com/zakaton/Pink-Trombone) to understand the parameter space.
Then calibrate values for each IPA sound listed below.

## IPA sounds to cover
Cover ALL of the following (these are the sounds present in Siletz Dee-ni plus standard IPA):

Plosives: p, b, t, d, k, g, q, ʔ
Ejectives: p', t', k', q' (same tract as non-ejective counterpart + glottal:true)
Affricates: ts, dz, tʃ, dʒ, tɬ (lateral affricate)
Ejective affricates: ts', tʃ', tɬ'
Fricatives: s, z, ʃ, ʒ, x, ɣ, ɬ (voiceless lateral fricative), h
Nasals: m, n, ŋ
Approximants/Glides: l, r (approximant), j, w
Vowels: a, e, i, o, u, ə, æ, plus nasalized versions (ã, ẽ, ĩ, õ, ũ) via high velumTarget

## TypeScript interface to implement

```typescript
export interface IPAPhoneme {
  ipa: string;                  // IPA symbol string
  deeniOrthography?: string;    // Dee-ni romanization if applicable (e.g. "ts'" for /ts'/)
  place: string;                // e.g. "bilabial", "alveolar", "velar", "glottal"
  manner: string;               // e.g. "plosive", "fricative", "approximant", "vowel"
  voiced: boolean;
  ejective: boolean;
  nasal: boolean;
  tractParams: {
    tongueIndex: number;
    tongueDiameter: number;
    velumTarget: number;
    glottal?: boolean;
  };
  description: string;          // Plain English: "Touch tongue tip to alveolar ridge..."
  audioUrl: string;             // Wikimedia Commons URL to a public-domain .ogg file for this IPA sound
}

export const ipaPhonemes: IPAPhoneme[] = [ ... ];
```

For audioUrl: find the correct Wikimedia Commons file URL for each IPA sound.
The pattern is typically: https://upload.wikimedia.org/wikipedia/commons/[path]/Ipa-[symbol].ogg
Search https://commons.wikimedia.org/wiki/Category:IPA_sound_files to find the correct URLs.
Use the actual direct upload URLs, not the wiki page URLs.

Commit with message "feat: IPA phoneme data layer".
```

---

## Session 3 — Dee-ni Word Data Layer

**Goal**: Build the curated Dee-ni word list. Pure research + data — no UI work.

**Prompt for Devin**:

```
You are building the Dee-ni word data layer for a web app called "Living Tongues".
The repo is at /Users/prestonpressoir/Desktop/living-tongues.

Your only task is to populate src/data/deeniWords.ts.

## Background
Siletz Dee-ni is an Oregon Athabaskan language (Confederated Tribes of Siletz Indians).
Find ~25–35 Dee-ni words from publicly available academic or linguistic documentation.
Good sources to search:
- Published linguistics papers on Siletz Dee-ni (search Google Scholar: "Siletz Dee-ni phonology")
- The Siletz Talking Dictionary website (talkingdictionary.swarthmore.edu/siletz/) — 
  you can READ the orthography and glosses from the UI without scraping audio
- Bates, D. & Bommelyn, L. published Dee-ni learning materials
- AILLA (Archive of the Indigenous Languages of Latin America) may have Athabaskan docs

Choose words that showcase the phonetically interesting sounds:
- Ejective consonants (p', t', k', ts', tʃ', tɬ')
- Glottal stop (ʔ)
- Lateral fricative (ɬ)
- Lateral affricate (tɬ)
- Uvular sounds (q, q')
- A mix of vowel types including nasalized vowels

## TypeScript interface to implement

```typescript
export interface DeeniWord {
  id: string;                   // URL-safe slug, e.g. "tseyh-bone"
  deeni: string;                // Dee-ni orthographic spelling
  ipa: string[];                // Ordered array of IPA symbol strings (must match keys in ipaPhonemes.ts)
  gloss: string;                // English translation
  partOfSpeech?: string;        // e.g. "noun", "verb"
  phonemeOfInterest?: string;   // IPA symbol of the pedagogically notable sound, e.g. "ts'"
  notes?: string;               // Optional: brief linguistic note about this word
  source: string;               // Citation for where this word/transcription comes from
}

export const deeniWords: DeeniWord[] = [ ... ];
```

Important: the `ipa` array must use only IPA symbols that are defined in src/data/ipaPhonemes.ts.
Check that file (it may already exist from another session) or use the symbol list from that file's
interface definition above to ensure consistency.

Commit with message "feat: Dee-ni word data layer".
```

---

## Session 4 — Pink Trombone Canvas Component

**Goal**: A working, standalone React component that renders the Pink Trombone vocal tract cross-section and smoothly animates between vocal tract states when props change.

**Prompt for Devin**:

```
You are building the vocal tract visualization component for a web app called "Living Tongues".
The repo is at /Users/prestonpressoir/Desktop/living-tongues (scaffold already exists — run npm install first).

## Your task
Create src/components/VocalTractCanvas.tsx — a React component that:
1. Embeds a lightly adapted version of Neil Thapen's Pink Trombone rendering code
2. Accepts vocal tract parameters as props
3. Smoothly animates (lerp ~80ms) between parameter states when props change
4. Is purely visual — no audio synthesis (we handle audio separately)

## Pink Trombone source
The original: https://dood.al/pinktrombone/ (view source)
A modular TypeScript port: https://github.com/chdh/pink-trombone-mod
A programmable version: https://github.com/zakaton/Pink-Trombone

Study the source to understand the Tract rendering code. You need only the DRAWING portion 
(the canvas 2D rendering of the vocal tract cross-section shape), NOT the audio synthesis 
(no need for AudioWorklet, glottis synthesis, etc.).

Extract or adapt the tract drawing logic into a self-contained TypeScript module at:
  src/lib/vocalTractRenderer.ts

This module should export a function:
  drawTract(ctx: CanvasRenderingContext2D, params: TractParams, width: number, height: number): void

Where TractParams is:
```typescript
export interface TractParams {
  tongueIndex: number;      // 12–40
  tongueDiameter: number;   // 0.5–3.5
  velumTarget: number;      // 0.01 (closed) to 0.4 (nasal)
  glottal?: boolean;        // show glottal closure indicator
}
```

## VocalTractCanvas component interface
```typescript
interface VocalTractCanvasProps {
  params: TractParams;
  width?: number;       // default 500
  height?: number;      // default 300
  className?: string;
}
```

Behavior:
- On mount: draw the neutral/rest vocal tract shape
- When `params` prop changes: smoothly lerp from current state to new params over ~300ms using requestAnimationFrame
- Canvas should be responsive (use a ResizeObserver or CSS aspect-ratio)
- Color scheme: match app theme (dark background, visible tract outline in off-white/teal)
- Add a subtle label overlay: "tongue", "velum", "lips" at appropriate canvas positions

## Also create src/hooks/useVocalTract.ts
A hook that manages tract state:
```typescript
export function useVocalTract(initialParams: TractParams) {
  // returns { params, setParams, animateTo }
  // animateTo(target: TractParams, durationMs: number) smoothly transitions params
}
```

Make a simple demo page at src/components/PhonemeDetail.tsx (replacing the placeholder):
- Show the VocalTractCanvas
- Add 4–5 hardcoded preset buttons (e.g. /a/, /i/, /k/, /s/, neutral) that call animateTo
- This lets us visually verify the component works

Run `npm run dev` to verify it renders. Run `npm run build` to verify no TS errors.
Commit with message "feat: Pink Trombone vocal tract canvas component".
```

---

## Session 5 — Word Player UI (Final Wiring)

**Goal**: Wire all pieces together into the full app. Depends on Sessions 1–4 being complete.

**Prompt for Devin**:

```
You are completing the "Living Tongues" web app by wiring together all existing pieces.
The repo is at /Users/prestonpressoir/Desktop/living-tongues.
Run `npm install` first, then read ALL existing source files before making changes.

## What already exists (from previous sessions)
- Vite + React + TS + Tailwind + React Router scaffold
- src/data/ipaPhonemes.ts — full IPA → tract params + metadata
- src/data/deeniWords.ts — Dee-ni word list with IPA sequences
- src/components/VocalTractCanvas.tsx — animated Pink Trombone canvas component
- src/lib/vocalTractRenderer.ts — tract drawing logic
- src/hooks/useVocalTract.ts — tract state management hook
- Placeholder stubs for PhonemeGrid, PhonemeCard, WordCard, WordDetail

## Your tasks

### 1. src/hooks/useAudioPlayer.ts
Implement a hook that:
- Accepts an audio URL (string | null)
- Returns { play, pause, isPlaying, duration, currentTime }
- Uses the Web Audio API (no library)
- Fetches and decodes audio on demand (not preloaded for all phonemes at once)

### 2. src/components/PhonemeCard.tsx
A card showing:
- IPA symbol (large, centered, using a Unicode serif font)
- Place + manner label (small, below)
- Play button → plays the ipaPhoneme.audioUrl placeholder audio
- Click → navigates to /phoneme/:ipa

### 3. src/components/PhonemeGrid.tsx
- Renders all ipaPhonemes grouped by manner (Plosives, Fricatives, Nasals, etc.)
- Each group is a labeled section with PhonemeCards in a flex-wrap row

### 4. src/components/PhonemeDetail.tsx (update the demo page from Session 4)
- Show the VocalTractCanvas animated to that phoneme's tractParams
- Show place, manner, voicing, description
- Play button for placeholder audio
- Link back to "/"

### 5. src/components/WordCard.tsx
- Shows Dee-ni spelling, IPA sequence (each symbol as a small chip), English gloss
- Play button
- Click → navigates to /word/:id

### 6. Add a Word Browser page at "/" or a new route "/words"
- Lists all deeniWords as WordCards
- The home page "/" should show both a "Browse Sounds (IPA)" section and a "Browse Words (Dee-ni)" section, or use tabs

### 7. src/components/WordDetail.tsx — the main feature
Implement the full word detail view:
- Dee-ni spelling (large) + IPA breakdown chips + English gloss at top
- VocalTractCanvas (large, centered) — animated
- PhonemeSequencePlayer (below the canvas): 
  - Displays each IPA phoneme in the word as a clickable chip row
  - Active phoneme chip is highlighted
  - Play/Pause/Replay buttons
  - On Play: steps through each phoneme in sequence:
    - Call animateTo() on the VocalTractCanvas with that phoneme's tractParams
    - Play that phoneme's placeholder audio clip
    - Wait for audio to finish (or ~400ms if no audio) then advance to next phoneme
    - Highlight the current phoneme chip
  - Clicking a chip jumps to that phoneme
- Below player: show the current phoneme's full metadata (place, manner, voiced, description)

### 8. src/components/PhonemeSequencePlayer.tsx
Extract the sequence player logic into this component so WordDetail stays clean.
Props:
```typescript
interface PhonemeSequencePlayerProps {
  ipaSequence: string[];                         // array of IPA symbols
  onPhonemeChange: (ipa: string) => void;        // called when active phoneme changes
  className?: string;
}
```

### Final checks
- `npm run dev` — app loads, word browser shows cards, clicking a word plays the sequence
- `npm run build` — no TypeScript errors
- Add a small "placeholder audio" notice in the footer or on word/phoneme detail pages
- Commit with message "feat: complete word player UI wiring"
```

---

## Notes for all sessions
- Always run `npm install` before starting work
- Always run `npm run build` before committing to catch TS errors
- Do not modify files owned by another session unless unavoidable
- Keep components small and focused — one concern per file
- All Dee-ni data must cite its source in a comment or the `source` field
