import logo from './logo.svg';
import { Routes, Route ,Link} from "react-router-dom";
import './App.css';
import  Budget from "./component/budget"
import About from "./component/about"
import Story from "./component/story/story"
import Navbar from "./component/navbar"

import PagenotFound from './component/pagenot';
function App() {
  return (

   
  <>
   <Navbar/>
     
<Routes>
<Route path='/' element={<Budget/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/story' element={<Story/>}/>

<Route path='*' element={<PagenotFound/>}/>

</Routes>
</>
  );
}

export default App;

