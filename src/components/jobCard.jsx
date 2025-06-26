function JobCard({ job }) {
  return (
    <div className="job-container">
      <div className="post-styling"></div>

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

      <div className="job-skills">
        {job.skills.map((skill, index) => (
          <p className="skills" key={index}>{skill}</p>
        ))}
      </div>
    </div>
  );
}

export default JobCard;
