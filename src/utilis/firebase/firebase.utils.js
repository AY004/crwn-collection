import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect , signInWithPopup , GoogleAuthProvider} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBMzJzq1Vten-R9-Ggb8_lHWqx1f1idG9A",
    authDomain: "crwn-clothing-db-da6aa.firebaseapp.com",
    projectId: "crwn-clothing-db-da6aa",
    storageBucket: "crwn-clothing-db-da6aa.appspot.com",
    messagingSenderId: "750998941426",
    appId: "1:750998941426:web:099d9a1e42f736aba8ea6b"
  };
  
  // Initialize Firebase
  const Firebaseapp = initializeApp(firebaseConfig)

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt : 'select_account'
  })

  export const auth = getAuth();
  export const SignInWithGooglePopUp = () => signInWithPopup(auth,provider)

  export const db = getFirestore();

  export const CreateUserDocumentFromAuth = async (userAuth) => {
      const DocRef = doc(db,'users' , userAuth.uid)

      

      const userSnapShot = await getDoc(DocRef)
      console.log(userSnapShot.exists())

      if(!userSnapShot.exists()){
          const {displayName,email} = userAuth;
          

          const creatAt = new Date();

          try {
              await setDoc(DocRef, {
                  displayName,
                  email,
                  creatAt,

              })

          }
          catch(error){
              console.log('error creating the user', error.message);

          }
      } 

      return DocRef;

  }