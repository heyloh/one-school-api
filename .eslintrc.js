module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "rules": {
      "no-console": "off",
      "import/first": "off",
      "no-param-reassign": "off",
      "camelcase": "off",
    },
    "parser": "babel-eslint"
};
