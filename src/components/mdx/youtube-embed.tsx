//components/mdx/YouTube.tsx https://gaudion.dev/blog/mdx-youtube-embed
export default function YouTube ({ id } : { id : string }){
    return (
      <div>
        <iframe
          className="aspect-video w-full"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    );
  };