

export default function SectionTwo() {
    return(
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
    )
}