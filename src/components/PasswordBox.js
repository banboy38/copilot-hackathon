export default function PasswordBox({name}){
    return(
        <input name={name} placeholder="Password" className="bg-[#F3F1FF] dark:bg-[#252525] focus:scale-[1.02] ease-out duration-150" type="password"/>
    )
}