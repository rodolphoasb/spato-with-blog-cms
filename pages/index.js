import Header from '../components/Homepage/header'
import Presentation from '../components/Homepage/presentation'
import SocialProof from '../components/Homepage/socialProof'
import Features from '../components/Homepage/features'
import Team from '../components/Homepage/team'
import Cta from '../components/Homepage/cta'
import Footer from '../components/Homepage/footer'
import Faq from '../components/Homepage/faq'
import { NextSeo } from 'next-seo'

export default function Index() {
  return (
    <>
      <NextSeo
        title='Spato | Boutique de SEO e Marketing de Conteúdo'
        description='Geramos mais leads através de SEO e Marketing de Conteúdo de alto nível.'
      />
      <Header />
      <Presentation />
      <SocialProof />
      <Features />
      <Team />
      <Cta />
      <Faq />
      <Footer />
    </>
  )
}
