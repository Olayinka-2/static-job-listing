import { useContext, useState } from "react";
import { JobListContext } from "../App";
import jobTitles from "./jobTitle";
import { motion, AnimatePresence } from "framer-motion";

const Filter = () => {
  const { setJobList } = useContext(JobListContext);
  const [showInput, setShowInput] = useState(false);

  function handleIconClick() {
    setShowInput(prev => !prev); // Toggle input visibility
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

  return (
    <div className="filter">
      <form className="filter-form" action="#">
        <AnimatePresence>
          {showInput && (
            <motion.input
              key="search-input"
              type="search"
              name="title"
              onChange={handleInputChange}
              placeholder="Search by Job Title"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="search-input"
            />
          )}
        </AnimatePresence>
        <i
          className="bi bi-funnel-fill"
          onClick={handleIconClick}
        ></i>
      </form>
    </div>
  );
};

export default Filter;
