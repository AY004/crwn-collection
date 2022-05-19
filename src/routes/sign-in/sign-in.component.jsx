import { createUserWithEmailAndPassword } from 'firebase/auth';
import {SignInWithGooglePopUp, CreateUserDocumentFromAuth} from '../../utilis/firebase/firebase.utils'
const SignIn = () => {
    const LogGoogleUser = async () =>{
        const {user} = await SignInWithGooglePopUp();
        console.log('this is the user')
        console.log(user)
        CreateUserDocumentFromAuth(user)

    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={LogGoogleUser}>Sighn in with google popup</button>
        </div>
    )
}

export default SignIn;