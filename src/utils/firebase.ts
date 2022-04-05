import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from "firebase/auth";
import { getFirestore, collection, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDd9wv8J7x42pX3P_iAfoYe31WQ9wJCw9k",
    authDomain: "webstore-91481.firebaseapp.com",
    projectId: "webstore-91481",
    storageBucket: "webstore-91481.appspot.com",
    messagingSenderId: "277079757376",
    appId: "1:277079757376:web:271ad88823f15c0c8985a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();;
export const db =  getFirestore();
export const popupSignIn = () => signInWithPopup(auth, provider)

export const createUser = async ({user}:any) => {
    const userDoc = doc(db,"users", user.uid);
    const userSnap = await getDoc(userDoc);
    if(!userSnap.exists()){
        const { displayName, email } = user;
        const creationDate = new Date();
        try {
            await setDoc(userDoc, {
                displayName,
                email,
                creationDate
            })
        } catch (err){
            console.log("Error creating user", err)
        }
    }
    return userDoc
}
