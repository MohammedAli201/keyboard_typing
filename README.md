# Typing Practice with a Visual Keyboard

A React typing exercise that highlights pressed keys and compares typed words with a practice passage.

## What this project demonstrates

Keyboard events, React hooks, input comparison and browser speech synthesis.

## Run locally

```bash
npm ci
npm start
```

Create React App normally serves the development app at `http://localhost:3000`.
`npm run build` produces a static build. The existing `npm test` script does not by itself establish application test coverage.

## Code guide

`src/App.js` manages the typing exercise; `src/components/VisualKeyboard.js` displays key feedback; `SpeechSynthesis.js` handles speech.

## Status

Learning project. Browser support affects speech synthesis. The passage is loaded from `public/text.txt`.

Dependencies are recorded in `package-lock.json`. The original framework generation is retained; no claim of a current production dependency audit is made.
