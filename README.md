# ClearTone Landing Page

This is a high-converting landing page for the ClearTone acne-fighting routine ebook.

## Deployment Instructions for Vercel

### Option 1: Easy Deployment (Recommended)

1. **Extract the client folder**: Download only the `client` folder from this project
2. **Create a new repository**: Create a new GitHub repository with just the client folder contents
3. **Connect to Vercel**:
   - Log in to [Vercel](https://vercel.com)
   - Click "Add New" > "Project"
   - Import your GitHub repository
   - Configure as follows:
     - Framework: "Vite"
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"

### Option 2: Using the Full Project Structure

1. **Download the project**: Get the complete project code
2. **Deploy with these settings**:
   - Root Directory: `client`
   - Build Command: `npm install && npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Option 3: Use a Static Hosting Service

If you're experiencing issues with Vercel, you can:
1. Run the build locally:
   ```
   cd client
   npm install
   npm run build
   ```
2. Upload the generated `dist` folder to any static hosting service:
   - Netlify Drop
   - GitHub Pages
   - Firebase Hosting
   - Amazon S3

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