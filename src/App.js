
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Details from './pages/Details';
import SuccessRecord from './pages/SuccessRecord';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Layout>
      <Routes className="App">
        <Route path='/successful-recording' element={<SuccessRecord />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/recordings/:id' element={<Details />} />
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
    </Layout>
  );
}

export default App;
