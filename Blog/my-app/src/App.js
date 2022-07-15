import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import SignUp from './pages/Signup'
import SignIn from './pages/SignIn'
import './index.css';

function App() {
  return (
    <div className="container">
       <BrowserRouter>
       <Nav />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/SignIn' element={<SignIn />} />
            </Routes>
      </BrowserRouter> 
      <ToastContainer />
    </div>

  );
}

export default App;
