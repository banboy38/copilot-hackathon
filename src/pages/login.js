import PasswordBox from "@/components/PasswordBox";
import SubmitButton from "@/components/SubmitButton";
import TextBox from "@/components/TextBox";

// Login Page
export default function Login({setIsDark}){
    
    return(
        // Parent Div
        <div className="bg-white dark:bg-darkMode dark:text-white h-[100vh] flex ease-out duration-300">

            {/* Form Div */}
            <div className="flex flex-col justify-center items-center gap-16 h-full w-full md:w-[50%]">

                {/* Heading Section */}
                <div className="flex flex-col justify-center items-center gap-2">
                    
                    {/* Header */}
                    <div className="text-primary text-center font-bold text-2xl">
                        LOGIN
                    </div>

                    {/* Description */}
                    <div className="text-center text-[#525252] dark:text-[#ACACAC]">
                        To access the best opportunities with ease
                    </div>

                </div>

                {/* Form */}
                <form onSubmit={(e)=>{e.preventDefault()}} className="flex flex-col w-[90%] md:w-[60%] justify-center items-center gap-4">

                    <div className="flex flex-col gap-2 w-full">

                        {/* Username */}
                        <TextBox placeholder={'Username'} name={'username'}/>

                        {/* Password */}
                        <PasswordBox name={'password'}/>
                    </div>

                    <div className="flex flex-col w-[40%]">

                        {/* Submit */}
                        <SubmitButton text={'Login'}/>
                    </div>

                </form>

                {/* Login With */}
                <div className="flex flex-col justify-center items-center gap-4 w-[70%] md:w-[40%]">

                    {/* Heading */}
                    <div className="relative w-full flex flex-col justify-center items-center bg-darkMode">
                        <div className="h-[1.5px] w-full bg-[#F0EDFF] dark:bg-[#FFFFFF]"/>
                        <div className="absolute px-2 -mt-1 bg-white dark:bg-darkMode text-sm"><span className="font-bold">Login</span> with others</div>
                    </div>

                    {/* Google */}
                    <div className="w-full select-none rounded-xl h-[3rem] border flex justify-center items-center gap-2 hover:bg-[#2a2a2a] hover:scale-[1.02] active:scale-[0.98] cursor-pointer ease-out duration-150">
                        
                        {/* Image */}
                        <img src="/google 1.svg"/>
                        
                        {/* Description */}
                        <div className=" text-xs">
                            Login with <span className=" font-semibold">Google</span>
                        </div>
                    </div>

                    {/* Facebook */}
                    <div className="w-full select-none rounded-xl h-[3rem] border flex justify-center items-center gap-2 hover:bg-[#2a2a2a] hover:scale-[1.02] active:scale-[0.98] cursor-pointer ease-out duration-150">
                        
                        {/* Image */}
                        <img src="/facebook 1.svg"/>
                        
                        {/* Description */}
                        <div className=" text-xs">
                            Login with <span className=" font-semibold">Facebook</span>
                        </div>
                    </div>

                </div>

            </div>

            {/* Infographic */}
            <div className="hidden md:flex justify-end gap-16 h-full md:w-[50%]">
                <img src="/Rectangle 4.svg"/>
            </div>

        </div>
    )
}