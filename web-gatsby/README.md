# 👤 Vincent Emonet personal website

[![Deploy to GitHub Pages](https://github.com/vemonet/vemonet.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/vemonet/vemonet.github.io/actions/workflows/deploy.yml)

Deployed at **https://vemonet.github.io**

## 🔧 Development

Personal website built with [Gatsby](https://www.gatsbyjs.com/), [TypeScript](https://www.typescriptlang.org/) and [Material UI](https://mui.com/core).

Install dependencies:

```bash
yarn
```

Start in development:

```bash
yarn dev
```

The site is now running at http://localhost:8000

Note: there is also another access: http://localhost:8000/___graphql. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

Build and serve (no hot reload, but deployment similar to prod)

```bash
yarn serve
```

## 📦️ Build

Build in the `public` folder:

```bash
yarn build
```

> All the commands are in the `package.json` > `scripts`.

## 🥷 Use it for your own resume

You can easily reuse this project to build your own minimalist resume website:

1. Fork the repository
2. Edit your name and website metadata in `gatsby-config.js`. Change the `path` if your website  is not published at the root URL (e.g. *username.github.io/my-repo* instead of *username.github.io/my-repo*)
3. Edit the content of the website in `src/content.tsx`
4. Checkout in `src/pages/index.tsx` to change a few remaining links (e.g. publications buttons)

## 🔗 Links

Examples:

* https://leerob.io
* https://dev.to/asheeshh/i-made-a-full-stack-portfolio-site-using-nextjs-and-tailwind-366d

Gatsby website built using https://github.com/Lindeneg/gatsby-material-typescript-starter

CV template: https://freehtml5.co/preview/?item=profile-free-html5-bootstrap-template-for-personal-and-vcard,-resume-websites

Convert image to 300kb (required for WhatsApp thumbnails): https://www.imgonline.com.ua/eng/compress-image-size-result.php

Doing the CV in RDF: http://rdfs.org/resume-rdf/

Or just generating FOAF: http://www.ldodds.com/foaf/foaf-a-matic