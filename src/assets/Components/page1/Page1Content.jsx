import Navbar from './Navbar'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = () => {
  return (
    <div className='flex h-[90vh] flex-col px-18 pb-16'>
      <Navbar />
      <div className='flex min-h-0 flex-1 items-center gap-10'>
        <LeftContent />
        <RightContent />
      </div>
    </div>

  )
}

export default Page1Content