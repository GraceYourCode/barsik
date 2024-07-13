import { CgSearch } from 'react-icons/cg'
import logo from '../assets/logo.svg'
import { IoIosMenu } from 'react-icons/io'

const links = [
  "Play",
  "How does it work?",
  "Audit",
  "Burning room",
  "Buy Barsik",
]

const TopHeader = () => {
  return (
    <nav className='px-4 sm:px-8 md:px-12 xl:px-20 2xl:px-44 flex items-center justify-between py-3 2xl:py-4'>
      <img src={logo} alt='barsik logo' className='w-10'/>

      <aside className='flex items-center gap-5 sm:gap-8 xl:gap-16 text-sm text-white'>
        <form className='*:bg-transparent border border-gray sm:w-72 lg:w-fit xl:w-52 2xl:w-80 flex items-center py-1 px-2 rounded-md shadow-lg shadow-black text-gray bg-gradient-to-r from-teal/10 to-green/10 justify-between text-sm'>
          <input type="search" placeholder='Search something'/>
          <CgSearch className='text-lg'/>
        </form>
        <>
        {links.map(link => <p key={link} className='cursor-pointer max-lg:hidden'>{link}</p>)}
        </>

        <IoIosMenu  className='text-4xl'/>
      </aside>
    </nav>
  )
}

export default TopHeader
