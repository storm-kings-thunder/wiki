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
    pageTitleSuffix: " — SKT Wiki",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "wiki-77o.pages.dev",
    ignorePatterns: [".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Cinzel",
        body: "Crimson Pro",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#f2f5f8",
          lightgray: "#dbe3ec",
          gray: "#8fa3b8",
          darkgray: "#2e3d4f",
          dark: "#162030",
          secondary: "#2a6ea6",
          tertiary: "#3a8a6e",
          highlight: "rgba(42, 110, 166, 0.12)",
          textHighlight: "#d4a01788",
        },
        darkMode: {
          light: "#141c24",
          lightgray: "#263042",
          gray: "#4a5c72",
          darkgray: "#c8d4e0",
          dark: "#e8eef4",
          secondary: "#7eb8d4",
          tertiary: "#a3c9a8",
          highlight: "rgba(90, 140, 170, 0.18)",
          textHighlight: "#c8960088",
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
