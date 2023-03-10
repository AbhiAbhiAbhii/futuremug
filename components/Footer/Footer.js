

export default function Footer({mobileCheck}) {
    return(
        <footer className='footer' style={{padding:mobileCheck ? '12rem 4rem':'4rem 4rem',fontSize: mobileCheck ? '2.4rem':'1rem'}}>
            <div className='footerContainer' style={{display:'flex',flexWrap:'wrap',alignItems:'center',width:'100%'}}>
                <div style={{height:'6em',width:mobileCheck ? '40%':'33.33%',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}><img style={{height:'90%',width:'90%',objectFit:'contain'}} src='/heroFuturemugLogo.png' /></div>
                <div style={{width:mobileCheck ? '60%':'44.33%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <p style={{fontFamily:'var(--Inter-font)',fontSize:'.8em',lineHeight:'144%'}}>
                    Revelado Innovations Pvt. Ltd, Ground Floor, <br/>Thejaswini, Kerala Startup Mission, Technopark Road,<br/> Thiruvananthapuram, Kerala 695582
                    </p>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:mobileCheck ? '':'flex-end',fontFamily:'var(--Inter-font)',fontSize:'.8em',width:mobileCheck ? '50%':'22.33%',padding:mobileCheck ? '2em 2em':''}}>
                    <div style={{marginRight:'.8em'}}><p>Privacy Policy</p></div>
                    <div><p>Terms of Service</p></div>
                </div>
            </div>
        </footer>
    )
}