import React from 'react'
import CustomButton from '../../components/button/CustomButton'
import InputHandler from '../../components/input-handler/InputHandler'
import { googleSignin } from '../../firebase/config'

const Signin = () => {
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')
    

    const submitHandler=e=>{
        console.log(email)
    }

    return (
        <div className='container' style={{display:'flex', justifyContent:'center',alignItems:'center', height:'80vh'}}>
            <div className="card"  style={{width:'500px',height:'400px'}}>
                <div className="card-header text-center"><h1>User Sign in</h1></div>
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <InputHandler name='email' lebel='Email' type='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                        <InputHandler name='password' lebel='Password' type='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                        <CustomButton onClick={googleSignin}>GoogleSignIn</CustomButton>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Signin
