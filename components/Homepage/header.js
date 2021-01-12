import Link from 'next/link'

export default function Header() {
  return (
    <section>
      <div className='container px-4 mx-auto'>
        <nav className='flex items-center py-6'>
          <Link href='/' passHref>
            <a>
              <img src='/logo.svg' alt='logo' width='100' />
            </a>
          </Link>
          <div className='lg:hidden ml-auto'>
            <button className='navbar-burger flex items-center py-2 px-3 text-blue-600 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300'>
              <svg
                className='fill-current h-4 w-4'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Mobile menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
              </svg>
            </button>
          </div>
          <ul className='hidden lg:flex items-center space-x-12 ml-auto mr-12'>
            <li>
              <Link href='/posts' passHref>
                <a className='text-lg text-blueGray-500 hover:text-blueGray-700'>
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='hidden navbar-menu relative z-50'>
        <div className='navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25'></div>
        <nav className='fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto'>
          <div className='flex items-center mb-8'>
            <a className='mr-auto text-3xl font-semibold leading-none' href='#'>
              <img src='/logo.svg' alt='' width='100' />
            </a>
            <button className='navbar-close'>
              <svg
                className='h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className='mb-1'>
                <a
                  className='block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600'
                  href='#'
                ></a>
              </li>
              <li className='mb-1'>
                <a
                  className='block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600'
                  href='#'
                ></a>
              </li>
              <li className='mb-1'>
                <a
                  className='block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600'
                  href='#'
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className='mt-auto'>
            <p className='my-4 text-xs text-blueGray-400'>
              <span>Get in Touch</span>
              <a
                className='text-blue-600 hover:text-blue-600 underline'
                href='#'
              >
                info@example.com
              </a>
            </p>
            {/* <a className='inline-block px-1' href='#'>
              <img src='metis-assets/icons/facebook-blue.svg' alt='' />
            </a>
            <a className='inline-block px-1' href='#'>
              <img src='metis-assets/icons/twitter-blue.svg' alt='' />
            </a>
            <a className='inline-block px-1' href='#'>
              <img src='metis-assets/icons/instagram-blue.svg' alt='' />
            </a> */}
          </div>
        </nav>
      </div>
    </section>
  )
}
