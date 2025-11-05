# Complete Setup Guide

This guide will walk you through setting up the entire villa rental website from scratch.

## Phase 1: Initial Setup (15 minutes)

### Step 1: Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd villa-rental-website

# Install dependencies
npm install
```

### Step 2: Create Environment File

```bash
cp .env.example .env.local
```

## Phase 2: Sanity CMS Setup (30 minutes)

### Step 1: Create Sanity Account

1. Go to [sanity.io](https://www.sanity.io)
2. Sign up for a free account
3. Create a new project

### Step 2: Get Sanity Credentials

1. In Sanity dashboard, go to Settings
2. Copy your Project ID
3. Create an API token with Editor permissions
4. Update `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=skABC123...
   ```

### Step 3: Create Sanity Studio (Optional)

If you want a separate Sanity Studio:

```bash
# In a new directory
npm create sanity@latest
# Follow the prompts to create a new project
# Use the same Project ID from above
```

### Step 4: Add Content to Sanity

Use Sanity Studio to add:
- Homepage content
- Destination information
- About page content

## Phase 3: Salesforce Setup (45-60 minutes)

### Step 1: Salesforce Access

You'll need:
- Salesforce Developer Edition or higher
- API access enabled
- System Administrator permissions

### Step 2: Create Custom Object

1. Go to Setup → Object Manager
2. Click "Create" → "Custom Object"
3. Name: `Villa`
4. API Name: `Villa__c`
5. Add all fields as specified in README.md

### Step 3: Create Sample Data

Add at least 3-4 test villas with:
- All required fields filled
- Valid JSON in Images__c field:
  ```json
  ["https://example.com/image1.jpg", "https://example.com/image2.jpg"]
  ```
- Active__c checkbox checked

### Step 4: Create Connected App

1. Setup → App Manager → New Connected App
2. Basic Information:
   - Connected App Name: "Villa Rental Website"
   - API Name: `Villa_Rental_Website`
   - Contact Email: your email
3. API (Enable OAuth Settings):
   - Check "Enable OAuth Settings"
   - Callback URL: `https://login.salesforce.com/services/oauth2/callback`
   - Selected OAuth Scopes:
     - Full access (full)
     - Perform requests on your behalf at any time (refresh_token, offline_access)
4. Save and note the Consumer Key and Consumer Secret

### Step 5: Create Integration User

1. Setup → Users → New User
2. Profile: System Administrator
3. Save user credentials
4. Reset password and note security token

### Step 6: Update Environment Variables

Update `.env.local`:
```env
NEXT_PUBLIC_SALESFORCE_API_URL=https://your-instance.salesforce.com/services/data/v58.0
SALESFORCE_CLIENT_ID=your_consumer_key
SALESFORCE_CLIENT_SECRET=your_consumer_secret
SALESFORCE_USERNAME=integration.user@example.com
SALESFORCE_PASSWORD=your_password
SALESFORCE_SECURITY_TOKEN=your_security_token
```

## Phase 4: Test Locally (10 minutes)

### Step 1: Start Development Server

```bash
npm run dev
```

### Step 2: Test Pages

Visit these URLs to ensure everything works:
- http://localhost:3000 (Homepage)
- http://localhost:3000/villas (Villa listings)
- http://localhost:3000/villas/1 (Villa detail - replace 1 with actual Salesforce ID)
- http://localhost:3000/destinations (Destinations)
- http://localhost:3000/about (About page)
- http://localhost:3000/contact (Contact page)

### Step 3: Check Console

Look for any errors in:
- Browser console (F12)
- Terminal running the dev server

## Phase 5: Deploy to Netlify (15 minutes)

### Step 1: Prepare for Deployment

```bash
# Build locally to test
npm run build

# If successful, commit and push
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Connect to Netlify

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up or log in
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub (or your Git provider)
5. Select your repository

### Step 3: Configure Build Settings

- Build command: `npm run build`
- Publish directory: `.next`
- Branch: `main`

### Step 4: Add Environment Variables

In Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add all variables from `.env.local`
3. Make sure to mark sensitive variables as secret

### Step 5: Deploy

Click "Deploy site" and wait for build to complete.

## Phase 6: Post-Deployment (10 minutes)

### Step 1: Test Production Site

Visit your Netlify URL and test:
- [ ] Homepage loads
- [ ] Villa listings display
- [ ] Villa details show Salesforce data
- [ ] Search works
- [ ] Contact form works
- [ ] All links function

### Step 2: Configure Custom Domain (Optional)

1. In Netlify: Site settings → Domain management
2. Add custom domain
3. Update DNS records at your domain provider
4. Wait for DNS propagation (can take up to 48 hours)

### Step 3: Set Up Continuous Deployment

Netlify automatically deploys when you push to main branch.

Test by:
1. Make a small change
2. Commit and push
3. Watch Netlify auto-deploy

## Troubleshooting

### Issue: "CORS Error" from Salesforce

**Solution:**
1. In Salesforce Setup → CORS
2. Add your Netlify URL to allowed origins
3. Add `http://localhost:3000` for local development

### Issue: "Unauthorized" from Salesforce

**Solution:**
1. Verify credentials in `.env.local`
2. Ensure security token is current (reset if needed)
3. Check Connected App is approved
4. Verify integration user has API access

### Issue: "Cannot find module" errors

**Solution:**
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Issue: Build fails on Netlify

**Solution:**
1. Check build logs in Netlify dashboard
2. Ensure all environment variables are set
3. Verify Node.js version matches local (18+)
4. Try building locally first: `npm run build`

### Issue: Images not loading

**Solution:**
1. Verify image URLs are publicly accessible
2. Check Next.js image domains in `next.config.js`
3. Ensure images are HTTPS (not HTTP)

## Next Steps

After successful deployment:

1. **Add Real Content**
   - Replace placeholder images
   - Add actual villa data in Salesforce
   - Update copy and descriptions

2. **Implement Additional Features**
   - Set up booking system
   - Add payment processing
   - Implement user authentication

3. **Optimize Performance**
   - Enable CDN for images
   - Set up caching strategies
   - Monitor Core Web Vitals

4. **Marketing Setup**
   - Configure Google Analytics
   - Set up SEO metadata
   - Submit sitemap to search engines

5. **Monitor and Maintain**
   - Set up error tracking (e.g., Sentry)
   - Monitor Salesforce API usage
   - Review and optimize queries

## Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Salesforce Developer Docs](https://developer.salesforce.com)
- [Netlify Documentation](https://docs.netlify.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## Estimated Timeline

- Initial Setup: 15 minutes
- Sanity Setup: 30 minutes
- Salesforce Setup: 45-60 minutes
- Local Testing: 10 minutes
- Netlify Deployment: 15 minutes
- Post-Deployment: 10 minutes

**Total: 2-2.5 hours**
