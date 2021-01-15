import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Date from '../../components/date'
import Header from '../../components/Homepage/header'
import { NextSeo } from 'next-seo'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <NextSeo title={post.title} description={post.excerpt} />
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} | Spato</title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <Header />
              <section className='py-20'>
                <div className='container px-4 mx-auto'>
                  <div className='max-w-2xl mx-auto mb-12'>
                    <div className='text-center mb-6'>
                      <span className='text-base md:text-lg'>
                        <a className='text-blue-500 hover:underline' href='#'>
                          CATEGORY
                        </a>{' '}
                        <Date dateString={post.date} />
                      </span>
                      <h1 className='text-4xl md:text-5xl my-2 font-bold font-heading'>
                        {post.title}
                      </h1>
                    </div>
                    <div className='flex justify-center'>
                      <img
                        className='w-12 h-12 object-cover rounded-full'
                        src={post.author.picture}
                        alt=''
                      />
                      <div className='pl-4'>
                        <p className='text-blueGray-500 mb-1'>
                          {post.author.name}
                        </p>
                        <p className='text-xs text-blue-600 font-semibold'>
                          Autor
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='mb-8'>
                    <img
                      className='h-80 mx-auto mb-6 object-cover rounded'
                      src={post.coverImage}
                      alt=''
                    />
                  </div>
                  <div className='max-w-2xl mx-auto'>
                    <PostBody content={post.content} />
                  </div>
                </div>
              </section>
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map(post => ({
        params: {
          slug: post.slug
        }
      })) || [],
    fallback: true
  }
}
