# Pediatrics LEK 2026 Study Desk

An interactive, browser-based study system for the Pediatrics LEK 2026 exam. The application combines an 831-card flashcard deck with persistent review queues, source-drill validation, pediatric numbers and pharmacology drills, exam-trap cards, and optional sound and haptic feedback.

The public study surface is a client-side React application. Progress and feedback preferences are stored in the browser with `localStorage`; no account is required for ordinary study use.

## Study features

| Area | What it provides |
| --- | --- |
| Core review | Recall-first flashcards with reveal, Hard, and Easy actions. |
| Persistent queues | All cards, Unseen, Hard pile, Learned, Corrections, Numbers, Pharma, Traps & signs, Source drills, and Needs validation. |
| Targeted review | Filter source-drill cards by topic for focused revision. |
| Source transparency | Per-card provenance and visible labels for settled, caveated, or unresolved source material. |
| Engagement controls | Rotating accessible palettes, session progress, gentle milestone feedback, optional sound, and optional haptics. |
| Offline-friendly persistence | Ratings, validation states, and feedback preferences survive page refresh in the same browser. |
| Keyboard support | Use `Space` to reveal, `H` to mark Hard, and `E` to mark Easy when the study surface is focused. |

## Technology

The project uses React 19, TypeScript, Vite, Tailwind CSS 4, Wouter, Lucide icons, Vitest, and pnpm. The repository also retains the server-oriented template files used by the Manus project, but the GitHub Pages deployment publishes the static client artifact from `dist/public`.

## Requirements

Install the following locally before developing:

| Requirement | Recommended version |
| --- | --- |
| Node.js | 22 or newer |
| pnpm | 10.x, as declared by the repository package metadata |
| Git | Any recent version |

## Installation

Clone the repository and install the locked dependency tree:

```bash
git clone https://github.com/drdyor/peds.git
cd peds
pnpm install --frozen-lockfile
```

The repository intentionally does not commit environment files or secrets. The browser study experience does not require a secret for local use.

## Local development

Start the Vite development server:

```bash
pnpm dev
```

Open the local URL printed by Vite. The development server usually runs on port `3000`, but it may select another available port if needed.

## Available commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the Vite development server. |
| `pnpm check` | Run the TypeScript compiler without emitting files. |
| `pnpm test` | Run the Vitest test suite once. |
| `pnpm build` | Build the client and bundle the server-compatible output. |
| `pnpm exec vite build` | Build only the static client artifact for GitHub Pages. |
| `pnpm preview` | Preview the Vite build locally. |
| `pnpm format` | Format project files with Prettier. |

## How to study

Choose a queue from the left navigation or select a topic from **Targeted review**. Read the prompt and attempt recall before revealing the answer. Mark the card **Hard** when it needs another pass; it remains in the browser’s Hard pile. Mark it **Easy** when the answer is secure; the card moves into the learned state.

The **Needs validation** and **Corrections** queues are intentionally visible. They distinguish source-derived material that requires checking from cards that contain caveats, legacy wording, or an explicit correction. This prevents uncertain source content from appearing indistinguishable from settled exam facts.

The speaker and haptic controls in the header are independent. Sound uses a short Web Audio cue only after a study interaction, while haptics use `navigator.vibrate` when the device supports it. Both preferences are optional and persist locally. If a browser or device does not support one of these capabilities, the visual study workflow remains fully available.

## Browser persistence

The following state is stored locally in the current browser profile:

| Stored state | Effect |
| --- | --- |
| Card ratings | Restores Hard, Easy, and unseen/learned queue membership. |
| Source validation states | Restores topic-drill verification decisions. |
| Sound preference | Restores the speaker toggle. |
| Haptic preference | Restores the vibration toggle. |

Clearing site data, using a private window, or changing browsers will reset this local state. The application does not currently synchronize study progress between devices.

## GitHub Pages deployment

The repository includes an automated workflow at `.github/workflows/pages.yml`. On every push to `main`, it installs the locked dependencies, builds the client, uploads `dist/public` as a Pages artifact, and deploys that artifact to the repository’s Pages environment. It can also be run manually from the **Actions** tab.

The Vite configuration automatically uses `/peds/` as the production base path inside GitHub Actions so that JavaScript, CSS, and asset URLs resolve correctly when the site is hosted at the repository path. Local development continues to use `/`.

To enable the repository setting the first time, open **Settings → Pages** in GitHub and set **Source** to **GitHub Actions**. After the first successful deployment, GitHub will display the Pages URL in the workflow run and repository Pages settings.

The deployed site is a static client. Server-only features, OAuth, database access, and Manus-specific runtime services are not required by the flashcard study surface and are not part of the Pages artifact.

## Continuous integration

The workflow at `.github/workflows/ci.yml` runs for pushes and pull requests targeting `main`. It installs dependencies with the lockfile, runs TypeScript checking, executes Vitest, and builds the application. A change should not be merged when any of these checks fail.

Run the same checks locally before opening a pull request:

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm test
pnpm build
```

## Project structure

```text
client/
  index.html              HTML entry point
  public/                 Small public configuration files
  src/
    components/           Shared UI and shadcn components
    contexts/             Theme context
    hooks/                Reusable React hooks
    lib/cards.ts          Flashcard dataset and metadata
    pages/Home.tsx        Main study interface
    index.css             Global design tokens and styling
server/                   Server/template compatibility files
drizzle/                  Database template metadata
shared/                   Shared constants and types
.github/workflows/        CI and GitHub Pages automation
vite.config.ts            Vite aliases, build output, and Pages base path
package.json              Scripts and dependency metadata
README.md                 This guide
```

## Content and clinical-safety notes

This is an exam-preparation tool, not a clinical decision-support system. Pediatric thresholds, doses, vaccine schedules, and local protocols can change. Cards identify source provenance and distinguish settled content from caveats or material needing validation, but learners should verify current clinical guidance against authoritative sources and their program’s teaching materials.

The source-audit workflow is designed to preserve traceability rather than imply that every legacy source statement is current. In particular, source-derived drills can remain visible as unresolved until they are checked, which is intentional.

## Troubleshooting

If dependencies fail to install, confirm that Node.js and pnpm meet the versions above and rerun `pnpm install --frozen-lockfile`. If the browser shows stale progress, clear site data for the Pages origin or use the application’s current browser profile intentionally; progress is local by design.

If a Pages deployment succeeds but assets are missing, confirm that the workflow was run from `main`, that the repository Pages source is **GitHub Actions**, and that the Vite base path remains `/peds/` for GitHub Actions builds. If CI fails, reproduce the failing command locally using the command table above and inspect the corresponding workflow log.

## License and contribution

The repository is currently marked with the MIT license in `package.json`. Contributions should preserve the recall-first interaction, visible source-status labels, keyboard accessibility, reduced-motion support, and the distinction between exam-stable facts and current-sensitive clinical guidance.
