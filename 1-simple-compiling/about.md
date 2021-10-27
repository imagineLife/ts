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