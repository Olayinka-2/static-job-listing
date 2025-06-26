import { useContext, useRef } from "react";
import { JobListContext } from "../App";
import jobTitles from "./jobTitle";

const Filter = () => {
  const inputRef = useRef(null);
  const {jobList, setJobList} = useContext(JobListContext);

  function handleIconClick() {
      if(inputRef.current) {
        const isHidden = inputRef.current.style.display === "none" || inputRef.current.style.display === "";
        inputRef.current.style.display = isHidden ? "block" : "none";
      }
  }

  function handleInputChange(e) {
    const query = e.target.value.trim().toLowerCase();
    if (query === "") {
      setJobList(jobTitles);
      return;
    }
    const filteredList = jobTitles.filter((job) =>
      job.title.toLowerCase().includes(query)
    );

    setJobList(filteredList);
  }

  return(
    <>
      <div className="filter">
        <form action="#">
          <input type="search" name="title" ref={inputRef} onChange={handleInputChange} placeholder="search by Job Title"/>
          <i className="bi bi-funnel-fill" onClick={handleIconClick}></i>
        </form>
      </div>
    </>
  )
};

export default Filter;