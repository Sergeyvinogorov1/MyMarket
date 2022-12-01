
import { Route, Routes } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/MainComponents/Home';
import PageProduct from './components/PageProduct';

import './styles/style.css';
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<PageProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
