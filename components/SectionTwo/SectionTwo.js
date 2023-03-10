import { useRef, useState, useEffect } from 'react'


export default function SectionTwo({mobileCheck}) {


    return(
        <section className='sectionTwo' style={{padding:'1rem 4rem 5rem 4rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div className='sectionTwoEyeBrow text-body-l' style={{padding:mobileCheck ? '2rem 0':'2rem 0'}}><p style={{textTransform:'uppercase', color:'#031C1E',fontSize:mobileCheck ? '2rem':'1rem',textAlign:mobileCheck ? 'center':'',lineHeight:mobileCheck? '130%':''}}>Efficient hiring teams at the top companies rely on futuremug</p></div>
                <div className='sectionTwoLogos' style={{display:'flex',flexWrap:'wrap',overflow:'hidden',width:'100%'}}>
                    <div className='logoContainer' style={{width:mobileCheck ? '14%':'',margin:mobileCheck ? '4rem 2rem':''}}>
                        <img src='/ALogo.svg' alt='A'/>
                    </div>
                    <div className='logoContainer' style={{width:mobileCheck ? '14%':''}}>
                        <img src='/Samsung.svg' alt='A'/>
                    </div>
                    <div className='logoContainer' style={{width:mobileCheck ? '14%':''}}>
                        <img src='/HP.svg' alt='A'/>
                    </div>
                    <div className='logoContainer' style={{width:mobileCheck ? '14%':''}}>
                        <img src='/Continental.svg' alt='A'/>
                    </div>
                    <div className='logoContainer' style={{width:mobileCheck ? '14%':''}}>
                        <img src='/Toyota.svg' alt='A'/>
                    </div>
                    <div className='logoContainer' style={{width:mobileCheck ? '14%':''}}>
                        <img src='/SAP.png' alt='A'/>
                    </div>
                </div>
            </div>
        </section>
    )
}