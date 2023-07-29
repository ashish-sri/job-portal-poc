import { useEffect, useState } from "react";
import { getTailwindClass } from "../resources/tailwindClass";

function FormInput(props){
    const [warningState,setWarningState]=useState("");

    useEffect(()=>{
        if(props.displayWarning==="0"){
            setWarningState("");
        }else if(props.displayWarning==="1"){
            setWarningState("*");
        }else if(props.displayWarning==="2"){
            setWarningState(" Fields marked with * are mandatory. Minimum length 5.");
        }else{
            setWarningState("");
        }
    },[props.displayWarning])

    return(
        <div className={getTailwindClass(props.tailwind)}>
            <p className={
                getTailwindClass(props.tailwind.TITLE)
            }>{props.title}
                <span className={getTailwindClass(props.tailwind.TITLE.WARNING)}>{warningState}</span>
            </p>
            <input type="text" placeholder={props.placeholder} 
                className={
                    getTailwindClass(props.tailwind.INPUT)
                }
                value={props.value} onChange={props.onChange}
            />
        </div>
    )
}

// shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm

export default FormInput;
// "text-sm font-semibold"
// "ex. UX UI Designer"
// "placeholder:text-[#7a7a7a] placeholder:text-sm text-sm block w-full border border-[#7a7a7a] rounded-sm py-1 px-2 "