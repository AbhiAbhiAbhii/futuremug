import Form from "../Form/Form"


export default function SectionFive({mobileCheck}) {

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

    return(
        <section className='formSection' style={{padding:mobileCheck ? '2rem 0':'2rem 4rem'}}>
        <div style={{padding:'0 4rem'}}>
            <div style={{fontFamily:'var(--Archivo-font)',fontSize:mobileCheck ? '8rem':'3rem',textAlign:'center',lineHeight:'102%',padding:'4rem 0'}}>
                <p>Ready to scale up 🚀 <br/>your workforce ?</p>
            </div>
            <div style={{background:'#031D1E',borderRadius:'.7rem',padding:mobileCheck ? '10rem 4rem':'4rem'}}>
                <div className='formContainer' style={{display:'flex',flexDirection:mobileCheck ? 'column':''}}>
                    <div className='formContentA' style={{color:'#FFF',width:mobileCheck ? '100%':'40%',padding:'.8rem 0 0 0'}}>
                        <div style={{display:mobileCheck ? 'flex':'',flexDirection:mobileCheck ? 'column':'',alignItems:mobileCheck ? 'center':''}}>
                            <div style={{display:mobileCheck ? 'flex':'',alignItems:mobileCheck ? 'center':'',justifyContent:mobileCheck ? 'center':'',padding:mobileCheck ? '4rem 0':''}}>
                                <div style={{width: mobileCheck ? '16rem':'4.9rem',height: mobileCheck ? '14.5rem':'4.5rem',marginRight:mobileCheck ? '4rem':''}}><img style={{height:'100%',width:'100%'}} src='/formLogo.svg' alt='FormLogo' /></div>
                                <div className='text-body-l' style={{lineHeight:'120%',padding:'1rem 0',fontSize:mobileCheck ? '4rem':''}}><p>Talk to an <br/>account manager now</p></div>
                            </div>
                            <div style={{fontFamily:'var(--Inter-font)',fontWeight:'400',fontSize:mobileCheck ? '2.6rem':'.88rem',padding:mobileCheck ? '3rem 0':'1.4rem 0',borderBottom:'.8px rgba(240, 212, 135, 0.3) solid',width:'fit-content',textAlign:mobileCheck ? 'center':''}}><p>Get Top technical talent matched to your work<br/> culture. Talk to our experts today, and find a <br/>solution tailored to your needs. Build a strong and <br/>capable team with Futuremug to drive your<br/> business forward. </p></div>
                        </div>

                        <div style={{padding:mobileCheck ? '6rem 0':'',display:mobileCheck ? 'flex':'',flexDirection:mobileCheck ? 'column':'',alignItems:mobileCheck ? 'center':'',fontSize:mobileCheck ? '3rem':'1rem'}}>
                            <div style={{fontFamily:'var(--Inter-font)',fontSize:'.88em',fontWeight:'600',padding:'2em 0',textAlign:mobileCheck ? 'left':'',width:mobileCheck ?'84%':''}}><p>Here's what we'll discuss:</p></div>
                            <div style={{display:mobileCheck ? 'flex':'',flexDirection:mobileCheck ? 'column':''}}>
                                {
                                    discussContent.map((data,i) => {
                                        return(
                                            <div key={i} style={{display:'flex',color:'#FFF',padding:'.2em 0',margin:"1rem 0",alignItems:'center'}}>
                                                <div style={{height:'1.1em',width:'1.1em',marginRight:'1em', display:'flex',alignItems:'center',justifyContent:'center',background:'#F0D487',borderRadius:'20em'}}>
                                                    <div style={{height:'80%',width:'80%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                                                        <img src='/formTick.svg' alt='tick' />
                                                    </div>
                                                </div>
                                                <div style={{fontFamily:'var(--Inter-font)',fontSize:'1.1em',fontWeight:'400'}}><p>{data.description}</p></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='formContentB' style={{width:mobileCheck ? '100%':'60%',padding:mobileCheck ? '2rem 2rem':'0rem 2rem'}}>
                        <Form mobileCheck={mobileCheck} />
                    </div>
                </div>
            </div>
        </div>
     </section>
    )
}