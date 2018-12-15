# Install babel 7 with nodemon :

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node nodemon
```

# add script to package.json

```
"scripts": {
    "start": "nodemon --exec babel-node src/server.js"
  }
```

# create .babelrc

```
// .babelrc
{
  "presets": ["@babel/preset-env"]
}
```