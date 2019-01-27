# encode-case64 😄
simple string base64 encoder module for node.js.

## Install 
```
$ npm install encode-case64 --save
```
## Usage
```javascript
// commonjs style
require('encode-case64');

// es6 style
import "encode-case64";

const str = "Your String."
```
encode/decode string to upper/lower case with base64
```javascript
⚡ encode to Lowercase: 👍
const encodedLower = str.encodeToLowerCase();
output : "-w-w91ci-b-td-h-jpbmcu"

⚡ encode to Uppercase: 👍
const encodedUpper = str.encodeToUpperCase();
output : "WW91-C-IBT-DHJ-P-B-M-C-U"

⚡ decode from Lowercase/Uppercase: 👍
const your-original-string = encodedUpper.decodeFromCase64();
output : "Your String."
```
convert/de-convert string to upper/lower case (without encoding)
```javascript
⚡ convert to Lowercase: 👍
const lowerStr = str.convertToLowerCase();
output : "-your -string."

⚡ convert to Uppercase: 👍
const upperStr = str.convertToUpperCase();
output : "Y-O-U-R S-T-R-I-N-G."

⚡ convert from Lowercase/Uppercase: 👍
const your-original-string = upperStr.convertFromCase64();
output : "Your String."
```

## Test
To run the test suite, first install the dependencies, then run npm test:
```
$ npm install
$ npm test
```
