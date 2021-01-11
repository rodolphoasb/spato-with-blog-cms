export default function Team() {
  return (
    <section className='py-20'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-lg mx-auto mb-12 text-center'>
          <span className='inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl'>
            Nosso Time
          </span>
          <h2 className='text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading'>
            Lorem ipsum dolor sit amet consectutar domor
          </h2>
          <p className='text-blueGray-400 leading-loose'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            eget justo et iaculis.
          </p>
        </div>
        <div className='flex flex-wrap -mx-3 -mb-12'>
          <div className='lg:w-1/2 flex flex-col md:flex-row px-3 mb-12'>
            <img
              className='h-64 w-64 rounded object-cover'
              src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60'
              alt=''
            />
            <div className='pt-6 md:pt-2 md:pl-6'>
              <p className='text-xl'>Julie Bailey</p>
              <p className='my-2 text-blue-600'>CEO</p>
              <p className='leading-loose text-blueGray-400'>
                Donec consequat tortor risus, at auctor felis consequat a. Donec
                quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar.
                Vestibulum non quam velit.
              </p>
            </div>
          </div>
          <div className='lg:w-1/2 flex flex-col md:flex-row px-3 mb-12'>
            <img
              className='h-64 w-64 rounded object-cover'
              src='https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60'
              alt=''
            />
            <div className='pt-6 md:pt-2 md:pl-6'>
              <p className='text-xl'>Tom Brown</p>
              <p className='my-2 text-sm text-blue-600'>
                Director, Product Development
              </p>
              <p className='leading-loose text-blueGray-400'>
                Donec consequat tortor risus, at auctor felis consequat a. Donec
                quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar.
                Vestibulum non quam velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
