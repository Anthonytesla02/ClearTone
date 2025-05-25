# ClearTone Landing Page

This is a high-converting landing page for the ClearTone acne-fighting routine ebook.

## Deployment Instructions 

### Option 1: Deploy to Netlify (Recommended for Full Project)

1. Create an account on [Netlify](https://netlify.com) if you don't have one
2. From the Netlify dashboard, click "Add new site" > "Import an existing project"
3. Connect your GitHub/GitLab account and select your repository
4. Configure your build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Option 2: Use GitHub Pages

1. Run the build process locally:
   ```
   npm run build
   ```
2. The compiled assets will be in the `dist` folder
3. Create a new repository on GitHub
4. Push the contents of the `dist` folder to this repository
5. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select "main" branch and the root folder
   - Click "Save"

### Option 3: Deploy Using Netlify Drop

If you want the simplest possible deployment:

1. Run the build locally:
   ```
   npm run build
   ```
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop your `dist` folder
4. Your site will be instantly published with a Netlify subdomain

### Configure Custom Domain (Optional)

1. From your hosting dashboard, go to domain settings
2. Add your custom domain
3. Follow provider-specific instructions to set up DNS records

## Making Changes After Deployment

### Updating Content

1. Edit the source files in your project
2. If using Git, commit and push your changes
3. Vercel will automatically redeploy your site

### Changing Images

To update images on the landing page:

1. Add your new images to the `attached_assets` folder
2. Update the image imports in the component files:
   - Main ebook cover: Update in `HeroSection.tsx` and `PricingSection.tsx`
   - Multi-device image: Update in `MultiDeviceSection.tsx`
   - Before/after images: Update URLs in `BeforeAfterSection.tsx`

### Updating Checkout URL

Currently, all CTAs point to: `https://bit.ly/cleartone`

To change this:
1. Search for this URL in the project files
2. Replace with your new checkout URL in all component files

## Important Notes

- The countdown timer resets to 12 hours when it ends
- The page is fully responsive and works on all device sizes
- All buttons are configured to open the checkout URL in a new tab