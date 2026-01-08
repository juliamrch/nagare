// src/data/projectsData.ts

export interface ServiceDataItem {
  title: string;
  price?: string;
  //githubUrl?: string;
  githubRepos?: { title?: string; url: string }[];
  projectUrl?: string;
  keyWords?: string[];
  imageSrc?: string;
  imageAlt?: string;
  thumbnailSrc?: string; // Optional: Path to a square thumbnail image
  description: string; // HTML string
  homepageSummary?: string; // Concise summary for homepage
  isFeatured?: boolean; // Flag for featuring on homepage
}

// Example data (replace with your actual data later)
export const allServicesData: ServiceDataItem[] = [
  {
    title: "Friction Journal Audit",
    price: "From $1999",
    //githubUrl: "",
    projectUrl: "/services/friction-journal",
    keyWords: ["User Research", "Testing"],
    imageSrc: "/images/services/audit.png",
    imageAlt: "Screenshot of the portfolio website homepage",
    description: `
        <p>Audit existing docs with a detailed friction journal containing:</p>
        <ul>
          <li>Where you're losing users and revenue.</li>
          <li>Root causes of friction.</li>
          <li>Immediately actionable recommendations.</li>
        </ul>
        

      `,
    isFeatured: true,
    homepageSummary:
      "Coming soon.",
  },

  {
    title: "Docs Upgrade Package",
    price: "From $1500/month",
    //githubUrl: "",
    projectUrl: "/services/docs-upgrade-package",
    keyWords: ["Technical Writing", "Instructional Design"],
    imageSrc: "/images/services/package.png",
    imageAlt: "Screenshot of the portfolio website homepage",
    description: `
        <p>Bring your docs to the next level with this monthly subscription including:</p>
        <ul>
          <li>Continuous documentation audit.</li>
          <li>Monthly documentation updates and improvements.</li>
          <li>User research and testing.</li>
        </ul>
        
        <h4>Perks:</h4>
         <ul>
          <li>Cancel anytime.</li>
          <li><strong>Open-source project?</strong> Get 50% off.</li>
        </ul>

      `,
    isFeatured: true,
    homepageSummary:
      "Coming soon.",
  },


  // Add more projects here
];
