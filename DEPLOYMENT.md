# Deployment Guide - GitHub Pages

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `ursu-vet` (or any name you prefer)
4. Description: "Veterinary clinic website"
5. Choose **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

## Step 2: Connect and Push to GitHub

After creating the repository, run these commands (replace `YOUR_USERNAME` with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/ursu-vet.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **"GitHub Actions"**
5. The site will automatically deploy when you push to the `main` branch

## Step 4: Access Your Site

After the GitHub Action completes (check the **Actions** tab):
- Your site will be available at: `https://YOUR_USERNAME.github.io/ursu-vet/`
- It may take a few minutes for the first deployment

## Automatic Updates

- Every time you push to the `main` branch, GitHub Actions will automatically rebuild and deploy your site
- You can check deployment status in the **Actions** tab

## Notes

- The repository must be **Public** for free GitHub Pages hosting
- If you want a custom domain, you can add it in the Pages settings
- The site is built as static HTML, so all Next.js features work except server-side features

