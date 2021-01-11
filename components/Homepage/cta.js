export default function CTA() {
  return (
    <section className='pt-20 pb-24 bg-blueGray-50'>
      <div className='max-w-xl mx-auto text-center'>
        <span className='inline-block py-1 px-3 bg-blue-500 text-xs text-black font-semibold rounded-xl'>
          Lorem ipsum
        </span>
        <h2 className='mt-3 text-3xl md:text-4xl text-black font-bold font-heading'>
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <div className='mt-6'>
          <a
            className='inline-block text-xs py-4 px-8 bg-white hover:bg-blue-600 text-blue-600 hover:text-white font-semibold leading-none border hover:border-white rounded transition duration-300'
            href='#'
          >
            Check Now
          </a>
        </div>
      </div>
    </section>
  )
}
