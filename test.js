const { translate } = require('./index');

(async () => {
  const translatedText = await translate({ srcLangCode: 'en', dstLangCode: 'vi', text: 'I want a dog' });
  console.log(translatedText);
})();