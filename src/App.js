import React from 'react'
import { Routes, Route} from "react-router-dom";
import RegistrationForm from './pages/RegistrationForm';

function App() {
  return (
    <>
    <Routes>
      {/* <Route element={<Protectedroutes/>}>
      <Route path='/' element={<FrontPage />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/client' element={<Clientlist />} />
        <Route path='/newclient' element={<Newclient />} />
        <Route path='/caselist' element={<Caselist />} />
        <Route path='/createcase' element={<Createcase />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/chart' element={<Chart />} />
        <Route path='/login' element={<Login />} />
     
        </Route> */}
        <Route path='/register' element={<RegistrationForm />} />
    
      </Routes>
    </>
  );
}

export default App;
