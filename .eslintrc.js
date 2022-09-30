module.exports = {
    env: {
        // где будет исполняться наш код
        browser: true,
        es2021: true,
        jest: true
    },
    /* Пресет с настройками. prettier должен быть последним. 
    Он удаляет некоторые правила eslint из-за которых могут возникать конфликты. */
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'prettier'],
    rules: {
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/no-unresolved': 'off',
        // использовать именованый экспорт
        'import/prefer-default-export': 'off',
        // переменная ни где не используется - ворнинг
        'no-unused-vars': 'off',
        // нет дефолтного значения
        'react/require-default-props': 'off',
        //
        'react/forbid-prop-types': 'off',
        //
        'prefer-destructuring': 'off',
        'react/no-find-dom-node': 'off', // Я этого не знаю
        'react/no-did-mount-set-state': 'off',
        'react/no-unused-prop-types': 'off', // Это всё ещё работает нестабильно
        'react/jsx-one-expression-per-line': 'off',
        'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
        'jsx-a11y/label-has-for': [
            2,
            {
                required: {
                    every: ['id']
                }
            }
        ], // для ошибки вложенных свойств htmlFor элементов label
        // использовали jsx не импортировав react
        'react/react-in-jsx-scope': 'off',
        // пропс передаётся спред оператором
        'react/jsx-props-no-spreading': 'off',
        // описывать компоненты как function а не ()=>
        'react/function-component-definition': 'off',
        // хз, eslint залупился на ts
        'no-shadow': 'off',
        // при импорте указывать расшырение файлов
        'import/extensions': 'off',
        // ругается на импорт дев зависимости, на webpack, но он и так нужен для сборки
        'import/no-extraneous-dependencies': 'off',
        // запретить нижние подчёркивания
        'no-underscore-dangle': 'off',
        'max-len': ['error', { code: 999999999999999 }],
        'object-shorthand': 'off',
        'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
        'no-console': 'off',
        'no-alert': 'off',
        'func-names': ['error', 'as-needed'],
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to']
            }
        ]
    },
    globals: {
        __IS_DEV__: true
    },
    // переопределение правил для определенных файлов
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off'
            }
        }
    ]
};
