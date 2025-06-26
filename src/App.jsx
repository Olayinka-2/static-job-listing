import Header from './components/Header.jsx';
import jobTitles from './components/jobTitle.jsx';
import JobCard from './components/jobCard.jsx';

function App() {
  const jobDisplay = jobTitles;
  return (
    <>
    <Header/>
    <main>
      <div className="job-postings">
        {
          jobDisplay.map((job, index) => (
            <JobCard key={index} job={job} />
          ))
        }
      </div>
    </main>
  </>
  )
}

export default App;
