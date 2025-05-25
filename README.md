# ClearTone Landing Page

This is a high-converting landing page for the ClearTone acne-fighting routine ebook.

## Deployment Instructions for Vercel

### Prerequisites
- A Vercel account (sign up at [vercel.com](https://vercel.com) if you don't have one)
- Git installed on your computer
- The ClearTone project files

### Step 1: Prepare Your Project for Deployment

The project is already configured for Vercel deployment with:
- A `vercel.json` configuration file
- Client-side routing handled properly
- All static assets organized correctly

### Step 2: Deploy to Vercel

#### Option 1: Deploy from the Vercel Dashboard

1. Log in to your Vercel account
2. Click "Add New" > "Project"
3. Import your project from GitHub, GitLab, or Bitbucket
   - If your project is not in a Git repository yet, first push it to GitHub/GitLab/Bitbucket
4. Configure the project settings:
   - Framework Preset: Select "Vite"
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Click "Deploy"

#### Option 2: Deploy Using the Vercel CLI

1. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Navigate to your project directory and run:
   ```
   vercel
   ```

3. Follow the prompts to log in and configure your project.

4. After deployment, Vercel will provide you with a URL to access your landing page.

### Step 3: Configure Custom Domain (Optional)

1. From your Vercel dashboard, select your project
2. Go to "Settings" > "Domains"
3. Add your custom domain and follow the instructions to set up DNS records

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