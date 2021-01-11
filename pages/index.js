import Header from '../components/Homepage/header'
import Presentation from '../components/Homepage/presentation'
import SocialProof from '../components/Homepage/socialProof'
import Features from '../components/Homepage/features'
import Team from '../components/Homepage/team'
import Cta from '../components/Homepage/cta'
import Footer from '../components/Homepage/footer'
import Faq from '../components/Homepage/faq'

export default function Index() {
  return (
    <>
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
