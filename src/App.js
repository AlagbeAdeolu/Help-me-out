
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Details from './pages/Details';
import SuccessRecord from './pages/SuccessRecord';
import Layout from './components/Layout';

function App() {
  let Auth = true
  return (
    <Layout>
      <Routes className="App">
        <Route path='/successful-recording' element={<SuccessRecord />} />
        <Route index element={Auth ? <Home /> : <Login />} />
        <Route path='/recordings/:id' element={Auth ? <Details /> : <Login />} />
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
    </Layout>
  );
}

export default App;
