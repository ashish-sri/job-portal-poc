import JobTile from "./JobTile";
import { useAppContext,useAppDispatchContext } from "../context/appContext";
import { getTailwindClass } from "../resources/tailwindClass";

function Content(props){
    const context=useAppContext();
    const allJobs=context.allJobs;

    const JobTiles=function(){
        if(!allJobs.length){
            return null;
        }else{
            let jobs=[];
            allJobs.forEach(e=>{
                jobs.push(<JobTile key={e.id} keys={e} id={e.id} tailwind={props.tailwind.JOBTILE}/>);
            });
            return jobs;
        }
    }
    return(
        <div className={getTailwindClass(props.tailwind)}>
            <JobTiles/>
        </div>
    )
}
export default Content;