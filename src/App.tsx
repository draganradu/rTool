import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { TestComponent } from './pages/testdb';
import { TestId } from './pages/testid';
import { Create } from './pages/CRUD/create';

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}



const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<TestComponent />} />
        <Route path="create" element={<Create />} />

        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="tool/:id" element={<TestId />} />
      </Routes>
    </div>
  );
}

export default App;
