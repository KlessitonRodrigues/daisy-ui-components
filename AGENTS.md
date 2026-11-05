# Project Overview

daisy-ui-components is a UI component library project built with React, Next.js, and Tailwind CSS, using Storybook as the development and documentation environment. It is packaged as `@apps/daisy-ui-storybook` and intended to be consumed as a git submodule (`apps/daisy-ui-storybook`).

## Technologies

| Category | Technology | Version |
|----------|-----------|---------|
| Framework | Next.js | ^16.2.10 |
| React | React | ^19.2.7 |
| DOM | React DOM | ^19.2.8 |
| Styling | Tailwind CSS | ^4.3.2 |
| PostCSS | @tailwindcss/postcss | ^4.3.3 |
| Component Library | daisyUI | ^5.6.16 |
| UI Development | Storybook | ^10.5.10 |
| Storybook Addon | @storybook/nextjs-vite | ^10.5.10 |
| Storybook Addon | @storybook/addon-docs | ^10.5.10 |
| Storybook Addon | @storybook/addon-a11y | ^10.5.10 |
| Storybook Addon | @storybook/addon-vitest | ^10.5.10 |
| Testing | Vitest | latest |
| Testing | @vitest/browser-playwright | latest |
| Testing | @vitest/coverage-v8 | latest |
| Testing | Playwright | latest |
| Chromatic | @chromatic-com/storybook | latest |
| Charts | recharts | ^3.9.2 |
| Icons | react-icons | ^5.7.0 |
| Notifications | react-toastify | ^11.0.5 |
| Utilities | tailwind-merge | ^3.4.1 |
| Language | TypeScript | 7.0.2 |
| Build Tool | Vite | latest |
| Formatting | Prettier | ^3.9.6 |
| Import Sorting | @trivago/prettier-plugin-sort-imports | ^6.0.2 |
| AWS Deploy | AWS CDK | 2.1129.0 |

## Project Structure

