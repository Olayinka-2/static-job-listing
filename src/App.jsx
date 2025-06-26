import Header from './components/Header.jsx'

function App() {
  const jobTitles = [
    {title: "Senior Frontend Developer", name: "Photosnap", new: "New!", feature: "FEATURED", skills: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"]},
  ];


  return (
    <>
    <Header/>
    <main>
      <div className="job-postings">
        {
          jobTitles.map((job, index) => (
            <div key={index} className="job-container">
              <div className="post-styling"></div>
              <div className="description">
                <div className="class">
                  <p className="class-name">{job.name}</p>
                  <p className="class-new">{job.new}</p>
                  <p className="class-featured">{job.feature}</p>
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
                {
                  job.skills.map((skill, index) => (
                    <p className="skills" key={index}>{skill}</p>
                  ))
                }
              </div>
        </div>
          ))
        }
        <div className="job-container">
          <div className="post-styling"></div>
          <div className="description">
            <div className="class">
              <p className="class-name">Photosnap</p>
              <p className="class-new">New!</p>
              <p className="class-featured">FEATURED</p>
            </div>
            <p className="job-title">Senior Frontend Developer</p>
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
            <p className="skills">Frontend</p>
            <p className="skills">Senior</p>
            <p className="skills">HTML</p>
            <p className="skills">CSS</p>
            <p className="skills">JavaScript</p>
          </div>
        </div>
        <div className="job-container">
          <div className="post-styling"></div>
          <div className="description">
            <div className="class">
              <p className="class-name">Photosnap</p>
              <p className="class-new">New!</p>
              <p className="class-featured">FEATURED</p>
            </div>
            <p className="job-title">Senior Frontend Developer</p>
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
            <p className="skills">Frontend</p>
            <p className="skills">Senior</p>
            <p className="skills">HTML</p>
            <p className="skills">CSS</p>
            <p className="skills">JavaScript</p>
          </div>
        </div>
        <div className="job-container">
          <div className="post-styling"></div>
          <div className="description">
            <div className="class">
              <p className="class-name">Photosnap</p>
              <p className="class-new">New!</p>
              <p className="class-featured">FEATURED</p>
            </div>
            <p className="job-title">Senior Frontend Developer</p>
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
            <p className="skills">Frontend</p>
            <p className="skills">Senior</p>
            <p className="skills">HTML</p>
            <p className="skills">CSS</p>
            <p className="skills">JavaScript</p>
          </div>
        </div>
      </div>
    </main>
  </>
  )
}

export default App;
