module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "comma-dangle": 0,
    "no-underscore-dangle": 0,
    "babel/object-shorthand": 1,
    "eqeqeq": ["error", "smart"],
    "react/sort-comp": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "meteor/audit-argument-checks": 0,
    "flowtype/boolean-style": [
      2,
      "boolean"
    ],
    "flowtype/define-flow-type": 1,
    "flowtype/delimiter-dangle": [
      2,
      "never"
    ],
    "flowtype/generic-spacing": [
      2,
      "never"
    ],
    "flowtype/no-primitive-constructor-types": 2,
    "flowtype/no-types-missing-file-annotation": 2,
    "flowtype/no-weak-types": 0,
    "flowtype/object-type-delimiter": [
      2,
      "comma"
    ],
    "flowtype/require-parameter-type": 2,
    "flowtype/require-return-type": [
      0,
      "never",
      {
        "annotateUndefined": "never"
      }
    ],
    "flowtype/require-valid-file-annotation": 2,
    "flowtype/semi": [
      2,
      "always"
    ],
    "flowtype/space-after-type-colon": [
      2,
      "always"
    ],
    "flowtype/space-before-generic-bracket": [
      2,
      "never"
    ],
    "flowtype/space-before-type-colon": [
      2,
      "never"
    ],
    "flowtype/type-id-match": [
      0,
      "^([A-Z][a-z0-9]+)+Type$"
    ],
    "flowtype/union-intersection-spacing": [
      2,
      "always"
    ],
    "semi": [2, "never"],
    "flowtype/use-flow-type": 1,
    "flowtype/valid-syntax": 1,
    "import/no-extraneous-dependencies": 0,
    'import/extensions': ['off', 'never'],
    "no-multi-spaces": ["error", { exceptions: { "ImportDeclaration": true } }]
  }
};
