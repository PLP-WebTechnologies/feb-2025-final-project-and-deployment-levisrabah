// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with React",
        date: "2023-02-15",
        excerpt: "Learn the fundamentals of React and how to build your first component.",
        content: "Full content about React...",
        image: "https://source.unsplash.com/random/600x400/?react",
        tags: ["react", "javascript", "frontend"]
    },
    {
        id: 2,
        title: "CSS Grid Layout Guide",
        date: "2025-01-10",
        excerpt: "Master CSS Grid with this comprehensive guide to modern layouts.",
        content: "Full content about CSS Grid...",
        image: "https://source.unsplash.com/random/600x400/?css",
        tags: ["css", "web design", "layout"]
    },
    // Add more posts...
];

// Generate more sample posts if needed
for (let i = 3; i <= 12; i++) {
    blogPosts.push({
        id: i,
        title: `Advanced Topic ${i}`,
        date: `2025-${11-Math.floor(i/4)}-${i%28+1}`,
        excerpt: `This is a sample excerpt for post ${i}.`,
        content: `Full content for post ${i}...`,
        image: `https://source.unsplash.com/random/600x400/?tech${i}`,
        tags: ["tag1", "tag2", "tag3"]
    });
}

export default blogPosts;