
# RISE Enterprises Business Website

RISE Enterprises is a premium business website for a leading construction and infrastructure company based in Pune, India. This project showcases the company's portfolio, services, leadership, and contact information with a modern, responsive, and highly optimized user experience.

## About the Project

**RISE** is designed to:

- Present a professional, business-focused online presence for a construction firm
- Highlight completed projects with fast-loading, optimized images and detailed project pages
- Clearly communicate the company's mission, vision, leadership, and advantages
- Provide a seamless contact experience with a secure, SMTP-powered contact form
- Deliver a premium, glassmorphic UI with smooth navigation and mobile-first design

### Key Features

- **Next.js 15** with App Router for fast, SEO-friendly pages
- **TypeScript** for type safety and maintainability
- **Tailwind CSS v4** for rapid, responsive, and modern styling
- **Dynamic imports & Suspense** for code splitting and fast initial load
- **Optimized Images** using next/image and custom preloading
- **Animated, glassy navigation** with section scroll and mobile enhancements
- **Project gallery** with modal and floating CTA on project details
- **Contact form** with serverless API route and SMTP email delivery
- **.env.local** support for secure configuration
- **ESLint** and Prettier for code quality

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/your-username/RISE.git
cd RISE
npm install # or yarn install or pnpm install
```

### 2. Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Production

```bash
npm run build
npm start
```

### 4. Lint & Format

```bash
npm run lint    # Check code quality
npm run format  # Format code with Prettier (if configured)
```

### 5. Environment Variables

Create a `.env.local` file in the root directory with the following:

```env
# SMTP Configuration for Contact Form
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
OWNER_EMAIL=your-email@gmail.com
```

> **Note:** Use an app password for Gmail SMTP. Never commit `.env.local` to version control.

---

## API

### Contact Form Endpoint

- **POST** `/api/contact`
	- Accepts: `{ name, email, phone }` in JSON body
	- Sends an email to the owner using the SMTP credentials from `.env.local`
	- Returns: `{ message: string }` on success, `{ error: string }` on failure

Example request:

```bash
curl -X POST http://localhost:3000/api/contact \
	-H "Content-Type: application/json" \
	-d '{"name":"John Doe","email":"john@example.com","phone":"1234567890"}'
```

---

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
