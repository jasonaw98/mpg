import Image from 'next/image'
import SalaryChart from '@/components/Charts/SalaryChart'
import ExperienceChart from '@/components/Charts/ExperienceChart'
import GenderChart from '@/components/Charts/GenderChart'
import RaceChart from '@/components/Charts/RaceChart'

export default function Home() {
  return (
    <main className="flex flex-col items-center p-8 px-8">
      <div className='flex w-[-webkit-fill-available] justify-center bg-[#7d86ff] rounded-xl mx-28 drop-shadow-xl'>
        <Image src="/goodbyewage.jpeg" width={600} height={500} />
      </div>

      <div className='flex w-full justify-center gap-8 mt-8 flex-wrap'>
        <div className='w-[30%] min-w-[420px]'>
          <ExperienceChart />
        </div>
        <div className='w-[30%] min-w-[420px]'>
          <SalaryChart />
        </div>
        <div className='w-[30%] min-w-[420px]'>
          <GenderChart />
        </div>
        <div className='w-[30%] min-w-[420px]'>
          <RaceChart/>
        </div>

      </div>
    </main>
  )
}
