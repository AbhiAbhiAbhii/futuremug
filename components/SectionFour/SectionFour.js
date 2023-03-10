

export default function SectionFour({mobileCheck}) {

    return(
        <section className='sliderSection' style={{padding:'10rem 4rem',overflowY:'hidden'}}>
        <div className='sliderWrap' style={{display:'flex',flexDirection:mobileCheck ? 'column-reverse':'row'}}>
            <div className='sliderContentA' style={{width:mobileCheck ? '100%':'50%',position:'relative',display:'flex',flexDirection:"column",alignItems:mobileCheck ? 'center':'flex-start',justifyContent:'space-around',padding:mobileCheck ? '9rem 2rem':'0 2rem'}}>
                <div style={{fontFamily:'var(--Archivo-font)',fontSize:mobileCheck ? '8.8rem':'4rem',fontWeight:'400',lineHeight:'100%',display:'flex',width:mobileCheck ? '90%':'',padding:mobileCheck ? '14rem 0 4rem 0':''}}>
                    <p style={{display:mobileCheck ? 'none':''}}>True Partners<br/> in growth and<br/> support</p>
                    <p style={{display:mobileCheck ? '':'none',textAlign:'center',lineHeight:'110%'}}>True Partners in growth and support</p>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginInline:mobileCheck ? '2rem':'.4rem',height:mobileCheck ? '10rem':'3.3rem',width:mobileCheck ? '10rem':'3.3rem',borderRadius:'50%',background:'#A7A7A7',cursor:'pointer'}}><img style={{height:mobileCheck ? '50%':'60%',width:mobileCheck ? '50%':'60%'}} src='/leftArrow.svg' alt=""/></div>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginInline:mobileCheck ? '2rem':'.4rem',height:mobileCheck ? '10rem':'3.3rem',width:mobileCheck ? '10rem':'3.3rem',borderRadius:'50%',background:'#031D1E',cursor:'pointer'}}><img style={{height:mobileCheck ? '50%':'60%',width:mobileCheck ? '50%':'60%'}} src='/rightArrow.svg' alt=""/></div>
                </div>
            </div>
            <div className='sliderContentB' style={{width:mobileCheck ? '100%':'50%',display:mobileCheck ? 'flex':'',justifyContent: mobileCheck ? 'center':''}}>
                    <div style={{position:'relative'}}>
                        <div style={{background:'#0F738F',borderRadius:'.6rem',padding:mobileCheck ? '4rem':'3rem',color:'#FFF',width:mobileCheck ? '70rem':'43rem',height:mobileCheck ? '60rem':'28rem'}}>
                            <div style={{height:'100%',display:'flex',flexDirection:'column',justifyContent:mobileCheck ? 'space-around':''}}>
                                <div>
                                    <div style={{fontFamily:'var(--Archivo-font)',fontSize:mobileCheck ? '5.2rem':'1.7rem'}}><p>Abhilash Shibu</p></div>
                                    <div style={{fontFamily:'var(--Archivo-font)',fontSize:mobileCheck ? '2.4rem':'1.1rem',fontWeight:'100',padding:'1rem 0'}}><p>CTO, Acme Corporation</p></div>
                                </div>
                                <div style={{fontFamily:'var(--Inter-font)',fontSize:mobileCheck ? '3.2rem':'1.4rem',padding:'2rem 0',fontWeight:'100',lineHeight:'134%'}}>
                                    <p>“We will focus on adding value to our users by focussing on maximising lifestyle experiences and offering customer-focussed services both that connect our customers to the virtual and real world”</p>
                                </div>
                                <div style={{display:'flex',alignItems:'center'}}>
                                    <div style={{height:mobileCheck ? '10rem':'5.3rem',width:mobileCheck ? '10rem':'5.3rem',marginRight:'1rem'}}><img style={{height:'100%', width:'100%'}} src='/sliderPercentage.svg' alt='62%' /></div>
                                    <div style={{fontFamily:'var(--Inter-font)',fontSize:mobileCheck ? '2rem':''}}><p>INCREASE IN INTERVIEW <br/> TO SELECTION RATIO</p></div>
                                </div>
                            </div>
                        </div>
                        <div style={{background:'#FFFF',borderRadius:'.6rem',padding:mobileCheck ? '4rem':'3rem',color:'#000',width:mobileCheck ? '64rem':'38rem',height:mobileCheck ? '50rem':'24rem',position:'absolute',top:mobileCheck ? '44%':'38%',left:'5%',zIndex:'-20'}}>
                            <div style={{height:'100%',display:'flex',flexDirection:'column',justifyContent:mobileCheck ? 'space-around':''}}>
                                <div>
                                    <div style={{fontFamily:'var(--Archivo-font)',fontSize:mobileCheck ? '4.4rem':'1.7rem'}}><p>Abhilash Shibu</p></div>
                                    <div style={{fontFamily:'var(--Archivo-font)',fontSize:mobileCheck ? '2rem':'1.1rem',fontWeight:'100',padding:'1rem 0'}}><p>CTO, Acme Corporation</p></div>
                                </div>
                                <div style={{fontFamily:'var(--Inter-font)',fontSize:mobileCheck ? '2.6rem':'1.4rem',padding:'0rem 0',fontWeight:'100',lineHeight:'134%'}}>
                                    <p>“We will focus on adding value to our users by focussing on maximising lifestyle experiences and offering customer-focussed services both that connect our customers to the virtual and real world”</p>
                                </div>
                                <div style={{display:'flex',alignItems:'center'}}>
                                    <div style={{height:mobileCheck ? '8rem':'4rem',width:mobileCheck ? '8rem':'4rem',marginRight:'1rem'}}><img style={{height:'100%', width:'100%'}} src='/sliderPercentage2.svg' alt='62%' /></div>
                                    <div style={{fontFamily:'var(--Inter-font)',fontSize:mobileCheck ? '1.6rem':''}}><p>INCREASE IN INTERVIEW <br/> TO SELECTION RATIO</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
     </section> 
    )
}