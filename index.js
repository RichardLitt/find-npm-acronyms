var natural = require('natural');
var _ = require('underscore');
var naturalGutenberg = require('natural-gutenberg');


var npmGrams = [];

_.each(naturalGutenberg, function(text) {

  var ngrams = natural.NGrams.trigrams(text);

  _.each(ngrams, function(gram){
    if (gram[0][0].toLowerCase() === 'n' &&
      gram[1][0].toLowerCase() === 'p' &&
      gram[2][0].toLowerCase() === 'm') {
      console.log(gram);
      npmGrams.push(gram.join(' '));
    }
  });

});

console.log(npmGrams);

