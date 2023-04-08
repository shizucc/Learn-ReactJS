import { useNavigate } from "react-router-dom"
const NavigationBar = ({navValue}) => {
    const navigate = useNavigate()
    return(
        <div>
            <ul>
                <li><button onClick={() => navigate('/')}>Home</button></li>
                <li>{navValue}</li>
                <li><button onClick={() => navigate('/about')}>About</button></li>
                <li><button onClick={() => navigate('/counter')}>Counter</button></li>
            </ul>
        </div>
    )
}
export default NavigationBar