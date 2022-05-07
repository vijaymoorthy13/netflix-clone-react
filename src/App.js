import React, { useEffect } from "react";
import  "./App.css"
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen"; 
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { onAuthStateChanged} from "firebase/auth";
import ProfileScreen from "./screens/ProfileScreen";
import SignUpScreen from "./screens/SignUpScreen";



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth,authUser => {
      if (authUser) {
        dispatch(
          login({
            id: authUser.uid,
            name: authUser.displayName ? authUser.displayName : authUser.email,            
            verified: String(authUser.emailVerified),
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);



  return (
    <>
    <div className="App">
      <BrowserRouter>

          <Routes>
              <Route exact path={"/"} element={user ? <HomeScreen /> : <LoginScreen/>}/><Route/>
              <Route path={"/login"} element={user ? <Navigate replace to="/"/> : <LoginScreen />}/><Route/>
              <Route path={"/register"} element={user ? <Navigate replace to="/"/> : <LoginScreen />}/><Route/>
              <Route path={"/profile"} element={user ? <ProfileScreen/> : <LoginScreen/>}/><Route/>

          </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;



