import { getTailwindClass } from "../resources/tailwindClass";

function PopUpHeader(props){
    return(
        <div className={getTailwindClass(props.tailwind)}>
            <p className={getTailwindClass(props.tailwind.TITLE)}>{props.POP_UP1_TITLE}</p>
            <p className={getTailwindClass(props.tailwind.SUBTITLE)}>{props.POP_UP1_SUBTITLE}</p>
        </div>
    );
}
export default PopUpHeader;
// "text-xl font-semibold"
// "text-lg font-semibold" Create a job Step 1

