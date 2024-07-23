import { Eye } from "lucide-react";


interface ViewCounterProps {
    slug: string;
    allViews: {
        slug: string;
        views: number;
    }[];
}

/**
 * ViewCounter displays the number of views for a given slug.
 * 
 * @param {ViewCounterProps} props The props object containing:
 * - slug: A string representing the unique identifier for the content.
 * - allViews: An array of objects where each object contains the slug and its corresponding views count.
 */
export default function ViewCounter({ slug, allViews }: ViewCounterProps) {

    let viewsForSlug = allViews && allViews.find((view) => view.slug === slug);
    let number = new Number(viewsForSlug?.views || 0);

    return (
        <p className="text-neutral-600 dark:text-neutral-400 mt-6 flex items-center">
            <Eye className="w-4 h-4 inline-block mr-1" />
            {`${number.toLocaleString()} views`}
        </p>
    );
}