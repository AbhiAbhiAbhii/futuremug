/* eslint-disable @next/next/no-img-element */
import { useRef, useState, useEffect } from 'react'

export default function Hero({mobileCheck}) {

    const alertRef = useRef();
    const alertHandle = () => {
        alertRef.current.style.display = 'none'
    }

    return(
        <main className='hero' style={{overflowY:'hidden'}}>
            <div ref={alertRef} className='alert' style={{padding:mobileCheck?'4rem 0':'.8rem 0rem',overflow:'hidden'}}>
                <div className='alertContainer' style={{fontFamily:'var(--Inter-font)',display:'flex',width: mobileCheck?'90%':'40%',alignItems:'center',justifyContent: mobileCheck?'space-evenly':'space-between',marginInline:'auto'}}>
                    <div className='alertTitle' style={{width:mobileCheck?'48%':''}}><p style={{fontSize: mobileCheck? '3rem':'1rem'}}>Schedule a demo with us for your custom requirment.</p></div>
                    <div className='alertCTA'>
                        <button style={{cursor:'pointer',fontSize: mobileCheck?'3rem':'.8rem',border:'none',color:'#242424',height:mobileCheck?'9rem':'2.4rem',padding:mobileCheck?'0':'',width: mobileCheck?'28rem':'8.6rem',fontWeight:'600',background: '#F0D487',borderRadius:'20rem',outline:'none',display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <div style={{borderBottom:'1.4px #161616 solid'}}><p style={{fontWeight:'600'}}>Schedule a call</p></div>
                            </button></div>
                    <div className='close' onClick={alertHandle} style={{cursor:'pointer'}}><p style={{fontFamily:'var(--Inter-font)',fontSize: mobileCheck?'3.6rem':''}}>X</p></div>
                </div>
                </div>
            <section className='heroWrapper' style={{padding:'0 4rem'}}>

                <div style={{padding: mobileCheck?'12rem 0':'6rem 0',display:'flex',flexDirection: mobileCheck?'column':''}}>
                    <div className='heroContentA' style={{width: mobileCheck?'100%':'55%',display: mobileCheck?'flex':'',alignItems:mobileCheck?'center':'',flexDirection:mobileCheck?'column':''}}>
                    <div className='heroLogo' style={{width:mobileCheck?'fit-content':'fit-content',padding: mobileCheck?'1.6rem 0':'2.6rem 0'}}>
                        <div className='heroImageLogo' style={{width:mobileCheck?'60rem':'16rem',height: mobileCheck?'8rem':'3.5rem'}}>
                            <img src={'/heroFutureMugLogo.png'} alt="" />
                        </div>
                    </div>
                    <div className='heroContentTitle text-XXL' style={{width:'fit-content',fontSize: mobileCheck? '8.8rem':'',textAlign:mobileCheck?'center':'',padding:mobileCheck ? '2rem 0':''}}><p>We help hiring teams <br/>recruit seamlessly.</p></div>
                    <div className='heroContentDescription text-body-l' style={{padding:'2.75rem 0',fontSize:mobileCheck ? '2.6rem':'',textAlign:mobileCheck ? 'center':'',padding:mobileCheck ? '1rem 0':''}}><p>futuremug's platform lets you spend less time on hiring <br/>and assessing candidates, and more time growing your<br/> business</p></div>
                    <div className='ctaContainer' style={{display:'flex',padding: mobileCheck? '6rem 0':''}}>
                        <div className='CTA talk text-body-l' style={{cursor:'pointer',width:mobileCheck? '30rem':'',height: mobileCheck? '10rem':'',fontSize:mobileCheck ? '4rem':''}}> <p>Talk to us</p></div>
                        <div className='CTA schedule text-body-l' style={{cursor:'pointer',width:mobileCheck? '42rem':'',height: mobileCheck? '10rem':'',fontSize:mobileCheck ? '4rem':''}}><p>Schedule a Demo</p></div>
                    </div>
                    </div>

                    <div className='heroContentB' style={{width:mobileCheck? '100%':'45%',display:'flex',justifyContent:mobileCheck ? 'center':'flex-end'}}>
                    <div className='heroImage' style={{height:mobileCheck? '100%':'32rem',width:mobileCheck? '90%':'40rem'}}>
                        <img src='/heroImage.png' style={{height:'100%',width:'100%'}} alt="" />
                    </div>
                    </div>
                </div>
            </section>
     </main>
    )
}