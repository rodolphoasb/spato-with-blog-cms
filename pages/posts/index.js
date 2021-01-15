import Layout from '../../components/layout'
import { getAllPostsForHome } from '../../lib/api'
import Head from 'next/head'
import Date from '../../components/date'
import Link from 'next/link'
import Header from '../../components/Homepage/header'
import { NextSeo } from 'next-seo'

export default function Index({ allPosts, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <NextSeo
          title='Spato | Blog de SEO e CRO'
          description='Estudos de casos e os posts com principais assuntos do mundo do SEO e CRO'
        />
        <Header />
        <section className='py-20'>
          <div className='container px-4 mx-auto'>
            <h2 className='mb-12 lg:mb-20 text-3xl md:text-4xl font-bold font-heading text-blue-600'>
              Nosso Blog
            </h2>
            {allPosts.map(post => (
              <div
                key={post.slug}
                className='flex flex-wrap -mx-4 py-8 mb-20 shadow-lg'
              >
                <div className='w-full lg:w-1/2 px-4 lg:pl-20 lg:pt-4 order-1'>
                  <span className='inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600'>
                    Startup
                  </span>
                  <h3 className='my-4 text-xl md:text-2xl font-bold font-heading'>
                    {post.title}
                  </h3>
                  <Date dateString={post.date} />
                  <p className='mb-4 text-sm md:text-base leading-loose text-blueGray-400'>
                    {post.excerpt}
                  </p>
                  <Link href={`posts/${post.slug}`} passHref>
                    <a className='text-xs font-semibold text-blue-600'>
                      <span>Ler Mais</span>
                      <svg
                        className='inline-block w-4 h-4 ml-1'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M17 8l4 4m0 0l-4 4m4-4H3'
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </div>
                <div className='w-full lg:w-1/2 px-4 order-0'>
                  <img
                    className='w-full h-80 object-cover rounded'
                    src={post.coverImage}
                    alt=''
                  />
                </div>
              </div>
            ))}
            {allPosts > 5 ? (
              <div className='text-center'>
                <a
                  className='inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded'
                  href='#'
                >
                  Mais Posts
                </a>
              </div>
            ) : null}
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
    revalidate: 1
  }
}
