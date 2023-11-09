'use client'
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const SearchBar = () => {
  const industries = [
    "Accounting",
    "Agriculture",
    "Arts",
    "Business Services",
    "Construction",
    "Education",
    "Energy",
    "Entertainment",
  ]

  const jobs = [
    "Analyst",
    "Architect",
    "Consultant",
    "Designer",
    "Developer",
    "Engineer",
    "Manager",
    "Producer",
    "Project Manager",
    "Sales",
    "Software Developer",
  ]

  const [selectedJobs, setSelectedJobs] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [incomeRange, setIncomeRange] = useState(5000);

  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(true);
  const [IndustrysearchText, setIndustrySearchText] = useState("");
  const [filteredIndustries, setFilteredIndustries] = useState(industries);
  const industrydropdownRef = useRef(null);

  const [JobsDropdownOpen, setJobsDropdownOpen] = useState(true);
  const [JobsSearchText, setJobsSearchText] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const JobdropdownRef = useRef(null);

  const toggleJobDropdown = () => {
    setJobsDropdownOpen(!JobsDropdownOpen);
  };

  const toggleJobs = (jobs) => {
    if (selectedJobs.includes(jobs)) {
      setSelectedJobs(selectedJobs.filter((selected) => selected !== jobs));
    } else {
      setSelectedJobs([...selectedJobs, jobs]);
    }
  };

  const handleJobsSearchChange = (e) => {
    const JobsSearchText = e.target.value;
    setJobsSearchText(JobsSearchText);
    const filtered = jobs.filter((jobs) =>
      jobs.toLowerCase().includes(JobsSearchText.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const toggleIndustryDropdown = () => {
    setIndustryDropdownOpen(!industryDropdownOpen);
  };

  const toggleIndustry = (industry) => {
    if (selectedIndustries.includes(industry)) {
      setSelectedIndustries(selectedIndustries.filter((selected) => selected !== industry));
    } else {
      setSelectedIndustries([...selectedIndustries, industry]);
    }
  };

  const handleIndustrySearchChange = (e) => {
    const IndustrysearchText = e.target.value;
    setIndustrySearchText(IndustrysearchText);
    const filtered = industries.filter((industry) =>
      industry.toLowerCase().includes(IndustrysearchText.toLowerCase())
    );
    setFilteredIndustries(filtered);
  };

  const handleIncomeChange = (e) => {
    setIncomeRange(e.target.value);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (industrydropdownRef.current && !industrydropdownRef.current.contains(event.target)) {
        setIndustryDropdownOpen(true);
      }
      if (JobdropdownRef.current && !JobdropdownRef.current.contains(event.target)) {
        setJobsDropdownOpen(true);
      }
    };

    if (industryDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    if (JobsDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <section className="flex flex-col items-center pt-10 px-8 pb-10">
      <div className="flex flex-col items-center w-[-webkit-fill-available] justify-center bg-[#7d86ff] rounded-xl mx-28 drop-shadow-xl shadow-xl">
        <Image src="/goodbyewage.jpeg" width={600} height={500} />
      </div>

      <div className="flex w-2/3 justify-center rounded-[20px] bg-white/50 h-[6rem] backdrop-blur shadow-lg drop-shadow-2xl -mt-[2.7rem] items-center ">
        <div className="flex flex-col items-center text-center pl-2">
          <p className="font-semibold text-gray-800">Total Submission</p>
          <p className="text-2xl font-bold">5278</p>
        </div>
        <span className="h-full w-1 bg-slate-700/60"></span>

        <div className="search-bar w-full flex justify-evenly">
          <div className="flex flex-col items-center w-1/5" ref={JobdropdownRef}>
            <div className="h-full flex justify-center items-center">
              <label htmlFor="jobs-category" className="text-xl font-semibold text-slate-800 cursor-pointer hover:text-[#7d86f] drop-shadow-xl hover:text-2xl hover:font-bold flex items-end" onClick={toggleJobDropdown}>Jobs<svg className="w-4 h-6 text-gray-800 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
              </svg></label>
            </div>
            {!JobsDropdownOpen && (
              <div className="flex flex-col absolute mt-[3rem] border-2 border-slate-300 bg-slate-100 rounded-xl p-4 justify-start">
                <div className="pb-2">
                  <input
                    type="text"
                    placeholder="Search Jobs"
                    value={JobsSearchText}
                    onChange={handleJobsSearchChange}
                    className="ring-slate-300 focus:outline-none ring-2 rounded-md pl-3 bg-slate-100"
                  />
                </div>
                {filteredJobs.map((jobs) => (
                  <label key={jobs}>
                    <input
                      type="checkbox"
                      value={jobs}
                      checked={selectedJobs.includes(jobs)}
                      onChange={() => toggleJobs(jobs)}
                      className="mr-2"
                    />
                    {jobs}
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col items-center w-1/3" ref={industrydropdownRef}>
            <div className="h-full flex justify-center items-center">
              <label htmlFor="industry-category" className="text-xl font-semibold text-slate-800 cursor-pointer hovr:text-[#7d86ff] drop-shadow-xl hover:text-2xl hover:font-bold flex items-end" onClick={toggleIndustryDropdown}>Industries<svg className="w-4 h-6 text-gray-800 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
              </svg></label>
            </div>
            {!industryDropdownOpen && (
              <div className="flex flex-col absolute mt-[3rem] border-2 border-slate-300 bg-slate-100 rounded-xl p-4 justify-start">
                <div className="pb-2">
                  <input
                    type="text"
                    placeholder="Search Industries"
                    value={IndustrysearchText}
                    onChange={handleIndustrySearchChange}
                    className="ring-slate-300 focus:outline-none ring-2 rounded-md pl-3 bg-slate-100"
                  />
                </div>
                {filteredIndustries.map((industry) => (
                  <label key={industry}>
                    <input
                      type="checkbox"
                      value={industry}
                      checked={selectedIndustries.includes(industry)}
                      onChange={() => toggleIndustry(industry)}
                      className="mr-2"
                    />
                    {industry}
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center items-center w-1/3">
            <label htmlFor="income-range" className="text-lg font-semibold pb-2">Gross Monthly Income:</label>
            <span>
              <input
                type="range"
                id="income-range"
                min="0"
                max="10000"
                step="100"
                value={incomeRange}
                onChange={handleIncomeChange}
                className="cursor-pointer"
              />
              <span id="income-value" className="pl-2">RM0-{incomeRange}</span>
            </span>
          </div>

        </div>
      </div>

      {/* <div className="flex flex-col w-full justify-center items-center mt-28">Industries:{selectedIndustries}</div>
      <div className="flex flex-col w-full justify-center items-center mt-16">Jobs:{selectedJobs}</div> */}
    </section>
  );
};

export default SearchBar;
