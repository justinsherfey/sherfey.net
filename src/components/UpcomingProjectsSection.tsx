import styles from "@/styles/Home.module.css";

const upcomingProjects = [
  {
    id: 1,
    title: "PROJECT_CHIMERA: Decentralized Identity System",
    description:
      "STATUS: Planning Phase // Researching blockchain solutions for a self-sovereign identity platform. Key focus on privacy and user control.",
  },
  {
    id: 2,
    title: "GHOST_PROTOCOL: Anonymous Communication Network",
    description:
      "STATUS: Early Development // Building a proof-of-concept for a peer-to-peer encrypted messaging system. Exploring TOR-like principles.",
  },
  // Add more upcoming projects
];

const UpcomingProjectsSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Queued Directives</h2>
      <div className={styles.projectGrid}>
        {upcomingProjects.map((project) => (
          <div key={project.id} className={styles.upcomingCard}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingProjectsSection;
