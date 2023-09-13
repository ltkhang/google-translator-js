class UnsupportedLanguage extends Error {
  constructor(message) {
    super(`[UnsupportedLanguage]${message}`);
  }
}

class TranslateError extends Error {
  constructor(message) {
    super(`[TranslateError]${message}`);
  }
}

const supportedLanguages = [
  { langCode: 'af', lang: 'Afrikaans' },
  { langCode: 'sq', lang: 'Albanian' },
  { langCode: 'am', lang: 'Amharic' },
  { langCode: 'ar', lang: 'Arabic' },
  { langCode: 'hy', lang: 'Armenian' },
  { langCode: 'as', lang: 'Assamese' },
  { langCode: 'ay', lang: 'Aymara' },
  { langCode: 'az', lang: 'Azerbaijani' },
  { langCode: 'bm', lang: 'Bambara' },
  { langCode: 'eu', lang: 'Basque' },
  { langCode: 'be', lang: 'Belarusian' },
  { langCode: 'bn', lang: 'Bengali' },
  { langCode: 'bho', lang: 'Bhojpuri' },
  { langCode: 'bs', lang: 'Bosnian' },
  { langCode: 'bg', lang: 'Bulgarian' },
  { langCode: 'ca', lang: 'Catalan' },
  { langCode: 'ceb', lang: 'Cebuano' },
  { langCode: 'ny', lang: 'Chichewa' },
  { langCode: 'zh-CN', lang: 'Chinese' },
  { langCode: 'co', lang: 'Corsican' },
  { langCode: 'hr', lang: 'Croatian' },
  { langCode: 'cs', lang: 'Czech' },
  { langCode: 'da', lang: 'Danish' },
  { langCode: 'auto', lang: 'Detect language' },
  { langCode: 'dv', lang: 'Dhivehi' },
  { langCode: 'doi', lang: 'Dogri' },
  { langCode: 'nl', lang: 'Dutch' },
  { langCode: 'en', lang: 'English' },
  { langCode: 'eo', lang: 'Esperanto' },
  { langCode: 'et', lang: 'Estonian' },
  { langCode: 'ee', lang: 'Ewe' },
  { langCode: 'tl', lang: 'Filipino' },
  { langCode: 'fi', lang: 'Finnish' },
  { langCode: 'fr', lang: 'French' },
  { langCode: 'fy', lang: 'Frisian' },
  { langCode: 'gl', lang: 'Galician' },
  { langCode: 'ka', lang: 'Georgian' },
  { langCode: 'de', lang: 'German' },
  { langCode: 'el', lang: 'Greek' },
  { langCode: 'gn', lang: 'Guarani' },
  { langCode: 'gu', lang: 'Gujarati' },
  { langCode: 'ht', lang: 'Haitian Creole' },
  { langCode: 'ha', lang: 'Hausa' },
  { langCode: 'haw', lang: 'Hawaiian' },
  { langCode: 'iw', lang: 'Hebrew' },
  { langCode: 'hi', lang: 'Hindi' },
  { langCode: 'hmn', lang: 'Hmong' },
  { langCode: 'hu', lang: 'Hungarian' },
  { langCode: 'is', lang: 'Icelandic' },
  { langCode: 'ig', lang: 'Igbo' },
  { langCode: 'ilo', lang: 'Ilocano' },
  { langCode: 'id', lang: 'Indonesian' },
  { langCode: 'ga', lang: 'Irish' },
  { langCode: 'it', lang: 'Italian' },
  { langCode: 'ja', lang: 'Japanese' },
  { langCode: 'jw', lang: 'Javanese' },
  { langCode: 'kn', lang: 'Kannada' },
  { langCode: 'kk', lang: 'Kazakh' },
  { langCode: 'km', lang: 'Khmer' },
  { langCode: 'rw', lang: 'Kinyarwanda' },
  { langCode: 'gom', lang: 'Konkani' },
  { langCode: 'ko', lang: 'Korean' },
  { langCode: 'kri', lang: 'Krio' },
  { langCode: 'ku', lang: 'Kurdish (Kurmanji)' },
  { langCode: 'ckb', lang: 'Kurdish (Sorani)' },
  { langCode: 'ky', lang: 'Kyrgyz' },
  { langCode: 'lo', lang: 'Lao' },
  { langCode: 'la', lang: 'Latin' },
  { langCode: 'lv', lang: 'Latvian' },
  { langCode: 'ln', lang: 'Lingala' },
  { langCode: 'lt', lang: 'Lithuanian' },
  { langCode: 'lg', lang: 'Luganda' },
  { langCode: 'lb', lang: 'Luxembourgish' },
  { langCode: 'mk', lang: 'Macedonian' },
  { langCode: 'mai', lang: 'Maithili' },
  { langCode: 'mg', lang: 'Malagasy' },
  { langCode: 'ms', lang: 'Malay' },
  { langCode: 'ml', lang: 'Malayalam' },
  { langCode: 'mt', lang: 'Maltese' },
  { langCode: 'mi', lang: 'Maori' },
  { langCode: 'mr', lang: 'Marathi' },
  { langCode: 'mni-Mtei', lang: 'Meiteilon (Manipuri)' },
  { langCode: 'lus', lang: 'Mizo' },
  { langCode: 'mn', lang: 'Mongolian' },
  { langCode: 'my', lang: 'Myanmar (Burmese)' },
  { langCode: 'ne', lang: 'Nepali' },
  { langCode: 'no', lang: 'Norwegian' },
  { langCode: 'or', lang: 'Odia (Oriya)' },
  { langCode: 'om', lang: 'Oromo' },
  { langCode: 'ps', lang: 'Pashto' },
  { langCode: 'fa', lang: 'Persian' },
  { langCode: 'pl', lang: 'Polish' },
  { langCode: 'pt', lang: 'Portuguese' },
  { langCode: 'pa', lang: 'Punjabi' },
  { langCode: 'qu', lang: 'Quechua' },
  { langCode: 'ro', lang: 'Romanian' },
  { langCode: 'ru', lang: 'Russian' },
  { langCode: 'sm', lang: 'Samoan' },
  { langCode: 'sa', lang: 'Sanskrit' },
  { langCode: 'gd', lang: 'Scots Gaelic' },
  { langCode: 'nso', lang: 'Sepedi' },
  { langCode: 'sr', lang: 'Serbian' },
  { langCode: 'st', lang: 'Sesotho' },
  { langCode: 'sn', lang: 'Shona' },
  { langCode: 'sd', lang: 'Sindhi' },
  { langCode: 'si', lang: 'Sinhala' },
  { langCode: 'sk', lang: 'Slovak' },
  { langCode: 'sl', lang: 'Slovenian' },
  { langCode: 'so', lang: 'Somali' },
  { langCode: 'es', lang: 'Spanish' },
  { langCode: 'su', lang: 'Sundanese' },
  { langCode: 'sw', lang: 'Swahili' },
  { langCode: 'sv', lang: 'Swedish' },
  { langCode: 'tg', lang: 'Tajik' },
  { langCode: 'ta', lang: 'Tamil' },
  { langCode: 'tt', lang: 'Tatar' },
  { langCode: 'te', lang: 'Telugu' },
  { langCode: 'th', lang: 'Thai' },
  { langCode: 'ti', lang: 'Tigrinya' },
  { langCode: 'ts', lang: 'Tsonga' },
  { langCode: 'tr', lang: 'Turkish' },
  { langCode: 'tk', lang: 'Turkmen' },
  { langCode: 'ak', lang: 'Twi' },
  { langCode: 'uk', lang: 'Ukrainian' },
  { langCode: 'ur', lang: 'Urdu' },
  { langCode: 'ug', lang: 'Uyghur' },
  { langCode: 'uz', lang: 'Uzbek' },
  { langCode: 'vi', lang: 'Vietnamese' },
  { langCode: 'cy', lang: 'Welsh' },
  { langCode: 'xh', lang: 'Xhosa' },
  { langCode: 'yi', lang: 'Yiddish' },
  { langCode: 'yo', lang: 'Yoruba' },
  { langCode: 'zu', lang: 'Zulu' },
];

