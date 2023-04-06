const NavigationBar = ({navValue}) => {
    return(
        <div>
            <ul>
                <li>Home</li>
                <li>{navValue}</li>
            </ul>
        </div>
    )
}
export default NavigationBar