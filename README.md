# encode-case64 😄
simple string base64 encoder module for node.js.

## Install 
```
$ npm install encode-case64 --save
```
## Usage
```
// commonjs style
require('encode-case64');

// es6 style
import "encode-case64";

const str = "Your String."
```
encrypt to Lowercase:
```
const encodedLower = str.encodeToLowerCase();
output : -w-w91ci-b-td-h-jpbmcu
```
encrypt to Uppercase:
```
const encodedUpper = str.encodeToUpperCase();
output : WW91-C-IBT-DHJ-P-B-M-C-U
```
decrypt from Lowercase/Uppercase:
```
const decodedUpper = encodedUpper.decodeCase64();
output : Your String.
```