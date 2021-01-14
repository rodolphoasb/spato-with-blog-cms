export default function Team() {
  return (
    <section className='py-20'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-lg mx-auto mb-12 text-center'>
          <span className='inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl'>
            Nosso Time
          </span>
          <h2 className='text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading'>
            Sua empresa em boas mãos
          </h2>
          <p className='text-blueGray-400 leading-loose'>
            Nosso time não é teórico, é do campo de batalha! Ambos possuem seus
            próprios sites onde estão sempre testando diferentes abordagens!
          </p>
        </div>
        <div className='flex flex-wrap -mx-3 -mb-12'>
          <div className='lg:w-1/2 flex flex-col md:flex-row px-3 mb-12'>
            <img
              className='h-64 w-64 rounded object-cover'
              src='/rodolpho.png'
              alt='Foto Rodolpho'
            />
            <div className='pt-6 md:pt-2 md:pl-6'>
              <p className='text-xl'>Rodolpho Bravo</p>
              <p className='my-2 text-blue-600'>SEO e CRO Specialist</p>
              <p className='leading-loose text-blueGray-400'>
                Formado em Engenharia pela UNESP decidiu levar os cálculos para
                o Marketing. Sempre analítico, buscando otimizações para gerar
                resultados!
              </p>
            </div>
          </div>
          <div className='lg:w-1/2 flex flex-col md:flex-row px-3 mb-12'>
            <img
              className='h-64 w-64 rounded object-cover'
              src='/pedro.png'
              alt='Foto Pedro'
            />
            <div className='pt-6 md:pt-2 md:pl-6'>
              <p className='text-xl'>Pedro Fernandes</p>
              <p className='my-2 text-sm text-blue-600'>SEO e Web Design</p>
              <p className='leading-loose text-blueGray-400'>
                Pedro é um apaixonado por SEO e Tecnologia. Está sempre buscando
                novas formas de trazer mais tráfego para seus sites e de nossos
                clientes de forma orgânica e aumentando a conversão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
