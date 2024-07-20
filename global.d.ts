interface BlogItem {
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






