export interface Project {
    date: string;
    published: boolean;
    featured: boolean;
    slug: string;
    title: string;
    tags: string[];
    description: string;
    img: string;
    link: string;
    active: boolean;
    monetized: boolean;
}

export const projects = [
    {
        "date": "2024-06-01",
        "published": true,
        "featured": false,
        "slug": "webframe",
        "title": "LinkedIn Post Scheduler",
        "tags": ["SaaS", "MVP", "Flagship"],
        "description": "LinkedIn Post Scheduler SaaS that allows users to preview, ideate, and schedule posts on LinkedIn. This is my first full stack SaaS. ",
        "img": "",
        "link": "",
        "active": true,
        "monetized": false
    },
    {
        "date": "2024-06-01",
        "published": true,
        "featured": false,
        "slug": "webframe",
        "title": "Webframe",
        "tags": ["HTML", "JS", "CSS", "MV3"],
        "description": "Extension that outlines HTML elements without affecting the layout to inspect websites and debug CSS",
        "img": "/previews/webframe.png",
        "link": "https://github.com/maxontech/outline-html-elements",
        "active": true,
        "monetized": false
    },
    {
        "date": "2024-06-02",
        "published": false,
        "featured": true,
        "slug": "twitter-font-editor",
        "title": "Twitter (X) Font Editor",
        "tags": ["HTML", "JS", "CSS", "MV3"],
        "description": "Google Chrome Extension that Enables 𝗕𝗼𝗹𝗱, 𝐼𝑡𝑎𝑙𝑖𝑐, and U̲n̲d̲e̲r̲l̲i̲n̲e̲d̲ Fonts on Twitter X Posts by making use of Unicode characters",
        "img": "/previews/x-font-editor.png",
        "link": "https://github.com/maxontech/twitter-font-editor",
        "active": true,
        "monetized": false
    },
    {
        "date": "2024-06-03",
        "published": false,
        "featured": true,
        "slug": "click-to-copy",
        "title": "Click to Copy",
        "tags": ["HTML", "CSS", "JQuery", "MV3"],
        "description": "Google Chrome Extension that allows you to selectively Copy Text, Urls, and CSS with one Click",
        "img": "/previews/click-to-copy.png",
        "link": "https://github.com/maxontech/click-to-copy",
        "active": true,
        "monetized": false
    },
    {
        "date": "2024-06-04",
        "published": false,
        "featured": false,
        "slug": "gitpro",
        "title": "GitPro",
        "tags": ["HTML", "TailwindCSS", "JS", "GitHubActions"],
        "description": "Showcase website for unique and beautiful GitHub profiles that is fully automated using GitHub Actions",
        "img": "/previews/gitpro.png",
        "link": "https://maxontech.github.io/best-github-profile-readme/",
        "active": true,
        "monetized": false
    },
    {
        "date": "2024-06-05",
        "published": false,
        "featured": false,
        "slug": "linkedin-font-editor",
        "title": "LinkedIn Font Editor",
        "tags": ["HTML", "CSS", "JS", "JQuery"],
        "description": "Google Chrome Extension that Enables 𝗕𝗼𝗹𝗱, 𝐼𝑡𝑎𝑙𝑖𝑐, and U̲n̲d̲e̲r̲l̲i̲n̲e̲d̲ Fonts on LinkedIn Posts",
        "img": "/previews/linkedin-font-editor.png",
        "link": "https://maxontech.io/linkedin-font-editor",
        "active": true,
        "monetized": false
    },
    {
        "date": "2024-06-06",
        "published": false,
        "featured": false,
        "slug": "landinghero",
        "title": "LandingHero",
        "tags": ["React", "JSX", "Puppeteer"],
        "description": "Automated Website to Showcase Beautiful Landing Pages for Startups and Businesses",
        "img": "/previews/landinghero.png",
        "link": "https://landing-page-design-examples.vercel.app/",
        "active": true,
        "monetized": false
    },
    {
        "date": "2024-06-07",
        "published": false,
        "featured": false,
        "slug": "neft-flappy-bird",
        "title": "NEFT Flappy Bird",
        "tags": ["Python", "PyGame"],
        "description": "Neuroevolution with Fixed Topologies (NEFT) implemented in the Flappy Bird without using any Machine Learning Libraries",
        "img": "/previews/neft-flappy-bird.png",
        "link": "https://github.com/maxontech/neft-flappy-bird",
        "active": true,
        "monetized": false
    },
    {
        "date": "2024-06-08",
        "published": false,
        "featured": false,
        "slug": "drive-ai",
        "title": "Drive AI",
        "tags": ["Python", "PyGame"],
        "description": "Neuroevolution with Augmenting Topologies (NEFT) implemented in a Self-Driving Car Simulation",
        "img": "/previews/drive-ai.png",
        "link": "https://github.com/maxontech/DriveAI",
        "active": true,
        "monetized": false
    },
    {
        "date": "2024-06-09",
        "published": false,
        "featured": false,
        "slug": "neat-chrome-dinosaur",
        "title": "NEAT Chrome Dinosaur",
        "tags": ["Python", "PyGame"],
        "description": "Neuroevolution with Augmenting Topologies (NEAT) implemented in Chrome Dinosaur Game",
        "img": "/previews/neat-chrome-dinosaur.png",
        "link": "https://github.com/maxontech/neat-chrome-dinosaur",
        "active": true,
        "monetized": false
    },
    {
        "date": "2024-06-10",
        "published": false,
        "featured": false,
        "slug": "pathfinding-visualizer",
        "title": "Pathfinding Visualizer",
        "tags": ["Python", "PyGame"],
        "description": "Simple Pathfinding Visualizer using the BFS Algorithm",
        "img": "/previews/dijkstra-pathfinding.png",
        "link": "https://github.com/maxontech/breadth-first-search",
        "active": true,
        "monetized": false
    },
    {
        "date": "2024-06-11",
        "published": false,
        "featured": false,
        "slug": "programming-courses",
        "title": "Programming Courses",
        "tags": ["Diverse"],
        "description": "Programming tutorials to teach myself and others about Python, JavaScript, and more",
        "img": "/previews/programming-courses.png",
        "link": "https://www.youtube.com/@maxontech",
        "active": true,
        "monetized": false
    },
    {
        "date": "2024-06-12",
        "published": false,
        "featured": false,
        "slug": "space-game",
        "title": "Space Game",
        "tags": ["Unity", "Discontinued"],
        "description": "A nice game I made in Unity using C# to learn about game development",
        "img": "/previews/space-game.png",
        "link": "https://www.youtube.com/watch?v=9E7egB7CXJY",
        "active": true,
        "monetized": false
    },
    {
        "date": "2024-06-13",
        "published": false,
        "featured": false,
        "slug": "phd-thesis",
        "title": "Ph.D. Thesis",
        "tags": ["University"],
        "description": "Analysis of information acquisition and financial reporting in a setting where a manager attempts to meet analysts' expectations",
        "img": "/previews/phd-thesis.png",
        "link": "https://depositonce.tu-berlin.de/items/8c88bfbe-b338-42b7-a6fa-ab5093f59dc4",
        "active": true,
        "monetized": false
    }
]