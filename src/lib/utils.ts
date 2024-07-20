
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
/* import { BlogFrontMatter } from '@/lib/server-actions'; */
import { projects } from '@/content/projects';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




/**
 * Sorts an array of blogs by date.
 * @param items The array of blogs to be sorted.
 * @param ascending Determines whether the items should be sorted in ascending order. Default is false (descending order).
 * @returns The sorted array of items.
 */
export function sortBlogsByDate(items: BlogFrontMatter[], ascending: boolean = false) {
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
export function getFilteredProjects(options: ProjectOptions = {}): Project[] {
  const allProjects = projects.map(project => ({
    ...project,
    // Convert the date string to the desired format
    date: (() => {
      const date = new Date(project.date);
      const day = date.getDate(); // "1"
      const monthAndYear = date.toLocaleDateString('en-US', {
        year: 'numeric', // "2024"
        month: 'short', // "December"
      });
      return `${day} ${monthAndYear}`; // "1. December 2024"
    })(),
  }));

  const filteredProjects = allProjects.filter((project) => {
    if (options.published !== undefined && options.published !== project.published) {
      return false;
    }
    if (options.featured !== undefined && options.featured !== project.featured) {
      return false;
    }
    if (options.active !== undefined && options.active !== project.active) {
      return false;
    }
    if (options.monetized !== undefined && options.monetized !== project.monetized) {
      return false;
    }
    if (options.tags !== undefined && !options.tags.every(tag => project.tags.includes(tag))) {
      return false;
    }

    return true;
  });

  return filteredProjects;
}



/**
 * Get all unique tags used in the projects in an array.
 * @returns An array of all unique tags used in the projects.
 */
export function getProjectTags(): Array<string> {
  const allTags = projects.flatMap(project => project.tags);
  return Array.from(new Set(allTags));
}




export function getBlogTags(frontMatter: BlogFrontMatter[]): Array<string> {
  const allTags = frontMatter.flatMap(blog => blog.tags);
  return Array.from(new Set(allTags));
}




