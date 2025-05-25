# Production Deployment Guide for ClearTone Landing Page

This guide will help you build and deploy the entire ClearTone landing page project to various hosting platforms.

## Build Process

### Step 1: Build the Production Version

Run the following command to build the production version of your landing page:

```bash
npm run build
```

This will create a `dist` folder containing all the optimized static files for your website.

### Step 2: Preview the Build (Optional)

To make sure everything looks good before deploying:

```bash
npm run preview
```

This will serve the built files locally so you can check that everything is working properly.

## Deployment Options

### Option 1: Netlify (Recommended for Full Projects)

Netlify is perfect for this type of project and handles the build process automatically.

1. Create an account on [Netlify](https://netlify.com)
2. From the dashboard, click "Add new site" > "Import an existing project"
3. Connect to your Git provider (GitHub, GitLab, etc.) and select your repository
4. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

Your site will be live within minutes with a Netlify subdomain (example: `cleartone.netlify.app`).

### Option 2: Vercel

If you prefer Vercel:

1. Create an account on [Vercel](https://vercel.com)
2. Import your Git repository
3. Configure the project with these overrides:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Deploy

### Option 3: Static Hosting (GitHub Pages, Firebase, etc.)

For any static hosting service:

1. Build your project locally:
   ```bash
   npm run build
   ```
2. Take the contents of the `dist` folder and upload them to your chosen hosting service.

For GitHub Pages specifically:
- Create a repository
- Push the contents of your `dist` folder
- Enable GitHub Pages in the repository settings

### Option 4: Quick Deployment with Netlify Drop

For the fastest deployment with no account required:

1. Build locally:
   ```bash
   npm run build
   ```
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop your `dist` folder
4. Your site will be instantly published

## Post-Deployment

After deploying, make sure to check:

1. All buttons link correctly to `https://bit.ly/cleartone`
2. The countdown timer resets properly to 12 hours when it ends
3. All images are loading correctly
4. The page is responsive on various devices

## Troubleshooting Common Issues

### Issue: Images Not Loading

If images aren't appearing, check that the paths are correct. You may need to update the image paths in your components if your hosting provider requires different URL structures.

### Issue: Build Failures

If you encounter build failures:
1. Make sure all dependencies are installed (`npm install`)
2. Check for any TypeScript or ESLint errors
3. Try running the build with verbose logging: `npm run build -- --debug`

### Issue: Routing Problems

For single-page applications, some hosting providers require additional configuration to handle client-side routing. Add a `_redirects` file (Netlify) or similar configuration for your provider.