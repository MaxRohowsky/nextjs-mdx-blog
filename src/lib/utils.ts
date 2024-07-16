
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { BlogFrontMatter } from '@/lib/server-actions';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}





export function sortItemsByDate(items: BlogFrontMatter[], ascending: boolean = false) {
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