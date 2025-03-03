import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Getting Started",
      items: ["intro", "installation", "best-practices"],
    },
    {
      type: "category",
      label: "Technical Documentation",
      items: ["architecture"],
    },
    {
      type: "category",
      label: "Projects",
      items: [
        "projects",
        "projects/proposal-template",
        {
          type: "category",
          label: "Project Ideas",
          items: [
            "projects/open-source-ai",
            "projects/self-hosted-whisper",
            "projects/multiple-recording",
            "projects/ui-setup",
            "projects/smart-navigation",
            "projects/live-transcription",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Community",
      items: ["contribute"],
    },
    {
      type: "category",
      label: "Support",
      items: ["faq"],
    },
  ],
};

export default sidebars;
