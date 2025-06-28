# Deployment Guide - Musadaq Hanif Portfolio

This guide will help you deploy your portfolio website to various free hosting platforms.

## 🚀 Free Hosting Platforms

### 1. **Vercel (Recommended)**
**Best for Next.js applications**

**Features:**
- ✅ Free tier with generous limits
- ✅ Automatic deployments from GitHub
- ✅ Built-in CDN and edge functions
- ✅ Custom domains support
- ✅ SSL certificates included
- ✅ Zero configuration needed

**Deployment Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click "New Project"
5. Import your repository
6. Deploy automatically

**Environment Variables:**
```
NEXT_PUBLIC_SITE_URL=https://musadaqhanif.com
```

### 2. **Netlify**
**Great alternative with good free tier**

**Features:**
- ✅ Free tier with 100GB bandwidth/month
- ✅ Automatic deployments
- ✅ Custom domains
- ✅ SSL certificates
- ✅ Form handling

**Deployment Steps:**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sign up with GitHub
4. Click "New site from Git"
5. Choose your repository
6. Build command: `npm run build`
7. Publish directory: `.next`

### 3. **Railway**
**Good for full-stack applications**

**Features:**
- ✅ Free tier with $5 credit/month
- ✅ Easy deployment
- ✅ Custom domains
- ✅ Database support

**Deployment Steps:**
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create new project
4. Deploy from GitHub repository

### 4. **Render**
**Good alternative with free tier**

**Features:**
- ✅ Free tier available
- ✅ Automatic deployments
- ✅ Custom domains
- ✅ SSL certificates

**Deployment Steps:**
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Create new Web Service
4. Connect your repository
5. Build command: `npm run build`
6. Start command: `npm start`

### 5. **GitHub Pages (Static Export)**
**For static site generation**

**Features:**
- ✅ Completely free
- ✅ Direct GitHub integration
- ✅ Custom domains
- ✅ SSL certificates

**Setup for Static Export:**
1. Add to `next.config.js`:
```javascript
module.exports = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

2. Update `package.json`:
```json
{
  "scripts": {
    "export": "next build && next export"
  }
}
```

## 🔧 Pre-deployment Checklist

### 1. **Environment Variables**
Make sure these are set in your hosting platform:
```
NEXT_PUBLIC_SITE_URL=https://musadaqhanif.com
```

### 2. **Domain Configuration**
- Update your domain DNS settings
- Point to your hosting provider's servers
- Enable SSL certificates

### 3. **SEO Optimization**
- ✅ Sitemap is generated (`/sitemap.xml`)
- ✅ Robots.txt is configured (`/robots.txt`)
- ✅ Meta tags are optimized
- ✅ Open Graph images are set

### 4. **Performance Optimization**
- ✅ Images are optimized
- ✅ Code splitting is enabled
- ✅ PWA is configured
- ✅ Caching headers are set

## 📁 Project Structure for Deployment

```
dwiwijaya.com/
├── public/
│   ├── favicon/
│   │   └── musadaq.jpg
│   ├── images/
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   ├── pages/
│   └── styles/
├── next.config.js
├── vercel.json
├── package.json
└── README.md
```

## 🚀 Quick Deploy Commands

### Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Netlify CLI
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

## 🔍 Post-Deployment Checklist

1. **Test all pages** - Ensure all routes work correctly
2. **Check mobile responsiveness** - Test on different devices
3. **Verify SEO** - Check meta tags and structured data
4. **Test PWA** - Verify offline functionality
5. **Performance audit** - Run Lighthouse tests
6. **Security check** - Verify HTTPS and security headers

## 🌐 Custom Domain Setup

### For Vercel:
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### For Netlify:
1. Go to "Site settings" → "Domain management"
2. Add custom domain
3. Update DNS records

## 📊 Analytics Setup

Consider adding analytics to track your website performance:

### Google Analytics
```javascript
// Add to _document.js
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Vercel Analytics
```bash
npm install @vercel/analytics
```

## 🛠️ Troubleshooting

### Common Issues:

1. **Build fails**: Check Node.js version compatibility
2. **Images not loading**: Verify image domains in `next.config.js`
3. **404 errors**: Check routing configuration
4. **Performance issues**: Optimize images and enable caching

### Support:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [netlify.com/support](https://netlify.com/support)
- Railway: [railway.app/docs](https://railway.app/docs)

## 🎉 Success!

Once deployed, your portfolio will be live at your chosen domain with:
- ✅ Fast loading times
- ✅ Mobile responsiveness
- ✅ SEO optimization
- ✅ PWA functionality
- ✅ Security headers
- ✅ SSL certificates

Happy deploying! 🚀 