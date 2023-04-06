const MyButton = (props) => {
    return(
        <div>
            <button onClick= {()=>props.click()}>{props.name}</button>
        </div>
    )
}
export default MyButton