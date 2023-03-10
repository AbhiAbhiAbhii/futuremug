import { useRef, useState } from 'react'


export default function SectionThree() {

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
        
    ]

    return(
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
    )
}