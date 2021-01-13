import { useState } from 'react'

export default function Faq() {
  const [q1, setQuestion1] = useState(true)
  const [q2, setQuestion2] = useState(false)
  const [q3, setQuestion3] = useState(false)
  const [q4, setQuestion4] = useState(false)

  return (
    <section>
      <div className='flex w-full lg:h-full mb-12'>
        <div className='hidden lg:block lg:relative lg:w-1/3 bg-blue-600'>
          <div className='absolute right-0 md:-mr-32 mt-24 flex items-center'>
            <img className='lg:max-w-lg' src='/hardworking-man.png' alt='' />
          </div>
        </div>
        <div className='flex-1 lg:pl-32 py-20 lg:py-16'>
          <div className='max-w-2xl px-4 mx-auto lg:ml-0'>
            <h3 className='mb-8 text-4xl font-bold font-heading'>
              Perguntas Frequentes
            </h3>
            <ul className='space-y-8'>
              <li>
                <button
                  className='w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700'
                  onClick={() => setQuestion1(!q1)}
                >
                  <span>
                    O que é SEO e Quanto tempo demora para SEO começar a dar
                    resultados?{' '}
                  </span>
                  <svg
                    className='w-4 h-4 ml-2 text-blueGray-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'
                    ></path>
                  </svg>
                </button>
                <p
                  className={
                    q1 === false
                      ? 'hidden mt-2 text-blueGray-500 font-normal leading-loose'
                      : 'mt-2 text-blueGray-500 font-normal leading-loose'
                  }
                >
                  SEO é o processo de otimização do seu site para ele aparecer
                  nas primeiras posições nos buscadores (ex: Google). Geralmente
                  cerca de 60% do resultado vem no período de 3 a 6 meses.
                </p>
              </li>
              <li>
                <button
                  className='w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700'
                  onClick={() => setQuestion2(!q2)}
                >
                  <span>Como o SEO funciona?</span>
                  <svg
                    className='w-4 h-4 ml-2 text-blueGray-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'
                    ></path>
                  </svg>
                </button>
                <p
                  className={
                    q2 === false
                      ? 'hidden mt-2 text-blueGray-500 font-normal leading-loose'
                      : 'mt-2 text-blueGray-500 font-normal leading-loose'
                  }
                >
                  O Google utiliza mais de 200 fatores para fazer o ranking de
                  sites, esses fatores permitem que os buscadores façam o
                  ranking baseado na relevância e autoridade dos sites. O Google
                  quer recomendar a resposta mais relevante do site mais
                  confiável da maneira mais apropriada para o usuário.
                </p>
              </li>
              <li>
                <button
                  className='w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700'
                  onClick={() => setQuestion3(!q3)}
                >
                  <span>Por que SEO é importante?</span>
                  <svg
                    className='w-4 h-4 ml-2 text-blueGray-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'
                    ></path>
                  </svg>
                </button>
                <p
                  className={
                    q3 === false
                      ? 'hidden mt-2 text-blueGray-500 font-normal leading-loose'
                      : 'mt-2 text-blueGray-500 font-normal leading-loose'
                  }
                >
                  O foco do SEO é trazer tráfego orgânico para o seu site, um
                  tráfego que você não irá pagar diretamente por ele. Quando uma
                  estratégia de SEO surte efeito e a visibilidade do seu site
                  aumenta, você verá crescimento no número de visitas no seu
                  website. Mais visibilidade = mais tráfego = mais potenciais
                  clientes = mais potencial de faturamento. A melhor parte do
                  SEO é saber que o tráfego que você conquistou continuará
                  voltando para o seu site todos os meses e isso acontece porque
                  você ganhou autoridade perante ao Google tender a continuar
                  aparecendo nas primeiras posições do Google.
                </p>
              </li>
              <li>
                <button
                  className='w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700'
                  onClick={() => setQuestion4(!q4)}
                >
                  <span>Devo fazer SEO ou rodar anúncios?</span>
                  <svg
                    className='w-4 h-4 ml-2 text-blueGray-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'
                    ></path>
                  </svg>
                </button>
                <p
                  className={
                    q4 === false
                      ? 'hidden mt-2 text-blueGray-500 font-normal leading-loose'
                      : 'mt-2 text-blueGray-500 font-normal leading-loose'
                  }
                >
                  Em um mundo ideal o seu negócio deveria investir nos dois para
                  ter mais canais de distribuição e acabar atingindo mais
                  clientes. Se você não tem um orçamento grande então
                  definitivamente SEO deve ser sua escolha! Fazer SEO permite
                  que seu site receba tráfego orgânico que é duradouro, você vai
                  continuar recebendo tráfego no seu site por muitos anos. Rodar
                  campanhas de anúncios é instantâneo e o tráfego que será
                  gerado pelos anúncios só continuará enquanto você continuar
                  investindo, ou seja, você vai acabar gastando muito mais com
                  anúncios para ter resultados semelhantes ao resultado de fazer
                  SEO.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
