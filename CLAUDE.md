# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is an Nx monorepo using yarn as the package manager.

### Common Commands
- `yarn nx serve site` - Serve the main site app on localhost:4200  
- `yarn nx serve allplay` - Serve the allplay app on localhost:4201
- `yarn nx build <project>` - Build a specific project
- `yarn nx test <project>` - Run tests for a specific project
- `yarn nx lint <project>` - Lint a specific project
- `yarn nx affected:build` - Build all affected projects
- `yarn nx affected:test` - Test all affected projects
- `yarn nx affected:lint` - Lint all affected projects

### Running Tests
- `yarn nx test` - Run tests for the workspace
- `yarn nx test site` - Run tests for the site app
- `yarn nx test allplay` - Run tests for the allplay app
- Tests use Jest and are configured per project

## Architecture

### Monorepo Structure
The repository is organized as an Nx monorepo with:

**Applications:**
- `apps/site/` - Main personal website (Next.js, default port 4200)
- `apps/allplay/` - AllPlay podcast app (Next.js, port 4201)  
- `apps/allplay-e2e/` - E2E tests for AllPlay

**Libraries:**
- `libs/audio/` - Web audio utilities (`react-web-audio`)
- `libs/content/` - Markdown/MDX content and Content Collections configuration
- `libs/emails/` - Email components and utilities
- `libs/fathom/` - Fathom analytics integration (`react-fathom`)
- `libs/linkcards/` - Link card components (`@linkcards/next`)
- `libs/newsletter/` - Newsletter functionality
- `libs/props/` - Shared prop types and utilities
- `libs/suisse-intl/`, `libs/suisse-mono/`, `libs/suisse-works/` - Font libraries
- `libs/transistor/` - Transistor FM podcast integration (client + React components)
- `libs/use-podcast/` - Custom podcast hooks
- `libs/waveforms/` - Waveform visualization components (`@waveforms/react`)

### Technology Stack
- **Framework:** Next.js with React 19
- **Styling:** Emotion (styled-system), Chakra UI  
- **Content:** Content Collections for typed markdown/MDX processing
- **State Management:** React hooks, context patterns
- **Testing:** Jest, Playwright for E2E
- **Build System:** Nx with custom generators and executors

### Content Management
- Content is managed via Content Collections in `libs/content/content-collections.ts`
- Defines document types: Newsletter, Now, Thought, Update
- Content files are stored in `libs/content/src/docs/`
- Generated types and collections are available from `content-collections`

### Import Aliases
Key path mappings defined in `tsconfig.base.json`:
- `content-collections` → `libs/content/.content-collections/generated`
- `@waveforms/react` → `libs/waveforms/src/index.ts`
- `react-transistor-fm` → `libs/transistor/react/src/index.ts`
- `transistor-client` → `libs/transistor/client/src/index.ts`
- And various font and utility libraries

### Code Organization
- Each app follows Next.js App Router structure with `pages/`, `components/`, `styles/`
- Libraries export via `index.ts` barrel files
- Shared utilities in `libs/props/` for common prop types
- TypeScript configuration extends from workspace `tsconfig.base.json`

### Linting & Formatting
- ESLint with Nx, import ordering, and Prettier integration
- Import order enforced: React → builtin → external → internal → relative
- Prettier with auto end-of-line handling
- Sort imports enabled with specific member syntax ordering
