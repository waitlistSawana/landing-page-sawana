This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 配置内容

- 容器 `./src/components/wrapper`

- tailwindcss cn 组合器 `./src/lib/utils.ts`

- 百度统计 `src\app\BaiDuAnalytics.tsx` https://tongji.baidu.com/

- 谷歌统计 `gtag.js` `src\app\GoogleAnalytics.tsx` https://analytics.google.com/analytics/web

- shadcn/ui 启动 `npx shadcn-ui@latest init`

- shadcn/ui 安装 已经在`./src/components/ui` 下 更多请查看shadcn官网

- lucide react icon `npm install lucide-react`

## 下载命令

启动项目

- `npm i`

安装依赖 / 包

- `npm install clsx tailwind-merge`

本地运行

- `npm run dev`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
