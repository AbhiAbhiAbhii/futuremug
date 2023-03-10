

export default function Form({mobileCheck}) {
    return(
        <div style={{borderRadius:'.2em',border:'1px rgba(255, 255, 255, 0.22) solid',padding:'1.5rem 4rem',background:"#FFF",fontSize:mobileCheck ? '3rem':'1rem'}}>
            <div>
                <div style={{fontFamily:'var(--Inter-font)',fontWeight:'500',fontSize:'1.3em',padding:'1em 0'}}><p>Sign up now<br/> to schedule a free demo</p></div>
                <div className='formwrap' style={{fontFamily:'var(--Inter-font)',fontSize:'.9em',fontWeight:'400',color:'#112126'}}>
                    <form className='form' style={{}}>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',fontFamily:'var(--Inter-font)',fontSize:'.9em',fontWeight:'400',width:'100%'}}>
                            <div style={{marginRight:'1em'}}>
                                <label style={{padding:'.5em 0'}}>First Name *</label>
                                <input style={{width:'100%',height:'3em',padding:'0 .6em',background:'#FBFBFB',fontSize:'1.1em',fontFamily:'var(--Inter-font)',color:'#BFBFBF',border:'1px #DADADA solid',borderRadius:'.4em',outline:'none'}} type='text' placeholder='Elon' />
                            </div>
                            <div>
                                <label style={{padding:'.5em 0'}}>Last Name *</label>
                                <input style={{width:'100%',height:'3em',padding:'0 .6em',background:'#FBFBFB',fontSize:'1.1em',fontFamily:'var(--Inter-font)',color:'#BFBFBF',border:'1px #DADADA solid',borderRadius:'.4em',outline:'none'}} type='text' placeholder='Musk' />
                            </div>
                        </div>
                        <div style={{padding:'.5em 0'}}>
                            <label style={{padding:'.6em 0'}}>Company Name *</label>
                            <input style={{width:'100%',height:'2.8em',padding:'0 .6em',background:'#FBFBFB',fontSize:'1.1em',fontFamily:'var(--Inter-font)',color:'#BFBFBF',border:'1px #DADADA solid',borderRadius:'.4em',outline:'none'}} type='text' placeholder='Tesla' />
                        </div>
                        <div style={{padding:'.5em 0'}}>
                            <label style={{padding:'.6em 0'}}>Work Email *</label>
                            <input style={{width:'100%',height:'2.8em',padding:'0 .6em',background:'#FBFBFB',fontSize:'1.1em',fontFamily:'var(--Inter-font)',color:'#BFBFBF',border:'1px #DADADA solid',borderRadius:'.4em',outline:'none'}} type='email' placeholder='elon@tesla.com' />
                        </div>
                        <div style={{position:'relative',padding:'.5em 0'}}>
                            <label style={{padding:'.6em 0'}}>Mobile Number</label>
                            <div style={{position:'relative'}}>
                                <input style={{width:'100%',height:'2.8em',padding:'0 5em',background:'#FBFBFB',fontSize:'1.1em',fontFamily:'var(--Inter-font)',color:'#BFBFBF',border:'1px #DADADA solid',borderRadius:'.4em',outline:'none'}} type='alphanumeric' placeholder='9996540223'/>
                                <div style={{position:'absolute',height:'2.8em',background:"#EBEBEB",display:'flex',alignItems:'center',top:'50%',left:'0%',transform:'translate(0%,-50%)',padding:'0 .6em',borderTopLeftRadius:'.4em',borderBottomLeftRadius:'.4em'}}><img src='/numberForm.png' alt="" /></div>
                            </div>
                        </div>
                        <div style={{padding:'2em 0 1em 0'}}>
                            <div><button style={{width:'100%',margin:'.4em 0',height:'4em',background:'#031D1E',border:'1px #5555 solid',borderRadius:'.2em',fontFamily:'var(--Inter-font)',fontSize:'1.1em',cursor:'pointer',color:'#F6F6F6'}}><p>Schedule a Demo</p></button></div>
                            <div><button style={{width:'100%',margin:'.4em 0',height:'4em',background:'#FFF',border:'1px grey solid',borderRadius:'.2em',fontFamily:'var(--Inter-font)',fontSize:'1.1em',color:'#0B1E23',cursor:'pointer'}}><p>Reach us at +91 23456789</p></button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}