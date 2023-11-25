
const JobCard = ({job, salary, des}) => {
  return (
    <div className='p-8 flex flex-col rounded-[20px] bg-slate-50 border-slate-300 border-2 shadow-md drop-shadow-xl min-w-[300px] max-w-[500px] h-fit mb-6'>
        <div className='flex'>
            <p className='text-xl font-bold'>{job}</p>
            <p className='text-xl ml-7 font-semibold text-emerald-500'>{salary}</p>
        </div>
        <div className='pt-2 font-semibold'>{des}</div>
    </div>
  )
}

export default JobCard