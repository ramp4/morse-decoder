const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let result = '';
  let length = expr.length / 10;
  for (i = 0; i < length; i++) {
    if (expr[i * 10] == '*') {
      result += ' ';
    } else {
      let cur_letter = expr.slice(i * 10, 10 + i * 10);
      let morse_letter = '';
      let j = 0;
      while (j < 9) {
        if (cur_letter[j] == 1) {
          if (cur_letter[j + 1] == 0) {
            morse_letter += '.';
            j += 2;
          } else {
            morse_letter += '-';
            j += 2;
          }
        } else {
          j++;
        }
      }
      result += MORSE_TABLE[morse_letter];
    }
  }
  return result;
}

module.exports = {
  decode,
};
