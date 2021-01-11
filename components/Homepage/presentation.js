export default function Presentation() {
  return (
    <section className='pt-20 pb-20 lg:pb-12 overflow-x-hidden'>
      <div className='flex flex-wrap'>
        <div className='flex order-1 lg:order-0 w-full lg:w-1/2 lg:h-128 lg:max-w-lg lg:ml-auto px-4 lg:pr-24 xl:pr-4'>
          <div className='my-auto mx-auto pt-8 lg:pt-0 max-w-2xl lg:max-w-lg'>
            <h2 className='text-3xl md:text-4xl mb-4 font-bold font-heading'>
              <span>Make your</span>
              <span className='text-blue-600'>life easier</span>
              <span>for marketing sales and customer support</span>
            </h2>
            <p className='text-blueGray-400 leading-loose mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
            <a
              className='inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded'
              href='#'
            >
              Learn more
            </a>
          </div>
        </div>
        <div className='relative order-0 lg:order-1 w-full lg:w-1/2 px-4 lg:h-128'>
          <div className='relative lg:absolute right-0 top-0 lg:max-w-6xl mx-auto lg:-mr-64'>
            <img className='lg:h-128' src='/macbook.png' alt='' />
            <div
              className='absolute'
              style={{
                top: '5.8%',
                left: '14.6%',
                width: '72.8%',
                height: '76.8%'
              }}
            >
              <img
                className='object-cover w-full h-full'
                src='/metis-dashboard-square.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
