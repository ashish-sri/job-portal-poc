import { useState,useEffect } from "react";
import Button from "./Button";
import FormInput from "./FormInput";
import PopUpHeader from "./PopUpHeader";
import constants from "../resources/constants";
import { getTailwindClass } from "../resources/tailwindClass";
import { useAppDispatchContext,useAppContext } from "../context/appContext"

function PopUpOne(props){    
    const context=useAppContext();
    const dispatch=useAppDispatchContext();
    const [input1,setInput1]=useState("");
    const [input2,setInput2]=useState("");
    const [input3,setInput3]=useState("");
    const [input4,setInput4]=useState("");
    const [input5,setInput5]=useState("");
    const [checked,setChecked]=useState(false);

    useEffect(()=>{
        if(context.currentJobId==="0" || Object.keys(context.activeJob).length>1){
            setInput1(context.activeJob.jobTitle);
            setInput2(context.activeJob.companyName);
            setInput3(context.activeJob.industry);
            setInput4(context.activeJob.location);
            setInput5(context.activeJob.remoteType);
        }
    },[context.currentJobId])
    
    const handleNext=function(){
        if(input1.length<5 || input2.length<5 || input3.length<5){
            setChecked(true);
        }else if(input1.length>4 && input2.length>4 && input3.length>4){
            let obj;
            if(context.currentJobId==="0"){
                obj={
                    "id":context.activeJob.id,
                    "jobTitle":input1,
                    "companyName":input2,
                    "industry":input3,
                    "location":input4,
                    "remoteType":input5==="YES" || input5==="yes" || input5==="Yes" || input5==="remote" || input5==="REDMOTE" || input5==="Remote"  ,
                    "createdAt":Date.now(),
                    "minExp":context.activeJob.minExp,
                    "maxExp":context.activeJob.maxExp,
                    "minSalary":context.activeJob.minSalary,
                    "maxSalary":context.activeJob.maxSalary,
                    "totalEmployee":context.activeJob.totalEmployee,
                    "applyType":context.activeJob.applyType
                }
            }else{
                obj={
                    "jobTitle":input1,
                    "companyName":input2,
                    "industry":input3,
                    "location":input4,
                    "remoteType":input5==="YES" || input5==="yes" || input5==="Yes" || input5==="remote" || input5==="REDMOTE" || input5==="Remote"  ,
                    "createdAt":Date.now(),
                    "minExp":context.activeJob.minExp,
                    "maxExp":context.activeJob.maxExp,
                    "minSalary":context.activeJob.minSalary,
                    "maxSalary":context.activeJob.maxSalary,
                    "totalEmployee":context.activeJob.totalEmployee,
                    "applyType":context.activeJob.applyType
                }
            }
            
            dispatch.activeJobDispatch({
                type:"update-current-job",
                obj:obj
            })
            dispatch.pageIndexDispatch({
                type:'show-popup-2'
            });
        }
    }

    const handleInput1=function(event){
        setInput1(event.target.value);
    }

    const handleInput2=function(event){
        setInput2(event.target.value);
    }

    const handleInput3=function(event){
        setInput3(event.target.value);
    }

    const handleInput4=function(event){
        setInput4(event.target.value);
    }

    const handleInput5=function(event){
        setInput5(event.target.value);
    }

    return(
        <div className={getTailwindClass(props.tailwind)}>
            <div className={getTailwindClass(props.tailwind.FORM)}>
                <PopUpHeader tailwind={props.tailwind.FORM.POPUP.HEADER} POP_UP1_TITLE={constants.POP_UP_TITLE} POP_UP1_SUBTITLE={constants.POP_UP1_SUBTITLE}/>
                <FormInput tailwind={props.tailwind.FORM.POPUP.FORMINPUT} title={constants.POP_UP1_INPUT1_TITLE} placeholder={constants.POP_UP1_INPUT1_PLACEHOLDER} displayWarning={input1!==undefined && input1.length<5 && checked?"2":"1"} value={input1} onChange={handleInput1}/>
                <FormInput tailwind={props.tailwind.FORM.POPUP.FORMINPUT} title={constants.POP_UP1_INPUT2_TITLE} placeholder={constants.POP_UP1_INPUT2_PLACEHOLDER} displayWarning={input2!==undefined && input2.length<5 && checked?"2":"1"} value={input2} onChange={handleInput2}/>
                <FormInput tailwind={props.tailwind.FORM.POPUP.FORMINPUT} title={constants.POP_UP1_INPUT3_TITLE} placeholder={constants.POP_UP1_INPUT3_PLACEHOLDER} displayWarning={input2!==undefined && input3.length<5 && checked?"2":"1"} value={input3} onChange={handleInput3}/>
                <div className={getTailwindClass(props.tailwind.FORM.POPUP.FORMDIV)}>
                    <FormInput tailwind={props.tailwind.FORM.POPUP.FORMINPUT} title={constants.POP_UP1_INPUT4_TITLE} placeholder={constants.POP_UP1_INPUT4_PLACEHOLDER} displayWarning={"0"} value={input4} onChange={handleInput4}/>
                    <FormInput tailwind={props.tailwind.FORM.POPUP.FORMINPUT} title={constants.POP_UP1_INPUT5_TITLE} placeholder={constants.POP_UP1_INPUT5_PLACEHOLDER} displayWarning={"0"} value={input5} onChange={handleInput5}/>
                </div>
            </div>
            <div className={getTailwindClass(props.tailwind.BUTTONDIV)}>
                <Button properties={getTailwindClass(props.tailwind.BUTTONDIV.POPUPBUTTON)} title={constants.POP_UP1_BUTTON_TITLE} onClick={handleNext}/>
            </div>
        </div>
    )
}

export default PopUpOne;