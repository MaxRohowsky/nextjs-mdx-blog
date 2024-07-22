interface BlogItem {
  isPublished?: boolean;
  isFeatured?: boolean;
  publishedOn?: string;
  updatedOn?: string;
  slug: string;               // gets generated automatically
  title: string;
  subtitle?: string;
  tags: string[];
  excerpt?: string;
  externalLink?: string;
  seoTitle?: string;
  img?: string;
  featuredImage?: string;
}

interface BlogFilterOptions {
  isPublished?: boolean;
  isFeatured?: boolean;
  publishedOn?: string | { before?: string; after?: string }; // Same as updatedOn
  updatedOn?: string | { before?: string; after?: string }; // Allows filtering before or after specific dates
  slug?: string;
  title?: string;
  subtitle?: string;
  tags?: string[]; // Assuming filtering by any of the provided tags
  excerpt?: string;
  externalLink?: string;
  seoTitle?: string;
  img?: string;
  featuredImage?: string;
}


interface ProjectItem {
  isPublished?: boolean;
  isFeatured?: boolean;
  updatedOn?: string;
  publishedOn?: string;

  slug: string;
  title: string;
  subtitle?: string;
  tags: string[];
  excerpt?: string;
  externalLink?: string;
  seoTitle?: string;
  img?: string;
  featuredImage?: string;
}

interface ProjectFilterOptions {
  isPublished?: boolean;
  isFeatured?: boolean;
  updatedOn?: string | { before?: string; after?: string }; // Allows filtering before or after specific dates
  publishedOn?: string | { before?: string; after?: string }; // Same as updatedOn
  slug?: string;
  title?: string;
  subtitle?: string;
  tags?: string[]; // Assuming filtering by any of the provided tags
  excerpt?: string;
  externalLink?: string;
  seoTitle?: string;
  img?: string;
  featuredImage?: string;
}






