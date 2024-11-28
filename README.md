# Llama + Home Assistant: Your local smart home assistant

A modern blog website built with Next.js, TypeScript, and Markdown, featuring a clean design and responsive layout.

![Blog Website sample](./public/assets/blog_website.png)

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for production
- TypeScript - For type-safe code
- Markdown - For content management
- [Tailwind CSS](https://tailwindcss.com) - For styling
- [`remark`](https://github.com/remarkjs/remark) - For Markdown processing
- [`gray-matter`](https://github.com/jonschlinkert/gray-matter) - For parsing Markdown metadata

## Features

- Static Generation with Next.js
- Markdown-based blog posts
- Responsive design
- SEO optimized
- Type-safe development with TypeScript
- Clean and minimal UI

## Local Development

```bash
# Clone the repository
git clone https://github.com/miguelg719/blog-website.git

# Install dependencies
npm install

# Start development server
npm run dev
```

Your blog will be running at [http://localhost:3000](http://localhost:3000)

## Blog Posts

Blog posts are stored in the `/_posts` directory as Markdown files. Each post includes front matter for metadata and Markdown content for the body.

### Post Format
```markdown
---
title: 'Post Title'
excerpt: 'Post excerpt'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2024-03-16T05:35:07.322Z'
author:
  name: Your Name
  picture: '/assets/blog/authors/profile.jpg'
ogImage:
  url: '/assets/blog/preview/cover.jpg'
---

Post content goes here...
```

## Deployment

### Vercel Deployment
This site can be deployed on [Vercel](https://vercel.com) with zero configuration:
1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will detect Next.js and deploy automatically

### GitHub Pages Deployment
To deploy on GitHub Pages:

1. First, update `next.config.js`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static exports
  basePath: '/blog-website', // Replace with your repository name
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

2. Add the build and deploy script to `package.json`:
```json
{
  "scripts": {
    "deploy": "next build && touch out/.nojekyll && gh-pages -d out"
  }
}
```

3. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

4. Deploy to GitHub Pages:
```bash
npm run deploy
```

5. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select 'gh-pages' branch as the source
   - Save the changes

Your blog will be available at `https://yourusername.github.io/blog-website`

## License

[MIT License](LICENSE)
