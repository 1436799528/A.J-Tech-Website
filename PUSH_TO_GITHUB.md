
# How to Push Your Project to GitHub

Follow these steps in your terminal to get your project code into a GitHub repository.

## Prerequisites

1.  **Git Installed:** Make sure you have Git installed on your computer.
2.  **GitHub Account:** You need a free GitHub account.
3.  **A New GitHub Repository:** Create a new, empty repository on GitHub.com. When you create it, **do not** initialize it with a README, .gitignore, or license, as your project already has these. After creating it, GitHub will show you a URL for your repository. It will look something like `https://github.com/your-username/your-repository-name.git`.

---

## Step-by-Step Instructions

Follow these commands in your project's root directory.

### 1. Initialize a Git Repository

This command creates a new Git repository in your project folder.

```bash
git init -b main
```

### 2. Add Your Files to Staging

This command stages all the files in your project, preparing them for the first commit.

```bash
git add .
```

### 3. Commit Your Files

This command saves your staged files into the repository's history.

```bash
git commit -m "Initial commit of my AJ Tech Solutions website"
```

### 4. Connect to Your GitHub Repository

This command links your local repository to the empty one you created on GitHub. **Replace the URL with your own repository's URL.**

```bash
git remote add origin https://github.com/your-username/your-repository-name.git
```

### 5. Push Your Code to GitHub

This command uploads your committed files to your GitHub repository.

```bash
git push -u origin main
```

---

And that's it! Your project code will now be safely stored on GitHub. You can refresh your repository page on GitHub.com to see all your files.
