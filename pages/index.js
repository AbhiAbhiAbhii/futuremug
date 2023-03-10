import Hero from '../components/Hero/Hero'
import SectionTwo from '../components/SectionTwo/SectionTwo'
import SectionThree from '../components/SectionThree/SectionThree'
import SectionFive from '../components/SectionFive/SectionFive'
import SectionFour from '../components/SectionFour/SectionFour'
import Footer from '../components/Footer/Footer'


export default function Home({mobileCheck}) {

  return (
    <>
      <Hero mobileCheck={mobileCheck}/>
      <SectionTwo mobileCheck={mobileCheck} />
      <SectionThree mobileCheck={mobileCheck} />
      <SectionFour mobileCheck={mobileCheck} />
      <SectionFive mobileCheck={mobileCheck} />
      <Footer mobileCheck={mobileCheck} />
    </>
  )
}