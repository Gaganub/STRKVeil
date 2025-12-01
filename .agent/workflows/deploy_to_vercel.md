---
description: How to deploy the Next.js application to Vercel
---

# Deploying to Vercel

Follow these steps to deploy your Next.js application to Vercel.

## Prerequisites
- A [GitHub](https://github.com/) account.
- A [Vercel](https://vercel.com/) account.
- Git installed locally.

## Step 1: Push your code to GitHub

1.  Initialize a git repository if you haven't already:
    ```bash
    git init
    ```
2.  Add your files:
    ```bash
    git add .
    ```
3.  Commit your changes:
    ```bash
    git commit -m "Initial commit"
    ```
4.  Create a new repository on GitHub (do not initialize with README/gitignore).
5.  Link your local repository to GitHub (replace `YOUR_USERNAME` and `REPO_NAME`):
    ```bash
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
    git push -u origin main
    ```

## Step 2: Deploy on Vercel

1.  Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your GitHub repository:
    -   Click **"Continue with GitHub"** if prompted.
    -   Find your `dex-frontend` (or whatever you named it) repository and click **"Import"**.
4.  Configure the project:
    -   **Framework Preset**: Next.js (should be auto-detected).
    -   **Root Directory**: `dex-frontend` (Important! Since your Next.js app is in a subdirectory).
        -   Click "Edit" next to Root Directory.
        -   Select `dex-frontend`.
    -   **Environment Variables**: Add any if needed (none for this frontend-only version yet).
5.  Click **"Deploy"**.

## Step 3: Verify

1.  Wait for the build to complete.
2.  Once finished, Vercel will provide a URL (e.g., `https://your-project.vercel.app`).
3.  Click the screenshot to visit your live site!
