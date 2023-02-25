// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signOut,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBXEfBGOKLYmQoIP2_j0RcH7_qhH3H7cQ0',
  authDomain: 'crwn-clothing-db-67629.firebaseapp.com',
  projectId: 'crwn-clothing-db-67629',
  storageBucket: 'crwn-clothing-db-67629.appspot.com',
  messagingSenderId: '414827099499',
  appId: '1:414827099499:web:ed7c838177c1992f3ac82e',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const db = getFirestore();
export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) {
    return;
  }

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => {
  signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
