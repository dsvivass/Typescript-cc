# Typescript-cc
To compile typescript files to javascript in a folder, use the command **tsc << filename.ts >> -outDir << path >>**:
```
    tsc main.ts -outDir scripts
```

It will compile the file *main.ts* to *main.js* in a new folder called *scripts*.

To execute the compiled javascript file, use the command **node << path >>/<< filename.js >>**:
```
    node scripts/main.js
```