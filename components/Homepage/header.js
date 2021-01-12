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
          <ul className='flex items-center space-x-12 ml-auto mr-0 md:mr-12'>
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
    </section>
  )
}
