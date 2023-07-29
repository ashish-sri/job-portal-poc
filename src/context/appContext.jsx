import { createContext, useContext, useReducer } from 'react';
import api from '../scripts/api';

const AppContext = createContext(null);

const AppDispatchContext = createContext(null);

export function AppProvider({children}){
    const [pageIndex,pageIndexDispatch]=useReducer(
        pageIndexReducer,
        0
    );

    const [activeJob,activeJobDispatch]=useReducer(activeJobReducer,{});

    const [currentJobId,currentJobIdDispatch]=useReducer(
        currentJobIdReducer,
        "-1"
    );

    const [allJobs,allJobsDispatch]=useReducer(
        allJobsReducer,
        initialJob
    );

    return(
        <AppContext.Provider value={{
            pageIndex : pageIndex,
            activeJob : activeJob,
            currentJobId:currentJobId,
            allJobs:allJobs
        }}>
            <AppDispatchContext.Provider value={{
                    pageIndexDispatch:pageIndexDispatch,
                    activeJobDispatch:activeJobDispatch,
                    currentJobIdDispatch:currentJobIdDispatch,
                    allJobsDispatch:allJobsDispatch
                }}>
                {children}
            </AppDispatchContext.Provider>
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext);
}

export function useAppDispatchContext(){
    return useContext(AppDispatchContext);
}

const pageIndexReducer=function(pageIndex,action){
    switch(action.type){
        case "show-popup-1":{
            return 1;
        }
        case "show-popup-2":{
            return 2;
        }
        case "go-to-home":{
            return 0;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }

}

const activeJobReducer=function(activeJob,action){
    switch(action.type){
        case "update-current-job":{
            return action.obj;
        }
        default:{
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const currentJobIdReducer=function(currentJobId,action){
    switch(action.type){
        case "update-job-id":{
            return action.id;
        }
        default:{
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const allJobsReducer=function(allJobs,action){
    switch(action.type){
        case "update-jobs":{
            return action.allJobs;
        }
        default:{
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialJob=await api.getAllJobs();