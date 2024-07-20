interface Item {

  title: string;
  subtitle: string;
  slug: string;
  tags: string[];
  excerpt?: string;
  seoTitle?: string;

  publicationStatus: {
    isPublished?: boolean;
    isFeatured?: boolean;
    updatedOn?: string;
    publishedOn?: string;
  };
  media: {
    img?: string;
    link?: string;
    featuredImage?: string;
  };
}






// Base Item Type
interface BaseItem {
  title: string;
  subtitle: string;
  slug: string;
  tags: string[];
  featured?: boolean;
}

// Blog Front Matter Type
interface BlogFrontMatter extends BaseItem {
  seoTitle: string;
  abstract: string;
  isPublished: boolean;
  publishedOn?: string;
  layout: string;
  featuredImage?: string;
}

// Project Type
interface Project extends BaseItem {
  date: string;
  published: boolean;
  description: string;
  img: string;
  link: string;
  active: boolean;
  monetized: boolean;
}

interface FrontMatterOptions {
  featured?: boolean;
  tag?: Array<string>;
  layout?: string;
  isPublished?: boolean;
}

interface ProjectOptions {
  published?: boolean;
  featured?: boolean;
  active?: boolean;
  monetized?: boolean;
  tags?: Array<string>;
}
