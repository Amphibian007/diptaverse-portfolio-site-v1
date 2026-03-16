# Coding Rules

These rules guide how code should be written in this repository.

---

# Tech Stack

This project uses:

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

Allowed additional libraries:

- Framer Motion
- Lucide React

Do NOT install UI frameworks such as:

- shadcn
- Material UI
- Chakra
- Bootstrap
- Ant Design

Keep the stack minimal and predictable.

---

# Component Design Rules

Components should be small, modular, and reusable.

Guidelines:

- Section components: under ~150 lines
- UI components: under ~80 lines
- Avoid deeply nested JSX
- Prefer composition over large components

Bad example:

Hero.tsx (600+ lines)

Good example:

Hero.tsx
HeroMetrics.tsx
HeroImage.tsx
HeroCTA.tsx

---

# Folder Responsibilities

src/app
Next.js routing and page entry points

src/components
Reusable UI components

src/components/ui
Design system primitives (Button, Container, SectionTitle)

src/sections
Full homepage sections

src/data
Static structured content

src/styles
Extra CSS if needed

src/utils
Helper functions

---

# Styling Rules

Use Tailwind CSS utilities.

Guidelines:

- Prefer Tailwind utility classes
- Avoid inline styles
- Avoid unnecessary custom CSS
- Maintain consistent spacing

Spacing pattern examples:

py-24
py-16
py-12

These represent common vertical spacing used for sections.

Example:

<section className="py-24">

---

# Layout Principles

The layout should feel:

- calm
- premium
- structured
- enterprise-focused

Avoid:

- flashy animations
- loud gradients
- excessive shadows
- chaotic spacing

The site should resemble a modern SaaS product landing page.

---

# Interaction Rules

Interactions should be subtle.

Allowed effects:

- soft hover lift
- gentle border glow
- smooth section reveal

Avoid:

- bouncing animations
- spinning elements
- aggressive motion

---

# Development Workflow

When implementing a feature:

1. Analyze the repository structure first.
2. Explain the implementation plan.
3. Implement only the requested phase.
4. Avoid generating unnecessary files.

Changes should be incremental and clear.

---

# AI Assistant Behavior

Before making changes:

1. Read PROJECT_CONTEXT.md
2. Read CODING_RULES.md
3. Analyze the repository structure

Then implement the requested task.

Do not restructure the repository unless explicitly asked.