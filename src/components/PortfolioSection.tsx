import styles from "@/styles/Home.module.css";

const projects = [
  {
    id: 1,
    title: "PROJECT_CYPHER: Secure Data Vault",
    description:
      "A conceptual secure data storage application with end-to-end encryption mockups and threat modeling. Focus on security principles.",
    link: "#", // Replace with actual link or GitHub
    tags: ["Security", "Conceptual", "Encryption"],
  },
  {
    id: 2,
    title: "NEURAL_GRID: AI Art Generator Interface",
    description:
      "Frontend interface for an AI art generation model, allowing users to input prompts and visualize outputs. Built with React and Next.js.",
    link: "#",
    tags: ["AI", "Frontend", "React", "Next.js"],
  },
  // Add more completed projects here
];

const PortfolioSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Completed Operations</h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div
              style={{
                marginBottom: "1rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    backgroundColor: "var(--accent-color)",
                    color: "var(--background-color)",
                    padding: "0.2rem 0.5rem",
                    fontSize: "0.8rem",
                    borderRadius: "3px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              Access Archive &gt;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
