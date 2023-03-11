/* eslint-disable @next/next/no-img-element */


export default function Footer({mobileCheck}) {
    return(
        <footer className='footer' style={{padding:mobileCheck ? '12rem 4rem':'4rem 4rem',fontSize: mobileCheck ? '2.8rem':'1rem'}}>
            <div className='footerContainer' style={{display:'flex',flexWrap:mobileCheck ? '':'wrap',flexDirection:mobileCheck ? 'column':'',alignItems:'center',justifyContent:mobileCheck ? 'center':'',width:'100%'}}>
                <div style={{height:'6em',width:mobileCheck ? '':'33.33%',display:'flex',alignItems:'center',justifyContent:'center'}}><img style={{height:'90%',width:'90%',objectFit:'contain'}} src='/heroFutureMugLogo.png' alt="" /></div>
                <div style={{width:mobileCheck ? '':'44.33%',display:'flex',alignItems:'center',justifyContent:'center',textAlign:mobileCheck ? 'center':'',padding:mobileCheck ? '4rem 0':''}}>
                    <p style={{fontFamily:'var(--Inter-font)',fontSize:'1.1em',lineHeight:'144%'}}>
                    Revelado Innovations Pvt. Ltd, Ground Floor, <br/>Thejaswini, Kerala Startup Mission, Technopark Road,<br/> Thiruvananthapuram, Kerala 695582
                    </p>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:mobileCheck ? '':'flex-end',fontFamily:'var(--Inter-font)',fontSize:'.8em',width:mobileCheck ? '':'22.33%',padding:mobileCheck ? '2em 2em':''}}>
                    <div style={{marginRight:mobileCheck ? '2em':'.8em'}}><a href="https://www.futuremug.co.in/privacypolicy" target='_blank'>Privacy Policy</a></div>
                    <div><a href="https://www.futuremug.co.in/termsandconditions" target='_blank'>Terms of Service</a></div>
                </div>
            </div>
        </footer>
    )
}