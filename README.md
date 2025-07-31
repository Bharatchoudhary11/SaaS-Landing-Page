# SaaS Landing Page

This repository contains a sample SaaS landing page built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). It demonstrates common components found in marketing sites such as feature highlights, pricing tiers, testimonials, FAQ sections and a simple blog.

The source for the Next.js app lives in [`admybrand-ai-suite/`](admybrand-ai-suite/). This folder was generated using `create-next-app` and then expanded with custom components.

## Features

- **Responsive hero section** with optional video or Lottie animation
- **Feature cards** to showcase product benefits
- **Pricing calculator** that updates plan prices based on the number of contacts
- **Testimonials carousel** to display customer quotes
- **FAQ accordion** for common questions
- **Markdown-powered blog** with dynamic routing

## Getting started

1. Clone the repository

   ```bash
   git clone https://github.com/Bharatchoudhary11/SaaS-Landing-Page.git
   cd SaaS-Landing-Page/admybrand-ai-suite
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the development server

   ```bash
   npm run dev
   ```

   Open <http://localhost:3000> in your browser to view the site.

4. Build for production (optional)

   ```bash
   npm run build
   npm start
   ```

## Project structure

```
SaaS-Landing-Page/
└── admybrand-ai-suite/     # Next.js application
    ├── public/            # Static assets
    ├── src/
    │   ├── app/           # App directory and route handlers
    │   ├── components/    # Reusable UI components
    │   ├── lib/           # Utility functions (blog helpers)
    │   └── posts/         # Markdown blog posts
    ├── package.json
    └── ...
```

## License

This project is released under the [MIT License](https://opensource.org/licenses/MIT).
