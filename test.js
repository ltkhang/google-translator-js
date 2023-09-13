const { translate, getTextToSpeechURL } = require('./index');

(async () => {
  const translatedText = await translate({ srcLangCode: 'en', dstLangCode: 'vi', text: 'I want a dog' });
  console.log(translatedText);
  const textToSpeechURL = getTextToSpeechURL({ lang: 'vi', text: translatedText });
  console.log(textToSpeechURL);
})();