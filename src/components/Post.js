import SubmitButton from "./SubmitButton";
import Tags from "./Tags";

export default function Post({name = 'Priyank Bhandari', post = "Manager", posted = 10, desc = 'We have a website ready but want to add another page before demo need to have a design ready for the webpage', heading = 'A Design', client = "Suzlon", deadline = '26 Dec', skills = ['Figma', 'UI Design', 'UX Design']}){
    return(
        // Parent div
        <div className=" border border-[#DDDDDD] dark:border-[#323232] rounded-lg w-full  p-4 flex flex-col gap-2 ease-out duration-300">

            {/* Header Section */}
            <div className="flex items-center gap-2 p-1">
                
                {/* Avatar */}
                <div className=" rounded-full w-[2rem] h-[2rem] bg-[#e8e8e8] text-[#4d4d4d] dark:text-[#cecece] dark:bg-[#4D4D4D] flex justify-center items-center overflow-hidden text-sm">
                    P
                </div>

                {/* Name and post */}
                <div className="">

                    {/* Name */}
                    <div className="text-sm font-semibold">
                        {name}
                    </div>

                    {/* Post */}
                    <div className="text-[10px]">
                        {post}
                    </div>
                </div>

                {/* Posted time */}
                <div className="flex items-start text-sm  -mt-4 ml-auto text-[10px]">
                    {posted}h ago
                </div>
            </div>

            {/* Seperator */}
            <div className=" bg-[#F1F1F1] h-[1px] w-full"/>
            
            {/* Description */}
            <div className="flex flex-col items-center w-full gap-3 p-1">

                {/* Header */}
                <div className="flex justify-between items-center w-full">
                    
                    {/* Heading */}
                    <div className="text-xl font-bold">
                        {heading}
                    </div>

                    {/* Client */}
                    <div className="text-sm">
                        {client}
                    </div>

                </div>

                {/* Description */}
                <div className="text-sm w-full">
                    {desc}
                </div>

                {/* Skills */}
                <div className="w-full flex flex-col gap-1">

                    {/* Heading */}
                    <div className="text-[10px]">Skills</div>
                    
                    {/* List of skills */}
                    <div className="flex gap-1 flex-wrap w-full">
                        {
                            skills.map((skill, idx)=>{
                                return(
                                    <Tags key={idx} name={skill}/>
                                )
                            })
                        }
                    </div>
                </div>
                
                {/* Apply and deadline */}
                <div className="flex justify-between items-center w-full">

                    <div className="w-[30%] md:w-[15%]">
                        <SubmitButton text={'Apply'}/>
                    </div>

                    <div className="text-xs">
                        Deadline: {deadline}
                    </div>

                </div>

            </div>
            
        </div>
    )
}