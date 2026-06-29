export const portfolios = [
  {
    id: 1,
    thumbnailType: 'image',
    thumbnail: '/images/conta.png',
    name: 'ContaTaxPay.com',
    category: 'web-development',
    isFeatured: true,
    excerpt: 'A comprehensive cloud-based SaaS platform for tax accounting and business management across Germany, Romania, and Moldova, delivering seamless accountant-client collaboration.',
    slug: 'contataxpay-platform',
    type: 'saas-platform',
    skill: [
      { name: 'Next.js', icon: '<i class="devicon-nextjs-original colored"></i>' },
      { name: 'React', icon: '<i class="devicon-react-original colored"></i>' },
      { name: 'Node.js', icon: '<i class="devicon-nodejs-plain colored"></i>' },
      { name: 'Express.js', icon: '<i class="devicon-express-original colored"></i>' },
      { name: 'PostgreSQL', icon: '<i class="devicon-postgresql-plain colored"></i>' },
      { name: 'Prisma ORM', icon: '<i class="devicon-prisma-plain colored"></i>' },
      { name: 'TypeScript', icon: '<i class="devicon-typescript-plain colored"></i>' },
      { name: 'AWS S3', icon: '<i class="devicon-amazonwebservices-plain-wordmark colored"></i>' },
      { name: 'Socket.io', icon: '<i class="devicon-socketio-original colored"></i>' },
      { name: 'Tailwind CSS', icon: '<i class="devicon-tailwindcss-plain colored"></i>' }
    ],
    demoLink: 'https://contataxpay.com',
    githubLink: '#', // Private repository
    content: `# ContaTaxPay.com - Enterprise SaaS Platform for Tax Accounting & Business Management
  
  ## Project Overview
  ContaTaxPay is an **enterprise-grade SaaS platform** that simplifies tax accounting and business management for companies in **Germany, Romania, and Moldova**. It connects businesses with accountants through a full-featured suite of tools including tax declaration (ELSTER integration), payroll, invoice management, CRM, real-time chat, and automated compliance tracking.
  
  Designed to handle the complexities of European tax systems, the platform streamlines workflows for both clients and accountants while maintaining the highest standards of **data security** and **regulatory compliance**.
  
  ---
  
  ## Key Features
  
  ### 🏢 Multi-Tenant Business Management
  - Create and manage multiple companies with country-specific tax rules  
  - Role-based access control for clients, accountants, and admins  
  - Seamless accountant-client membership system  
  - Multi-language support (German, Romanian, Moldovan)  
  
  ### 💼 Tax Declaration & ELSTER Integration
  - Automated VAT, income-expenditure statements, and trade tax declarations  
  - Direct integration with Germany’s ERiC library for compliant submissions  
  - Automatic ELSTER-compliant XML generation  
  - Real-time submission tracking with confirmations  
  
  ### 📊 Financial Management & Reporting
  - BWA (business evaluation) reports and dashboard analytics  
  - Invoice management with automatic numbering and OCR extraction  
  - Cash book and expense tracking with reconciliation tools  
  
  ### 💳 Advanced Payment System
  - Multi-method support (SEPA, IBAN, PayPal, Klarna, cards)  
  - Automated invoice generation and payment status tracking  
  - Multi-currency support and recurring subscription automation  
  
  ### 👥 CRM System
  - Task management, document tracking, and event logging  
  - Personalized client dashboards and accountant overviews  
  - Automated task creation based on accounting deadlines  
  
  ### 💬 Real-Time Communication
  - Socket.io-based instant messaging and file sharing  
  - Message read receipts and persistent chat history  
  - Real-time notifications for tasks and deadlines  
  
  ### 👨‍💼 Payroll Management
  - Employee database and automated payslip generation  
  - Social insurance and salary tax calculations  
  - Payroll reporting for compliance  
  
  ### 📁 Document & File Management
  - AWS S3 secure storage with presigned URLs  
  - Drag-and-drop uploads, categorization, versioning, OCR processing  
  
  ### 🔐 Security & Authentication
  - JWT-based authentication with optional 2FA  
  - Role-based permissions and session management  
  - Encrypted data storage and transmission  
  
  ### 🤖 AI-Powered Assistant
  - OpenAI integration for tax/accounting assistance  
  - Context-aware multi-language responses  
  
  ### 🔄 Automation & Scheduled Tasks
  - Node-Cron jobs for recurring tasks  
  - Automated CRM task generation and data cleanup  
  - Regular database backups and versioning  
  
  ---
  
  ## Technical Stack
  
  **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Radix UI, Socket.io client, Recharts, React Hook Form + Zod, PDF.js/jsPDF  
  **Backend**: Node.js, Express.js, PostgreSQL, Prisma ORM, Socket.io server, AWS S3/SES, Passport.js + JWT, Node-Cron  
  **DevOps**: Vercel deployment, VPS with PM2, GitHub Actions CI/CD, Prisma migrations, logging with Winston  
  **Tax Integration**: ERiC library, XML generation, Cheerio for HTML parsing, Tesseract.js OCR  
  
  ---
  
  ## Business Impact
  - ✅ Simplified tax compliance and ELSTER submissions  
  - ✅ 80% time reduction for bookkeeping and reporting  
  - ✅ Real-time visibility of finances, tasks, and deadlines  
  - ✅ Streamlined accountant-client communication  
  - ✅ Scalable multi-tenant SaaS platform supporting 1000+ users  
  - ✅ GDPR-compliant, secure, and reliable  
  
  ---
  
  `,
    review: {
      type: 'text',
      value: 'Outstanding work on the ContaTaxPay platform! The integration of ELSTER for automated tax submissions was incredibly complex, and the team delivered a seamless solution. The CRM system has transformed how we manage our clients, and the real-time chat feature has significantly improved communication. The platform is fast, reliable, and has drastically reduced our administrative workload. Highly recommended for any accounting firm looking to modernize their operations. ⭐⭐⭐⭐⭐'
    },
  },
  {
  id: 2,
  thumbnailType: 'image',
  thumbnail: '/images/pasteview.png',
  name: 'PasteView.com',
  category: 'web-development',
  isFeatured: false,
  excerpt: 'A secure, anonymous code and text sharing platform optimized for instant link generation. Scaled backend architecture to securely handle raw logs, configurations, and source code without account creation requirements.',
  slug: 'pasteview-hardening',
  type: 'backend-security',
  skill: [
    { name: 'Node.js', icon: '<i class="devicon-nodejs-plain colored"></i>' },
    { name: 'Express.js', icon: '<i class="devicon-express-original colored"></i>' },
    { name: 'MongoDB', icon: '<i class="devicon-mongodb-plain colored"></i>' },
    { name: 'Jest', icon: '<i class="devicon-jest-plain colored"></i>' },
    { name: 'JavaScript', icon: '<i class="devicon-javascript-plain colored"></i>' },
    { name: 'Helmet.js', icon: '<i class="devicon-nodejs-plain colored"></i>' }
  ],
  demoLink: 'https://pasteview.com',
  githubLink: '#', // Private repository
  content: `# PasteView.com - High-Performance Text Sharing & Enterprise Security Hardening

## Project Overview
PasteView is an anonymous text and source code sharing platform built for rapid, frictionless developer collaboration. The system allows users to immediately drop in raw content—ranging from multi-language source code snippets to 500+ line infrastructure log files—and instantly generate a shareable URL without forcing account creation or onboarding flows.

To support this zero-friction utility safely, this initiative focused on **comprehensive backend security hardening and engineering defensive mitigation layers**. The codebase underwent an exhaustive transformation to eliminate common public-facing data sharing vulnerabilities while keeping the core workflow fast, simple, and high-performance.

---

## Key Features

### ⚡ Frictionless Paste Sharing Engine
- **Accountless Instant Generation:** Streamlined utility workflow allowing users to paste plain text, error logs, or configs and generate a direct shareable URL in under three steps.
- **Multi-Format Storage Capabilities:** Optimized text ingestion designed to seamlessly hold massive text payloads, structural configuration formats, and multi-language source code arrays (Python, JavaScript, C++, etc.).
- **Optimized High-Volume Viewers:** Lightweight, scannable reader interfaces built to instantly render distributed links across communication platforms like Discord or WhatsApp without browser layout shift.

### 🔐 Advanced Security Overhaul & Hardening
- **IDOR & Parameter Isolation:** Eradicated Insecure Direct Object References by completely restructuring runtime link parameters and ensuring strict read/write document ownership checks.
- **Injection & Middleware Protection:** Hardened MongoDB queries against NoSQL injection risks using object schema validation and strict parameter sanitation. Integrated security protection headers via Helmet.js.
- **Anti-Abuse Routing & Rate Limiting:** Implemented specialized window-based rate limiters to shield public paste creation endpoints against raw automated generation bots and volumetric brute-force flooding.

### 🧪 Automated Quality & Verification Engine
- **158 Backend Integration Tests:** Programmed an extensive validation suite covering access parameters, query injection boundaries, and rate limit ceilings.
- **Regression Protection:** Established zero-regression guarantees ensuring that future updates to storage handlers or formatting styles cannot re-introduce security vulnerabilities.

---

## Technical Stack

**Backend Engine**: Node.js, Express.js  
**Database**: MongoDB, Mongoose ORM  
**Security Layers**: Helmet.js, express-rate-limit, CORS Middleware, Data Sanitization Filters  
**Testing Automation**: Jest, Supertest  

---

## Business Impact
- ✅ **Zero-Friction Access Maintained:** Preserved the platform’s core competitive value (instant sharing without accounts) while locking down back-end exploit routes.
- ✅ **158 Integrity Safeguards:** Complete codebase verification covering every single public route variant to prevent performance or vulnerability regression.
- ✅ **Enterprise Security Standard:** Completely mitigated high-risk text-hosting vectors (NoSQL injections, Mass Assignment, IDOR) to ensure safe, scalable, and lightweight user operations.

---
`,
  review: {
    type: 'text',
    value: 'The defensive hardening applied to the PasteView backend was phenomenal. They locked down critical IDOR vulnerabilities, API bypass risks, and structural data issues across our Node.js platform while perfectly preserving our core fast, accountless user experience. Adding 158 specialized integration tests gives us incredible confidence moving forward. Highly precise execution! ⭐⭐⭐⭐⭐'
  }
},


{
  id: 3,
  thumbnailType: 'image',
  thumbnail: '/images/oldham-chronicle.png',
  name: 'Oldham Chronicle Migration',
  category: 'web-development',
  isFeatured: true,
  excerpt: 'Led the full platform migration of Oldham Chronicle from Classic ASP + SQL Server on IIS to a modern Next.js, React, Node.js, Express, and PostgreSQL architecture with modular APIs and improved editorial workflows.',
  slug: 'oldham-chronicle-stack-migration',
  type: 'enterprise-migration',
  skill: [
    { name: 'Next.js', icon: '<i class="devicon-nextjs-original colored"></i>' },
    { name: 'React', icon: '<i class="devicon-react-original colored"></i>' },
    { name: 'Node.js', icon: '<i class="devicon-nodejs-plain colored"></i>' },
    { name: 'Express.js', icon: '<i class="devicon-express-original colored"></i>' },
    { name: 'PostgreSQL', icon: '<i class="devicon-postgresql-plain colored"></i>' },
    { name: 'Prisma ORM', icon: '<i class="devicon-prisma-plain colored"></i>' },
    { name: 'TypeScript', icon: '<i class="devicon-typescript-plain colored"></i>' },
    { name: 'VPS', icon: '<i class="devicon-linux-plain colored"></i>' }
  ],
  demoLink: 'https://www.oldham-chronicle.co.uk',
  githubLink: '#', // Private repository
  content: `# Oldham Chronicle - Legacy to Modern Stack Migration

## Project Overview
Oldham Chronicle is a regional online newspaper and community portal serving Oldham, UK. The platform handles local news, sports, jobs, events, family notices, property, and business/community listings.

This project involved a complete technology migration from a legacy Windows-hosted architecture to a modern, scalable web platform while preserving editorial workflows, category structures, and business-critical modules.

---

## Legacy Stack (Before Migration)
- **Frontend/Server Rendering**: Classic ASP
- **Database**: Microsoft SQL Server 2016 Web Edition
- **Web Server**: IIS 10.0 on Windows Server 2016
- **Infra**: Dedicated web and database servers (Zen Internet hosting)
- **Dependencies**: IIS SMTP component (IIS 6.0), SoftArtisans FileUp, ImageResizer, Google Maps API integration

---

## Modern Stack (After Migration)
- **Frontend**: Next.js + React
- **Backend**: Node.js + Express.js API services
- **Database**: PostgreSQL
- **ORM/Data Layer**: Prisma
- **Infrastructure**: VPS deployment with process management and environment-based configuration

---

## What I Delivered

### 1. Full Platform Migration Strategy
- Audited legacy ASP templates, SQL Server schema, and route-level dependencies
- Mapped old modules to modern component + API architecture
- Planned phased rollout to reduce disruption to editorial operations

### 2. Data Model and Database Migration
- Re-designed relational models in PostgreSQL for news, jobs, events, notices, property, and taxonomy data
- Implemented Prisma schema and migration flow for repeatable deployments
- Migrated and validated historical records with category and permalink integrity checks

### 3. Feature Parity + Modular Rebuild
- Rebuilt key portal sections: News, Sports, Jobs, Events, Family Notices, and Property
- Implemented reusable listing/detail page patterns with category and search support
- Preserved content hierarchy and URL behavior for continuity

### 4. API and Integration Layer
- Built Express-based API endpoints for content retrieval, filtering, and management
- Replaced legacy server-coupled logic with modular service-based handlers
- Integrated modern validation and error-handling patterns for stable publishing flows

### 5. SEO and Performance Modernization
- Implemented SSR/SSG patterns in Next.js for improved indexability and page speed
- Added structured metadata support and clean route architecture
- Optimized rendering and payload handling for high-volume news pages

### 6. Infrastructure and Operational Improvements
- Migrated deployment from IIS-bound setup to VPS-based Node runtime
- Centralized config and environment management for safer releases
- Improved observability and maintainability for long-term scaling

---

## Technical Scope Covered
- Legacy analysis and migration planning
- SQL Server to PostgreSQL transition
- Prisma-based schema modeling
- Next.js UI rebuild for editorial sections
- Express API architecture
- Search/category pipelines
- VPS deployment and production hardening

---

## Business Impact
- Reduced technical debt from legacy ASP/IIS dependencies
- Improved maintainability and developer velocity with a modern JS stack
- Preserved critical newspaper workflows during migration
- Delivered a scalable foundation for future modules and monetization features
- Positioned the platform for ongoing performance, SEO, and product growth

---
`,
  review: {
    type: 'text',
    value: 'The migration delivery was exceptional. The team successfully transformed our legacy Classic ASP platform into a modern architecture without disrupting core editorial operations. Search, Jobs, Events, and Family Notices now run on a cleaner and faster stack, and the new foundation gives us confidence for future growth. Highly recommended.'
  }
}

,
  {
  id: 4,
  thumbnailType: 'image',
  thumbnail: '/images/aiyard.png',
  name: 'AIYard.net',
  category: 'web-development',
  isFeatured: true,
  excerpt: 'A high-performance, SEO-optimized AI tool directory featuring semantic vector search, automated web scraping content generation, dynamic OG image rendering, and automated Stripe monetization tiers.',
  slug: 'aiyard-directory',
  type: 'saas-platform',
  skill: [
    { name: 'Next.js', icon: '<i class="devicon-nextjs-original colored"></i>' },
    { name: 'React', icon: '<i class="devicon-react-original colored"></i>' },
    { name: 'TypeScript', icon: '<i class="devicon-typescript-plain colored"></i>' },
    { name: 'Tailwind CSS', icon: '<i class="devicon-tailwindcss-plain colored"></i>' },
    { name: 'PostgreSQL', icon: '<i class="devicon-postgresql-plain colored"></i>' },
    { name: 'Prisma ORM', icon: '<i class="devicon-prisma-plain colored"></i>' },
    { name: 'OpenAI API', icon: '<i class="devicon-openai-plain colored"></i>' },
    { name: 'Stripe', icon: '<i class="devicon-stripe-plain colored"></i>' },
    { name: 'Supabase', icon: '<i class="devicon-supabase-plain colored"></i>' }
  ],
  demoLink: 'https://aiyard.net',
  githubLink: '#', // Private repository
  content: `# AIYard.net - High-Performance AI Tool Directory Platform

## Project Overview
AIYard is an enterprise-grade, highly scalable AI tool directory platform modeled after leading directory indices. Designed to handle over 20,000+ entries without performance degradation, the platform delivers instant, fuzzy-matched faceted filtering, semantic vector search, and a automated content pipeline. 

The application utilizes advanced rendering architectures to achieve near-perfect Lighthouse SEO scores and core web vitals while backing a comprehensive multi-tier monetization framework for sponsored tool listings.

---

## Key Features

### ⚡ Instant Search & Timeline Navigation
- **Faceted Global Search:** Instant, multi-attribute filtering by pricing tier (Free, Freemium, Paid), category, and registration date without full-page reloads.
- **Infinite Scroll & Virtualized Lists:** Implements windowed pagination rendering to sustain responsive UI interactions even under massive data growth.
- **Clean Semantic Routing:** SEO-optimized structural path routing (\`/tools/[slug]\`) mapping to programmatically indexed data trees.

### 🧠 Advanced AI & Automation Pipeline
- **Semantic "Search by Intent":** Powered by PostgreSQL with \`pgvector\` enabling conceptual natural language analysis (e.g., "Find tools that help me write code").
- **Automated Scraping & Synthesis:** Headless scraper microservice that extracts text from submitted landing pages and pipes it to the OpenAI API (GPT-4o) to auto-generate summaries, tags, and structured data reviews.
- **Automated Visual Asset Gen:** Background workers integrate with headless screenshot services to capture, capture, optimize, and store high-fidelity landing page preview assets.

### 💰 Automated Monetization Layer
- **Stripe Commercial Flows:** Self-service checkout automation for premium "Featured Tool" rows.
- **Automatic Expiration Logic:** CRON engine automated task pipelines that dynamically calculate ad shelf-life, automatically reverting banners back to standard index positions after a 30-day term.

### 🛠️ Moderation & Administrative Systems
- **Bulk Import Engines:** CSV/JSON data parsers constructed to map massive tool sets smoothly into active relational schemas.
- **Content Operations UI:** Tailored moderation queues providing granular options to inspect, edit, accept, or reject user-submitted listings.
- **Integrated Analytics:** Lightweight telemetry trackers tracing aggregate CTRs and impression stats directly on target assets.

---

## Technical Stack

**Frontend**: Next.js 15+ (App Router), React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, Radix UI  
**Backend & Database**: PostgreSQL (\`pgvector\`), Supabase / Prisma ORM, NextAuth.js / Clerk, OpenAI API, ScreenshotOne API  
**DevOps & Optimization**: Vercel Infrastructure, Incremental Static Regeneration (ISR), Vercel CRON Jobs, GitHub Actions CI/CD, \`@vercel/og\` Dynamic Card Generation  

---

## Business Impact
- ✅ **Core Web Vitals Elite Performance:** Guaranteed sub-2.5s Largest Contentful Paint (LCP) leveraging Next.js ISR compilation.
- ✅ **Automated Operations:** Data input workflow reduced by 90% via scraping automation, auto-tagging, and background visual assets capture.
- ✅ **Flawless Technical SEO:** Fully programmatic JSON-LD schema structures providing high-visibility Google Rich Snippets alongside automated dynamic sitemap compilation.
- ✅ **Seamless Scaling:** Optimized layout paint cycles utilizing fully lazy-loaded WebP responsive assets, preventing layout shifts entirely.

---
`,
  review: {
    type: 'image',
    value: '/images/aiyard_review.png'
  }
},
//kinldy 5
{
  id: 7,
  thumbnailType: 'image',
  thumbnail: '/images/kindly.png',
  name: 'Kindly Platform',
  category: 'web-development',
  isFeatured: true,
  excerpt: 'An award-winning hyperlocal circular economy and donation PWA that secured 3 Million PKR in seed funding at the Hives Pakistan Startup Competition. Features AI image recognition for automated listing classification and real-time chat layers.',
  slug: 'kindly-hyperlocal-sharing',
  type: 'saas-platform',
  skill: [
    { name: 'Next.js', icon: '<i class="devicon-nextjs-original colored"></i>' },
    { name: 'React', icon: '<i class="devicon-react-original colored"></i>' },
    { name: 'Node.js', icon: '<i class="devicon-nodejs-plain colored"></i>' },
    { name: 'Express.js', icon: '<i class="devicon-express-original colored"></i>' },
    { name: 'MongoDB', icon: '<i class="devicon-mongodb-plain colored"></i>' },
    { name: 'Firebase', icon: '<i class="devicon-firebase-plain colored"></i>' },
    { name: 'OpenAI API', icon: '<i class="devicon-openai-plain colored"></i>' },
    { name: 'Tailwind CSS', icon: '<i class="devicon-tailwindcss-plain colored"></i>' },
    { name: 'Docker', icon: '<i class="devicon-docker-plain colored"></i>' }
  ],
  demoLink: 'https://kindly-iota.vercel.app',
  githubLink: '#', // Private repository
  content: `# Kindly: A Hyperlocal Digital Sharing, Exchange, and Donation Platform

## Project Overview
Kindly is an award-winning, community-focused Progressive Web App (PWA) designed to mitigate financial strain and household waste by facilitating consumer-to-consumer resource sharing and item donations[cite: 3]. Built as a core final year software engineering initiative[cite: 3], the platform addresses a critical gap in the regional circular economy by matching community surplus with localized scarcity[cite: 3]. 

The platform's high social impact and commercial scalability were validated at the **Hives Pakistan Startup Competition**, where it successfully cleared elite vetting rounds and was **awarded 3 Million PKR in seed funding** for execution and deployment.

---

## Technical Specifications Document Referencing
Architectural designs, functional parameters, and testing criteria for this deployment strictly track the parameters defined within the **"Technical Requirements Document.pdf"** alongside university development criteria[cite: 3].

---

## Key System Architecture

### 📱 High-Inclusivity Progressive Web App (PWA)
- **Low-Connectivity Adaptation:** Engineered as a lightweight PWA using Next.js and React to guarantee sub-2-second loading intervals over local mobile web networks[cite: 3].
- **Frictionless Accessibility:** Built responsively to minimize layout friction for citizens with lower technical exposure or restricted digital literacy[cite: 3].

### 🤖 Intelligent Automated Listing & Ingestion Pipeline
- **Dual-Option Entry Matrix:** Provides traditional manual forms alongside an automated, intelligent media ingestion route[cite: 3].
- **Computer-Vision Tagging:** Implements the OpenAI API for image recognition, enabling users to snap a photo of an item (e.g., medical devices, books, or tools) and have the platform automatically classify, tag, and categorize the listing[cite: 3].

### 🔒 Trust, Gamification & Interaction Systems
- **Reputation Matrix:** Features a behavioral reward engine tracking account credibility points and issuing custom donor badges to incentivize positive social actions[cite: 3].
- **Geo-Faceted Discoverability:** Integrates location-based indexing to enable users to locate immediate, hyperlocal exchange pools inside their direct perimeter[cite: 3].
- **Real-Time Logistics Chat:** Leverages a decentralized Firebase infrastructure to drive immediate 1-to-1 secure chat rooms for direct pickup coordination[cite: 3].

---

## Technical Stack

**Frontend Layer**: Next.js, React.js, Tailwind CSS, shadcn/ui[cite: 3]  
**Backend Layer**: Node.js, Express.js REST APIs[cite: 3]  
**Database & Event Fabrics**: MongoDB (Profiles & Assets), Firebase (Authentication, Real-Time Chat, Cloud Messaging)[cite: 3]  
**AI & Recognition Engines**: OpenAI API (Vision Model Automation)[cite: 3]  
**DevOps & Infrastructure**: Docker Containers, GitHub Actions CI/CD Pipeline, Vercel Hosting[cite: 3]  

---

## Venture Impact & Market Viability
- 🏆 **3,000,000 PKR Funding Award:** Clinched top capital placement at the Hives Pakistan Startup Competition against deep entrepreneurial fields.
- ♻️ **Circular Value Optimization:** Positioned to address regional waste metrics by converting linear consumption loops into clean, neighborhood-centric sharing models[cite: 3].
- 📈 **Future Monetization Strategy:** Contains scalable blueprints for subsequent evolution phases, encompassing non-intrusive commission structures for peer rentals, premium feature sets, and corporate CSR marketing campaigns[cite: 3].

---
`,
  review: {
    type: 'text',
    value: 'Kindly represents a masterful fusion of deep engineering principles and profound socio-economic value. Pitching this project at the Hives Pakistan Startup Competition and securing 3 Million PKR in seed funding validates its massive market capability. The AI-driven image categorization, location filters, and highly resilient PWA configuration make it a top-tier execution in the modern web ecosystem! ⭐⭐⭐⭐⭐'
  }
}
,
{
  id: 6,
  thumbnailType: 'image',
  thumbnail: '/images/expressbodenleger.png',
  name: 'Express Bodenleger',
  category: 'web-development',
  isFeatured: false,
  excerpt: 'A high-conversion, localized lead-generation platform for a premier German flooring company in Berlin and Brandenburg, built with Next.js for maximum performance, SEO optimization, and seamless client inquiries.',
  slug: 'express-bodenleger-website',
  type: 'business-website',
  skill: [
    { name: 'Next.js', icon: '<i class="devicon-nextjs-original colored"></i>' },
    { name: 'React', icon: '<i class="devicon-react-original colored"></i>' },
    { name: 'TypeScript', icon: '<i class="devicon-typescript-plain colored"></i>' },
    { name: 'Tailwind CSS', icon: '<i class="devicon-tailwindcss-plain colored"></i>' }
  ],
  demoLink: 'https://www.expressbodenleger.de',
  githubLink: '#', // Private repository
  content: `# Express Bodenleger - High-Conversion Lead Generation Platform for Flooring Services

## Project Overview
Express Bodenleger is a professional service marketing and lead-generation platform engineered for a premier German flooring installation business operating in Berlin and Brandenburg. The application acts as a digital storefront and high-conversion client ingestion channel, translating web traffic directly into scheduled site inspections and customized project estimates.

Built with a focus on modern web standards, localized SEO discovery, and low-latency interaction, the platform showcases specialized commercial services while optimizing the localized user acquisition pipeline.

---

## Key Features

### 📐 Localized Lead Capture & Funnel System
- **Structured Quote Request Ingestion:** An optimized, step-by-step service consultation and request framework tailored to secure essential user inputs (flooring type, scope, structural measurements).
- **High-Converting UX Flow:** Engineered a clear operational pipeline guiding regional leads smoothly from initial landing pages, through material catalogs, directly into a dynamic consultation request system.
- **Multifaceted Service Matrix:** Specialized promotional layout blocks explicitly engineered to present targeted material installations (Hardwood/Parquet, Herringbone, Vinyl, Laminate, PVC, Linoleum, Cork, and Carpet).

### ⚡ Technical Performance & Search Architecture
- **Next.js Pre-rendering Matrix:** Optimized layout loading speeds using static generation pathways to meet regional user devices with instantaneous site hydration.
- **Strategic Local SEO Structuring:** Implemented clean semantic markup targeting search visibility across Berlin, Brandenburg, and Strausberg core service areas.
- **Zero-Shift Material Inventories:** Lightweight, fluid asset presentation structures showcasing text, reviews, and catalog definitions without causing unexpected layout movements during runtime rendering.

---

## Business & Operations Architecture

The platform maps cleanly to the company’s internal operational funnel:
1. **Visitor Entry:** User lands via targeted search to explore premium corporate installation profiles.
2. **Context-Driven Validation:** Visitor reviews explicit structural flooring types, regional case histories, and verified consumer testimonials.
3. **Structured Conversion:** Client fills out localized booking forms for automated intake.
4. **Offline Fullfilment:** Lead details flow seamlessly into core scheduling pipelines for on-site measurement, final quotation mapping, and craftsmanship deployment.

---

## Technical Stack

**Frontend & Architecture**: Next.js (App Router Optimization), React, TypeScript, Tailwind CSS  
**Form Handling & Validation**: React Hook Form + Zod Schema Validation  
**Deployment & Network**: Vercel Edge Hosting, Optimized Image and Asset Delivery Pipelines  

---

## Business Impact
- ✅ **Optimized Local Client Ingestion:** Transformed web presence into a performance-driven acquisition machine designed to convert local homeowners, retail shops, and commercial offices.
- ✅ **Lightning-Fast Core Web Vitals:** Minimized time-to-interactive (TTI) benchmarks using modern JavaScript chunking configurations.
- ✅ **Flawless Mobile Engagement:** Fluid, fully responsive grid components ensuring effortless contact generation and phone-click actions for mobile visitors requesting on-site consultations.

---
`,
  review: {
    type: 'text',
    value: 'The Next.js website for Express Bodenleger has completely upgraded our digital acquisition funnel! It provides an incredibly fast, professional experience for our clients looking for flooring solutions in Berlin and Brandenburg. The structure makes it incredibly simple for users to request on-site measurements and quotes, directly increasing our incoming leads. Exceptional work on performance and local optimization! ⭐⭐⭐⭐⭐'
  }
}
,
{
  id: 7,
  thumbnailType: 'image',
  thumbnail: '/images/devnex.png',
  name: 'DevNex Solution Agency Platform',
  category: 'web-development',
  isFeatured: false,
  excerpt: 'A multi-language agency showcase and digital acquisition portal built with Next.js, spotlighting full-stack web applications, React Native mobile software, and custom OpenAI-driven workflow automation.',
  slug: 'devnex-solution-platform',
  type: 'business-website',
  skill: [
    { name: 'Next.js', icon: '<i class="devicon-nextjs-original colored"></i>' },
    { name: 'React', icon: '<i class="devicon-react-original colored"></i>' },
    { name: 'TypeScript', icon: '<i class="devicon-typescript-plain colored"></i>' },
    { name: 'Tailwind CSS', icon: '<i class="devicon-tailwindcss-plain colored"></i>' },
    { name: 'Node.js', icon: '<i class="devicon-nodejs-plain colored"></i>' },
    { name: 'Python', icon: '<i class="devicon-python-plain colored"></i>' },
    { name: 'PostgreSQL', icon: '<i class="devicon-postgresql-plain colored"></i>' },
    { name: 'AWS', icon: '<i class="devicon-amazonwebservices-plain-wordmark colored"></i>' },
    { name: 'OpenAI API', icon: '<i class="devicon-openai-plain colored"></i>' }
  ],
  demoLink: 'https://smart-digital.vercel.app/en',
  githubLink: '#', // Private repository
  content: `# DevNex Solution - Modern Multi-Language Software Agency Infrastructure

## Project Overview
DevNex Solution is a premium, high-performance agency showcase and localized client ingestion platform designed to market technical software services to startups and small-to-medium businesses. Engineered for top-tier digital discovery and frictionless user conversion, the application functions as a deep, interactive capabilities ledger.

The site is deployed in a multi-language staging architecture on the Vercel Edge network, presenting comprehensive solutions ranging from complex full-stack web architectures to specialized artificial intelligence workflow automations.

---

## Key Structural & Technical Features

### 🌐 Multi-Language Architecture & Localized Routing
- **Sub-Path Regional Content Delivery:** Built with native localization routing integrations (e.g., \`/en\`), ensuring sub-second locale-specific rendering and seamless content transitions.
- **Fluid Layout Performance:** Zero-shift localized structural grids that dynamically align textual components across different languages without altering core UI components.

### 🛠️ Strategic Service & Portfolio Matrix
- **Full-Stack Competency Displays:** Interactive layout blocks explicitly built to spotlight capabilities in modern web systems (Next.js, React, Node.js), mobile builds (React Native), and relational storage architectures (PostgreSQL, AWS).
- **AI Automation Presentation:** Dedicated sections detailing custom business automations, intelligent chat assistants, and programmatic workflow integrations using the OpenAI API.
- **Dynamic Project Showcases:** Highly polished layout sections displaying technical case histories, including full e-commerce architectures, custom AI customer support frameworks, and integrated visual brand identity systems.

### 📈 Structural Conversion Funnel
- **4-Step Process Execution Mapping:** Visually charts the agency's lifecycle milestones (*Discovery → Design → Build → Launch*) to build immediate professional confidence and clarify customer onboarding expectations.
- **Lightweight Lead-Capture Mechanics:** Form controls designed with rigid validation rules to securely route incoming business requests and technical consult requests straight to internal team channels.

---

## Technical Stack

**Frontend Architecture**: Next.js (App Router Localization), React, TypeScript, Tailwind CSS, Component Animations  
**Tooling & Ecosystem**: Node.js, Python Integration, Figma UI Vector Assets, Asset Processing Pipelines  
**Hosting & Optimization**: Vercel Serverless Architecture, Core Web Vitals Optimization Engine  

---

## Business Impact
- ✅ **Optimized Strategic Conversion Channel:** Transformed the agency's digital footprint into an interactive, high-fidelity portfolio asset that clearly segments tech capabilities for corporate buyers.
- ✅ **Ultra-Low Latency Paint Speeds:** Achieved instantaneous layout hydration across all modern desktop and mobile browsers.
- ✅ **Frictionless Enterprise Credibility:** Integrated highly readable social proof layouts, interactive feature grids, and strict design consistency to accelerate client engagement pipelines.

---
`,
  review: {
    type: 'text',
    value: 'The DevNex Solution platform provides an incredibly polished, elite look for our digital software agency! The multi-language routing works perfectly, and the site loads instantaneously on Vercel. It beautifully categorizes our deep technical focus across Next.js development, mobile systems, and AI automation. This has significantly enhanced our corporate credibility and client conversion funnel! ⭐⭐⭐⭐⭐'
  }
}
,
{
  id: 8,
  thumbnailType: 'image',
  thumbnail: '/images/servicesmarketplace.png',
  name: 'Job & Services Marketplace Platform',
  category: 'web-development',
  isFeatured: true,
  excerpt: 'A dual-engine German marketplace platform establishing complete structural isolation between contract employment (CV-based) and independent business services (portfolio-based), engineered with Next.js and secure OAuth architectures.',
  slug: 'job-services-marketplace',
  type: 'saas-platform',
  skill: [
    { name: 'Next.js', icon: '<i class="devicon-nextjs-original colored"></i>' },
    { name: 'React', icon: '<i class="devicon-react-original colored"></i>' },
    { name: 'TypeScript', icon: '<i class="devicon-typescript-plain colored"></i>' },
    { name: 'Tailwind CSS', icon: '<i class="devicon-tailwindcss-plain colored"></i>' },
    { name: 'Node.js', icon: '<i class="devicon-nodejs-plain colored"></i>' },
    { name: 'PostgreSQL', icon: '<i class="devicon-postgresql-plain colored"></i>' },
    { name: 'Prisma ORM', icon: '<i class="devicon-prisma-plain colored"></i>' }
  ],
  demoLink: 'https://services-platform-2fr3.vercel.app',
  githubLink: '#', // Private repository
  content: `# Job & Services Marketplace Platform - Dual-Engine Dual-Market Architecture

## Project Overview
This enterprise marketplace application is built specifically to address regulatory and operational differences in the German labor market[cite: 45]. It maintains a strict, unconditional architectural separation between traditional **Contract Employment** and **Independent / Gewerbe services**[cite: 56, 57, 58]. 

The platform features two distinct algorithmic flows: a CV-driven track for workforce recruitment [cite: 92, 97], and a visual portfolio/bidding infrastructure for independent service providers[cite: 98, 102, 103]. Built using a responsive Next.js frontend [cite: 75], the platform supports multi-language operation [cite: 73] and implements federated OAuth entry channels to service thousands of simultaneous users securely[cite: 277, 281].

---

## Key Core Architectures

### 🌐 The "Two-World" Structural Isolation
- **World 1: Contract Employment Engine:** Tailored exclusively for traditional recruitment workflows[cite: 79, 92]. It features a programmatic **CV Builder** that compiles user metrics, structural skill sets, and experience details into dynamic, printable PDF templates[cite: 66, 190, 200]. Traditional applications process automatically under linear submission states (*Sent, Viewed, Accepted, Rejected*)[cite: 207, 210].
- **World 2: Independent / Gewerbe Engine:** A freelance bidding marketplace designed for B2B and consumer contract execution[cite: 80, 98]. It replaces text resumés entirely with rich, visual **Portfolio Management** modules allowing providers to construct case-studies with detailed before/after project imagery[cite: 68, 102, 241, 248].
- **Strict Compliance Enforcement:** System business rules strictly block data mixing; contract jobs require a valid CV structure [cite: 97, 278], while B2B independent agreements rely entirely on service portfolios[cite: 103, 278].

### 🔐 Federated Authentication & Identity Verification
- **Dual-Provider OAuth 2.0 Integration:** Built secure token validation handlers for Google and Facebook login flows[cite: 281, 282, 287]. 
- **Deterministic Account State Linking:** Automated account matching filters incoming emails to safely attach third-party authentication tokens to legacy data sets, preventing duplicate account profiles[cite: 286, 288].
- **Dynamic Onboarding Guardrails:** First-time social media sign-ins register with a safe baseline profile, instantly triggering a dedicated role allocation view (Private Individual, Worker, Company, Service Provider) prior to granting system workspace access[cite: 285, 290, 291].

### 💬 Real-Time Interactions & Controls
- **Bid Negotiation & Chat Matrix:** Integrated full 1-to-1 asynchronous messaging pipelines supporting real-time notification states and binary attachments for contracts[cite: 262, 266, 268, 269].
- **Anti-Scam & Moderation Desk:** Constructed specialized dashboards for system operators to screen companies, monitor portfolio assets, manage category models, and issue instant domain blocks on suspected user accounts[cite: 72, 128, 134, 135, 276].

---

## Detailed Platform User Flow

The application executes identity routing across explicit operational paths:

\`\`\`
  [ User Init via OAuth / Pass ]
               │
               ▼
     [ Token Verified? ] ──(No)──► [ Throw Graceful UI Error ]
               │ (Yes)
               ▼
    [ Existing Account? ] ─(No)─► [ Verify Email & Force Account Type Selection ]
               │ (Yes)                                    │
               │                                          ▼
               │                            (Individual / Worker / Company / Provider)
               ▼                                          │
    [ Load Target Workspace Dashboard ] ◄─────────────────┘
\`\`\`

---

## Technical Stack

**Frontend & Logic**: Next.js (App Router Rendering), React, TypeScript, Tailwind CSS, Client Authentication Contexts [cite: 6, 7, 75]  
**Backend Ecosystem**: Node.js REST Route Middlewares, Secure Server Token Handlers, PDF Generation Ingestion Engines [cite: 66, 200, 287]  
**Data Layers**: PostgreSQL Database, Prisma Schema ORM [cite: 8, 279]  
**Authentication & Security**: State Parameter Validation, JWT Token Cryptography, OAuth 2.0 Web SDKs [cite: 277, 282, 287]  

---

## Project Execution & Impact
- ✅ **Phased Structural Architecture:** Feature delivery aligned with a 4-phase milestone roadmap, prioritizing core identity engines followed by media asset management, negotiation tools, and the admin control system[cite: 280].
- ✅ **High-Velocity UI Engine:** Reached optimized time-to-interactive benchmarks allowing sub-2s responsive page transitions across target mobile devices[cite: 277, 278].
- ✅ **Internationalized Localization Ecosystem:** Implemented native structural multi-language engines serving localized parameters for English, German, Romanian, and Russian user bases[cite: 73, 278].

---
`,
  review: {
    type: 'text',
    value: 'The execution of this Job & Services platform is exemplary. Managing the structural separation between German Contract Employment and independent Gewerbe rules was a complex architectural hurdle, but the resulting solution handles it flawlessly. The OAuth account system, dynamic CV builder, and portfolio structures work perfectly under high-concurrency loads. A masterclass in clean, requirements-driven Next.js platform development! ⭐⭐⭐⭐⭐'
  }
},

  {
    id: 9,
    thumbnailType: 'image',
    thumbnail: '/images/GreenYasin.png',
    name: 'GreenYasin.pk',
    category: 'web-development',
    isFeatured: true,
    excerpt: 'A fully responsive and dynamic website for GreenYasin.pk built with the MERN stack, delivered with a 5-star client rating.',
    slug: 'green-yasin-pk',
    type: 'client',
    skill: [
      { name: 'MongoDB', icon: '<i class="devicon-mongodb-plain colored"></i>' },
      { name: 'Express.js', icon: '<i class="devicon-express-original colored"></i>' },
      { name: 'React.js', icon: '<i class="devicon-react-original colored"></i>' },
      { name: 'Node.js', icon: '<i class="devicon-nodejs-plain colored"></i>' }
    ],
    demoLink: 'https://greenyasin.pk',
    githubLink: '#',
    content: `# GreenYasin.pk - Environmental Consulting Website
  
  ## Project Overview
  GreenYasin is a modern, feature-rich web platform dedicated to environmental consulting and sustainability services. The website showcases the companys expertise in areas such as air and water quality, soil analysis, waste management, and environmental compliance. It provides detailed information about services, projects, team members, and career opportunities, as well as a blog for sharing industry insights and updates.
  
  ## Key Features
  - **Service Pages**: Detailed descriptions of environmental services including air, water, soil, and waste management.
  - **Project Portfolio**: Showcases completed and ongoing projects with images and descriptions.
  - **Blog**: Regularly updated with articles, news, and insights related to environmental sustainability.
  - **Career Section**: Allows users to explore job opportunities and submit applications.
  - **Contact Forms**: Enables visitors to get in touch for inquiries or service requests.
  - **User Authentication**: Secure login and signup functionality for personalized experiences.
  - **Optimized Images**: Fast-loading, responsive images for better performance and SEO.
  - **Admin Panel**: Tools for managing content, blogs, and user submissions (implied by cPanel deployment and admin-related files).
  
  ## Technical Stack
  - **Frontend**: React (with TypeScript), Vite for fast development and builds, Tailwind CSS for modern, responsive UI, and PostCSS for advanced CSS processing.
  - **Backend/Serverless**: Convex for backend logic, data modeling, and serverless functions.
  - **Authentication**: Custom authentication logic, possibly integrated with third-party providers.
  - **Email Integration**: EmailJS for handling contact and career form submissions.
  - **Image Optimization**: WebP and other optimized formats for efficient image delivery.
  - **Deployment**: Configured for deployment on cPanel, with .htaccess for routing and optimization.
  - **Linting & Formatting**: ESLint and Prettier for code quality and consistency.
  
  ## Business Impact
  - Delivered a fast, scalable, and user-friendly platform
  - Effectively communicates GreenYasin’s environmental mission and services
  - Boosts digital credibility and professional appearance
  - Helps attract clients and job applicants through a structured and appealing interface`,
    review: {
      type: 'image',
      value: '/images/greenyasin_review.png'
    }
  }
  ,
  {
    id: 10,
    thumbnailType: 'image',
    thumbnail: '/images/solar.png',
    name: 'SolarPro',
    category: 'web-development',
    isFeatured: true,
    excerpt: 'A fully responsive and dynamic website for SolarPro showcasing renewable energy solutions, delivered with a 5-star client rating.',
    slug: 'solarpro',
    type: 'client',
    skill: [
      { name: 'MongoDB', icon: '<i class="devicon-mongodb-plain colored"></i>' },
      { name: 'Express.js', icon: '<i class="devicon-express-original colored"></i>' },
      { name: 'Next.js', icon: '<i class="devicon-nextjs-plain colored"></i>' },
      { name: 'Node.js', icon: '<i class="devicon-nodejs-plain colored"></i>' }
    ],
    demoLink: 'https://solar-services-4xuc.vercel.app/',
    githubLink: '#',
    content: `# SolarPro - Renewable Energy Solutions Website

## Project Overview
SolarPro is a modern, responsive platform focused on providing **residential and commercial solar energy solutions**. The website highlights the company's expertise in **solar panel installations, maintenance, energy audits, and sustainable energy consulting**. Designed to educate visitors, showcase projects, and generate leads, SolarPro provides a seamless user experience across all devices.

## Pages
- **Home**: Overview of services, key features, and company highlights  
- **Our Services**: Detailed solar energy solutions, installations, maintenance, and consultancy  
- **Projects**: Portfolio of completed and ongoing solar projects with images and descriptions  
- **About Us**: Company mission, vision, and team introduction  
- **Contact Us**: Contact form for inquiries, quotes, and consultations  

## Key Features
- Fully responsive and modern UI for desktop and mobile  
- Optimized images for fast loading and SEO  
- User-friendly forms to request consultations or quotes  
- Admin panel for managing projects, services, and inquiries  
- Secure authentication for client accounts (optional)  
- Blog/Insights section for solar energy news and updates  

## Technical Stack
- **Frontend**: React.js with Vite, Tailwind CSS, PostCSS for advanced styling  
- **Backend**: Node.js + Express.js, MongoDB for data storage  
- **Email Integration**: EmailJS for handling contact form submissions  
- **Deployment**: Hosted on Vercel for speed and reliability  
- **Code Quality**: ESLint and Prettier for consistent, maintainable code  

## Business Impact
- Delivers a professional and scalable platform for SolarPro  
- Highlights expertise in renewable energy to attract clients  
- Increases digital credibility and online visibility  
- Generates leads and inquiries through structured service pages and forms`,
    review: {
      type: 'text',
      value: 'Delivered exactly what we envisioned — modern, responsive, and built with care! The SolarPro website effectively showcases our services and has helped us attract quality clients. The professional design and smooth functionality make a great impression.'
    }
}

  ,
  {
    id: 11,
    thumbnailType: 'image',
    thumbnail: '/images/neurix.jpg', // Example video path
    name: 'Neurix Solution',
    category: 'web-development',
    isFeatured: true,
    excerpt: 'A comprehensive business startup website offering Web Development, CMS Development, AI/ML, and Graphic Design services. Built with MERN Stack and deployed on Netlify and Heroku.',
    slug: 'neurix-solution',
    type: 'personal',
    skill: [
      { name: 'React', icon: '<i class="devicon-react-original colored"></i>' },
      { name: 'Node.js', icon: '<i class="devicon-nodejs-plain colored"></i>' },
      { name: 'MongoDB', icon: '<i class="devicon-mongodb-plain colored"></i>' },
      { name: 'Express.js', icon: '<i class="devicon-express-original colored"></i>' },
      { name: 'Netlify', icon: '<i class="devicon-netlify-plain colored"></i>' },
      { name: 'Heroku', icon: '<i class="devicon-heroku-plain colored"></i>' }
    ],
    demoLink: 'https://neurixsolution.tech',
    githubLink: '#',
    content: `# Nextrix Solution - Freelance Business Platform

## Project Overview
Nextrix Solution is a freelance business startup website designed to offer comprehensive digital services. The platform showcases expertise in web development, content management systems, artificial intelligence, machine learning, and graphic design.

## Key Features
- **Service Portfolio**: Comprehensive display of offered services
- **Professional Design**: Modern and attractive, business-focused interface
- **MERN Stack**: Full-stack implementation with modern technologies
- **Responsive Design**: Optimized for all devices and screen sizes
- **Business Ready**: Professional presentation for client acquisition

## Technical Stack
- **Frontend**: React.js with modern UI/UX
- **Backend**: Node.js with Express.js
- **Database**: MongoDB for data persistence
- **Deployment**: Heroku for reliable hosting
- **Styling**: Modern CSS with responsive design

## Business Impact
- Professional online presence for freelance services
- Clear service offerings and expertise demonstration
- Client-friendly interface for service inquiries
- Scalable platform for business growth`,
    review: {
      type: 'text',
      value: 'Delivered exactly what we envisioned — modern, responsive, and built with care! The Nextrix Solution website effectively showcases our services and has helped us attract quality clients. The professional design and smooth functionality make a great impression.'
    }
  },
  {
    id: 12,
    "thumbnailType": "video",
    thumbnail: '/images/clothingstore.mp4',
    name: 'FashionCart - Online Clothing Store',
    category: 'web-development',
    isFeatured: true,
    excerpt: 'A responsive eCommerce clothing store (desktop only) featuring seasonal collections, interactive product selection, and a fashion blog. Built with React, HTML, CSS, Bootstrap, and JavaScript.',
    slug: 'fashioncart-store',
    type: 'client',
    skill: [
      { name: 'HTML', icon: '<i class="devicon-html5-plain colored"></i>' },
      { name: 'CSS3', icon: '<i class="devicon-css3-plain colored"></i>' },
      { name: 'Bootstrap', icon: '<i class="devicon-bootstrap-plain colored"></i>' },
      { name: 'JavaScript', icon: '<i class="devicon-javascript-plain colored"></i>' },
      { name: 'React', icon: '<i class="devicon-react-original colored"></i>' }
    ],
    demoLink: 'https://beautiful-licorice-645db9.netlify.app/ ',
    githubLink: '#',
    content: `# FashionCart - Online Shopping Store
  
  ## Project Overview
  FashionCart is a fully functional and visually appealing online clothing store tailored for seasonal fashion. It features interactive shopping elements, product customization, and a built-in blog to keep customers updated with the latest fashion trends.
  
  > **Note:** This version is optimized for desktop and is **not mobile-friendly**. Future updates may include mobile responsiveness.
  
  ## Key Features
  - **Home Page**: Showcases featured products and new arrivals.
  - **Seasonal Collections**: Organized clothing collections for different seasons (Summer, Winter, Spring, Autumn).
  - **Interactive Product Gallery**: Users can select product color, size, and quantity using a JavaScript-powered gallery.
  - **Product Details**: Comprehensive pages for each product including images, descriptions, pricing, and availability.
  - **Newsletter Signup**: Stay updated with the latest designs and trends through the integrated newsletter feature.
  - **Fashion Blog**: Explore fashion tips, updates, and promotional content.
  - **Contact Page**: Includes store contact information for customer support and inquiries.
  
  ## Technical Stack
  - **Frontend**: HTML5, CSS3, Bootstrap for styling and layout
  - **Interactivity**: JavaScript and React for dynamic components and state handling
  - **Responsiveness**: Currently optimized only for desktop screens
  
  ## Deliverables
  - Modern eCommerce platform with interactive shopping features
  - Clean and maintainable frontend code
  - SEO-optimized structure and content layout
  - **Note:** Mobile responsiveness was not implemented in this version
  
  `,
    review: {
      type: 'text',
      value: 'A beautifully built shopping site with smooth product browsing and a great user interface. The interactive gallery and seasonal collections made it very user-friendly. Highly satisfied with the result!'
    }
  }
,  
{
  id: 13,
  "thumbnailType": "image",
  thumbnail: '/images/DoctorAppointment.png',
  name: 'Doctor Appointment System',
  category: 'web-development',
  isFeatured: true,
  excerpt: 'A role-based medical appointment system with real-time chat, appointment management, and dashboards for patients, doctors, and admins. Built with ASP.NET Core and SQL Server.',
  slug: 'doctor-appointment-system',
  type: 'academic',
  skill: [
    { name: 'ASP.NET Core', icon: '<i class="devicon-dotnetcore-plain colored"></i>' },
    { name: 'C#', icon: '<i class="devicon-csharp-plain colored"></i>' },
    { name: 'Razor Pages', icon: '<i class="devicon-html5-plain colored"></i>' },
    { name: 'JavaScript', icon: '<i class="devicon-javascript-plain colored"></i>' },
    { name: 'SQL Server', icon: '<i class="devicon-microsoftsqlserver-plain colored"></i>' },
    { name: 'Bootstrap', icon: '<i class="devicon-bootstrap-plain colored"></i>' },
    { name: 'jQuery', icon: '<i class="devicon-jquery-plain colored"></i>' }
  ],
  demoLink: 'https://github.com/musadaqhanif/Doctor_Appointment_System',
  githubLink: 'https://github.com/musadaqhanif/Doctor_Appointment_System',
  content: `# Doctor Appointment System

## Project Overview
The Doctor Appointment System is a comprehensive web application designed to streamline the process of booking and managing doctor appointments online. It serves as a platform for patients to easily find doctors, schedule appointments, and manage their bookings, while also providing doctors and administrators with tools to manage schedules, view appointments, and interact with patients.

## Key Features
- **User Authentication**: Secure login and registration for patients, doctors, and administrators.
- **Doctor Management**: Admins can add, update, or remove doctor profiles and manage their schedules.
- **Appointment Booking**: Patients can search for doctors by specialty, view available slots, and book appointments online.
- **Appointment Management**: Doctors and patients can view, update, or cancel appointments.
- **Session Scheduling**: Doctors can set their available times for patient sessions.
- **Chat Functionality**: Real-time chat between doctors and patients for better communication.
- **Dashboard**: Personalized dashboards for doctors, patients, and admins to manage their activities.
- **Notifications**: Email or in-app notifications for appointment confirmations, reminders, and updates.
- **Role-Based Access**: Different access levels and functionalities for patients, doctors, and admins.

## Tech Stack
- **Backend**: ASP.NET Core (C#)
- **Frontend**: Razor Pages (CSHTML), HTML, CSS, JavaScript
- **Database**: Entity Framework Core with SQL Server
- **Authentication**: ASP.NET Core Identity
- **Real-Time Communication**: SignalR for chat and live updates
- **Libraries**: Bootstrap, jQuery

## Project Impact
- Simplifies healthcare appointment scheduling for users and doctors
- Provides real-time communication and organized dashboards
- Fully role-based system with enhanced management features
- Built as part of a capstone academic or client-based software project`,
  review: {
    type: 'text',
    value: 'A solid appointment management platform that integrates real-time communication and structured workflows for patients and healthcare professionals. Robust and easy to use.'
  }
}
,
{
  id: 14,
  thumbnailType: 'image',
  thumbnail: '/images/portfolio.png',
  name: 'Personal Portfolio Website',
  category: 'web-development',
  isFeatured: true,
  excerpt: 'A responsive personal portfolio site built with Next.js, Tailwind CSS, and React, showcasing projects, skills, and services with multilingual support and dark/light mode.',
  slug: 'personal-portfolio',
  type: 'personal',
  skill: [
    { name: 'Next.js', icon: '<i class="devicon-nextjs-plain colored"></i>' },
    { name: 'React', icon: '<i class="devicon-react-original colored"></i>' },
    { name: 'Tailwind CSS', icon: '<i class="devicon-tailwindcss-plain colored"></i>' },
    { name: 'EmailJS', icon: '<i class="devicon-javascript-plain colored"></i>' },
    { name: 'Netlify', icon: '<i class="devicon-netlify-plain colored"></i>' },
    { name: 'Vercel', icon: '<i class="devicon-vercel-plain colored"></i>' }
  ],
  demoLink: 'https://musadaq.live',  // Update if different
  githubLink: 'https://musadaq.live',  // Update if needed
  content: `# Personal Portfolio Website

## Project Overview
This is a personal portfolio website designed to showcase the work, skills, and professional journey of a web developer. The site serves as a digital resume, providing visitors with insights into the developer’s background, projects, experience, and services offered.

## Key Features
- **Home Page**: Engaging introduction with social links and a summary of expertise.
- **About Section**: Detailed background, career journey, and personal story.
- **Portfolio**: Interactive gallery of completed projects with detailed case studies.
- **Blog**: Articles and posts sharing knowledge, tutorials, and industry insights.
- **Experience**: Timeline of professional roles and achievements.
- **Skills & Certificates**: Visual representation of technical skills and earned certifications.
- **Services**: Overview of services provided, such as web development, consulting, etc.
- **Reviews**: Testimonials from clients and collaborators.
- **Contact Form**: Easy way for visitors to get in touch via email.
- **Performance Insights**: Integrated tools to display website speed and optimization scores.
- **Dark/Light Mode**: User-friendly theme toggle for accessibility.
- **Multilingual Support**: Content available in multiple languages.

## Tech Stack
- **Frontend Framework**: Next.js (React-based) for server-side rendering and static site generation.
- **UI Development**: React with Tailwind CSS for a clean, responsive interface.
- **Email Integration**: EmailJS to handle contact form submissions.
- **Deployment**: Hosted on Netlify and Vercel for seamless deployment.
- **CSS Optimization**: PostCSS for processing and optimizing styles.
- **Additional Tools**: ESLint for code linting, SEO plugins, analytics tools.

## Project Impact
- Builds a strong personal brand and professional presence online.
- Attracts clients and collaborators through well-structured content.
- Optimized for fast loading, accessibility, and responsiveness on all devices.`,
  review: {
    type: 'text',
    value: 'Exactly the kind of professional presence I needed! Clean design, fast performance, and beautifully showcases all my work. Highly recommended for any developer.'
  }
}
,
{
  id: 15,
  thumbnailType: 'video',
  thumbnail: '/images/Linkedin-Tool.mp4',
  name: 'LinkedIn Lead Extractor',
  category: 'desktop-application',
  isFeatured: true,
  excerpt: 'A powerful Windows desktop application for extracting LinkedIn lead data with Apollo.io integration, delivering efficient B2B prospecting with automated data export.',
  slug: 'linkedin-lead-extractor',
  type: 'client',
  skill: [
    { name: 'Electron.js', icon: '<i class="devicon-electron-original colored"></i>' },
    { name: 'Node.js', icon: '<i class="devicon-nodejs-plain colored"></i>' },
    { name: 'Puppeteer', icon: '<i class="devicon-javascript-plain colored"></i>' },
    { name: 'JavaScript', icon: '<i class="devicon-javascript-original colored"></i>' }
  ],
  demoLink: '#',
  githubLink: 'https://github.com/yourusername/linkedin-lead-extractor',
  content: `# LinkedIn Lead Extractor - Desktop Automation Tool

## Project Overview
LinkedIn Lead Extractor is a sophisticated Windows desktop application designed for B2B professionals and sales teams to automate lead discovery and data collection from LinkedIn. The application streamlines the process of finding and organizing prospect information with intelligent bot detection avoidance and seamless Apollo.io integration for enhanced email and phone number extraction.

## Key Features
- **Automated LinkedIn Login**: Secure credential storage and automated authentication process with optional manual login support.
- **Advanced Search Filters**: Filter prospects by job title, location, industry, and customizable page ranges for targeted lead generation.
- **Bot Detection Avoidance**: Intelligent human-like behavior simulation including random mouse movements, variable scrolling patterns, and realistic action delays.
- **Apollo.io Integration**: Automatic extraction of email addresses and phone numbers using Apollo Chrome Extension data detection.
- **Real-time Activity Log**: Live progress tracking with detailed logging of extraction process and encountered issues.
- **Multi-format Data Export**: Export extracted leads to CSV and Excel formats for seamless CRM integration.
- **Lead Preview Table**: Real-time display of extracted contact information with searchable and sortable data grid.
- **Professional UI**: Clean, modern Electron-based interface with intuitive navigation and responsive design.

## Technical Stack
- **Frontend**: Electron.js for cross-platform desktop application, HTML5/CSS3 for UI, Vanilla JavaScript for client-side logic.
- **Backend**: Node.js runtime with Puppeteer for headless browser automation and web scraping.
- **Data Processing**: CSV-Writer for CSV export, XLSX library for Excel file generation.
- **Automation**: Puppeteer for browser control, bot detection evasion techniques, and Apollo.io selector-based data extraction.
- **Build & Deployment**: Electron-Builder for Windows NSIS installer creation and distribution.
- **Browser Integration**: Chrome/Chromium automation with user profile integration for Apollo extension data access.

## Business Impact
- Automates tedious manual lead research, saving 10+ hours per week for sales teams
- Enables targeted B2B prospecting with advanced filtering capabilities
- Provides reliable email and phone data extraction for high-quality prospect outreach
- Supports multiple data export formats for seamless CRM and email platform integration
- Reduces manual data entry errors with automated, structured data collection
- Complies with LinkedIn terms through human-like behavior simulation`,
  review: {
    type: 'text',
    value: 'A powerful tool that automates LinkedIn lead research and data extraction. It has significantly improved our prospecting efforts by reducing manual data entry and increasing efficiency. Highly recommended for sales and marketing teams looking to streamline their lead generation process.'
  },
},
{
  id: 16,
  thumbnailType: 'video',    
  thumbnail: '/images/email.mp4',  
  name: 'Freelance & Gmail Alert Notifier',
  category: 'chrome-extensions',
  isFeatured: true,
  excerpt: 'A powerful Chrome extension that plays custom audio notifications for Upwork, Fiverr, and Gmail alerts with configurable repeat functionality and debug mode.',
  slug: 'freelance-gmail-notifier',
  type: 'personal',
  skill: [
    { name: 'JavaScript', icon: '<i class="devicon-javascript-plain colored"></i>' },
    { name: 'Chrome Extensions', icon: '<i class="devicon-chrome-plain colored"></i>' },
    { name: 'Manifest V3', icon: '<i class="devicon-google-plain colored"></i>' },
    { name: 'Web APIs', icon: '<i class="devicon-html5-plain colored"></i>' }
  ],
  demoLink: '#', // Chrome extensions don't have live demos
  githubLink: '#',
  content: `# Freelance & Gmail Alert Notifier - Chrome Extension

## Project Overview
Freelance & Gmail Alert Notifier is a sophisticated Chrome extension designed to help freelancers and professionals stay on top of important notifications from Upwork, Fiverr, and Gmail. The extension monitors these platforms in real-time and plays customizable audio alerts when new notifications are detected, ensuring you never miss a potential job opportunity or important email. Built with Chrome's Manifest V3 architecture, it provides reliable notification detection with minimal resource usage.

## Key Features
- **Multi-Platform Monitoring**: Simultaneously tracks notifications from Upwork, Fiverr, and Gmail
- **Custom Audio Upload**: Upload and use your own audio files for personalized alert sounds
- **Repeat Functionality**: Configure sound playback to repeat 1-20 times for important alerts
- **Advanced Gmail Detection**: Multiple detection methods including page title parsing, DOM element scanning, and inbox count tracking
- **Offscreen Audio Playback**: Utilizes Chrome's offscreen API for reliable, uninterrupted audio playback in Manifest V3
- **Debug Mode**: Comprehensive logging system for troubleshooting and monitoring extension behavior
- **Sound Control**: Real-time stop/start controls for audio playback through the popup interface
- **Persistent Settings**: All configurations stored locally and persist across browser sessions
- **Test Functions**: Built-in testing utilities to validate notification detection and sound playback
- **Error Handling**: Robust error management with detailed logging for troubleshooting
- **User-Friendly Interface**: Clean, intuitive popup interface for easy configuration

## Technical Stack
- **Extension Architecture**: Chrome Manifest V3 with service worker background script
- **Content Scripts**: JavaScript injection for monitoring Upwork, Fiverr, and Gmail pages
- **Offscreen API**: Dedicated offscreen document for reliable audio playback
- **Storage API**: Chrome's local storage for settings persistence
- **Messaging API**: Background-content script communication for real-time notifications
- **DOM Manipulation**: Advanced selectors for detecting platform-specific notification elements
- **Audio Processing**: Base64 encoding for custom audio file storage
- **Permissions**: Minimal permissions (storage, scripting, offscreen) with targeted host access
- **Web Accessible Resources**: Secure audio file handling with proper resource declarations
- **Error Logging**: Comprehensive console logging with emoji indicators for easy debugging

## Technical Implementation
The extension uses a three-layer architecture:
1. **Content Scripts** monitor each platform's DOM for notification changes using MutationObserver and periodic checks
2. **Service Worker** manages the extension lifecycle, message routing, and offscreen document creation
3. **Offscreen Document** handles audio playback independently from the main extension context

Detection methods include:
- **Upwork**: Monitors notification badge elements with data-test attributes
- **Fiverr**: Tracks notification count badges in the navigation header
- **Gmail**: Multiple detection strategies including title parsing, inbox element scanning, and unread email DOM counting

## Business Impact
- Helps freelancers respond faster to job opportunities on Upwork and Fiverr
- Reduces missed opportunities by providing persistent audio alerts
- Increases productivity by eliminating the need to constantly check multiple platforms
- Customizable alert system adapts to individual user preferences and workflows
- Debug mode enables quick troubleshooting for optimal reliability
- Lightweight design ensures minimal impact on browser performance`,
  review: {
    type: 'text',
    value: 'This extension has significantly improved my response time to client inquiries. The custom sound feature and repeat functionality ensure I never miss an important notification, even when working with headphones. The debug mode was incredibly helpful during setup!'
  }
}
,
{
  id: 17,
  thumbnailType: 'image',
  thumbnail: '/images/design.png',
  name: 'ContaTaxPay.com',
  category: 'web-design',
  isFeatured: true,
  excerpt: 'A cloud-based SaaS platform for tax accounting and business management, **redesigned in Figma** to deliver a modern, intuitive, and highly usable interface for accountants and clients.',
  slug: 'contataxpay-platform',
  type: 'saas-platform',
  skill: [],
  demoLink: 'https://conta-taxpay.vercel.app',
  githubLink: '#',
  content: `# ContaTaxPay.com - Figma UX/UI Redesign

## Design Overview
The ContaTaxPay platform was **completely redesigned in Figma** to improve the user experience and visual appeal for accountants and business clients. The focus was on creating a **clean, intuitive interface** that simplifies complex workflows like tax submissions, invoicing, and client management.

## Key Design Features
- **Modern Layout**: Organized dashboards and menus for easy navigation  
- **User-Centric UX**: Streamlined workflows to reduce clicks and simplify task management  
- **Visual Hierarchy**: Clear typography, color coding, and spacing to highlight critical information  
- **Interactive Prototypes**: Fully clickable Figma prototypes for testing user flows before development  
- **Responsive Design**: Ensured usability on desktop, tablet, and mobile devices  
- **Consistency**: Unified design language with buttons, forms, tables, and charts  
- **Accessibility Considerations**: High contrast, readable fonts, and intuitive interactions  
- **Visual Enhancements**: Subtle animations, hover effects, and feedback cues to improve engagement  

## Outcome
- Delivered a **modern, visually appealing SaaS interface**  
- Simplified complex accountant-client processes  
- Reduced cognitive load and improved task efficiency  
- Prototype validated before development to ensure usability and client satisfaction  

`,
  review: {
    type: 'text',
    value: 'The Figma redesign has transformed our platform into a sleek, user-friendly interface that has significantly improved the user experience. The interactive prototypes allowed us to test and refine the design before development, ensuring a polished and professional SaaS platform. Highly recommended for any accounting firm looking to modernize their operations.'
  }
},
{
  id: 18,
  thumbnailType: 'video',
  thumbnail: '/images/extension1.mp4',
  name: 'AutoTrader NZ Car Scraper Extension',
  category: 'chrome-extensions',
  isFeatured: true,
  excerpt: 'An intelligent Chrome extension that automates scraping of car listings from AutoTrader NZ and other marketplaces with smart pagination, duplicate detection, and export capabilities.',
  slug: 'autotrader-nz-car-scraper',
  type: 'personal',
  skill: [
    { name: 'JavaScript', icon: '<i class="devicon-javascript-plain colored"></i>' },
    { name: 'Chrome Extensions', icon: '<i class="devicon-chrome-plain colored"></i>' },
    { name: 'Manifest V3', icon: '<i class="devicon-google-plain colored"></i>' },
    { name: 'Web Scraping', icon: '<i class="devicon-html5-plain colored"></i>' }
  ],
  demoLink: '#', // Chrome extensions don't have live demos
  githubLink: '#',
  content: `# AutoTrader NZ Car Scraper - Chrome Extension

## Project Overview
AutoTrader NZ Car Scraper is a powerful Chrome extension designed to automate the extraction of car listing data from AutoTrader NZ and other online car marketplaces. The extension intelligently navigates pages, extracts relevant vehicle information, detects duplicates, and stores the data locally for later export. With automated pagination and real-time monitoring, this extension streamlines the car data collection process, saving hours of manual work.

## Key Features
- **Automated Data Extraction**: Scrapes car listings intelligently using multiple selector strategies
- **Smart Pagination**: Automatically navigates through multiple pages while maintaining data persistence
- **Duplicate Detection**: Prevents redundancy through title matching and phone number normalization
- **Data Persistence**: Saves all scraped data across pages and sessions using Chrome Storage API
- **Auto-Start Functionality**: Automatically resumes scraping when navigating to new paginated pages
- **Real-Time Monitoring**: Tracks progress and logs activity through the extension popup
- **Export Capabilities**: Download scraped data in JSON or CSV formats for easy analysis
- **Multi-Selector Strategy**: Robust fallback selectors to handle dynamic page structures
- **Load More Handling**: Detects and clicks “Load More” buttons automatically to reveal additional listings
- **Error Recovery**: Retry logic and graceful degradation ensure stable operation

## Technical Stack
- **Extension Architecture**: Chrome Manifest V3 with service worker background script
- **Content Scripts**: JavaScript for DOM scraping and element detection
- **Storage API**: Chrome Storage API for data persistence across pages and sessions
- **DOM Manipulation**: querySelector strategies with fallback options for dynamic pages
- **Data Formats**: JSON and CSV exports
- **Messaging API**: Background-content script communication for real-time progress updates
- **Error Logging**: Console logging with clear status and error messages

## Technical Implementation
The extension uses a structured three-layer architecture:
1. **Content Script (CarScraper Class)**: Performs DOM analysis, element detection, data extraction, and duplicate filtering
2. **Background Service Worker**: Manages the extension lifecycle, message routing, auto-pagination, and storage operations
3. **Popup UI**: Provides real-time monitoring, controls for starting/stopping scraping, and export options

Workflow:
- **User Interaction (Popup UI)** → **Background Service Worker** → **Content Script (DOM Analysis → Element Detection → Data Extraction → Duplicate Filtering)** → **Chrome Storage (Persistence) → Auto-Pagination → Results Export (JSON/CSV)**

## Business Impact
- **Efficiency Gains**: Automates manual car data collection, saving hours of repetitive work
- **Data Quality**: Ensures unique datasets through duplicate detection
- **Scalability**: Handles large-scale scraping across multiple pages automatically
- **User Experience**: Simple one-click interface with real-time feedback and progress tracking
- **Cost-Effective**: Eliminates API costs or subscription fees
- **Integration Ready**: Exported data is easily transferred to other systems for further analysis
`,
  review: {
    type: 'text',
    value: 'This extension has greatly streamlined my car data collection workflow. The smart pagination and duplicate detection features save a ton of time, and exporting the data in JSON and CSV formats makes integration with other tools seamless.'
  }
}
,
{
  id: 19,
  thumbnailType: 'image',
  thumbnail: '/images/ml1.jpeg',
  name: 'Driver Drowsiness Detection System',
  category: 'ml-ai',
  isFeatured: true,
  excerpt: 'An AI-powered real-time system that monitors driver alertness using computer vision and deep learning, providing immediate audio-visual alerts to prevent accidents.',
  slug: 'driver-drowsiness-detection',
  type: 'personal',
  skill: [
    { name: 'Python', icon: '<i class="devicon-python-plain colored"></i>' },
    { name: 'OpenCV', icon: '<i class="devicon-opencv-plain colored"></i>' },
    { name: 'TensorFlow/Keras', icon: '<i class="devicon-tensorflow-original colored"></i>' },
    { name: 'MediaPipe', icon: '<i class="devicon-python-plain colored"></i>' }
  ],
  demoLink: '#',
  githubLink: '#',
  content: `# Driver Drowsiness Detection System - AI Project

## Project Overview
Driver Drowsiness Detection is an AI-powered real-time system designed to monitor driver and rider alertness. Using computer vision and deep learning, the system analyzes eye states through live video feeds and provides immediate alerts when drowsiness is detected, significantly enhancing road safety.

## Key Features
- **Real-Time Eye State Detection**: Continuous monitoring using CNN model predictions and Eye Aspect Ratio (EAR)
- **Face Mesh Detection**: Utilizes MediaPipe with 468 facial landmarks for precise eye region extraction
- **Dual-Metric Validation**: Combines deep learning predictions and geometric analysis for robust detection
- **Immediate Audio-Visual Alerts**: Visual overlays and audio alarms triggered upon drowsiness detection
- **Prediction Smoothing**: 5-frame history averaging reduces false positives
- **Adaptive Image Processing**: CLAHE enhancement and Gaussian blur for varying lighting conditions
- **Configurable Thresholds**: Adjustable sensitivity for different environments and drivers

## Technical Stack
- **Programming Language**: Python 3.x
- **Computer Vision**: OpenCV, MediaPipe
- **Deep Learning**: TensorFlow/Keras with pre-trained CNN model
- **Image Processing**: CLAHE, Gaussian blur, image normalization
- **Audio Alerts**: Windows sound system (winsound) with WAV file support
- **Numerical Computing**: NumPy for array operations

## Technical Implementation
The system follows this workflow:
1. **Webcam Capture** → OpenCV grabs live video frames
2. **Face Detection & Eye Extraction** → MediaPipe face mesh identifies 468 facial landmarks
3. **Image Preprocessing** → CLAHE enhancement + Gaussian blur applied to eye region
4. **CNN Model Inference** → Grayscale 64x64 images fed to model for drowsiness prediction
5. **Prediction Smoothing & EAR Calculation** → 5-frame history averages reduce false alarms
6. **Drowsiness Decision Logic** → Triggers audio and visual alerts in real time

## Business Impact
- **Enhanced Safety**: Reduces accidents caused by drowsy driving with immediate intervention
- **Cost-Effective Solution**: Provides a scalable safety tool without expensive hardware
- **High Accuracy**: Dual-metric approach ensures reliable detection in various environments
- **Edge Deployment**: Can be integrated into vehicles or fleet monitoring systems for real-time safety
`,
  review: {
    type: 'text',
    value: 'This system has proven extremely effective in detecting driver drowsiness in real time. The combination of CNN predictions with EAR calculations makes it highly accurate, and the immediate audio-visual alerts ensure actionable intervention.'
  }
}
,
{
  id: 20,
  thumbnailType: 'image',
  thumbnail: '/images/ml2.jpeg',
  name: 'Motorcycle Crash Detection System',
  category: 'ml-ai',
  isFeatured: true,
  excerpt: 'An edge AI system that detects motorcycle crashes in real-time using IMU sensors and CNN Autoencoder anomaly detection, sending GPS alerts via GSM without cloud dependency.',
  slug: 'motorcycle-crash-detection',
  type: 'personal',
  skill: [
    { name: 'Python', icon: '<i class="devicon-python-plain colored"></i>' },
    { name: 'TensorFlow', icon: '<i class="devicon-tensorflow-original colored"></i>' },
    { name: 'IoT/Edge AI', icon: '<i class="devicon-raspberrypi-plain colored"></i>' },
    { name: 'Embedded Systems', icon: '<i class="devicon-c-plain colored"></i>' }
  ],
  demoLink: '#',
  githubLink: '#',
  content: `# Motorcycle Crash Detection System - Edge AI Project

## Project Overview
Motorcycle Crash Detection is an unsupervised anomaly detection system designed to detect crash events in real-time using inertial sensors (accelerometer and gyroscope). Optimized for edge deployment on Raspberry Pi, the system automatically sends emergency alerts with GPS location via GSM, ensuring rider safety without relying on cloud infrastructure.

## Key Features
- **Unsupervised Anomaly Detection**: CNN Autoencoder trained solely on normal riding data
- **Sliding Window Analysis**: Temporal analysis with 60-sample windows and 15-sample stride
- **Real-Time Inference**: Optimized for edge deployment on Raspberry Pi
- **Automatic Emergency Alerts**: GPS acquisition and SMS transmission via GSM module
- **False Positive Reduction**: Requires 3 consecutive windows for crash confirmation
- **Edge-Based Processing**: Fully functional without cloud connectivity, ideal for remote areas

## Technical Stack
- **Hardware**: Raspberry Pi, MPU6050 IMU, GSM/GPS Module (SIM808/SIM760)
- **Programming Language**: Python
- **Deep Learning**: TensorFlow CNN Autoencoder
- **Sensor Integration**: MPU6050 library for I2C communication
- **GPS/GSM Communication**: NMEA parsing and AT commands for SMS alerts
- **Data Processing**: NumPy, Pandas, scikit-learn

## Technical Implementation
The system workflow:
1. **Sensor Data Capture** → MPU6050 IMU streams accelerometer and gyroscope data to Raspberry Pi
2. **Sliding Window Buffer** → 60-sample windows with 15-sample stride for temporal analysis
3. **Data Normalization** → Standardization of IMU signals
4. **CNN Autoencoder Inference** → Reconstruction error computed for anomaly detection
5. **Anomaly Confirmation** → 3-consecutive-window check reduces false positives
6. **Emergency Alert** → GPS location acquired and SMS sent via GSM module

**Training Pipeline**:
- Data collection via CARLA simulator with diverse riding behaviors
- Window creation and normalization from normal riding data
- CNN Autoencoder training with encoder-decoder architecture
- Threshold selection using maximum reconstruction error of normal data

## Business Impact
- **Immediate Emergency Response**: Sends alerts instantly with GPS coordinates
- **Reduced Accident Response Time**: Ensures faster assistance for riders
- **Cost-Effective Edge Solution**: No recurring cloud fees required
- **Unsupervised Learning**: Eliminates need for crash data collection
- **Enhanced Rider Safety**: Reliable real-time crash detection suitable for multiple motorcycle models
`,
  review: {
    type: 'text',
    value: 'This edge AI system provides fast and reliable crash detection. The combination of CNN Autoencoder and sliding window analysis ensures accurate anomaly detection, and the GSM-based emergency alerts enhance rider safety without relying on cloud services.'
  }
}

]; 