import { useRef, useState } from 'react'


export default function Hero() {

    const alertRef = useRef();
    const alertHandle = () => {
        alertRef.current.style.display = 'none'
    }

    return(
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
    )
}