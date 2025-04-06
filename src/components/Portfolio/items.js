import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.png";
import IMG8 from "../../assets/portfolio8.png";

export default [
  {
    id: 3,
    image: IMG3,
    title: "AI Short Video Generator",
    github: "https://github.com/erixAlexander/ai-video-generator",
    demo: "https://your-ai-video-generator.netlify.app/dashboard",
    technologies: [
      "nextjs",
      "ai",
      "drizzle",
      "tailwind",
      "firebase",
      "clerk",
      "paypal",
    ],
    desc: `An AI-powered short video generation platform built with modern web technologies. This project allows users to generate short videos using AI-driven scripts and imagery, providing a seamless and intuitive experience.

      Tech Stack: Next.js, Clerk (authentication), Drizzle & Neon (database), Tailwind CSS (styling), Firebase (storage), and Remotion (video rendering).
      AI & Automation: Google Generative AI for script generation and Replicate for AI-generated images.
    Payments & Monetization: Integrated with PayPal API for secure transactions.
    This project showcases my ability to integrate multiple cutting-edge tools to build a fully automated and interactive web application. `,
  },
  {
    id: 5,
    image: IMG5,
    title: "PetMatch - Web App",
    github: "https://github.com/erixAlexander/petMatchFrontend",
    demo: "https://mypetmatch.netlify.app/",
    technologies: ["react", "html", "css", "js", "node", "express", "mongodb"],
    desc: `A fun and engaging social media platform designed for pet lovers to share and connect. Users can create accounts, upload pictures of their pets, like and comment on posts, and interact with a community of fellow pet enthusiasts.

    Tech Stack: React (front-end), Node.js, Express.js, and MongoDB (backend).
    Features: User authentication, image uploads, likes, and comments.
    Responsive Design: Fully optimized for all screen sizes.
    Deployment: Hosted on Netlify (front-end) and Heroku (backend) for seamless performance.
    This project highlights my ability to build full-stack applications with a strong focus on user interaction and responsiveness.`,
  },
  {
    id: 7,
    image: IMG7,
    title: "Memories Blog",
    github: "https://github.com/erixAlexander/Memories-Frontend",
    demo: "https://steady-pithivier-5b7bef.netlify.app/",
    technologies: ["react", "html", "css", "js", "node", "express", "mongodb"],
    desc: `A dynamic and responsive blog platform where users can create accounts, write posts, and upload images to share their thoughts and ideas.

    Tech Stack: React (front-end), Node.js & Express.js (backend), and MongoDB (database).
    Features: User authentication, post creation, image uploads, and a fully responsive design.
    Deployment: Hosted on Netlify (front-end) with a robust backend running on Node.js and Express.js.
    This project showcases my ability to develop full-stack applications with a focus on usability, responsiveness, and seamless content management.`,
  },
  {
    id: 6,
    image: IMG6,
    title: "Dark Mode",
    github: "https://github.com/erixAlexander/Dark-Mode",
    demo: "https://main--splendid-tulumba-331c78.netlify.app/",
    technologies: ["react", "html", "css", "js"],
    desc: `A simple yet effective project demonstrating the use of the React Context API to manage theme switching between light and dark modes.

    Tech Stack: React (front-end) with Context API for state management.
    Features: Smooth dark/light mode toggle and a fully responsive design.
    Deployment: Hosted on Netlify for easy access.
    This project highlights my ability to work with React's Context API and implement global state management in a clean and efficient way. `,
  },
  {
    id: 8,
    image: IMG8,
    title: "PetMatch - Mobile App",
    github: "https://github.com/erixAlexander/petMatchNative",
    demo: "https://superb-salmiakki-b22c71.netlify.app/",
    technologies: ["react", "html", "css", "js", "node", "express", "mongodb"],
    desc: "This is a mobile app built with React Native. The app is a social media for pets, where users can create an account, upload pictures of their pets, like and comment on other users' posts. The app is fully responsive. The app is deployed on Expo. The backend is built with Node.js and Express.js. It also uses MongoDB to store the data.",
  },
  {
    id: 1,
    image: IMG1,
    title: "Search Hacker News",
    github: "https://github.com/erixAlexander/news-search.git",
    demo: "https://main--tiny-donut-9110d0.netlify.app/",
    technologies: ["react", "html", "css", "js"],
    desc: `A fast and responsive search engine for Hacker News, showcasing efficient data fetching, filtering, and pagination.

    Tech Stack: React (front-end) with API integration.
    Features: Search functionality, filtering, pagination, and a fully responsive design.
    Deployment: Hosted on Netlify for seamless performance.
    This project highlights my ability to work with APIs, manage dynamic data, and implement key features like filtering and pagination in a React application.`,
  },
  {
    id: 2,
    image: IMG2,
    title: "Cart App - Component",
    github: "https://github.com/erixAlexander/Cart",
    demo: "https://main--idyllic-pie-9bb413.netlify.app/",
    technologies: ["react", "html", "css", "js"],
    desc: `A simple yet reusable shopping cart component demonstrating the use of React Context API for state management and React Router for navigation.

    Tech Stack: React (front-end) with Context API and React Router.
    Features: Add/remove items, manage cart state globally, and seamless navigation.
    Reusable Component: Designed for easy integration into larger projects.
    Deployment: Hosted on Netlify with a fully responsive design.
    This project showcases my ability to manage global state efficiently and implement reusable components in React.`,
  },
  {
    id: 4,
    image: IMG4,
    title: "SearchBar",
    github: "https://github.com/erixAlexander/cocktails",
    demo: "https://candid-salmiakki-4a9a75.netlify.app/",
    technologies: ["react", "html", "css", "js"],
    desc: `A sleek and responsive cocktail search engine showcasing the use of React Router for navigation and reusable components for efficient UI development.

    Tech Stack: React (front-end) with React Router for seamless navigation.
    Features: Search functionality, dynamic cocktail details, and a fully responsive design.
    Reusable Component: Designed for easy integration into other projects.
    Deployment: Hosted on Netlify for smooth performance.
    This project highlights my ability to work with APIs, implement React Router, and build reusable components for scalable applications.`,
  },
];
