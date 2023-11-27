import Image from 'next/image'
import SalaryChart from '@/components/Charts/SalaryChart'
import ExperienceChart from '@/components/Charts/ExperienceChart'
import GenderChart from '@/components/Charts/GenderChart'
import RaceChart from '@/components/Charts/RaceChart'
import MapChart from '@/components/Charts/MapChart'
import Ethnic from '@/components/Charts/Ethnic'
import EduChartNivo from '@/components/Charts/EduChartNivo'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* <div className='flex flex-col items-center w-[-webkit-fill-available] justify-center bg-[#7d86ff] rounded-xl mx-28 drop-shadow-xl shadow-xl'>
        <Image src="/goodbyewage.jpeg" width={600} height={500} />
      </div>

        <div className='flex w-2/3 justify-center rounded-[20px] bg-[white]/30 z-10 relative h-[5rem] backdrop-blur shadow-lg mb-10 drop-shadow-2xl -mt-[2.5rem] items-center'>Search Bar</div> */}
      <div className='flex w-full justify-center gap-8 flex-wrap'>
        <div className='w-[30%] min-w-[420px] max-h-[42vh]'>
          <ExperienceChart />
        </div>
        <div className='w-[30%] min-w-[420px] max-h-[42vh]'>
          <SalaryChart />
        </div>
        <div className='w-[30%] min-w-[420px] max-h-[42vh]'>
          <GenderChart />
        </div>
        <div className='w-[70%] h-[520px]'>
          <MapChart/>
        </div>
        {/* <div className='w-[30%] min-w-[420px] max-h-[42vh]'>
          <RaceChart/>
        </div>
        <div className='w-[30%] min-w-[420px] max-h-[42vh]'>
          <Ethnic/>
        </div> */}
        <div className='w-[80%] max-h-[630px]'>
          <EduChartNivo/>
        </div>

      </div>
    </main>
  )
}
