# pillaitask

**Pillai Task** is a Next.js + Prisma sample application that implements an admission-enquiry flow with an admin dashboard, authentication, and a small set of API routes. It uses PostgreSQL (via Prisma) for persistence and includes a TailwindCSS UI.

**Quick overview**
- **Tech stack:** `Next.js`, `React`, `TypeScript`, `Prisma`, `Postgres`, `TailwindCSS`.
- **Main features:** admission form, admin signup/login, admin dashboard showing admission data, JWT-based auth utilities.

**Repository layout**
- **`app/`**: Next 13+ app router pages and components used by the frontend (home, admin, dashboard).
- **`api/`**: API route handlers used by older page-based API or for server usage.
- **`lib/`**: helpers for `prisma`, `auth`, `jwt` and API clients.
- **`prisma/`**: Prisma schema (`schema.prisma`) and config.
- **`public/`**: static assets and form SVGs.
- **`component/`** and **`components/`**: UI components and shared pieces.

**Prerequisites**
- Node.js 18+ (or a recent LTS) installed.
- PostgreSQL database (connection string available as `DATABASE_URL`).

**Environment variables**
Create a `.env` file at the project root with at least the following values:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
JWT_SECRET="a-very-secret-key"
# (optional) any other keys used by your deployment
```

Check `lib/jwt.ts`, `lib/prisma.ts` and `lib/auth.ts` for other env var usages.

**Install & run (local)**
1. Install dependencies:

```bash
npm install
```

2. Generate/update Prisma client and run migrations (if migrations are used):

```bash
npx prisma generate
# If you have migrations to apply:
npx prisma migrate dev
```

3. Start development server:

```bash
npm run dev
```

4. Optional: open Prisma Studio to inspect the database:

```bash
npx prisma studio
```

**Available scripts** (from `package.json`)
- `npm run dev`: Runs Next.js in development mode.
- `npm run build`: Builds the production app.
- `npm run start`: Starts the production server after build.
- `npm run lint`: Runs ESLint.

**Important files / areas to inspect**
- `prisma/schema.prisma` — Prisma data model for `Admin` and `Admission`.
- `app/admin/*` — Admin UI pages (login/register) and admin routes.
- `app/dashboard/*` — Dashboard layout and data views.
- `app/api/submit-admission-enquiry/route.ts` — API route for form submissions.
- `lib/prisma.ts` — Prisma client instantiation.
- `lib/jwt.ts` / `lib/jwt-edge.ts` — JWT helpers.

**Notes about authentication**
- JWT-based helpers are in `lib/` and used by API routes. Ensure `JWT_SECRET` is set in production.

**Deployment**
- This is a standard Next.js app; you can deploy it to Vercel, Railway, Render, or any host that supports Node.js.
- For production, set `DATABASE_URL` and `JWT_SECRET` in your host's environment settings and run `npm run build` then `npm run start`.

**Contributing**
- Create issues for bugs or feature requests.
- Open a PR for code changes; keep changes focused and well-documented.

**Troubleshooting**
- If you see Prisma/client errors, run `npx prisma generate`.
- If migrations fail, inspect `prisma/migrations` and your `DATABASE_URL`.

**License & contact**
- This repository does not include a license file by default. Add one if you plan to publish.
- For questions, open an issue or contact the repository owner.

---

If you want, I can also:
- run `npm install` and start the dev server locally, or
- run Prisma commands (`npx prisma generate` / `npx prisma migrate dev`) to ensure the DB client is generated.
# PillaiTask - Next.js Admin Dashboard & Admission Enquiry System

This is a **Next.js 16** project with **Prisma**, **Supabase**, and **TailwindCSS**, featuring an **admin dashboard**, **admission enquiry management**, and **user management**.  

The project is bootstrapped using [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


---

## Features

- Admin registration and login with **JWT authentication**.
- Dashboard with protected routes.
- Fetch and display all admission enquiries dynamically.
- TailwindCSS-based responsive UI.
- Prisma ORM with PostgreSQL/Supabase integration.

---

## Prerequisites

- Node.js v18+  
- npm / yarn / pnpm / bun  
- Git  
- PostgreSQL/supabase (or Neon) database  

---

## Installation

Clone the repository:

```bash
git clone https://github.com/SarvanMaurya123/pillaitask.git
cd pillaitask