async function _request({ src, dst, text }) {
  const response = await fetch(`https://${Buffer.from('dHJhbnNsYXRlLmdvb2dsZWFwaXMuY29t', 'base64').toString('utf8')}/translate_a/single?client=gtx&sl=${src}&tl=${dst}&dt=t&dj=1&q=${text}`, {
    "headers": {
      "accept": "*/*",
    },
    "body": null,
    "method": "GET"
  });
  const result = await response.json();
  const sentences = result['sentences'];
  if (sentences === undefined) {
    throw new TranslateError('"sentences" in response');
  }
  if (sentences.length === 0) {
    return '';
  }
  const [sentence] = sentences;
  return sentence['trans'] || '';
}
async function translate({ srcLangCode = 'auto', dstLangCode = 'auto', text = '' }) {
  const supportedLangArr = supportedLanguages.map(item => item['langCode']);
  if (srcLangCode !== 'auto' && !supportedLangArr.includes(srcLangCode)) {
    throw new UnsupportedLanguage('srcLangCode only supports "auto" and languages in supportedLanguages');
  }
  if (dstLangCode !== 'auto' && !supportedLangArr.includes(dstLangCode)) {
    throw new UnsupportedLanguage('dstLangCode only supports "auto" and languages in supportedLanguages');
  }
  return _request({ src: srcLangCode, dst: dstLangCode, text });
}

module.exports = {
  supportedLanguages,
  translate,
  UnsupportedLanguage,
  TranslateError
}
