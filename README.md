# daisy-ui-components

A UI component library built with React, Next.js, and Tailwind CSS, using Storybook as the development and documentation environment. Packaged as `@apps/daisy-ui-storybook` and intended to be consumed as a git submodule (`apps/daisy-ui-storybook`).

## Features

- React components built on daisyUI and Tailwind CSS
- Storybook for component development and documentation
- Component stories as test targets via Vitest and Playwright
- Accessibility testing with `@storybook/addon-a11y`
- AWS CDK infrastructure for CloudFront deployment
- Charts via recharts, icons via react-icons, notifications via react-toastify

## Technologies

| Category | Technology |
|----------|------------|
| Framework | Next.js ^16.2.10 |
| React | React ^19.2.7 |
| Styling | Tailwind CSS ^4.3.2 |
| Component Library | daisyUI ^5.6.16 |
| Storybook | ^10.5.10 |
| Testing | Vitest + Playwright |
| TypeScript | 7.0.2 |
| Charts | recharts ^3.9.2 |
| Icons | react-icons ^5.7.0 |

## Installation

Add as a git submodule in your consuming project:

```bash
git submodule add git@github.com:KlessitonRodrigues/daisy-ui-components.git apps/daisy-ui-storybook
git submodule update --init --recursive
```

Install dependencies:

```bash
yarn install
```

## Usage

Import components from the package entry point:

```tsx
import { Button, Card, Modal } from '@apps/daisy-ui-storybook';
```

Or import individual modules via the `./*` export:

```tsx
import { Button } from '@apps/daisy-ui-storybook/components/common/common.button';
```

## Development

Start the Storybook dev server:

```bash
yarn dev
# Storybook runs on port 6006
```

Build static Storybook:

```bash
yarn build
```

## Testing

Tests run via Vitest with `@storybook/addon-vitest` and Playwright (Chromium, headless). Storybook stories are used as test targets.

```bash
yarn test
```

Configuration: `vitest.config.ts`

## Project Structure

```
daisy-ui-components/
├── .storybook/            # Storybook configuration
│   ├── main.ts
│   └── preview.tsx
├── .github/               # CI/CD workflows
├── aws/                   # AWS CDK deployment infrastructure
│   ├── awsDeploy.ts
│   ├── cdk.json
│   ├── package.json
│   └── tsconfig.json
├── src/
│   ├── index.tsx          # Package entry point / exports
│   ├── global.css         # Global Tailwind/daisyUI styles
│   ├── components/        # React components
│   │   ├── common/        # Generic presentational components
│   │   ├── authetication/ # Authentication components
│   │   ├── navbars/       # Navigation bar components
│   │   ├── settings/      # Settings components
│   │   ├── showcase/      # Showcase/demo components
│   │   └── users/         # User components
│   ├── stories/           # Storybook stories
│   └── utils/             # Utility functions
├── storybook-static/      # Built Storybook output (gitignored)
├── package.json           # Root package manifest
├── tsconfig.json          # TypeScript configuration
├── vitest.config.ts       # Vitest configuration
├── vitest.shims.d.ts      # Vitest type shims
├── next-env.d.ts          # Next.js type declarations
├── .prettierrc            # Prettier configuration
├── postcss.config.mjs     # PostCSS configuration
├── .gitignore             # Git ignore rules
└── yarn.lock              # Lockfile
```

## Scripts

| Script | Command | Description |
|--------|---------|-------------|
| dev | `storybook dev -p 6006` | Start Storybook dev server on port 6006 |
| build | `storybook build` | Build static Storybook |

## AWS Deployment

The `aws/` directory contains AWS CDK infrastructure for deploying the Storybook build to CloudFront.

```bash
cd aws
yarn cdk-synt   # synthesize
yarn cdk-deploy # deploy
```

## Formatting & Linting

- Prettier with `@trivago/prettier-plugin-sort-imports`
- Import order: `^src/(.*)$`, `^server/(.*)$`, `^[./]`
- Config: `.prettierrc`

## TypeScript

- Strict mode enabled
- JSX: react-jsx
- Module resolution: bundler
- Config: `tsconfig.json`
