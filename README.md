# Kanvas

Collaborative whiteboard and canvas built with Next.js App Router, React 19, Liveblocks real‑time collaboration, Convex for data and server functions, Clerk authentication, and Tailwind CSS v4. Users can create boards, draw and manipulate layers, and collaborate with presence cursors and selections in real time.


## Tech Stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS v4, Shadcn UI 
- Clerk (users, organizations, invites)
- Convex (serverless data/functions)
- Liveblocks (realtime presence + storage)
- Radix UI, Lucide, Zustand


## Project Structure

- `app/` App Router pages, layouts, API routes, and styles
- `components/` UI and feature components (auth, modals, room, ui primitives)
- `providers/` Context providers (Convex client, Liveblocks, Modal)
- `convex/` Convex schema and server functions (auth, boards, board)
- `lib/` Client utilities and Liveblocks client setup
- `hooks/` Custom React hooks (API mutations, selection, scroll, delete layers)
- `store/` Zustand stores (e.g., rename modal)
- `types/` Shared TypeScript types for the canvas (layers, colors, etc.)


## High-Level Architecture

### Frontend (Next.js + React)
- Renders the UI, canvas, and interactions
- Handles keyboard shortcuts, selections, and drawing logic
- Communicates with Convex and Liveblocks

### Real-time Layer (Liveblocks)
- Manages rooms for each board
- Syncs presence (cursors, selections)
- Stores shared canvas state (layers, order, drawing data)

### Backend & Data (Convex)
- Stores board metadata and permissions
- Handles queries and mutations (create board, favorite, list boards)
- Integrates with Clerk for secure auth

### Authentication (Clerk)
- User sessions and identity
- Organization management and invitations
- Secure access control for boards



## Core Components and Responsibilities

- `providers/liveblocks-provider.tsx`
  Initializes Liveblocks Room provider so components can read/write presence and storage.

- `providers/convex-client-provider.tsx`
  Sets up Convex React client for calling server functions from the UI.

- `components/room.tsx`
  Connects a board to a Liveblocks room, wires presence, storage maps/lists (`layers`, `layerIds`).

- `convex/board.ts` and `convex/boards.ts`
  Server functions for creating, updating, listing, and removing boards plus permissions.

- `hooks/use-api-mutation.ts`
  Typed helper for calling Convex mutations from the client with loading/error handling.

- `hooks/use-delete-layers.ts`, `hooks/use-selection-bounds.ts`
  Canvas‑specific logic for manipulating layers and computing selection bounds.

- `types/canvas.ts`
  Canonical definitions for `Layer`, `Color`, and related drawing entities.


## Data & Realtime Model

- Liveblocks Storage
  - `layers: LiveMap<string, LiveObject<Layer>>`
  - `layerIds: LiveList<string>` ordering of layers
- Liveblocks Presence
  - `cursor`, `selection`, `pencilDraft`, `penColor`
- Convex Schema
  - Boards and related metadata (see `convex/schema.ts`)





## Running Locally

### Prerequisites

- Node.js 18+
- npm / pnpm / yarn / bun
- Accounts for:
  - Clerk
  - Convex
  - Liveblocks

(All have free tiers.)

---

### Environment Variables

Create a `.env.local` file in the project root:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Convex
CONVEX_DEPLOYMENT=...
CONVEX_SITE_URL=http://localhost:3000

# Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=pk_liveblocks_...
LIVEBLOCKS_SECRET_KEY=sk_liveblocks_...


### Install & Start

```bash
npm install
npm run dev
# open http://localhost:3000
```

Alternative package managers:

```bash
yarn && yarn dev
pnpm i && pnpm dev
bun install && bun dev
```

### Lint

```bash
npm run lint
```


## Key Scripts

- `dev` Start Next.js in development mode
- `build` Production build
- `start` Start production server
- `lint` Run ESLint


