import NavBar from "@/components/NavBar";
import Post from "@/components/Post";
import SubmitButton from "@/components/SubmitButton";
import localFont from "next/font/local";
import Image from "next/image";

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
  return (

    // Parent div
    <div className="">

      {/* Navbar */}
      <NavBar setIsDark={setIsDark} isDark={isDark}/>

      {/* Main div*/}
      <div className="bg-[#f7f7f7] dark:bg-darkMode text-[#4D4D4D] dark:text-white min-h-[100vh] flex flex-col md:flex-row-reverse gap-4 pt-[4.5rem] pb-[2rem] px-4 md:px-20  ease-out duration-300">

        {/* Scrolling div, right */}
        <div className="w-full md:w-[70%] bg-[#ffffff] dark:bg-[#171717] flex flex-col gap-4 items-end rounded-lg p-4 min-h-[25rem] ease-out duration-300">

          {/* Submit Button */}
          <div className="w-full md:w-[20%]">
            <SubmitButton text={'Add Proposal'}/>
          </div>

          <Post/>
          <Post/>
          <Post/>
          <Post/>

        </div>


        {/* Insights - Left div */}
        <div className="w-[30%] h-[85vh] hidden sticky top-[4.5rem] md:flex flex-col gap-4">

          {/* Profile div */}
          <div className=" w-full bg-[#ffffff] dark:bg-[#171717] flex flex-col gap-16 rounded-lg overflow-hidden h-[24rem] ease-out duration-300">

            {/* Media */}
            <div className="relative">

              {/* Cover */}
              <div className="h-[6rem]">
                <Image src="/Frame 8.svg" width={1000} height={50}/>
              </div>
              
              {/* Image Circle */}
              <div className=" w-[7rem] h-[7rem] bg-white absolute -bottom-14 left-6 rounded-full overflow-hidden flex justify-center items-center">
                <div className="w-[6.7rem] h-[6.7rem] rounded-full overflow-hidden bg-red-900">
                  <img src="/IMG_20211023_151530-01.jpeg"/>
                </div>
              </div>

            </div>

            {/* Details */}
            <div className="px-10 flex flex-col gap-2">
              
              {/* Name */}
              <div className="font-bold text-3xl text-[#6E5AF0]">
                Anirban Aditya Halder
              </div>

              {/* Position */}
              <div className="font-semibold text-xl">
                Software Engineering Analyst
              </div>

              {/* Company Branch */}
              <div className="">
                @KPMG India
              </div>

              {/* City */}
              <div className="text-sm text-[#979797]">
                Bangalore
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
            <div className="bg-[#F7F7F7] dark:bg-[#252525] h-[2rem] rounded-md flex items-center justify-between px-4 ">

              <div>
                Proposals posted by you
              </div>

              <div className="font-bold text-[#5B44EE]">
                27
              </div>

            </div>

            {/* Response on your proposal */}
            <div className="bg-[#F7F7F7] dark:bg-[#252525] h-[2rem] rounded-md flex items-center justify-between px-4 ">

              <div>
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

            <div className="text-sm">
              Logout
            </div>

          </div>

        </div>
        

      </div>
    </div>
    
    
  )
}
