// src/data/projectsData.ts

export interface ProjectDataItem {
  title: string;
  timeframe?: string;
  githubUrl?: string;
  githubRepos?: { title?: string; url: string }[];
  projectUrl?: string;
  techStack?: string[];
  imageSrc?: string;
  imageAlt?: string;
  thumbnailSrc?: string; // Optional: Path to a square thumbnail image
  description: string; // HTML string
  homepageSummary?: string; // Concise summary for homepage
  isFeatured?: boolean; // Flag for featuring on homepage
}

// Example data (replace with your actual data later)
export const allProjectsData: ProjectDataItem[] = [
  {
    title: "Coming soon",
    timeframe: "Q4 2023",
    githubUrl: "",
    projectUrl: "",
    techStack: ["Hugo", "GitHub Actions"],
    imageSrc: "/images/projects/nagare.png",
    imageAlt: "Screenshot of the portfolio website homepage",
    description: `
        <p>Coming soon.</p>

      `,
    isFeatured: true,
    homepageSummary:
      "Coming soon",
  },

  // Add more projects here
];
