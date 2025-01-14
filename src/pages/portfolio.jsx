import Project from '../components/Project';

function Portfolio() {
  // Project data array organized by module number (11 to 19)
  const projects = [
    {
      title: "Note Taker",
      image: "/images/note-taker.jpg",
      githubLink: "https://github.com/Marcelloro24/Challenge-Module11"
    },
    {
      title: "Employee Tracker",
      image: "/images/employee-tracker.jpg",
      githubLink: "https://github.com/Marcelloro24/Challenge-Module12"
    },
    {
      title: "E-commerce Back End",
      image: "/images/ecommerce.jpg",
      githubLink: "https://github.com/Marcelloro24/Challenge-Module13"
    },
    {
      title: "Tech Blog",
      image: "/images/tech-blog.jpg",
      githubLink: "https://github.com/Marcelloro24/Challenge-Module14"
    },
    {
      title: "Social Network API",
      image: "/images/social-network.jpg",
      githubLink: "https://github.com/Marcelloro24/Challenge-Module18"
    },
    {
      title: "PWA Text Editor",
      image: "/images/text-editor.jpg",
      githubLink: "https://github.com/Marcelloro24/Challenge-Module19"
    }
  ];

  return (
    <section className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;