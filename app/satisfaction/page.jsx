import JobCard from "@/components/JobCard"
import {satisfaction} from "@/public/data"

const Satisfaction = () => {

  return (
    <>
    <div className="flex justify-center">
    <div className="columns-2 gap-10">
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