import Button from "./Button";
import FormInput from "./FormInput";
import PopUpHeader from "./PopUpHeader";
import RadioInput from "./RadioInput";
import constants from "../resources/constants";
import { getTailwindClass } from "../resources/tailwindClass";
import { useAppDispatchContext,useAppContext } from "../context/appContext";
import api from "../scripts/api";
import { useEffect, useState } from "react";
function PopUpTwo(props){ 
    const context=useAppContext();
    const dispatch=useAppDispatchContext();
    const [input1,setInput1]=useState("");
    const [input2,setInput2]=useState("");
    const [input3,setInput3]=useState("");
    const [input4,setInput4]=useState("");
    const [input5,setInput5]=useState("");
    const [input6,setInput6]=useState(false);
    const [checked1,setChecked1]=useState(false);
    const [checked2,setChecked2]=useState(false);

    useEffect(()=>{
        if(context.currentJobId==="0" || Object.keys(context.activeJob).length>10){
            setInput1(context.activeJob.minExp);
            setInput2(context.activeJob.maxExp);
            setInput3(context.activeJob.minSalary)
            setInput4(context.activeJob.maxSalary);
            setInput5(context.activeJob.totalEmployee);
            setInput6(context.activeJob.applyType);
            if(context.activeJob.applyType){
                setChecked1(true);
                setChecked2(false);
            }else{
                setChecked1(false);
                setChecked2(true);
            }
        }
    },[context.currentJobId])

    useEffect(()=>{
        if(checked1){
            setInput6(true);
        }else{
            setInput6(false);
        }
    },[checked1,checked2])

    const handleSave=async function(){
        const obj=context.activeJob;
        obj["minExp"]=input1>0?parseInt(input1,10):0;
        obj["maxExp"]=input2>0?parseInt(input2,10):0;
        obj["minSalary"]=input3>0?parseInt(input3,10):0;
        obj["maxSalary"]=input4>0?parseInt(input4,10):0;
        obj["totalEmployee"]=input5>0?parseInt(input5,10):0;
        obj["applyType"]=input6;
        
        let success=true;
        if(context.currentJobId==="0"){
            let cid=obj["id"];
            delete obj.id;
            console.log(cid,obj);
            success=await api.deleteJob(cid);
            success=await api.addJob(obj);
        }else{
            success=await api.addJob(obj);
        }
        if(success){
            const newObj=await api.getAllJobs();
            dispatch.currentJobIdDispatch({
                type:"update-job-id",
                id:"-1"
            });
            dispatch.activeJobDispatch({
                type:"update-current-job",
                obj:{}
            })
            dispatch.allJobsDispatch({
                type:"update-jobs",
                allJobs:newObj
            })
            
        }else{
            
            dispatch.currentJobIdDispatch({
                type:"update-job-id",
                id:context.activeJob.id
            });
            dispatch.activeJobDispatch({
                type:"update-current-job",
                obj:obj
            })
        }

        dispatch.pageIndexDispatch({
            type:'go-to-home'
        });
    }
    
    const handleInput1=function(event){
        setInput1(event.target.value);
        if(Number.isNaN(parseInt(event.target.value,10))){
            setInput1("");
        }
    }

    const handleInput2=function(event){
        setInput2(event.target.value);
        if(Number.isNaN(parseInt(event.target.value,10))){
            setInput2("");
        }
    }

    const handleInput3=function(event){
        setInput3(event.target.value);
        if(Number.isNaN(parseInt(event.target.value,10))){
            setInput3("");
        }
    }

    const handleInput4=function(event){
        setInput4(event.target.value);
        if(Number.isNaN(parseInt(event.target.value,10))){
            setInput4("");
        }
    }

    const handleInput5=function(event){
        setInput5(event.target.value);
        if(Number.isNaN(parseInt(event.target.value,10))){
            setInput5("");
        }
    }

    const handleChecked1=()=>{
        setChecked1(!checked1);
        setChecked2(checked1);
    }

    const handleChecked2=()=>{
        setChecked2(!checked2);
        setChecked1(checked2);
    }

    return(
        <div className={getTailwindClass(props.tailwind)}>
            <div className={getTailwindClass(props.tailwind.FORM)}>
                <PopUpHeader tailwind={props.tailwind.FORM.POPUP.HEADER} POP_UP1_TITLE={constants.POP_UP_TITLE} POP_UP1_SUBTITLE={constants.POP_UP2_SUBTITLE}/>
                <div className={getTailwindClass(props.tailwind.FORM.POPUP.FORMDIV)}>
                    <FormInput tailwind={props.tailwind.FORM.POPUP.FORMINPUT} title={constants.POP_UP2_INPUT1_TITLE} placeholder={constants.POP_UP2_INPUT1_PLACEHOLDER} displayWarning={"0"} value={input1} onChange={handleInput1}/>
                    <FormInput tailwind={props.tailwind.FORM.POPUP.FORMINPUT} title={constants.POP_UP2_INPUT2_TITLE} placeholder={constants.POP_UP2_INPUT2_PLACEHOLDER} displayWarning={"0"} value={input2} onChange={handleInput2}/>
                </div>
                <div className={getTailwindClass(props.tailwind.FORM.POPUP.FORMDIV)}>
                    <FormInput tailwind={props.tailwind.FORM.POPUP.FORMINPUT} title={constants.POP_UP2_INPUT3_TITLE} placeholder={constants.POP_UP2_INPUT1_PLACEHOLDER} displayWarning={"0"} value={input3} onChange={handleInput3}/>
                    <FormInput tailwind={props.tailwind.FORM.POPUP.FORMINPUT} title={constants.POP_UP2_INPUT4_TITLE} placeholder={constants.POP_UP2_INPUT2_PLACEHOLDER} displayWarning={"0"} value={input4} onChange={handleInput4}/>
                </div>
                <FormInput tailwind={props.tailwind.FORM.POPUP.FORMINPUT} title={constants.POP_UP2_INPUT5_TITLE} placeholder={constants.POP_UP2_INPUT5_PLACEHOLDER} displayWarning={"0"} value={input5} onChange={handleInput5}/>
                <RadioInput tailwind={props.tailwind.FORM.POPUP.RADIO} title={constants.POP_UP_RADIO_TITLE} option1={constants.POP_UP_RADIO_OPTION1} option2={constants.POP_UP_RADIO_OPTION2} checked1={checked1} checked2={checked2} handleChecked1={handleChecked1} handleChecked2={handleChecked2}/>
            </div>
            <div className={getTailwindClass(props.tailwind.BUTTONDIV)}>
                <Button properties={getTailwindClass(props.tailwind.BUTTONDIV.POPUPBUTTON)} title={constants.POP_UP2_BUTTON_TITLE} onClick={handleSave}/>
            </div>
        </div>
    )
}

export default PopUpTwo;
//  overflow-y