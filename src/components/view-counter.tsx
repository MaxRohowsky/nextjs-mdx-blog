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
        <>
            {`${number.toLocaleString()}`}
        </>
    );
}