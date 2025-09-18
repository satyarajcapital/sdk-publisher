# SDK Publish Test

A simple test package for testing GitHub Packages publication and distribution.

## What's This?

This is a minimal npm package designed specifically for testing GitHub Packages. It includes:

- Simple utility functions (greet, add, getVersion, generateId)
- Proper GitHub Packages configuration
- Publishing setup and instructions

## Setup Instructions

Before publishing, you need to make a few changes:

### 1. Update package.json

Replace `your-username` in the following fields with your actual GitHub username:
- `name`: `@your-username/sdk-publish-test`
- `repository.url`: Update the GitHub URL
- `bugs.url`: Update the GitHub URL  
- `homepage`: Update the GitHub URL

### 2. Update .npmrc

Replace `your-username` in `.npmrc` with your actual GitHub username:
```
@your-username:registry=https://npm.pkg.github.com
```

### 3. Create a GitHub Personal Access Token

1. Go to GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Create a new token with these scopes:
   - `write:packages` (to publish packages)
   - `read:packages` (to download packages)
   - `delete:packages` (optional, to delete packages)

### 4. Set Up Authentication

Export your GitHub token as an environment variable:
```bash
export GITHUB_TOKEN=your_token_here
```

Or add it to your shell profile (`.bashrc`, `.zshrc`, etc.):
```bash
echo 'export GITHUB_TOKEN=your_token_here' >> ~/.zshrc
source ~/.zshrc
```

## Publishing to GitHub Packages

Once you've completed the setup:

1. **Commit and push your changes:**
   ```bash
   git add .
   git commit -m "Initial package setup"
   git push origin main
   ```

2. **Publish the package:**
   ```bash
   npm publish
   ```

## Using the Package

After publishing, others can install your package:

```bash
# First, configure npm to use GitHub Packages for your scope
echo "@your-username:registry=https://npm.pkg.github.com" >> ~/.npmrc

# Install the package
npm install @your-username/sdk-publish-test
```

## Example Usage

```javascript
const { greet, add, getVersion, generateId } = require('@your-username/sdk-publish-test');

console.log(greet('Developer')); // "Hello, Developer! This is a test package from GitHub Packages."
console.log(add(2, 3)); // 5
console.log(getVersion()); // "1.0.0"
console.log(generateId()); // Random ID like "x7k9m2n8a"
```

## Troubleshooting

### Common Issues

1. **Authentication errors**: Make sure your `GITHUB_TOKEN` is set and has the correct permissions
2. **Scope issues**: Ensure the package name starts with `@your-username/`
3. **Registry configuration**: Check that `.npmrc` is properly configured

### Useful Commands

- Check if you're authenticated: `npm whoami --registry=https://npm.pkg.github.com`
- View package info: `npm view @your-username/sdk-publish-test --registry=https://npm.pkg.github.com`
- List your published packages: Visit `https://github.com/your-username?tab=packages`

## Next Steps

This is a basic setup. You can extend it by:
- Adding TypeScript definitions
- Including automated tests
- Setting up GitHub Actions for automatic publishing
- Adding more sophisticated functionality
- Creating multiple packages in a monorepo

Happy testing with GitHub Packages! 🚀
