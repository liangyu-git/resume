# 🚀 Deployment Guide

## Prerequisites

Before deploying, ensure you have:

- [x] All tests passing locally (`pnpm test:run`)
- [x] Clean build (`pnpm build`)
- [x] Environment variables configured
- [x] GitHub repository with CI/CD pipeline

## Deployment Options

### Option 1: Vercel (Recommended) ⭐

#### 1. Manual Deployment (Quick Start)

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**

   ```bash
   vercel login
   ```

3. **Deploy from project root**

   ```bash
   vercel
   ```

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

#### 2. Automatic Deployment via GitHub

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure project settings:
     - Framework: Next.js
     - Root Directory: `./`
     - Build Command: `pnpm build`
     - Output Directory: `.next`
     - Install Command: `pnpm install --frozen-lockfile`

2. **Configure Environment Variables**
   Add these in Vercel dashboard (Project Settings > Environment Variables):

   **Required:**

   ```
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_APP_NAME=Liang-Yu Sun Portfolio
   NEXT_PUBLIC_APP_DESCRIPTION=AI & Computer Vision Engineer Portfolio
   NODE_ENV=production
   ```

   **Optional:**

   ```
   NEXT_PUBLIC_ENABLE_ANALYTICS=true
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_ENABLE_CONTACT_FORM=true
   NEXT_PUBLIC_ENABLE_BLOG=false
   ```

3. **Set up GitHub Actions Secrets**
   In GitHub repository settings > Secrets and variables > Actions:

   ```
   VERCEL_TOKEN=<your-vercel-token>
   VERCEL_ORG_ID=<your-vercel-org-id>
   VERCEL_PROJECT_ID=<your-vercel-project-id>
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_APP_NAME=Liang-Yu Sun Portfolio
   NEXT_PUBLIC_APP_DESCRIPTION=AI & Computer Vision Engineer Portfolio
   NEXT_PUBLIC_ENABLE_ANALYTICS=false
   NEXT_PUBLIC_ENABLE_CONTACT_FORM=true
   NEXT_PUBLIC_ENABLE_BLOG=false
   ```

   **How to get Vercel tokens:**
   - **VERCEL_TOKEN**: Account Settings > Tokens > Create Token
   - **VERCEL_ORG_ID**: Project Settings > General > Project ID section
   - **VERCEL_PROJECT_ID**: Same location as ORG_ID

#### 3. Custom Domain Setup

1. **Add Domain in Vercel**
   - Project Settings > Domains
   - Add your custom domain

2. **Configure DNS**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or add A record pointing to `76.76.19.61`

3. **SSL Certificate**
   - Vercel automatically provisions SSL certificates
   - HTTPS will be available within minutes

### Option 2: Netlify

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - New site from Git > Choose your repository

2. **Build Settings**

   ```
   Build command: pnpm build && pnpm export
   Publish directory: out
   ```

3. **Environment Variables**
   Add the same environment variables as Vercel setup

### Option 3: Self-Hosted

1. **Build Application**

   ```bash
   pnpm build
   ```

2. **Start Production Server**

   ```bash
   pnpm start
   ```

3. **Process Manager (PM2)**

   ```bash
   npm install -g pm2
   pm2 start "pnpm start" --name "portfolio"
   pm2 startup
   pm2 save
   ```

4. **Reverse Proxy (Nginx)**

   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## CI/CD Pipeline

Our GitHub Actions workflow automatically:

1. **Quality Checks**
   - ✅ Run ESLint and Prettier
   - ✅ TypeScript type checking
   - ✅ Run all 82 unit tests
   - ✅ Generate test coverage report
   - ✅ Build application

2. **Security Audit**
   - ✅ Run `pnpm audit` for vulnerabilities
   - ✅ Snyk security scanning
   - ✅ Dependency vulnerability checks

3. **Performance Testing**
   - ✅ Lighthouse CI for performance metrics
   - ✅ Core Web Vitals monitoring
   - ✅ SEO and accessibility checks

4. **Deployment**
   - ✅ Automatic deployment to Vercel on main branch
   - ✅ Production environment configuration
   - ✅ Custom domain and SSL setup

## Performance Monitoring

### Lighthouse CI

The CI pipeline automatically runs Lighthouse audits and reports:

- Performance metrics
- Accessibility compliance
- SEO optimization
- Best practices validation

Configure `lighthouserc.js` for custom performance budgets.

### Analytics Setup

1. **Google Analytics 4**

   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_ENABLE_ANALYTICS=true
   ```

2. **Plausible Analytics** (Alternative)
   ```
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
   NEXT_PUBLIC_ENABLE_ANALYTICS=true
   ```

## Security

### Environment Variables

- ✅ Never commit secrets to repository
- ✅ Use environment-specific configurations
- ✅ Validate environment variables at build time

### Security Headers

The `vercel.json` configuration includes:

- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy for camera/microphone

### Content Security Policy

Add to `next.config.mjs` for enhanced security:

```javascript
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self';
`
  .replace(/\s{2,}/g, ' ')
  .trim()
```

## Troubleshooting

### Common Issues

1. **Build Failures**

   ```bash
   # Clear cache and reinstall
   pnpm store prune
   rm -rf node_modules .next
   pnpm install
   pnpm build
   ```

2. **Environment Variable Issues**

   ```bash
   # Validate environment
   pnpm env:validate
   ```

3. **TypeScript Errors**

   ```bash
   # Type checking
   pnpm type-check
   ```

4. **Test Failures**
   ```bash
   # Run tests locally
   pnpm test:run
   pnpm test:coverage
   ```

### Vercel-Specific Issues

1. **Function Timeout**
   - Increase `maxDuration` in `vercel.json`
   - Optimize API routes and server components

2. **Build Memory Issues**
   - Use `output: 'standalone'` in `next.config.mjs`
   - Optimize bundle size

3. **Static Export Issues**
   - Check for dynamic routes
   - Ensure all pages are statically exportable

## Support

For deployment issues:

1. **Check CI/CD Logs**
   - GitHub Actions logs for build failures
   - Vercel deployment logs for runtime issues

2. **Performance Monitoring**
   - Vercel Analytics dashboard
   - Lighthouse CI reports

3. **Error Tracking**
   - Check Vercel Function logs
   - Monitor Core Web Vitals

---

🎯 **Target Performance Metrics**

- Lighthouse Performance: 95+
- First Contentful Paint: < 1.2s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
