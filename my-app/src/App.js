import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Updated import
import { Layout, Space, Typography } from 'antd';
import { Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes> {/* Updated to use Routes */}
              <Route path='/' element={<Homepage />} /> {/* Updated syntax */}
              <Route path='/exchanges' element={<Exchanges />} /> {/* Updated syntax */}
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />} /> {/* Updated syntax */}
              <Route path='/crypto/:coinId' element={<CryptoDetails />} /> {/* Updated syntax */}
              <Route path='/news' element={<News />} /> {/* Updated syntax */}
            </Routes> {/* Updated to use Routes */}
          </div>
        </Layout>
      
        <div className='footer' >
          <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
            CryptoVerse <br/>
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
          </div>
      </div>
    </div>
  );
};

export default App;
