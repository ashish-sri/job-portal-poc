function Button(props){
    return(
        <button className={props.properties} onClick={props.onClick} >{props.title}</button>
    );
}

export default Button;