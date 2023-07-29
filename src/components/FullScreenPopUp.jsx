import PopUpOne from "./PopUpOne";
import PopUpTwo from "./PopUpTwo";
import { useAppContext } from '../context/appContext';
import { getTailwindClass } from "../resources/tailwindClass";
import {  useState } from "react";

function FullScreenPopUp(props){
    const context=useAppContext();
    console.log(context);
    const [pageIndex,setPageIndex]=useState(context.pageIndex);

    const PopUp=function(){
        if(pageIndex===1)return(
            <PopUpOne tailwind={props.tailwind.POPUPWINDOW}/>
        );
        else if(pageIndex===2) return(
            <PopUpTwo tailwind={props.tailwind.POPUPWINDOW}/>
        )
    } 

    return(
        <div className={getTailwindClass(props.tailwind)}>
            <div className={getTailwindClass(props.tailwind.ROW)}>
                <PopUp/>
            </div>
        </div>
    );
}

export default FullScreenPopUp;