```
daisy-ui-components/
├── .storybook/
│   ├── main.ts          # Storybook configuration
│   └── preview.tsx      # Storybook preview decorator
├── .github/             # CI/CD workflows
├── .next/               # Next.js build output (gitignored)
├── .turbo/              # Turbo cache (gitignored)
├── aws/                 # AWS CDK deployment infrastructure
│   ├── awsDeploy.ts
│   ├── cdk.json
│   ├── package.json
│   └── tsconfig.json
├── src/
│   ├── index.tsx        # Package entry point / exports
│   ├── global.css       # Global Tailwind/daisyUI styles
│   ├── components/      # React components
│   │   ├── common/              # Generic presentational components
│   │   │   ├── common.alert.tsx
│   │   │   ├── common.badge.tsx
│   │   │   ├── common.breadcumbs.tsx
│   │   │   ├── common.button.tsx
│   │   │   ├── common.button.icon.tsx
│   │   │   ├── common.carousel.tsx
│   │   │   ├── common.carousel.horizontal.tsx
│   │   │   ├── common.card.tsx
│   │   │   ├── common.container.chart.tsx
│   │   │   ├── common.container.flex.tsx
│   │   │   ├── common.container.forms.tsx
│   │   │   ├── common.container.innerHTML.tsx
│   │   │   ├── common.container.if.tsx
│   │   │   ├── common.container.page.tsx
│   │   │   ├── common.container.section.tsx
│   │   │   ├── common.display.data.tsx
│   │   │   ├── common.icon.tsx
│   │   │   ├── common.icon.map.tsx
│   │   │   ├── common.input.tsx
│   │   │   ├── common.input.area.tsx
│   │   │   ├── common.input.currency.tsx
│   │   │   ├── common.input.mask.tsx
│   │   │   ├── common.input.radio.tsx
│   │   │   ├── common.input.select.tsx
│   │   │   ├── common.load.screen.tsx
│   │   │   ├── common.menu.description.tsx
│   │   │   ├── common.menu.tsx
│   │   │   ├── common.modal.tsx
│   │   │   ├── common.notification.tsx
│   │   │   ├── common.pagination.tsx
│   │   │   ├── common.paper.tsx
│   │   │   ├── common.responsive.buttons.tsx
│   │   │   ├── common.responsive.menu.tsx
│   │   │   ├── common.step.bar.tsx
│   │   │   ├── common.step.tsx
│   │   │   ├── common.switch.tsx
│   │   │   ├── common.table.tsx
│   │   │   ├── common.tab.nav.tsx
│   │   │   ├── common.text.tsx
│   │   │   ├── common.toastify.tsx
│   │   │   └── ImageBox.tsx
│   │   ├── authetication/       # Authentication components
│   │   │   ├── auth.signin.container.tsx
│   │   │   ├── auth.signin.container2.tsx
│   │   │   └── auth.signin.container3.tsx
│   │   ├── navbars/             # Navigation bar components
│   │   │   ├── navbar.fixed.tsx
│   │   │   └── navbar.top.tsx
│   │   ├── settings/            # Settings components
│   │   │   ├── settings.lang.tsx
│   │   │   ├── settings.load.tsx
│   │   │   └── settings.theme.tsx
│   │   ├── showcase/            # Showcase/demo components
│   │   │   ├── showcase.card.list.tsx
│   │   │   ├── showcase.card.list.images.tsx
│   │   │   ├── showcase.card.timeline.tsx
│   │   │   ├── showcase.horizontal.carousel.tsx
│   │   │   ├── showcase.image.right.header.tsx
│   │   │   └── showcase.simple.footer.tsx
│   │   └── users/               # User components
│   │       └── user.avatar.tsx
│   ├── stories/               # Storybook stories
│   │   ├── alert.stories.tsx
│   │   ├── badge.stories.tsx
│   │   ├── breadcumbs.stories.tsx
│   │   ├── button.stories.tsx
│   │   ├── card.stories.tsx
│   │   ├── chart.bar.stories.tsx
│   │   ├── chart.line.stories.tsx
│   │   ├── chart.pie.stories.tsx
│   │   ├── chart.radar.stories.tsx
│   │   ├── chart.radial.stories.tsx
│   │   ├── column.stories.tsx
│   │   ├── input.stories.tsx
│   │   ├── input.area.stories.tsx
│   │   ├── input.currency.stories.tsx
│   │   ├── input.mask.stories.tsx
│   │   ├── input.radio.stories.tsx
│   │   ├── input.select.stories.tsx
│   │   ├── menu.stories.tsx
│   │   ├── menu.description.stories.tsx
│   │   ├── modal.confirm.stories.tsx
│   │   ├── pagination.stories.tsx
│   │   ├── paper.stories.tsx
│   │   ├── radio.stories.tsx
│   │   ├── resposive.button.stories.tsx
│   │   ├── resposive.menu.stories.tsx
│   │   ├── row.stories.tsx
│   │   ├── step.bar.stories.tsx
│   │   ├── step.stories.tsx
│   │   ├── switch.stories.tsx
│   │   ├── text.stories.tsx
│   │   └── user.avatar.stories.tsx
│   └── utils/                 # Utility functions
│       ├── utils.colors.ts
│       ├── utils.date.ts
│       ├── utils.html.ts
│       └── utils.string.ts
├── storybook-static/          # Built Storybook output (gitignored)
├── README.md                  # Project README (submodule instructions)
├── agent.md                   # This file
├── package.json               # Root package manifest
├── tsconfig.json              # TypeScript configuration
├── vitest.config.ts           # Vitest configuration
├── vitest.shims.d.ts          # Vitest type shims
├── next-env.d.ts              # Next.js type declarations
├── .prettierrc                # Prettier configuration
├── postcss.config.mjs         # PostCSS configuration
├── .gitignore                 # Git ignore rules
└── yarn.lock                  # Lockfile
```

## Scripts

| Script | Command | Description |
|--------|---------|-------------|
| dev | `storybook dev -p 6006` | Start Storybook dev server on port 6006 |
| build | `storybook build` | Build static Storybook |

## Testing

Tests run via Vitest with the `@storybook/addon-vitest` plugin and Playwright browser provider (Chromium, headless). Storybook stories are used as test targets.

Configuration: `vitest.config.ts`

## Formatting & Linting

- Prettier with `@trivago/prettier-plugin-sort-imports`
- Import order: `^src/(.*)$`, `^server/(.*)$`, `^[./]`
- Config: `.prettierrc`

## TypeScript

- Strict mode enabled
- JSX: react-jsx
- Module resolution: bundler
- Config: `tsconfig.json`

## AWS Deployment

The `aws/` directory contains AWS CDK infrastructure for deploying the Storybook build to CloudFront. Scripts: `cdk-synt`, `cdk-deploy`.
