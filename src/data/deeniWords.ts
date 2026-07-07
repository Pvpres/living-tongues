/**
 * Siletz Dee-niʼ word data layer for "Living Tongues".
 *
 * Siletz Dee-niʼ is an Oregon Athabaskan language of the Confederated Tribes of
 * Siletz Indians (Pacific Coast Athabaskan; closely related to Tolowa Dee-niʼ).
 *
 * Orthography: the practical alphabet used by the Siletz Online Talking Dictionary
 * (a "-" separates syllables; "ʼ" marks ejection/glottalization; "~" marks a
 * nasalized vowel; "v" = schwa; "lh" = /ɬ/; "gh" = /ɣ/; "sr"/"tr" are retroflex).
 *
 * IPA transcription notes:
 * - Each `ipa` entry uses only symbols from the project's canonical inventory
 *   (see src/data/ipaPhonemes.ts / Session 2 spec). Distinctions the inventory
 *   does not encode are collapsed to the nearest available symbol:
 *     · aspiration (ch/t/k/p, tʃʰ etc.) -> plain /tʃ t k p/
 *     · vowel length (aa, ee, ii, uu)   -> short /a e i u/
 *     · retroflex (sr /ʂ/, tr /ʈʂ/, trʼ /ʈʂʼ/) -> /ʃ tʃ tʃʼ/
 * - Word-final "ʼ" on a vowel or sonorant is transcribed as a glottal stop /ʔ/.
 * - "tlh" after a vowel is the affricated realization [tɬ] of /ɬ/
 *   (Bright 1964); "tʼlh" is the ejective lateral affricate /tɬʼ/.
 *
 * Sound-system reference: Jane Bright, "The Phonology of Smith River Athabaskan
 * (Tolowa)", IJAL 30.2 (1964), 101-107; summarized at
 * https://en.wikipedia.org/wiki/Tolowa_language (Phonology / Orthography).
 * Note: Siletz Dee-niʼ has no uvular (q, qʼ) or ejective bilabial (pʼ) phonemes,
 * so those canonical symbols are not exercised by this word list.
 *
 * Every word cites its Siletz Online Talking Dictionary entry in `source`.
 */

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

