const Footer = (props) => {
    return(
        <div>
            <footer>
                <h1>Ini adalah footer</h1>
                {props.content()}
            </footer>
        </div>
    )
}
export default Footer;