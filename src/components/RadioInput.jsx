import { getTailwindClass } from "../resources/tailwindClass";

function RadioInput(props){
    return(
        <div className={getTailwindClass(props.tailwind)}>
            <p className={getTailwindClass(props.tailwind.TITLE)}>{props.title}</p>
            <div className={getTailwindClass(props.tailwind.RADIOROW)}>
                <div className={getTailwindClass(props.tailwind.RADIOROW.FIRSTRADIOROW)}>
                    <input type="checkbox" className=""/>
                    <p className={getTailwindClass(props.tailwind.RADIOROW.FIRSTRADIOROW.FIRSTRADIOROWTITLE)}>{props.option1}</p>
                </div>
                <div className={getTailwindClass(props.tailwind.RADIOROW.FIRSTRADIOROW)}> 
                    <input type="checkbox" className=""/>
                    <p className={getTailwindClass(props.tailwind.RADIOROW.FIRSTRADIOROW.FIRSTRADIOROWTITLE)}>{props.option2}</p>
                </div>
            </div>
        </div>
    )
}
export default RadioInput;