# Install babel 7 with nodemon :

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node nodemon
```

### add script to package.json

```
"scripts": {
    "devbabel": "nodemon --exec babel-node index.js"
  }
```

### create .babelrc

```
// .babelrc
{
  "presets": ["@babel/preset-env"]
}
```