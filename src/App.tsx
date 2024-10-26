import {router} from "./Routes/Root"
import { WhatsAppButton } from "./Components/WhatsAppButton/WhatsAppButton";
import Footer from "./Components/Footer/Footer";
import {
  RouterProvider,
} from "react-router-dom";
function App() {
  return (
    <div className="full-container">
      <RouterProvider router={router}/> 
      <WhatsAppButton/>
      <Footer/>
    </div>
  )
}

export default App
