import Image from 'next/image'
import SalaryChart from '@/components/Charts/SalaryChart'
import ExperienceChart from '@/components/Charts/ExperienceChart'
import GenderChart from '@/components/Charts/GenderChart'
import RaceChart from '@/components/Charts/RaceChart'
import MapChart from '@/components/Charts/MapChart'
import EduChart from '@/components/Charts/EduChart'


export default function Home() {
  return (
    <main className="flex flex-col items-center p-8 px-8">
      <div className='flex w-[-webkit-fill-available] justify-center bg-[#7d86ff] rounded-xl mx-28 drop-shadow-xl shadow-xl'>
        <Image src="/goodbyewage.jpeg" width={600} height={500} />
      </div>

      <div className='flex w-full justify-center gap-8 mt-8 flex-wrap'>
        <div className='w-[30%] min-w-[420px] max-h-[42vh]'>
          <ExperienceChart />
        </div>
        <div className='w-[30%] min-w-[420px] max-h-[42vh]'>
          <SalaryChart />
        </div>
        <div className='w-[30%] min-w-[420px] max-h-[42vh]'>
          <GenderChart />
        </div>
        <div className='w-[30%] min-w-[420px] max-h-[42vh]'>
          <RaceChart/>
        </div>
        <div className='w-[70%] h-[520px]'>
          <MapChart/>
        </div>
        <div className='w-[80%] max-h-[630px]'>
          <EduChart/>
        </div>

      </div>
    </main>
  )
}
