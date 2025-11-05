# Quick Reference Card

## 🚀 Fast Start Commands

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Essential Files to Configure

1. `.env.local` - Add your API credentials
2. `next.config.js` - Update domains for images
3. `lib/salesforce.ts` - Customize Salesforce queries if needed
4. `lib/sanity.ts` - Customize Sanity queries if needed

## 🔑 Environment Variables Checklist

```
✅ NEXT_PUBLIC_SANITY_PROJECT_ID
✅ NEXT_PUBLIC_SANITY_DATASET
✅ SANITY_API_TOKEN
✅ NEXT_PUBLIC_SALESFORCE_API_URL
✅ SALESFORCE_CLIENT_ID
✅ SALESFORCE_CLIENT_SECRET
✅ SALESFORCE_USERNAME
✅ SALESFORCE_PASSWORD
✅ SALESFORCE_SECURITY_TOKEN
✅ NEXT_PUBLIC_SITE_URL
```

## 📂 Key Directories

- `app/` - All pages and routes
- `components/` - Reusable UI components
- `lib/` - API clients (Sanity & Salesforce)
- `sanity-schemas/` - CMS schema examples

## 🌐 URLs in Development

- Homepage: http://localhost:3000
- Villas: http://localhost:3000/villas
- Villa Detail: http://localhost:3000/villas/[id]
- Destinations: http://localhost:3000/destinations
- About: http://localhost:3000/about
- Contact: http://localhost:3000/contact

## 🎨 Customization Quick Tips

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your colors */ },
  sand: { /* your colors */ }
}
```

### Replace Placeholder Images
1. In Salesforce: Update Images__c field
2. In Sanity: Upload images via Studio
3. In code: Replace via.placeholder.com URLs

### Update Contact Info
Edit `components/Header.tsx` and `components/Footer.tsx`

## 🐛 Common Issues

**Build fails:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Salesforce auth fails:**
- Check credentials in .env.local
- Verify security token is current
- Ensure password+token format: `PASSWORD+TOKEN`

**Sanity connection fails:**
- Verify project ID
- Check API token permissions
- Confirm dataset name

## 📚 Documentation Files

- `README.md` - Complete documentation
- `SETUP_GUIDE.md` - Step-by-step setup (2-3 hours)
- `API_DOCUMENTATION.md` - API reference
- `PROJECT_OVERVIEW.md` - Project structure
- This file - Quick reference

## 🚢 Deploy to Netlify

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. Connect on Netlify.com
3. Add environment variables
4. Deploy!

## 💡 Pro Tips

- Use `npm run dev` during development
- Test locally before deploying
- Keep environment variables secure
- Monitor Salesforce API usage
- Cache Sanity queries for performance

## 📞 Need Help?

1. Check the full README.md
2. Review SETUP_GUIDE.md
3. Consult API_DOCUMENTATION.md
4. Check error logs in console
