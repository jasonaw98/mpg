import JobCard from "@/components/JobCard"
import { satisfaction } from "@/public/data"
import HappyChart from "@/components/Charts/HappyChart"

const Satisfaction = () => {

  return (
    <>
      <div className="flex justify-center w-full">

        <div className="flex flex-col mr-12">
          <div className='w-[30%] min-w-[440px] max-h-[51vh]'>
            <HappyChart />
          </div>
        </div>

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
      </div>
    </>
  )
}

export default Satisfaction