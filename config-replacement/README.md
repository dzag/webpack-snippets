This demo demonstrates webpack's ability to replace modules at compile time using `webpack.NormalModuleReplacementPlugin`.

The demo mimics the Angular CLI environments replacement.

`npm run build-dev` output:
```text
Hash: 4c916d34e9a155940325
Version: webpack 4.29.6
Time: 618ms
Built at: 2019-03-01 22:30:23
    Asset      Size  Chunks             Chunk Names
bundle.js  9.96 KiB    main  [emitted]  main
Entrypoint main = bundle.js
[./src/environments/environment.js] 79 bytes {main} [built]
[./src/index.js] 80 bytes {main} [built]
```

`npm run build-prod` output:
```text
Hash: 1d5b4913497537ab3070
Version: webpack 4.29.6
Time: 618ms
Built at: 2019-03-01 22:31:31
    Asset    Size  Chunks             Chunk Names
bundle.js  10 KiB    main  [emitted]  main
Entrypoint main = bundle.js
[./src/environments/environment.prod.js] 83 bytes {main} [built]
[./src/index.js] 80 bytes {main} [built]
```
