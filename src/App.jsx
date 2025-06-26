import Header from './components/Header.jsx';
import jobTitles from './components/jobTitle.jsx';
import JobCard from './components/jobCard.jsx';
import Filter from './components/filter.jsx';
import { createContext, useState } from 'react';

export const JobListContext = createContext();

function App() {

  const [jobList, setJobList] = useState(jobTitles)
  return (
    <JobListContext.Provider value={{jobList, setJobList}}>
      <Header/>
      <Filter />
      <main>
        <div className="job-postings">
          {jobList.length === 0 ? (
            <p className="no-results">No job found.</p>
          ) : (
            jobList.map((job, index) => (
              <JobCard key={index} job={job} />
            ))
          )}
        </div>
      </main>
    </JobListContext.Provider>
  );
}

export default App;
