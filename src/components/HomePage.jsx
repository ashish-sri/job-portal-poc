import Button from "./Button";
import Content from "./Content";
import { useAppContext,useAppDispatchContext } from "../context/appContext";
import FullScreenPopUp from './FullScreenPopUp'
import tailwind from '../resources/tailwind'
import { getTailwindClass } from "../resources/tailwindClass";
import constants from '../resources/constants'
import { useEffect } from "react";

function HomePage(props){
    const context=useAppContext();
    const dispatch=useAppDispatchContext();

    const pageIndex=context.pageIndex;  

    useEffect(()=>{
        console.log(context);
    },[context])

    const handleCreate=function(){
        let newId=context.currentJobId; // in case of unsaved data
        if(newId==="-1"){
            newId=parseInt(Math.random()*10000000,10).toString();
        }
        dispatch.currentJobIdDispatch({
            type:"update-job-id",
            id:newId
        })
        dispatch.pageIndexDispatch({
            type:"show-popup-1"
        });
    }

    const Page=function(){
        if(pageIndex>0){
            return(<FullScreenPopUp tailwind={tailwind.TAILWIND.HOMEPAGE.FULLSCREENPOPUP}/>);
        }else{
            return(
                <div className={getTailwindClass(tailwind.TAILWIND.HOMEPAGE.HOMEPAGEMAIN)}>
                    <header className={getTailwindClass(tailwind.TAILWIND.HOMEPAGE.HOMEPAGEMAIN.HEADER)}>
                        <Button properties={getTailwindClass(tailwind.TAILWIND.HOMEPAGE.HOMEPAGEMAIN.NEWJOBBUTTON)} title={constants.CREATE_JOB_TITLE} onClick={handleCreate}/>
                    </header>
                    <Content tailwind={tailwind.TAILWIND.HOMEPAGE.HOMEPAGEMAIN.CONTENT}/>
                </div>
            );
        }
    }

    return(
        <Page/>
    );
}
export default HomePage;