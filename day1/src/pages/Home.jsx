import NavigationBar from "../components/NavigationBar"
import Header from "../components/Header"
import MyButton from "../components/MyButton"
import Introduction from "../components/Introduction"
import Footer from "../components/Footer"
import { useState } from "react"

const Home = () => {
    const my_name = 'Kokomi'
    const clicked = ()=>{ 
      alert("Button clicked")
    }
    const paragraph = () => {
      return(
        <div>
          <i>Ini adalah paragraf footer hehehes</i>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga sit fugiat ab temporibus nulla repudiandae repellat perferendis? Voluptates similique ab voluptatem vel quam veritatis nostrum, dolores amet eligendi nesciunt nisi!</p>
        </div>
      )
    }
    // const [getter, setter] 
    const [getNavbarValue, setNavbarValue] = useState("List")
    const changeNavbarValue = () => {
      setNavbarValue("My Contact")
    }
    return (
      <div>
        <header>
          <NavigationBar navValue={getNavbarValue}/>
          <button onClick={changeNavbarValue} >Change Navbar</button>
          <Header/>
        </header>
  
        <section>
          <Introduction name={my_name}/>
          <Introduction name='Ayaka'/>
          <MyButton name="Tombol" click={clicked} />
        </section>
        <Footer content={paragraph}/>
      </div>
    );
}
export default Home