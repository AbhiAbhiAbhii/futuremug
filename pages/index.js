import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useRef, useState } from 'react'
import Hero from '../components/Hero/Hero'
import SectionTwo from '../components/SectionTwo/SectionTwo'
import SectionThree from '../components/SectionThree/SectionThree'


export default function Home() {


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
      <Hero />
      <SectionTwo />
      <SectionThree />

     

     

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