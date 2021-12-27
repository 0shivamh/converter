import './App.css';
import Header from './Components/header.component';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Hey from './Components/hey.component';
import Wish from './Components/wish.component';


function App() {
  return (
    <div className="App">

     <Router>
        <Routes>
        <Route path="/" exact element={<Header/>}/>
        <Route path="/hey" element={<Hey/> }/>
        <Route path="/wish" element={<Wish/> }/>
        
 
        </Routes>
        
     </Router>
    </div>
  );
}

export default App;
