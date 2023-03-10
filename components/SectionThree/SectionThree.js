/* eslint-disable @next/next/no-img-element */
import { useRef, useState, useEffect } from 'react'


export default function SectionThree({mobileCheck}) {

    const [accordion, setAccordion] = useState(false);

    let activeClass = accordion ? 'active':''

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
            question: 'Item point 4',
            description: 'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
            CTA: 'Book a Demo',
            smalldescription: 'Our TAT Score is 231% lower than the rest'
        },
        {
            question: 'Item point 5',
            description: 'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
            CTA: 'Book a Demo',
            smalldescription: 'Our TAT Score is 231% lower than the rest'
        },
        {
            question: 'Item point 6',
            description: 'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
            CTA: 'Book a Demo',
            smalldescription: 'Our TAT Score is 231% lower than the rest'
        },
        
    ]

    return(
        <section className='sectionThree' style={{padding:'2rem 4rem'}}>
            <div className='' style={{background:'linear-gradient(124.48deg, #E2E6E2 0%, #F1F2F1 71.42%)',padding:mobileCheck ? '8rem 0':'4rem 3rem'}}>
                <div className='secThreeContentWrap' style={{display:'flex',flexDirection:mobileCheck ? 'column-reverse':'',alignItems:mobileCheck? 'center':''}}>
                    <div className='secThreeContentA' style={{width:mobileCheck ? '100%':'50%',display:mobileCheck ? 'flex':'',flexDirection:mobileCheck ? 'column':'',alignItems:mobileCheck ? 'center':''}}>
                                {
                                    accordionContent.map((accord,i) => {
                                        return(
                                            <>
                                            <div key={i} className='accordionContainer' style={{border:'1px #9999 solid',borderRadius:'.3rem',padding:mobileCheck ? '4rem 4.5rem':'1rem 1.5rem',background:'#FFFF',width:'80%',margin:mobileCheck ? '0 0 3rem 0':'0 0 1rem 0'}}>
                                                <div className='accordion-content' style={{}}>  
                                                    <div onClick={() => setAccordion(i)} style={{display:'flex',alignItems:'center', justifyContent:'space-between',cursor:'pointer'}}>
                                                        <div className='text-body-l' style={{fontWeight:'600',fontSize:mobileCheck ? '4rem':'1.1rem',padding:'.4rem 0'}}>
                                                            <p>{accord.question}</p>
                                                        </div>
                                                        <div className={ accordion == i ? 'activeArrow' : 'inactiveArrow'}>
                                                            <img src='/accordionArrow.svg' alt="" />
                                                        </div>
                                                    </div>
                                                    <div className={ accordion == i ? `${activeClass}` : 'inactive'} style={{width:mobileCheck? '':'31rem',overflow:'hidden'}}>
                                                        <div className='text-body-l' style={{fontSize:mobileCheck? '3rem':'1.1rem',fontWeight:'400',color:'rgba(60, 60, 67, 0.85)',padding:mobileCheck ? '4rem 0':'1rem 0'}}>
                                                            <p>{accord.description}</p>
                                                        </div>
                                                        <div style={{display:'block'}}>
                                                            <button className='text-body-l' style={{display:'block',width:'100%',height:mobileCheck? '10rem':'3.4rem',background:'#031D1E',border:'1px #5555 solid',borderRadius:'.3rem',color:'#60D185',fontSize:mobileCheck ? '3.4rem':''}}>{accord.CTA}</button>
                                                        </div>
                                                        <div style={{display:'flex',alignItems:'center',justifyContent:'center',padding:mobileCheck ? '4rem 0':'.8rem 0'}}>
                                                            <div style={{marginRight:mobileCheck? '2rem':'.2rem',height:mobileCheck? '4rem':'1.8rem',width:mobileCheck ? '4rem':'1.8rem',borderRadius:'50%',background:'#031D1E',display:'flex',alignItems:'center',justifyContent:'center'}}><img style={{height:mobileCheck? '60%':'60%',width:mobileCheck? '60%':'60%',objectFit:'contain'}} src='/accordionTick.svg' alt="" /></div>
                                                            <div className='text-body-l'><p style={{fontSize:mobileCheck ? '2rem':'.9rem',fontWeight:'400'}}>{accord.smalldescription}</p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    })
                                }
                    </div>
                    <div className='secThreeContentB' style={{width:mobileCheck ? '100%':'50%',display:mobileCheck ? 'flex':'',justifyContent:mobileCheck ? 'center':'',padding:mobileCheck ? '0 0 8rem 0':''}}>
                        <div className='secThreeImgContainer' style={{width:mobileCheck? '90%':'39rem',height:mobileCheck ? '90%':'35rem'}}>
                            <img src='/sectionThreeImage.png' alt="" style={{height:'100%',width:'100%'}} />
                        </div>
                    </div>
                </div>
            </div>
     </section>
    )
}