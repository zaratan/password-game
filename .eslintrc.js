module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  rules: {
    // const > let >>>> var
    // On va aussi destructurer les object autant que possible
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    // Les arrow functions auront des {} seulement si nécessaire.
    'arrow-body-style': [2, 'as-needed'],
    // Detecte les cas ou des lignes sont inutilisées
    // Le allowTaggedTemplates est là pour de la compatibilité avec
    // styled-components
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    // On autorise les console.log car je l'utilise trop souvent en debug
    // pour accepter que JS me crie dessus.
    'no-console': 0,
    // Il y a des cas où on veut juste un named export dans un fichier
    // nottament en cours de dev. Je ne suis pas sûr qu'il y ait un réel
    // intérêt à cette règle qui vient de AirBnb.
    'import/prefer-default-export': 0,
    import: 0,
    // Il y a des cas où on va vouloir des fonctions anonymes en JS
    'func-names': 0,
    // J'aime bien ne pas avoir d'espace avant les () dans une déclaration
    'space-before-function-paren': 0,
    // C'est le taf de prettier
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    // Il y a des cas tout à fait valide de renvoyer soit null soit
    // un objet dans une fonction. C'est le travail de TS de trouver
    // ces erreurs.
    'consistent-return': 0,
    // Chaque composant doit avoir un nom. C'est affreux a debug sinon.
    'react/display-name': 1,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    // Emoji everywhere
    'jsx-a11y/accessible-emoji': 0,
    'react/require-default-props': 0,
    // On liste les extensions de fichiers qui peuvent contenir du JSX
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    radix: 0,
    // Ça sera géré par Prettier
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    // On configure prettier
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
        semi: true,
      },
    ],
    // Des fois c'est pratique d'avoir des liens avec
    // '#' ou des valeurs invalides comme href
    // lors du prototypage.
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    // Marquer le non-repect des règles de hook comme des erreurs.
    'react-hooks/rules-of-hooks': 'error',
    // Marquer le fait qu'il manque des dépendances dans les useEffect
    // comme un warning.
    'react-hooks/exhaustive-deps': 'warn',
    // Les 2 règles suivantes sont là pour autoriser
    // à ce que les fonctions et modules ne soient pas typés.
    // En effet, dans un contexte React, la plupart du temps nos
    // fonctions seront des composants et leur typage sera inutile.
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,

    // Les règles suivantes sont présente pour un défaut de
    // compatibilité entre ESlint et Typescript.
    // On desactive les règles de ESLint et
    // on active les règles de typescript-eslint correspondantes.

    // La plupart du temps on veut que eslint hurle quand des variables
    // ne sont pas utilisées. On autorise certains patterns classiques.
    // notamment les variables commençant par _
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        argsIgnorePattern: 'res|next|Sequelize|^err|^_.*',
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  // Les différents plugins
  plugins: ['prettier', 'react-hooks', '@typescript-eslint'],
  // Ces fichiers ne sont pas écrits par nous.
  ignorePatterns: ['next-env.d.ts', 'node_modules/', '/public/'],
};
