## A Simple TS Project
- 3 files, lightweight!
- use the `tsc` command
- review JS language-level types
- review OTHER details that come out of the `tsc` process
  - a declaration file `.d.ts`


### Package file
- typescript as a dev dep
- a dev script
  - starts ts compiler
  - hot-reloading with `--watch` command
  - maintain console output with `preserveWatchOutput`

### tsconfig
CompilerOptions: this object configs the ts compiler a bit.  
- by default, outDir puts js file right next to the original locations of each ts file, here the description is to move the files to the `dist` dir 
Include: where the ts compiler should find the source-code.

### could use cli
could use something like `--outDir` in a ts cli: `tsc --outDir dist`. Storing these details in a config file, though, can be a clearer way to translate compiling intentions in the code.

## Output
with compiler config set to ES3, output is...  
```js
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.addNumbersWithPromise = void 0;
// resolves a promise after a time
function resolveAfterTime(n) {
    return new Promise(function (res) { return setTimeout(res, n); });
}
;
// calls resolveAfterTime, then add 2 vals
function addNumbersWithPromise(a, b, c) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, resolveAfterTime(c)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, a + b];
            }
        });
    });
}
exports.addNumbersWithPromise = addNumbersWithPromise;
;
// run it
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _b = (_a = console).log;
                return [4 /*yield*/, addNumbersWithPromise(2, 7, 500)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); });

```
with compiler config set to ES2015, output is...
```js
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// resolves a promise after a time
function resolveAfterTime(n) {
    return new Promise(res => setTimeout(res, n));
}
;
// calls resolveAfterTime, then add 2 vals
export function addNumbersWithPromise(a, b, c) {
    return __awaiter(this, void 0, void 0, function* () {
        yield resolveAfterTime(c);
        return a + b;
    });
}
;
// run it
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(yield addNumbersWithPromise(2, 7, 500));
}));

```