export const deeniWords: DeeniWord[] = [
  {
    id: "ts-ee-ne-bone",
    deeni: "ts’ee-ne’",
    ipa: ["ts'", "e", "n", "e", "ʔ"],
    gloss: "bone",
    partOfSpeech: "noun",
    phonemeOfInterest: "ts'",
    notes: "Opens with the ejective alveolar affricate /ts'/.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #907 (http://siletz.swarthmore.edu/?entry=907)",
  },
  {
    id: "ts-vn-awl",
    deeni: "ts’vn",
    ipa: ["ts'", "ə", "n"],
    gloss: "awl",
    partOfSpeech: "noun",
    phonemeOfInterest: "ts'",
    notes: "/ts'/ before the mid-central vowel /ə/ (orthographic 'v').",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #4998 (http://siletz.swarthmore.edu/?entry=4998)",
  },
  {
    id: "ghit-ts-ay-blue-jay",
    deeni: "ghit-ts’ay",
    ipa: ["ɣ", "i", "t", "ts'", "a", "i"],
    gloss: "blue jay",
    partOfSpeech: "noun",
    phonemeOfInterest: "ɣ",
    notes: "Voiced velar fricative /ɣ/ (orthographic 'gh'); ends in the /ts'/-plus-diphthong 'ay'.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #878 (http://siletz.swarthmore.edu/?entry=878)",
  },
  {
    id: "lhuk-fish",
    deeni: "lhuk",
    ipa: ["ɬ", "u", "k"],
    gloss: "fish",
    partOfSpeech: "noun",
    phonemeOfInterest: "ɬ",
    notes: "Begins with the voiceless lateral fricative /ɬ/ (orthographic 'lh').",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #2767 (http://siletz.swarthmore.edu/?entry=2767)",
  },
  {
    id: "lha-one",
    deeni: "lha’",
    ipa: ["ɬ", "a", "ʔ"],
    gloss: "one",
    partOfSpeech: "numeral",
    phonemeOfInterest: "ɬ",
    notes: "/ɬ/ onset and a final glottal stop /ʔ/.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #4 (http://siletz.swarthmore.edu/?entry=4)",
  },
  {
    id: "lhin-dog",
    deeni: "lhin’",
    ipa: ["ɬ", "i", "n", "ʔ"],
    gloss: "dog",
    partOfSpeech: "noun",
    phonemeOfInterest: "ɬ",
    notes: "/ɬ/ onset; the final apostrophe marks a glottal/glottalized coda.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #2243 (http://siletz.swarthmore.edu/?entry=2243)",
  },
  {
    id: "k-wvt-upon",
    deeni: "k’wvt",
    ipa: ["k'", "w", "ə", "t"],
    gloss: "upon",
    partOfSpeech: "postposition",
    phonemeOfInterest: "k'",
    notes: "Ejective velar /k'/ with labial off-glide.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #9616 (http://siletz.swarthmore.edu/?entry=9616)",
  },
  {
    id: "kr-ii-k-i-gravy",
    deeni: "kr’ii-k’i",
    ipa: ["k'", "i", "k'", "i"],
    gloss: "gravy",
    partOfSpeech: "noun",
    phonemeOfInterest: "k'",
    notes: "Two ejective velars; orthographic 'kr'' is a labialized ejective mapped to /k'/.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #3339 (http://siletz.swarthmore.edu/?entry=3339)",
  },
  {
    id: "xvsh-us",
    deeni: "xvsh",
    ipa: ["x", "ə", "ʃ"],
    gloss: "us",
    partOfSpeech: "pronoun",
    phonemeOfInterest: "x",
    notes: "Voiceless velar fricative /x/ (the dictionary describes it as a 'gargle h').",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #3803 (http://siletz.swarthmore.edu/?entry=3803)",
  },
  {
    id: "xwe-foot",
    deeni: "xwe’",
    ipa: ["x", "e", "ʔ"],
    gloss: "foot",
    partOfSpeech: "noun",
    phonemeOfInterest: "x",
    notes: "Labialized /x/ (orthographic 'xw') plus final glottal stop.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #2634 (http://siletz.swarthmore.edu/?entry=2634)",
  },
  {
    id: "si-s-xa-ocean",
    deeni: "si~s-xa",
    ipa: ["s", "ĩ", "s", "x", "a"],
    gloss: "ocean",
    partOfSpeech: "noun",
    phonemeOfInterest: "ĩ",
    notes: "Nasalized close vowel /ĩ/ (orthographic 'i~') alongside /x/.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #6697 (http://siletz.swarthmore.edu/?entry=6697)",
  },
  {
    id: "ch-ee-yash-bird",
    deeni: "ch’ee-yash",
    ipa: ["tʃ'", "e", "j", "a", "ʃ"],
    gloss: "bird",
    partOfSpeech: "noun",
    phonemeOfInterest: "tʃ'",
    notes: "Ejective postalveolar affricate /tʃ'/ (orthographic 'ch'').",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #770 (http://siletz.swarthmore.edu/?entry=770)",
  },
  {
    id: "tr-aa-ne-wife",
    deeni: "tr’aa-ne’",
    ipa: ["tʃ'", "a", "n", "e", "ʔ"],
    gloss: "wife",
    partOfSpeech: "noun",
    phonemeOfInterest: "tʃ'",
    notes: "Orthographic 'tr'' is a retroflex ejective affricate, mapped to the nearest inventory symbol /tʃ'/.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #7664 (http://siletz.swarthmore.edu/?entry=7664)",
  },
  {
    id: "chvn-stick",
    deeni: "chvn",
    ipa: ["tʃ", "ə", "n"],
    gloss: "stick",
    partOfSpeech: "noun",
    phonemeOfInterest: "tʃ",
    notes: "Plain postalveolar affricate /tʃ/ (orthographic 'ch').",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #1749 (http://siletz.swarthmore.edu/?entry=1749)",
  },
  {
    id: "shu-good",
    deeni: "shu’",
    ipa: ["ʃ", "u", "ʔ"],
    gloss: "good",
    partOfSpeech: "adjective",
    phonemeOfInterest: "ʃ",
    notes: "Postalveolar fricative /ʃ/ (orthographic 'sh') plus glottal stop.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #2534 (http://siletz.swarthmore.edu/?entry=2534)",
  },
  {
    id: "mvn-house",
    deeni: "mvn’",
    ipa: ["m", "ə", "n", "ʔ"],
    gloss: "house",
    partOfSpeech: "noun",
    phonemeOfInterest: "ʔ",
    notes: "Final glottalization written with an apostrophe, realized as /ʔ/.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #3787 (http://siletz.swarthmore.edu/?entry=3787)",
  },
  {
    id: "yan-south",
    deeni: "yan’",
    ipa: ["j", "a", "n", "ʔ"],
    gloss: "south",
    partOfSpeech: "noun",
    phonemeOfInterest: "j",
    notes: "Palatal glide /j/ (orthographic 'y').",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #7528 (http://siletz.swarthmore.edu/?entry=7528)",
  },
  {
    id: "naa-xe-two",
    deeni: "naa-xe",
    ipa: ["n", "a", "x", "e"],
    gloss: "two",
    partOfSpeech: "numeral",
    phonemeOfInterest: "x",
    notes: "Simple disyllable featuring /x/.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #1751 (http://siletz.swarthmore.edu/?entry=1751)",
  },
  {
    id: "mi-sr-nose",
    deeni: "mi~sr",
    ipa: ["m", "ĩ", "ʃ"],
    gloss: "nose",
    partOfSpeech: "noun",
    phonemeOfInterest: "ĩ",
    notes: "Nasalized /ĩ/; orthographic 'sr' is a retroflex fricative mapped to /ʃ/.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #5045 (http://siletz.swarthmore.edu/?entry=5045)",
  },
  {
    id: "da-lh-sri-gopher",
    deeni: "da~lh-sri~",
    ipa: ["t", "ã", "ɬ", "ʃ", "ĩ"],
    gloss: "gopher",
    partOfSpeech: "noun",
    phonemeOfInterest: "ã",
    notes: "Two nasalized vowels (/ã/, /ĩ/) plus the lateral fricative /ɬ/.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #3269 (http://siletz.swarthmore.edu/?entry=3269)",
  },
  {
    id: "ts-aa-xe-woman",
    deeni: "ts’aa~-xe",
    ipa: ["ts'", "ã", "x", "e"],
    gloss: "woman",
    partOfSpeech: "noun",
    phonemeOfInterest: "ã",
    notes: "Combines the ejective /ts'/ with a nasalized open vowel /ã/.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #4152 (http://siletz.swarthmore.edu/?entry=4152)",
  },
  {
    id: "ch-aa-betlh-deer-hoof",
    deeni: "ch’aa-betlh",
    ipa: ["tʃ'", "a", "p", "e", "tɬ"],
    gloss: "deer hoof",
    partOfSpeech: "noun",
    phonemeOfInterest: "tɬ",
    notes: "Post-vocalic 'tlh' is the affricated realization [tɬ] of /ɬ/ (Bright 1964).",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #2012 (http://siletz.swarthmore.edu/?entry=2012)",
  },
  {
    id: "sut-lh-celery",
    deeni: "sut’lh",
    ipa: ["s", "u", "tɬ'"],
    gloss: "celery",
    partOfSpeech: "noun",
    phonemeOfInterest: "tɬ'",
    notes: "Orthographic 't'lh' writes the ejective lateral affricate /tɬ'/.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #1468 (http://siletz.swarthmore.edu/?entry=1468)",
  },
  {
    id: "t-ut-lh-t-ulh-cricket",
    deeni: "t’ut’lh-t’ulh",
    ipa: ["t'", "u", "tɬ'", "t'", "u", "ɬ"],
    gloss: "cricket",
    partOfSpeech: "noun",
    phonemeOfInterest: "tɬ'",
    notes: "Rich in glottalic sounds: ejective /t'/, ejective lateral affricate /tɬ'/, and /ɬ/.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #1829 (http://siletz.swarthmore.edu/?entry=1829)",
  },
  {
    id: "la-hand",
    deeni: "la’",
    ipa: ["l", "a", "ʔ"],
    gloss: "hand",
    partOfSpeech: "noun",
    phonemeOfInterest: "ʔ",
    notes: "Minimal word: lateral approximant /l/ plus glottal stop /ʔ/.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #3472 (http://siletz.swarthmore.edu/?entry=3472)",
  },
  {
    id: "see-rock",
    deeni: "see",
    ipa: ["s", "e"],
    gloss: "rock",
    partOfSpeech: "noun",
    phonemeOfInterest: "s",
    notes: "Long /e/ (orthographic 'ee'), reduced to /e/ in this inventory.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #6432 (http://siletz.swarthmore.edu/?entry=6432)",
  },
  {
    id: "ta-father",
    deeni: "ta’",
    ipa: ["t", "a", "ʔ"],
    gloss: "father",
    partOfSpeech: "noun",
    phonemeOfInterest: "t",
    notes: "Plain /t/ plus final glottal stop.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #2576 (http://siletz.swarthmore.edu/?entry=2576)",
  },
  {
    id: "naa-ghe-eye",
    deeni: "naa-ghe’",
    ipa: ["n", "a", "ɣ", "e", "ʔ"],
    gloss: "eye",
    partOfSpeech: "noun",
    phonemeOfInterest: "ɣ",
    notes: "Voiced velar fricative /ɣ/ between vowels.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #612 (http://siletz.swarthmore.edu/?entry=612)",
  },
  {
    id: "k-waa-ga-mother",
    deeni: "k’waa-ga’",
    ipa: ["k'", "w", "a", "k", "a", "ʔ"],
    gloss: "mother",
    partOfSpeech: "noun",
    phonemeOfInterest: "k'",
    notes: "Ejective /k'/ onset with labial off-glide.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #4847 (http://siletz.swarthmore.edu/?entry=4847)",
  },
  {
    id: "yaa-me-sky",
    deeni: "yaa-me’",
    ipa: ["j", "a", "m", "e", "ʔ"],
    gloss: "sky",
    partOfSpeech: "noun",
    phonemeOfInterest: "j",
    notes: "Palatal glide /j/ onset; bilabial nasal /m/.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #7220 (http://siletz.swarthmore.edu/?entry=7220)",
  },
  {
    id: "tee-ne-road",
    deeni: "tee-ne",
    ipa: ["t", "e", "n", "e"],
    gloss: "road",
    partOfSpeech: "noun",
    phonemeOfInterest: "t",
    notes: "Simple /t/-initial disyllable.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #6424 (http://siletz.swarthmore.edu/?entry=6424)",
  },
  {
    id: "lhtr-ii-wind",
    deeni: "lhtr’ii",
    ipa: ["ɬ", "tʃ'", "i"],
    gloss: "wind",
    partOfSpeech: "noun",
    phonemeOfInterest: "tʃ'",
    notes: "Consonant cluster of /ɬ/ plus a retroflex ejective affricate (mapped to /tʃ'/).",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #871 (http://siletz.swarthmore.edu/?entry=871)",
  },
  {
    id: "t-uu-telh-bear-grass",
    deeni: "t’uu-telh",
    ipa: ["t'", "u", "t", "e", "ɬ"],
    gloss: "bear grass",
    partOfSpeech: "noun",
    phonemeOfInterest: "t'",
    notes: "Ejective /t'/ onset contrasting with plain /t/ and coda /ɬ/.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #478 (http://siletz.swarthmore.edu/?entry=478)",
  },
  {
    id: "hvm-chi-goodbye",
    deeni: "hvm’-chi’",
    ipa: ["h", "ə", "m", "ʔ", "tʃ", "i", "ʔ"],
    gloss: "goodbye",
    partOfSpeech: "interjection",
    phonemeOfInterest: "h",
    notes: "Glottal /h/ onset; a common greeting/parting phrase.",
    source: "Siletz Dee-ni Online Talking Dictionary, Confederated Tribes of Siletz Indians (ed. A. Lane; Living Tongues Institute / Swarthmore College), entry #3250 (http://siletz.swarthmore.edu/?entry=3250)",
  },
];
