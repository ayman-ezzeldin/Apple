import {appleImg, bagImg, searchImg} from '../utils'
import {navLists} from '../constants'
const Navbar = () => {
  return (
    <header className='flex items-center justify-between w-full sm:px-10 px-5 py-5' >
      <nav className='flex items-center justify-between w-full screen-max-width ' >
        <img src={appleImg} alt="apple" width={18} height={18} />
        <a href="https://www.instagram.com/reel/C8Rqh37PpTo/?utm_source=ig_web_copy_link">Here </a>
        <div className='flex items-center justify-center flex-1 max-sm:hidden '>
          { navLists.map(nav => (
            <div key={nav} className='px-5 text-sm text-gray hover:text-white transition-all ' >{ nav }</div>
          ) ) }
        </div>
        <div className='flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar