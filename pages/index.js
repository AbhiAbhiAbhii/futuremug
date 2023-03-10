import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useRef, useState } from 'react'


export default function Home() {

    const [accordion, setAccordion] = useState(false);

    let activeClass = accordion ? 'active':''

    const alertRef = useRef();
    const alertHandle = () => {
        alertRef.current.style.display = 'none'
    }

    const accordionContent = [
        {
            question: 'Item point 1',
            description: 'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
            CTA: 'Book a Demo',
            smalldescription: 'Our TAT Score is 231% lower than the rest',
        },
        {
            question: 'Item point 2',
            description: 'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
            CTA: 'Book a Demo',
            smalldescription: 'Our TAT Score is 231% lower than the rest'
        },
        {
            question: 'Item point 3',
            description: 'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
            CTA: 'Book a Demo',
            smalldescription: 'Our TAT Score is 231% lower than the rest'
        },
         {
            question: 'Item point 3',
            description: 'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
            CTA: 'Book a Demo',
            smalldescription: 'Our TAT Score is 231% lower than the rest'
        },
        
    ]

    const discussContent = [
        {
            description: 'Platform Introduction',
        },
        {
            description: 'Corporate Customizations',
        },
        {
            description: 'Applicant Tracking System (ATS)',
        },
        {
            description: 'Assessment & Interview Process',
        },
        {
            description: 'Setting up a dedicated account manager'
        },

    ]

  return (
    <>
      <main className='hero' style={{overflowY:'hidden'}}>
      <div ref={alertRef} className='alert' style={{padding:'.8rem 0rem',overflow:'hidden'}}>
          <div className='alertContainer' style={{fontFamily:'var(--Inter-font)',display:'flex',width:'40%',alignItems:'center',justifyContent:'space-between',marginInline:'auto'}}>
            <div className='alertTitle'><p style={{fontSize:'1rem'}}>Schedule a demo with us for your custom requirment.</p></div>
            <div className='alertCTA'><button style={{cursor:'pointer',fontSize:'.8rem',border:'none',color:'#242424',height:'2.4rem',width:'8.6rem',fontWeight:'600',background: '#F0D487',borderRadius:'20rem',outline:'none',display:'flex',alignItems:'center',justifyContent:'center'}}><div style={{borderBottom:'1.4px #161616 solid'}}><p style={{fontWeight:'600'}}>Schedule a call</p></div></button></div>
            <div className='close' onClick={alertHandle} style={{cursor:'pointer'}}><p style={{fontFamily:'var(--Inter-font)'}}>X</p></div>
          </div>
        </div>
      <section className='heroWrapper' style={{padding:'0 4rem'}}>

        <div style={{padding:'6rem 0',display:'flex'}}>
            <div className='heroContentA' style={{width:'55%'}}>
            <div className='heroLogo' style={{width:'fit-content',padding:'2.6rem 0'}}>
                <div className='heroImageLogo' style={{width:'16rem',height:'3.5rem'}}>
                    <img src={'/heroFutureMugLogo.png'} alt='futuremug' />
                </div>
            </div>
            <div className='heroContentTitle text-XXL' style={{width:'fit-content'}}><p>We help hiring teams <br/>recruit seamlessly.</p></div>
            <div className='heroContentDescription text-body-l' style={{padding:'2.75rem 0'}}>futuremug's platform lets you spend less time on hiring <br/>and assessing candidates, and more time growing your<br/> business</div>
            <div className='ctaContainer' style={{display:'flex'}}>
                <div className='CTA talk text-body-l' style={{cursor:'pointer'}}> Talk to us</div>
                <div className='CTA schedule text-body-l' style={{cursor:'pointer'}}> Schedule a Demo</div>
            </div>
            </div>

            <div className='heroContentB' style={{width:'45%',display:'flex',justifyContent:'flex-end'}}>
            <div className='heroImage' style={{height:'32rem',width:'40rem'}}>
                <img src='/heroImage.png' style={{height:'100%',width:'100%'}} alt='HeroImage' />
            </div>
            </div>
        </div>
      </section>
     </main>

     <section className='sectionTwo' style={{padding:'1rem 4rem 5rem 4rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div className='sectionTwoEyeBrow text-body-l' style={{padding:'2rem 0'}}><p style={{textTransform:'uppercase', color:'#031C1E',fontSize:'1rem'}}>efficient hiring teams at the top companies rely on futuremug</p></div>
            <div className='sectionTwoLogos' style={{display:'flex'}}>
                <div className='logoContainer'>
                    <img src='/ALogo.svg' alt='A'/>
                </div>
                <div className='logoContainer'>
                    <img src='/Samsung.svg' alt='A'/>
                </div>
                <div className='logoContainer'>
                    <img src='/HP.svg' alt='A'/>
                </div>
                <div className='logoContainer'>
                    <img src='/Continental.svg' alt='A'/>
                </div>
                <div className='logoContainer'>
                    <img src='/Toyota.svg' alt='A'/>
                </div>
                <div className='logoContainer'>
                    <img src='/SAP.png' alt='A'/>
                </div>
            </div>
        </div>
     </section>

     <section className='sectionThree' style={{padding:'2rem 4rem'}}>
            <div className='' style={{background:'linear-gradient(124.48deg, #E2E6E2 0%, #F1F2F1 71.42%)',padding:'4rem 3rem'}}>
                <div className='secThreeContentWrap' style={{display:'flex'}}>
                    <div className='secThreeContentA' style={{width:'50%'}}>
                                {
                                    accordionContent.map((accord,i) => {
                                        return(
                                            <>
                                            <div key={i} className='accordionContainer' style={{border:'1px #9999 solid',borderRadius:'.3rem',padding:'1rem 1.5rem',background:'#FFFF',width:'80%',margin:'0 0 1rem 0'}}>
                                                <div className='accordion-content' style={{}}>  
                                                    <div onClick={() => setAccordion(i,console.log(i))} style={{display:'flex',alignItems:'center', justifyContent:'space-between',cursor:'pointer'}}>
                                                        <div className='text-body-l' style={{fontWeight:'600',fontSize:'1.1rem',padding:'.4rem 0'}}>
                                                            <p>{accord.question}</p>
                                                        </div>
                                                        <div className={ accordion == i ? 'activeArrow' : 'inactiveArrow'}>
                                                            <img src='/accordionArrow.svg' alt='arrow' />
                                                        </div>
                                                    </div>
                                                    <div className={ accordion == i ? `${activeClass}` : 'inactive'} style={{width:'31rem',overflow:'hidden'}}>
                                                        <div className='text-body-l' style={{fontSize:'1.1rem',fontWeight:'400',color:'rgba(60, 60, 67, 0.85)',padding:'1rem 0'}}>
                                                            <p>{accord.description}</p>
                                                        </div>
                                                        <div style={{display:'block'}}>
                                                            <button className='text-body-l' style={{display:'block',width:'100%',height:'3.4rem',background:'#031D1E',border:'1px #5555 solid',borderRadius:'.3rem',color:'#60D185'}}>{accord.CTA}</button>
                                                        </div>
                                                        <div style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'.8rem 0'}}>
                                                        <div style={{marginRight:'.2rem'}}><img src='/accordionTick.svg' alt='TICK' /></div>
                                                        <div className='text-body-l'><p style={{fontSize:'.9rem',fontWeight:'400'}}>{accord.smalldescription}</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    })
                                }
                    </div>
                    <div className='secThreeContentB' style={{width:'50%'}}>
                        <div className='secThreeImgContainer' style={{width:'39rem',height:'35rem'}}>
                            <img src='/sectionThreeImage.png' alt='image' style={{height:'100%',width:'100%'}} />
                        </div>
                    </div>
                </div>
            </div>
     </section>

     <section className='sliderSection' style={{padding:'10rem 4rem',overflowY:'hidden'}}>
        <div className='sliderWrap' style={{display:'flex'}}>
            <div className='sliderContentA' style={{width:'50%',position:'relative',display:'flex',alignItems:'center',padding:'0 2rem'}}>
                <div style={{fontFamily:'var(--Archivo-font)',fontSize:'4rem',fontWeight:'400',lineHeight:'100%'}}>
                    <p>True Partners<br/> in growth and<br/> support</p>
                </div>
                <div style={{position:'absolute',bottom:'0%'}}><img src='/leftArrow.svg'/></div>
                <div style={{position:'absolute',bottom:'-.2%',left:'14%'}}><img src='/rightArrow.svg'/></div>
            </div>
            <div className='sliderContentB' style={{position:'relative',width:'50%'}}>
                    <div style={{background:'#0F738F',borderRadius:'.6rem',padding:'3rem',color:'#FFF',width:'43rem',height:'28rem'}}>
                        <div style={{height:'100%',display:'flex',flexDirection:'column'}}>
                            <div>
                                <div style={{fontFamily:'var(--Archivo-font)',fontSize:'1.7rem'}}><p>Abhilash Shibu</p></div>
                                <div style={{fontFamily:'var(--Archivo-font)',fontSize:'1.1rem',fontWeight:'100',padding:'1rem 0'}}><p>CTO, Acme Corporation</p></div>
                            </div>
                            <div style={{fontFamily:'var(--Inter-font)',fontSize:'1.4rem',padding:'2rem 0',fontWeight:'100',lineHeight:'134%'}}>
                                <p>“We will focus on adding value to our users by focussing on maximising lifestyle experiences and offering customer-focussed services both that connect our customers to the virtual and real world”</p>
                            </div>
                            <div style={{display:'flex',alignItems:'center'}}>
                                <div style={{height:'5.3rem',width:'5.3rem',marginRight:'1rem'}}><img style={{height:'100%', width:'100%'}} src='/sliderPercentage.svg' alt='62%' /></div>
                                <div style={{fontFamily:'var(--Inter-font)'}}><p>INCREASE IN INTERVIEW <br/> TO SELECTION RATIO</p></div>
                            </div>
                        </div>
                    </div>
                    <div style={{background:'#FFFF',borderRadius:'.6rem',padding:'3rem',color:'#000',width:'38rem',height:'24rem',position:'absolute',top:'38%',left:'5%',zIndex:'-10'}}>
                        <div style={{height:'100%',display:'flex',flexDirection:'column'}}>
                            <div>
                                <div style={{fontFamily:'var(--Archivo-font)',fontSize:'1.7rem'}}><p>Abhilash Shibu</p></div>
                                <div style={{fontFamily:'var(--Archivo-font)',fontSize:'1.1rem',fontWeight:'100',padding:'1rem 0'}}><p>CTO, Acme Corporation</p></div>
                            </div>
                            <div style={{fontFamily:'var(--Inter-font)',fontSize:'1.4rem',padding:'0rem 0',fontWeight:'100',lineHeight:'134%'}}>
                                <p>“We will focus on adding value to our users by focussing on maximising lifestyle experiences and offering customer-focussed services both that connect our customers to the virtual and real world”</p>
                            </div>
                            <div style={{display:'flex',alignItems:'center'}}>
                                <div style={{height:'4rem',width:'4rem',marginRight:'1rem'}}><img style={{height:'100%', width:'100%'}} src='/sliderPercentage2.svg' alt='62%' /></div>
                                <div style={{fontFamily:'var(--Inter-font)'}}><p>INCREASE IN INTERVIEW <br/> TO SELECTION RATIO</p></div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
     </section>

     <section className='formSection' style={{padding:'2rem 4rem'}}>
        <div style={{padding:'0 4rem'}}>
            <div style={{fontFamily:'var(--Archivo-font)',fontSize:'3rem',textAlign:'center',lineHeight:'102%',padding:'4rem 0'}}>
                <p>Ready to scale up 🚀 <br/>your workforce ?</p>
            </div>
            <div style={{background:'#031D1E',borderRadius:'.7rem',padding:'4rem'}}>
                <div className='formContainer' style={{display:'flex'}}>
                    <div className='formContentA' style={{color:'#FFF',width:'40%',padding:'.8rem 0 0 0'}}>
                        <div>
                            <div><img src='/formLogo.svg' alt='FormLogo' /></div>
                            <div className='text-body-l' style={{lineHeight:'120%',padding:'1rem 0'}}><p>Talk to an <br/>account manager now</p></div>
                            <div style={{fontFamily:'var(--Inter-font)',fontWeight:'400',fontSize:'.88rem',padding:'1.4rem 0',borderBottom:'.8px rgba(240, 212, 135, 0.3) solid',width:'fit-content'}}><p>Get Top technical talent matched to your work<br/> culture. Talk to our experts today, and find a <br/>solution tailored to your needs. Build a strong and <br/>capable team with Futuremug to drive your<br/> business forward. </p></div>
                        </div>

                        <div>
                            <div style={{fontFamily:'var(--Inter-font)',fontSize:'.88rem',fontWeight:'600',padding:'2rem 0'}}><p>Here's what we'll discuss:</p></div>
                            <div>
                                {
                                    discussContent.map((data,i) => {
                                        return(
                                            <div key={i} style={{display:'flex',color:'#FFF',padding:'.2rem 0',margin:"1rem 0",alignItems:'center'}}>
                                                <div style={{height:'1.1rem',width:'1.1rem',marginRight:'1rem', display:'flex',alignItems:'center',justifyContent:'center',background:'#F0D487',borderRadius:'20rem'}}>
                                                    <div style={{height:'80%',width:'80%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                                        <img src='/formTick.svg' alt='tick' />
                                                    </div>
                                                </div>
                                                <div style={{fontFamily:'var(--Inter-font)',fontSize:'1.1rem',fontWeight:'400'}}><p>{data.description}</p></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='formContentB' style={{width:'60%',padding:'0rem 2rem'}}>
                        <div style={{borderRadius:'.2rem',border:'1px rgba(255, 255, 255, 0.22) solid',padding:'1.5rem 4rem',background:"#FFF"}}>
                            <div>
                                <div style={{fontFamily:'var(--Inter-font)',fontWeight:'500',fontSize:'1.3rem',padding:'1rem 0'}}><p>Sign up now<br/> to schedule a free demo</p></div>
                                <div className='formwrap' style={{fontFamily:'var(--Inter-font)',fontSize:'.9rem',fontWeight:'400',color:'#112126'}}>
                                    <form className='form' style={{}}>
                                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',fontFamily:'var(--Inter-font)',fontSize:'.9rem',fontWeight:'400',width:'100%'}}>
                                            <div style={{marginRight:'1rem'}}>
                                                <label style={{padding:'.5rem 0'}}>First Name *</label>
                                                <input style={{width:'16.2rem',height:'3rem',padding:'0 .6rem',background:'#FBFBFB',fontSize:'1.1rem',fontFamily:'var(--Inter-font)',color:'#BFBFBF',border:'1px #DADADA solid',borderRadius:'.4rem',outline:'none'}} type='text' placeholder='Elon' />
                                            </div>
                                            <div>
                                                <label style={{padding:'.5rem 0'}}>Last Name *</label>
                                                <input style={{width:'16.2rem',height:'3rem',padding:'0 .6rem',background:'#FBFBFB',fontSize:'1.1rem',fontFamily:'var(--Inter-font)',color:'#BFBFBF',border:'1px #DADADA solid',borderRadius:'.4rem',outline:'none'}} type='text' placeholder='Musk' />
                                            </div>
                                        </div>
                                        <div style={{padding:'.5rem 0'}}>
                                            <label style={{padding:'.6rem 0'}}>Company Name *</label>
                                            <input style={{width:'100%',height:'2.8rem',padding:'0 .6rem',background:'#FBFBFB',fontSize:'1.1rem',fontFamily:'var(--Inter-font)',color:'#BFBFBF',border:'1px #DADADA solid',borderRadius:'.4rem',outline:'none'}} type='text' placeholder='Tesla' />
                                        </div>
                                        <div style={{padding:'.5rem 0'}}>
                                            <label style={{padding:'.6rem 0'}}>Work Email *</label>
                                            <input style={{width:'100%',height:'2.8rem',padding:'0 .6rem',background:'#FBFBFB',fontSize:'1.1rem',fontFamily:'var(--Inter-font)',color:'#BFBFBF',border:'1px #DADADA solid',borderRadius:'.4rem',outline:'none'}} type='email' placeholder='elon@tesla.com' />
                                        </div>
                                        <div style={{position:'relative',padding:'.5rem 0'}}>
                                            <label style={{padding:'.6rem 0'}}>Mobile Number</label>
                                            <div style={{position:'relative'}}>
                                                <input style={{width:'100%',height:'2.8rem',padding:'0 5rem',background:'#FBFBFB',fontSize:'1.1rem',fontFamily:'var(--Inter-font)',color:'#BFBFBF',border:'1px #DADADA solid',borderRadius:'.4rem',outline:'none'}} type='alphanumeric' placeholder='9996540223'/>
                                                <div style={{position:'absolute',height:'2.8rem',background:"#EBEBEB",display:'flex',alignItems:'center',top:'50%',left:'0%',transform:'translate(0%,-50%)',padding:'0 .6rem',borderTopLeftRadius:'.4rem',borderBottomLeftRadius:'.4rem'}}><img src='/numberForm.png' /></div>
                                            </div>
                                        </div>
                                        <div style={{padding:'2rem 0 1rem 0'}}>
                                            <div><button style={{width:'100%',margin:'.4rem 0',height:'4rem',background:'#031D1E',border:'1px #5555 solid',borderRadius:'.2rem',fontFamily:'var(--Inter-font)',fontSize:'1.1rem',cursor:'pointer'}}><p>Schedule a Demo</p></button></div>
                                            <div><button style={{width:'100%',margin:'.4rem 0',height:'4rem',background:'#FFF',border:'1px grey solid',borderRadius:'.2rem',fontFamily:'var(--Inter-font)',fontSize:'1.1rem',color:'#0B1E23',cursor:'pointer'}}><p>Reach us at +91 23456789</p></button></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
                                
     <footer className='footer' style={{padding:'4rem 4rem'}}>
        <div className='footerContainer' style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{height:'6rem',width:'23rem',display:'flex',alignItems:'center',justifyContent:'center'}}><img style={{height:'90%',width:'90%',objectFit:'contain'}} src='/heroFutureMugLogo.png' /></div>
            <div>
                <p style={{fontFamily:'var(--Inter-font)',fontSize:'.8rem',lineHeight:'144%'}}>
                Revelado Innovations Pvt. Ltd, Ground Floor, <br/>Thejaswini, Kerala Startup Mission, Technopark Road,<br/> Thiruvananthapuram, Kerala 695582
                </p>
            </div>
            <div style={{display:'flex',fontFamily:'var(--Inter-font)',fontSize:'.8rem'}}>
                <div style={{marginRight:'.8rem'}}><p>Privacy Policy</p></div>
                <div><p>Terms of Service</p></div>
            </div>
        </div>
     </footer>
    </>
  )
}