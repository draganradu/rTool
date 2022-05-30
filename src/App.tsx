import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import { TestComponent } from './pages/testdb';
import { TestId } from './pages/testid';
import { Create } from './pages/CRUD/create';
import { Login } from './pages/Login';



const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="list" element={<TestComponent />} />
      <Route path="create" element={<Create />} />

      <Route path="tool/:id" element={<TestId />} />
    </Routes>
  );
}

export default App;
