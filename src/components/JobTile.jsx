import Button from "./Button";
import { useAppContext,useAppDispatchContext } from "../context/appContext";
import api from "../scripts/api";
import { getTailwindClass } from "../resources/tailwindClass";
import constants from "../resources/constants";

function JobTile(props){
    const context=useAppContext();
    const dispatch=useAppDispatchContext();

    const JobTileButton=function(){
        if(props.keys.applyType){
            return(
                <Button properties={getTailwindClass(props.tailwind.INFOCOLUMN.TILEBUTTON.APPLYNOW)} title={constants.JOB_TILE_BUTTON_APPLY_NOW}/>
            )
        }else{
            return(
                <Button properties={getTailwindClass(props.tailwind.INFOCOLUMN.TILEBUTTON.EXTERNALAPPLY)} title={constants.JOB_TILE_BUTTON_EXTERNAL_APPLY}/>
            )
        }
    }
    
    const jobDescription=props.keys.remoteType ? "Part-Time (9.00 am - 5.00 pm IST)" : "Full-Time (9.00 am - 5.00 pm IST)";

    const handleModify=async function(){
        const response=await api.getJob(props.id);
        if(context.currentJobId!=="-1"){
            alert("Save unsaved data first by clicking on Create Job");
        }else if(response){
            dispatch.activeJobDispatch({
                type:"update-current-job",
                obj:response
            })
            dispatch.currentJobIdDispatch({
                type:"update-job-id",
                id:"0"
            })
            dispatch.pageIndexDispatch({
                type:'show-popup-1'
            });
        }else{
            alert("Try again. API Call Failed.")
        }
    }
    
    const deleteJob=async function(){
        await api.deleteJob(props.id);
        let jobList=await api.getAllJobs();
        dispatch.allJobsDispatch({
            type:"update-jobs",
            allJobs:jobList
        })
    }

    return(
        <div className={getTailwindClass(props.tailwind)}>
            <div className={getTailwindClass(props.tailwind.ICONCOLUMN)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <button onClick={handleModify}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                </button>
                <button onClick={deleteJob}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </div>
            <div className={getTailwindClass(props.tailwind.INFOCOLUMN)}>
                <div className={getTailwindClass(props.tailwind.INFOCOLUMN.GROUP1)}>
                    <p className={getTailwindClass(props.tailwind.INFOCOLUMN.GROUP1.TITLE)}>{props.keys.jobTitle}</p>
                    <p className={getTailwindClass(props.tailwind.INFOCOLUMN.GROUP1.COMPANY)}>{props.keys.companyName} - {props.keys.industry}</p>
                    <p className={getTailwindClass(props.tailwind.INFOCOLUMN.GROUP1.LOCATION)}>{props.keys.location}</p>
                </div>
                <div className={getTailwindClass(props.tailwind.INFOCOLUMN.GROUP2)}>
                    <p className={getTailwindClass(props.tailwind.INFOCOLUMN.GROUP2.JOBDESCRIPTION)}>{jobDescription}</p>
                    <p className={getTailwindClass(props.tailwind.INFOCOLUMN.GROUP2.EXPERIENCE)}>Experience ( {props.keys.minExp/10} - {props.keys.maxExp/10} ) years</p>
                    <p className={getTailwindClass(props.tailwind.INFOCOLUMN.GROUP2.SALARY)}>INR <span>&#8377;</span> {props.keys.minSalary}000 - {props.keys.maxSalary}000 / Month</p>
                    <p className={getTailwindClass(props.tailwind.INFOCOLUMN.GROUP2.EMPLOYEESNUMBER)}>{props.keys.totalEmployee} employees</p>
                </div>
                <JobTileButton/>
            </div>
        </div>
    )
}
export default JobTile;