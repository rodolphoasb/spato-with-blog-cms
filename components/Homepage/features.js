export default function Features() {
  return (
    <section className='py-20 bg-blueGray-50'>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12'>
          <div className='w-full lg:w-1/2 mb-4 lg:mb-0'>
            <h2 className='text-3xl md:text-4xl font-bold font-heading'>
              <span>Make your</span>
              <span className='text-blue-600'>life easier</span>
              <span>for marketing sales and customer support</span>
            </h2>
          </div>
          <div className='w-full lg:w-1/2 lg:pl-16'>
            <p className='text-blueGray-400 leading-loose'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis. Quisque vitae nulla malesuada,
              auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id
              imperdiet.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 -mb-6 text-center'>
          <div className='w-full md:w-1/2 lg:w-1/3 px-3 mb-6'>
            <div className='p-12 bg-white shadow rounded'>
              <div className='flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full'>
                1
              </div>
              <img
                className='h-48 mx-auto my-4'
                src='/work-tv.png'
                alt='ícone de pessoa sorrindo numa tela'
              />
              <h3 className='mb-2 font-bold font-heading'>CRO</h3>
              <p className='text-sm text-blueGray-400 leading-relaxed'>
                Sed ac magna sit amet risus tristique interdum at vel velit. In
                hac habitasse platea dictumst.
              </p>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3 px-3 mb-6'>
            <div className='p-12 bg-white shadow rounded'>
              <div className='flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full'>
                2
              </div>
              <img
                className='h-48 mx-auto my-4'
                src='/people-watching.png'
                alt='ícone de duas pessoas assistindo uma barra carregar'
              />
              <h3 className='mb-2 font-bold font-heading'>SEO</h3>
              <p className='text-sm text-blueGray-400 leading-relaxed'>
                Sed ac magna sit amet risus tristique interdum at vel velit. In
                hac habitasse platea dictumst.
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/3 px-3 mb-6'>
            <div className='p-12 bg-white shadow rounded'>
              <div className='flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full'>
                3
              </div>
              <img
                className='h-48 mx-auto my-4'
                src='/financial-report.png'
                alt='Duas pessoas pintando uma tela'
              />
              <h3 className='mb-2 font-bold font-heading'>Web Design</h3>
              <p className='text-sm text-blueGray-400 leading-relaxed'>
                Sed ac magna sit amet risus tristique interdum at vel velit. In
                hac habitasse platea dictumst.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
