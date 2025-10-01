// .vitepress/env.d.ts
declare module "*.css" {
  const content: string;
  export default content;
}

declare module "lite-youtube-embed/src/lite-yt-embed.css";
declare module "lite-youtube-embed/src/lite-yt-embed.js";

declare module "lite-youtube-embed";
declare module "lite-youtube-embed/*";
