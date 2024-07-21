
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { projects } from '@/app/(default)/projects/_remote/projects';


export const pathToBlogPosts = 'src/app/(default)/blog/_posts';
export const pathToRemoteProjects = 'src/app/(default)/projects/_remote/projects';
export const pathToLocalProjects = 'src/app/(default)/projects/local/projects';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



/**
 * Get all unique tags used in the projects in an array.
 * @returns An array of all unique tags used in the projects.
 */
export function getProjectTags(): Array<string> {
  const allTags = projects.flatMap(project => project.tags);
  return Array.from(new Set(allTags));
}



/**
 * Get all unique tags used in blog posts in an array.
 * @returns An array of all unique tags used in blog posts.
 */
export function getAllBlogTags(blogItems: BlogItem[]): Array<string> {
  const allTags = blogItems.flatMap(blog => blog.tags);
  return Array.from(new Set(allTags));
}



/**
 * Retrieves a blog item from the given array based on the provided slug.
 * @param items - The array of blog items to search through.
 * @param slug - The slug of the blog item to retrieve.
 * @returns The blog item with the matching slug, or undefined if not found.
 */
export function getBlogbySlug(items: BlogItem[], slug: string): BlogItem | undefined {
  return items.find(item => item.slug === slug);
}


/**
 * Sorts an array of blogs by date.
 * @param items The array of blogs to be sorted.
 * @param ascending Determines whether the items should be sorted in ascending order. Default is false (descending order).
 * @returns The sorted array of items.
 */
export function sortBlogsByDate(items: BlogItem[], ascending: boolean = false): BlogItem[] {
  // Filter out entries with invalid dates and log mistakes
  const validItems = items.filter(item => {
    const isValidDate = !isNaN(new Date(item.publishedOn).getTime());
    if (!isValidDate) {
      console.log(`Invalid date for item: ${JSON.stringify(item)}`);
    }
    return isValidDate;
  });

  // Sort the remaining valid entries
  return validItems.sort((a, b) => {
    const aTime = new Date(a.publishedOn).getTime();
    const bTime = new Date(b.publishedOn).getTime();

    const comparison = aTime - bTime;
    return ascending ? comparison : -comparison;
  });
}




/**
 * Get filtered projects based on the provided filtering options. Be aware that if you want to get all projects
 * don't pass an empty array as the tags option. Instead, pass undefined.
 * @param options The filter options e.g., { published: true, featured: true, active: true, monetized: false, tags: ['tag1', 'tag2'] }.
 * @returns The filtered projects as an array.
 */
export function getFilteredProjects(options: ProjectFilterOptions = {}): ProjectItem[] {
  const allProjects = projects.map(project => ({
    ...project,
    // Convert the date string to the desired format
    date: (() => {
      const date = new Date(project.publishedOn);
      const day = date.getDate(); // "1"
      const monthAndYear = date.toLocaleDateString('en-US', {
        year: 'numeric', // "2024"
        month: 'short', // "December"
      });
      return `${day} ${monthAndYear}`; // "1. December 2024"
    })(),
  }));

  const filteredProjects = allProjects.filter((project) => {
    if (options.isPublished !== undefined && options.isPublished !== project.isPublished) {
      return false;
    }
    if (options.isFeatured !== undefined && options.isFeatured !== project.isFeatured) {
      return false;
    }
    if (options.tags !== undefined && !options.tags.every(tag => project.tags.includes(tag))) {
      return false;
    }

    return true;
  });

  return filteredProjects;
}



