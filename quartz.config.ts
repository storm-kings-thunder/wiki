import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Storm King's Thunder",
    pageTitleSuffix: " — Campaign Wiki",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    // Update this to your Cloudflare Pages URL once Cloudflare is set up
    baseUrl: "storm-kings-thunder.pages.dev",
    ignorePatterns: [".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Cinzel",
        body: "Crimson Text",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f5f0",
          lightgray: "#e8e2d8",
          gray: "#9a8e7e",
          darkgray: "#4a3f32",
          dark: "#2a1f14",
          secondary: "#8b4513",
          tertiary: "#6b3410",
          highlight: "rgba(139, 69, 19, 0.1)",
          textHighlight: "#8b451344",
        },
        darkMode: {
          light: "#1a1a2e",
          lightgray: "#2d2d44",
          gray: "#6b6b8a",
          darkgray: "#c8c8d8",
          dark: "#e8e8f0",
          secondary: "#c9a84c",
          tertiary: "#a07c28",
          highlight: "rgba(201, 168, 76, 0.1)",
          textHighlight: "#c9a84c44",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
