import { expect, test } from 'vitest'
import { TokenDictionary } from '../src/dictionary'

test('component tokens', () => {
  const dictionary = new TokenDictionary({
    tokens: {
      colors: {
        red: { value: '#EE0F0F' },
        darkred: { value: '#DD0F0F' },
        green: { value: '#0FEE0F' },
        darkgreen: { value: '#0FDD0F' },
      },
    },
    semanticTokens: {
      colors: {
        danger: {
          value: { base: '{colors.red}', _dark: '{colors.darkred}' },
        },
        success: {
          value: { base: '{colors.green}', _dark: '{colors.darkgreen}' },
        },
      },
    },
    componentTokens: {
      button: {
        primary: {
          color: { value: '{colors.danger}' },
          backgroundColor: { value: '{colors.success}' },
        },
      },
    },
  })

  dictionary.build()

  expect(dictionary.allTokens).toMatchInlineSnapshot(`
    [
      Token {
        "description": undefined,
        "extensions": {
          "category": "colors",
          "condition": "base",
          "prop": "red",
        },
        "name": "colors.red",
        "originalValue": "#EE0F0F",
        "path": [
          "colors",
          "red",
        ],
        "type": "color",
        "value": "#EE0F0F",
      },
      Token {
        "description": undefined,
        "extensions": {
          "category": "colors",
          "condition": "base",
          "prop": "darkred",
        },
        "name": "colors.darkred",
        "originalValue": "#DD0F0F",
        "path": [
          "colors",
          "darkred",
        ],
        "type": "color",
        "value": "#DD0F0F",
      },
      Token {
        "description": undefined,
        "extensions": {
          "category": "colors",
          "condition": "base",
          "prop": "green",
        },
        "name": "colors.green",
        "originalValue": "#0FEE0F",
        "path": [
          "colors",
          "green",
        ],
        "type": "color",
        "value": "#0FEE0F",
      },
      Token {
        "description": undefined,
        "extensions": {
          "category": "colors",
          "condition": "base",
          "prop": "darkgreen",
        },
        "name": "colors.darkgreen",
        "originalValue": "#0FDD0F",
        "path": [
          "colors",
          "darkgreen",
        ],
        "type": "color",
        "value": "#0FDD0F",
      },
      Token {
        "description": undefined,
        "extensions": {
          "category": "colors",
          "condition": "base",
          "conditions": {
            "_dark": "{colors.darkred}",
            "base": "{colors.red}",
          },
          "prop": "danger",
        },
        "name": "colors.danger",
        "originalValue": "{colors.red}",
        "path": [
          "colors",
          "danger",
        ],
        "type": "color",
        "value": "#EE0F0F",
      },
      Token {
        "description": undefined,
        "extensions": {
          "category": "colors",
          "condition": "_dark",
          "conditions": {
            "_dark": "{colors.darkred}",
            "base": "{colors.red}",
          },
          "prop": "danger",
        },
        "name": "colors.danger",
        "originalValue": "{colors.red}",
        "path": [
          "colors",
          "danger",
        ],
        "type": "color",
        "value": "#DD0F0F",
      },
      Token {
        "description": undefined,
        "extensions": {
          "category": "colors",
          "condition": "base",
          "conditions": {
            "_dark": "{colors.darkgreen}",
            "base": "{colors.green}",
          },
          "prop": "success",
        },
        "name": "colors.success",
        "originalValue": "{colors.green}",
        "path": [
          "colors",
          "success",
        ],
        "type": "color",
        "value": "#0FEE0F",
      },
      Token {
        "description": undefined,
        "extensions": {
          "category": "colors",
          "condition": "_dark",
          "conditions": {
            "_dark": "{colors.darkgreen}",
            "base": "{colors.green}",
          },
          "prop": "success",
        },
        "name": "colors.success",
        "originalValue": "{colors.green}",
        "path": [
          "colors",
          "success",
        ],
        "type": "color",
        "value": "#0FDD0F",
      },
      Token {
        "description": undefined,
        "extensions": {
          "category": "component",
          "condition": "base",
          "prop": [
            "color",
          ],
        },
        "name": "button.primary.color",
        "originalValue": "{colors.danger}",
        "path": [
          "button",
          "primary",
          "color",
        ],
        "type": undefined,
        "value": "{colors.danger}",
      },
      Token {
        "description": undefined,
        "extensions": {
          "category": "component",
          "condition": "base",
          "prop": [
            "backgroundColor",
          ],
        },
        "name": "button.primary.backgroundColor",
        "originalValue": "{colors.success}",
        "path": [
          "button",
          "primary",
          "backgroundColor",
        ],
        "type": undefined,
        "value": "{colors.success}",
      },
    ]
  `)
})
