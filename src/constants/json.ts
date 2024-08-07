const sampleJson = Object.freeze({
  "name": "json-presenter",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
 "dependencies": {
    "@headlessui/react": "^1.7.15",
    "@monaco-editor/react": "^4.5.1",
    "@tailwindcss/forms": "^0.5.4",
    "@types/node": "20.3.2",
    "@types/react": "18.2.14",
    "@types/react-dom": "18.2.6",
    "allotment": "^1.19.0",
    "autoprefixer": "10.4.14",
    "eslint": "8.43.0",
    "eslint-config-next": "13.4.7",
    "html-to-image": "^1.11.11",
    "jsonc-parser": "^3.2.0",
    "lodash": "^4.17.21",
    "lodash.debounce": "^4.0.8",
    "lodash.get": "^4.4.2",
    "next": "^14.2.5",
    "postcss": "^8.4.39",
    "prettier": "^2.8.8",
    "prettier-plugin-tailwindcss": "^0.3.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-zoom-pan-pinch": "^3.1.0",
    "reaflow": "5.1.2",
    "tailwindcss": "3.3.2",
    "typescript": "5.1.6",
    "zustand": "^4.3.9"
  },
  "devDependencies": {
    "@types/lodash.debounce": "^4.0.7",
    "lint-staged": "^13.2.3"
  },
});

export const JSON_TEMPLATE = JSON.stringify(sampleJson, null, 2);
