import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Painel from './screens/Painel';
import Header from './components/Header';
import Servico from './screens/Servico';
import Chamado from './screens/Chamado';
import HistoricoChamados from './screens/HistoricoChamados';
import ScreenAdmin from './screens/ScreenAdmin';
import Ecommerce from './screens/Ecommerce';
import ProductDetail from './screens/ProductDetail';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrologin" element={<Painel />} />
          <Route path="/Servico" element={<Servico />} />
          <Route path="/abrirChamado" element={<Chamado />} />
          <Route path="/HistoricoChamados" element={<HistoricoChamados />} />
          <Route path="/Admin" element={<ScreenAdmin />} />
          <Route path="/Ecommerce" element={<Ecommerce />} />
          <Route path="/product/:id" element={<ProductDetail />} />

        </Routes>
      </Router></>
  );
}

export default App;


// site de referencia: https://novosmart.com.br/
