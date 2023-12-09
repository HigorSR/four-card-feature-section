import Cards from '@/components/cards'
import Description from '@/components/description'


export default function Home() {
  return (
    <main className='flex items-center justify-center py-16 bg-Very-Light-Gray xl:py-0'>
      <div className='h-screen'></div>
      <div className='flex flex-col gap-20 w-[310px] xl:w-[1100px] xl:gap-16'>

        {/* Description */}
        <Description />

        {/* Cards */}
        <Cards />

      </div>
    </main>
  )
}
