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
```
decrypt to Lowercase:
```
const decodedLower = str.decodeToLowerCase();
```
encrypt to Uppercase:
```
const encodedUpper = str.encodeToUpperCase();
```
decrypt to Uppercase:
```
const decodedUpper = str.decodeToUpperCase();
```