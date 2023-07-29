export function getTailwindClass(obj){
    let tailwindClass="";
    for(let key in obj){
        if(typeof(obj[key])==="string"){
            tailwindClass+=obj[key];
        }
    }
    return tailwindClass;
}