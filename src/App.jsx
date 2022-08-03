import { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Detail from './components/Detail';
import Home from './components/Home';
import Login from './components/Login';
import Main from './components/Main';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Search from './components/Search';


// ini adalah function untuk main Layout Dimana ada nya navbar
// semua Elemen yang ada navbar nya akan di nested di Outlet
function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

function App() {
  // Hooks sederhana untuk simulasi Auth untuk di real project disarankan menggunakan redux
  // hooks ini dikirim ke page dashboard dan login sebagai props
  const [auth, setAuth] = useState(false)

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<MainLayout />} >
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Main auth={auth} setAuth={setAuth} />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/search" element={<Search />} />
          </Route>

          <Route path="/login" element={<Login setLogin={setAuth} authstat={auth} />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
