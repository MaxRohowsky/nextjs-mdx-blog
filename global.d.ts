interface FrontMatter {
  isPublished: boolean;
  isPopular?: boolean;
  publishedOn: string;
  updatedOn?: string;
  slug: string;               // gets generated automatically
  title: string;
  subtitle?: string;
  tags?: string[];
  excerpt?: string;
  externalLink?: string;
  image?: string;
}


interface BlogPost {
  frontMatter: FrontMatter;
  content: string;
}


interface Filter {
  isPublished?: boolean;
  publishedOn?: string | { before?: string; after?: string }; // Same as updatedOn
  tags?: string[]; // Assuming filtering by any of the provided tags
}


interface ProjectItem {
  isPublished?: boolean;
  isFeatured?: boolean;
  publishedOn?: string;
  updatedOn?: string;
  slug: string;
  title: string;
  subtitle?: string;
  tags: string[];
  excerpt?: string;
  externalLink?: string;
  img?: string;
}





