import {router} from "./Routes/Root"
import { WhatsAppButton } from "./Components/WhatsAppButton/WhatsAppButton";
import NavBar from './Components/NavBar/NavBar';
import Footer from "./Components/Footer/Footer";
import {
  RouterProvider,
} from "react-router-dom";
function App() {
  return (
    <div className="full-container">
      <NavBar/>
      <RouterProvider router={router}/> 
      <WhatsAppButton/>
      <Footer/>
    </div>
  )
}

export default App
