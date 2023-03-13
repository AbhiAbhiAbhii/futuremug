/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from "react"

export default function Form({mobileCheck}) {

    const fNameRef = useRef();
    const lNameRef = useRef();
    const compNameRef = useRef();
    const eMailRef = useRef();
    const mobNumbRef = useRef();

    const [firstName,setFirstName] = useState(false);
    const [lastName, setLastName] = useState(false)
    const [companyName, setCompanyName] = useState(false)
    const [email, setEmail] = useState(false);
    const firstNameFocus = () => {
        setFirstName(true);
    };
    const lastNameFocus = () => {
        setLastName(true);
    }
    const companyFocus = () => {
        setCompanyName(true);
    }
    const emailFocus = () => {
        setEmail(true);
    }

    //  const handleSubmit = (e) => {
    //      e.preventDefault();
    //      const data = new FormData(e.target);
    //      console.log(Object.fromEntries(data.entries()));
    //  }   

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const data = new FormData(e.target);
        console.log(Object.fromEntries(data.entries()));
    }

    return(
        <div style={{borderRadius:'.2em',border:'1px rgba(255, 255, 255, 0.22) solid',padding:'1.5rem 4rem',background:"#FFF",fontSize:mobileCheck ? '3rem':'1rem'}}>
            <div>
                <div style={{fontFamily:'var(--Inter-font)',fontWeight:'500',fontSize:'1.3em',padding:'1em 0'}}><p>Sign up now<br/> to schedule a free demo</p></div>
                <div className='formwrap' style={{fontFamily:'var(--Inter-font)',fontSize:'.9em',fontWeight:'400',color:'#112126'}}>
                    <form onSubmit={handleSubmit} className='form'>
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',fontFamily:'var(--Inter-font)',fontSize:'.9em',fontWeight:'400',width:'100%'}}>
                            <div style={{marginRight:'1em'}}>
                                <label style={{padding:'.5em 0'}}>First Name *</label>
                                <input className="errorBorder" ref={fNameRef} pattern='^[A-za-z]+$' required onBlur={firstNameFocus} focused={firstName.toString()} name="firstName" style={{width:'100%',height:'3em',padding:'0 .6em',background:'#FBFBFB',fontSize:'1.1em',fontFamily:'var(--Inter-font)',color:'#BFBFBF',borderRadius:'.4em',outline:'none'}} type='text' placeholder='Elon' />
                                <div className="error"><p>This field is required!</p></div>
                            </div>
                            <div>
                                <label style={{padding:'.5em 0'}}>Last Name *</label>
                                <input ref={lNameRef} pattern='^[A-za-z]+$' required onBlur={lastNameFocus} focused={lastName.toString()} name="lastName" style={{width:'100%',height:'3em',padding:'0 .6em',background:'#FBFBFB',fontSize:'1.1em',fontFamily:'var(--Inter-font)',color:'#BFBFBF',borderRadius:'.4em',outline:'none'}} type='text' placeholder='Musk' />
                                <div className="error"><p>This field is required!</p></div>
                            </div>
                        </div>
                        <div style={{padding:'.5em 0'}}>
                            <label style={{padding:'.6em 0'}}>Company Name *</label>
                            <input ref={compNameRef} pattern='^[A-za-z0-9]+$'required onBlur={companyFocus} focused={companyName.toString()} name="companyName" style={{width:'100%',height:'2.8em',padding:'0 .6em',background:'#FBFBFB',fontSize:'1.1em',fontFamily:'var(--Inter-font)',color:'#BFBFBF',borderRadius:'.4em',outline:'none'}} type='text' placeholder='Tesla' />
                            <div className="error"><p>Please Enter Company Name</p></div>
                        </div>
                        <div style={{padding:'.5em 0'}}>
                            <label style={{padding:'.6em 0'}}>Work Email *</label>
                            <input ref={eMailRef}  required onBlur={emailFocus} focused={email.toString()} name="eMail" style={{width:'100%',height:'2.8em',padding:'0 .6em',background:'#FBFBFB',fontSize:'1.1em',fontFamily:'var(--Inter-font)',color:'#BFBFBF',borderRadius:'.4em',outline:'none'}} type='email' placeholder='elon@tesla.com' />
                            <div className="error"><p>Enter your Email</p></div>
                        </div>
                        <div style={{position:'relative',padding:'.5em 0'}}>
                            <label style={{padding:'.6em 0'}}>Mobile Number</label>
                            <div style={{display:'flex',alignItems:'center',width:'100%'}}>
                                <div style={{display:'flex',alignItems:'center',justifyContent:'center',background:'#EBEBEB',padding:'0 .5em',height:'3.1em',width:mobileCheck ? '20%':'12%',borderRight:'none',borderTopLeftRadius:'.4em',borderBottomLeftRadius:'.4em'}}>
                                    <div><p>IN</p></div>
                                    <div><p>+91</p></div>
                                </div>
                                <input ref={mobNumbRef} name="mobileNumber" style={{width:mobileCheck ? '80%':'88%',height:'2.8em',padding:'0 1em',background:'#FBFBFB',fontSize:'1.1em',fontFamily:'var(--Inter-font)',color:'#BFBFBF',borderLeft:'none',borderTopRightRadius:'.4em',borderBottomRightRadius:'.4em',outline:'none'}} type='alphanumeric' placeholder='Mobile Number'/>
                            </div>
                        </div>
                        <div style={{padding:'2em 0 1em 0'}}>
                            <div><button style={{width:'100%',margin:'.4em 0',height:'4em',background:'#031D1E',border:'1px #5555 solid',borderRadius:'.2em',fontFamily:'var(--Inter-font)',fontSize:'1.1em',cursor:'pointer',color:'#F6F6F6'}}><p>Schedule a Demo</p></button></div>
                            <div><div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',margin:'.4em 0',height:'4em',background:'#FFF',border:'1px grey solid',borderRadius:'.2em',fontFamily:'var(--Inter-font)',fontSize:'1.1em',color:'#0B1E23',cursor:'pointer'}}><a href="tel:+91 23456789">Reach us at +91 23456789</a></div></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}