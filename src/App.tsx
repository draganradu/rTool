import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext';
import { Create } from './pages/CRUD/create';
import { Login } from './pages/Login';
import { TestComponent } from './pages/testdb';
import { TestId } from './pages/testid';
import './style/normalization.scss';


const App: React.FC = () => {
  const { authIsReady, user } = useAuthContext() as any
  if (authIsReady) {
    return (
      <Routes>
        <Route path="/" element={user ? <TestComponent /> : <Login />} />
        <Route path="/login" element={user ? <TestComponent /> : <Login />} />
        <Route path="list" element={<TestComponent />} />
        <Route path="create" element={<Create />} />

        <Route path="tool/:id" element={<TestId />} />
      </Routes>
    );
  } else {
    return null
  }

}

export default App;
