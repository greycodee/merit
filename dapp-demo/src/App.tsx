
import './App.css'
import '@mysten/dapp-kit/dist/index.css';
import '@radix-ui/themes/styles.css';
// import Muyu from './muyu'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './page/Layout';
import WoodenFish from './page/WoodenFish';
import UserHome from './page/UserHome';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WoodenFish />} />
        <Route path="about" element={<UserHome />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default App
