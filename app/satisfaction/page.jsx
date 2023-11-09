import JobCard from "@/components/JobCard"
import {satisfaction} from "@/public/data"

const Satisfaction = () => {

  return (
    <>
    {/* <div className="flex flex-wrap gap-8 justify-center">
      {satisfaction.map((item, index) => (
        <JobCard
        key={index} // Add a unique key for each rendered JobCard
        job={item.job}
        salary={item.salary}
        des={item.description}
        />
        ))}
    </div> */}
    <div className="flex justify-around w-full">

    <div className="masonry-grid">
      {satisfaction.map((item, index) => (
        <JobCard
        key={index} // Add a unique key for each rendered JobCard
        job={item.job}
        salary={item.salary}
        des={item.description}
        />
        ))}
    </div>
        </div>
        </>
  )
}

export default Satisfaction