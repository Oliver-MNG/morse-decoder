const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var result = "";
    while (expr.length >= 10) {
        var firstLetter = expr.slice(0, 10);
        firstLetter = firstLetter.replace(/00/g, "");
        firstLetter = firstLetter.replace(/10/g, ".");
        firstLetter = firstLetter.replace(/11/g, "-");
        firstLetter = firstLetter.replace("**********", " ");
        if (firstLetter !== " ") {
          result += MORSE_TABLE[firstLetter]
        } else {
          result += " ";
        }
        expr = expr.slice(10);
    }
    return result;
}

module.exports = {
    decode
}
