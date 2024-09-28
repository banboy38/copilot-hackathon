export default function TextBox({name, placeholder}){
    return(
        <input name={name} placeholder={placeholder} className="bg-[#F3F1FF] dark:bg-[#252525] focus:scale-[1.02] ease-out duration-150" type="text"/>
    )
}