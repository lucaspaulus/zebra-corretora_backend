module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module"
    },
    env: {
        es2021: true,
        node: true
    },
    ignorePatterns: ["build", ".eslintrc.cjs", "node_modules"],
    extends: ["plugin:@typescript-eslint/recommended", "prettier"],
    rules: {
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                overrides: {
                    interface: {
                        multiline: {
                            delimiter: "semi",
                            requireLast: true
                        },
                        singleline: {
                            delimiter: "semi",
                            requireLast: true
                        }
                    }
                }
            }
        ],

        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",

        indent: ["error", 4],
        quotes: ["error", "double"]
    }
}
