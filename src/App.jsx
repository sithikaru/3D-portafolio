import { BrowserRouter, Form } from "react-router-dom";
import{About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';


const App=()  =>{
  return(
   <BrowserRouter>
   <div class="relative z-0 bg-blend-darken">
    <div class="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <Hero/>
    </div>
    <About/>
    <Experience/>
    <Tech/>
    <Works/>
    <Feedbacks/>
    <div class="relative z-0">
      <Contact/>
      <StarsCanvas/>
    </div>
   </div>
   </BrowserRouter>
  )

}

export default App
