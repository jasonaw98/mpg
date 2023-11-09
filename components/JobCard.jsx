
const JobCard = ({job, salary, des}) => {
  return (
    <div className='p-8 flex flex-col rounded-[20px] bg-slate-50 border-slate-300 border-2 shadow-md drop-shadow-xl min-w-[600px] max-w-[500px] h-fit mb-8'>
        <div className='flex'>
            <p className='text-xl font-semibold'>{job}</p>
            <p className='text-xl ml-7 font-semibold text-emerald-600'>{salary}</p>
        </div>
        <div className='pt-2'>{des}</div>
    </div>
  )
}

export default JobCard