import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword, updateProfile, onAuthStateChanged , signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import intializeAthentication from "../Firebase/firebase.init";

intializeAthentication();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth()

    
    const handleNameChange = e => {
        setName(e.target.value);
      }
    const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
      }
    const handleRegistration = (location, history) => {

      createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        handleUserInfo(result.user.email);
        setUserName();
        setUser(user);
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
     } 

     const handleUserInfo = (email) => {
      fetch("https://dry-spire-45697.herokuapp.com/userInfo", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
    };

     const handleLogin = (location, history) =>{
     signInWithEmailAndPassword(auth, email, password)
     .then(result => {
      const user = result.user;
      handleUserInfo(result.user.email);
      setUser(user)
      const destination = location?.state?.from || '/';
      history.replace(destination);
      setError('');
    })
    .catch(error => {
      setError(error.message);
    })
     }
      const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }
      useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut =() =>{
      setIsLoading(true);
      signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(() => setIsLoading(false));
    }

    return {
        user,
        setUser,
        error,
        setError,
        isLoading,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleLogin,
        logOut
    };

}
export default useFirebase;