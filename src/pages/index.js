import AddProposal from "@/components/AddProposal";
import NavBar from "@/components/NavBar";
import Post from "@/components/Post";
import SubmitButton from "@/components/SubmitButton";
import axios from "axios";
import Cookies from "js-cookie";
import localFont from "next/font/local";
import Image from "next/image";
import { useEffect, useState } from "react";

import { RiLogoutBoxRLine } from "react-icons/ri";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home({setIsDark, isDark}) {

  // Add Proposal Toggle
  const [proposalToggle, setProposalToggle] = useState(false)
  const [posts, setPosts] = useState([])

  const [currUser, setcurrUser] = useState(null)
  const [currPost, setcurrPost] = useState(null)
  const [currLocation, setcurrLocation] = useState(null)

  useEffect(() => {
    setcurrUser(Cookies.get('username'))
    setcurrPost(Cookies.get('post'))
    setcurrLocation(Cookies.get('location'))
  
  }, [])

  useEffect(()=>{
    axios.post('/api/posts')
    .then((res)=>{
      console.log(res.data.data.data)  
      setPosts(res.data.data.data)
    })
    .catch((err)=>{
      console.log(err)      
    })
  }, [])
  

  return (

    // Parent div
    <div className="">

      {/* Navbar */}
      <NavBar setIsDark={setIsDark} isDark={isDark}/>

      {/* Add Proposal Slider */}
      {
        proposalToggle&&
        <AddProposal func={()=>setProposalToggle(false)}/>
      }

      {/* Main div*/}
      <div className="bg-[#f7f7f7] dark:bg-darkMode text-[#4D4D4D] dark:text-white min-h-[100vh] flex flex-col md:flex-row-reverse gap-4 pt-[4.5rem] pb-[2rem] px-4 md:px-20  ease-out duration-300">

        {/* Scrolling div, right */}
        <div className="w-full md:w-[70%] bg-[#ffffff] dark:bg-[#171717] flex flex-col gap-4 items-end rounded-lg p-4 min-h-[25rem] ease-out duration-300">

          {/* Submit Button */}
          <div className="w-full md:w-[40%] lg:w-[20%]">
            <SubmitButton func={()=>{setProposalToggle(true)}} text={'Add Proposal'}/>
          </div>
          {/* {
            posts.map((post,idx)=>{
              let p = "s,f,s,s"
              console.log(p.split(','))
              
              return(
                <Post deadline={post.deadline} name={post.userID} desc={post.description} heading={post.heading} skills={post.skill.split(',')} client={post.Client} tasks={[]} key={idx} />
              )
            })
          } */}

          <Post posted={3} deadline={"28-10-2024"} name={"banboy38"} desc={"I want DoTA players"} heading={"DoTA Players Hiring"} skills={ ["Mid Lane", "Off Lane"] } client={"Chempui"} tasks={["Tank", "Position 1"]} />
          <Post/>

        </div>


        {/* Insights - Left div */}
        <div className="w-[30%] h-[85vh] hidden sticky top-[4.5rem] md:flex flex-col gap-4">

          {/* Profile div */}
          <div className=" w-full bg-[#ffffff] dark:bg-[#171717] flex flex-col gap-16 rounded-lg overflow-hidden min-h-[24rem] pb-2 ease-out duration-300">

            {/* Media */}
            <div className="relative">

              {/* Cover */}
              <div className="h-[6rem]">
                <Image alt="Cover KPMG" src="/Frame 8.svg" width={1000} height={50}/>
              </div>
              
              {/* Image Circle */}
              <div className=" w-[7rem] h-[7rem] bg-white absolute -bottom-14 left-6 rounded-full overflow-hidden flex justify-center items-center">
                <div className="w-[6.7rem] h-[6.7rem] rounded-full overflow-hidden">
                  <img src="/profile.jpg"/>
                </div>
              </div>

            </div>

            {/* Details */}
            <div className="px-10 flex flex-col gap-2">
              
              {/* Name */}
              <div className="font-bold text-2xl lg:text-3xl text-[#6E5AF0]">
                {currUser}
              </div>

              {/* Position */}
              <div className="font-semibold text-base lg:text-xl">
                {currPost}
              </div>

              {/* Company Branch */}
              <div className="text-sm">
                @KPMG India
              </div>

              {/* City */}
              <div className="text-xs text-[#979797]">
                {currLocation}
              </div>


            </div>

          </div>

          {/* Impressions */}
          <div className="w-full bg-[#ffffff] dark:bg-[#171717] p-4 rounded-lg dark:text-[#ffffff] flex flex-col gap-2 ease-out duration-300">
            
            {/* Heading */}
            <div className="text-sm">
              Impressions
            </div>

            {/* Proposals Posted by You */}
            <div className="bg-[#F7F7F7] dark:bg-[#252525] rounded-md flex items-start justify-between py-2 px-4 ease-out duration-300 ">

              <div className="w-[80%]">
                Proposals posted by you
              </div>

              <div className="font-bold text-[#5B44EE]">
                27
              </div>

            </div>

            {/* Response on your proposal */}
            <div className="bg-[#F7F7F7] dark:bg-[#252525] rounded-md flex items-start justify-between py-2 px-4 ease-out duration-300 ">

              <div className="w-[80%]">
                Response on your proposal
              </div>

              <div className="font-bold text-[#5B44EE]">
                17
              </div>

            </div>
          </div>

          {/* Logout button */}
          <div className="flex items-center gap-3 hover:underline select-none cursor-pointer mt-auto">
            <RiLogoutBoxRLine/>

            <div onClick={()=>{
                Cookies.remove('username')
                Cookies.remove('post')
                Cookies.remove('location')
                window.location.reload()
              }} 
              className="text-sm"
            >
              Logout
            </div>

          </div>

        </div>
        

      </div>
    </div>
    
    
  )
}
