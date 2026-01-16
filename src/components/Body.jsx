import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { BASE_URL } from '../constant/api.config'
import { useSelector } from 'react-redux'

const Body = () => {
  const userData = useSelector((store)=> store.user);
  const navigate = useNavigate();
  // fetch user and if user is not valid then redirect to login
const fetchUser = async () => {
  try {
    const data = await fetch(BASE_URL + "profile/view");
    const json = await data.json();
    console.log(json);

  } catch (error) {
    console.log(error);
    if(error.status !== 200){
      navigate("/login")
    }
  }
};

 useEffect(()=>{
  if(!userData){
    fetchUser();
  }
 })

  return (
    <>
    <Navbar/>
    <Outlet></Outlet>
    <Footer/>
    </>
  )
}

export default Body