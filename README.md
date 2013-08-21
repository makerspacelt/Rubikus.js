**Rubikus.js** is a JavaScript module for drawing the Makerspace logo using HTML5 Canvas. Future versions will have to include SVG path exports as well.

## Dependencies

Currently, the component supports only hashes that are 256 bits wide. We use [crypto-js](https://code.google.com/p/crypto-js/)'[ sha256](http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/sha256.js). There is a [working prototype](http://makerspace.lt/Rubikus.js/#github.com), which is able to output the generated hash visualisation to a PNG file. Another requirement is [Jubilat Bold](http://www.dardenstudio.com/typefaces/jubilat) font. If used with Typekit, don't forget to delay the execution until the font is loaded.

## Usage

```javascript
new Rubikus({
    canvas: document.getElementById('makerspace-logotype'),
    hash: CryptoJS.SHA256('Your string').toString()
})
```

## Methods
```javascript
rubikus.setHash(CryptoJS.SHA256('Your string').toString());
```
* setHash : updates the hash, regenerates and redraws a new visualisation

### Want to help out?
Any help appreciated – code or critique, as long as it's constructive. Check out the [Issues page](https://github.com/makerspacelt/Rubikus.js/issues) as well and have fun.