function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n),n.register("7rYDH",(function(t,o){function r(){return fetch("https://books-backend.p.goit.global/books/category-list ").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}function n(){return fetch("https://books-backend.p.goit.global/books/top-books").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}function i(e){return fetch(`https://books-backend.p.goit.global/books/category?category=${e}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}e(t.exports,"getCategories",(function(){return r})),e(t.exports,"getAllBooks",(function(){return n})),e(t.exports,"getBookByCategory",(function(){return i}))})),n("7rYDH");
//# sourceMappingURL=shopping-list.050467fc.js.map