import { motion } from 'framer-motion';

function JobCard({ job }) {
  const logoSrc = new URL(`../assets/images/${job.name.toLowerCase().split(" ").join("-")}.svg`, import.meta.url).href;
  return (
    <motion.div
    className="job-container"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2}}
  >
      <div className="post-styling"></div>

      <div className="profile">
      <div className="img">
        <img src={logoSrc} alt="" />
      </div>

      <div className="description">
        <div className="class">
          <p className="class-name">{job.name}</p>
          {job.isNew && <p className="class-new">New!</p>}
          {job.isFeatured && <p className="class-featured">FEATURED</p>}
        </div>

        <p className="job-title">{job.title}</p>

        <div className="job-info">
          <p>1d ago</p>
          <p>&bull;</p>
          <p>Full Time</p>
          <p>&bull;</p>
          <p>USA only</p>
        </div>

        <hr className="horizontal" />
      </div>
      </div>

      <div className="job-skills">
        {job.skills.map((skill, index) => (
          <p className="skills" key={index}>{skill}</p>
        ))}
      </div>
  </motion.div>
  );
}

export default JobCard;
