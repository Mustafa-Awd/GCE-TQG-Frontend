# Topic Questions Generator — Frontend

A focused React + Vite frontend for generating topic-based question papers and exporting them as PDFs. It contains the UI, PDF templates, and generation logic used to produce printable question papers.

## Quick start

Requirements:

- Node.js 18+ (LTS recommended)
- npm (or yarn/pnpm)

Install dependencies:

```bash
npm install
```

Run development server (hot reload):

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Lint the codebase:

```bash
npm run lint
```

## Project structure

High-level layout (ASCII tree):

```
.
├── public/                     # Static assets
├── src/                        # Application source
│   ├── main.jsx                # App entry
│   ├── App.jsx                 # Root component
│   ├── index.css               # Global styles
│   ├── pages/                  # Page-level components
│   │   └── GeneratorPage.jsx
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── QuestionsDisplay.jsx
│   │   └── ExportPaperButton.jsx
│   ├── services/               # Business logic / APIs
│   │   └── QuestionsGenerator.js
│   └── pdf/                    # PDF templates and renderers
│       └── TopicPaper.jsx
├── index.html                  # Vite entry
├── package.json                # npm scripts & deps
├── vite.config.js              # Vite configuration
└── README.md                   # Project docs (this file)
```

## Key files

- [src/pages/GeneratorPage.jsx](src/pages/GeneratorPage.jsx) — main generator UI and form
- [src/services/QuestionsGenerator.js](src/services/QuestionsGenerator.js) — question generation logic
- [src/pdf/TopicPaper.jsx](src/pdf/TopicPaper.jsx) — PDF export component using `@react-pdf/renderer`

## Features

- Generate question sets by topic and difficulty
- Configure number of questions and layout
- Export generated paper as a downloadable PDF
