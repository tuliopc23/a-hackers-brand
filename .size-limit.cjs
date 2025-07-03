module.exports = [
  {
    "name": "Client JS Bundle",
    "path": ".svelte-kit/output/client/_app/immutable/**/*.js",
    "limit": "300 KB",
    "gzip": true
  },
  {
    "name": "Client CSS Bundle", 
    "path": ".svelte-kit/output/client/_app/immutable/**/*.css",
    "limit": "60 KB",
    "gzip": true
  },
  {
    "name": "Main Chunk",
    "path": ".svelte-kit/output/client/_app/immutable/chunks/B83-nX_E.js",
    "limit": "250 KB",
    "gzip": true
  }
];
