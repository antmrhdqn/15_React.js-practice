import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import Menus from './pages/Menus';
import Login from './pages/Login';
import Error from './pages/Error';
import MenuDetail from './pages/MenuDetail';
import MenuModify from './pages/MenuModify';
import MenuRegist from './pages/MenuRegist';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="main" element={<Main />} />
          <Route path="menus" element={<Menus />} />
          <Route path="menus/detail/:id" element={<MenuDetail />} />
          <Route path="menus/modify" element={<MenuModify />} />
          <Route path="menus/regist" element={<MenuRegist />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
