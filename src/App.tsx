import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext';
import { AllToolsList, YourToolsList } from "./pages";
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
        <Route path="/"  element={user ? <TestComponent /> : <Login />} />
        <Route path={"/login"} element={user ? <TestComponent /> : <Login />} />
        {user && (
          <>
            <Route path="list" element={<TestComponent />} /> {/* to remove */}
            <Route path="create" element={<Create />} /> {/* to remove */}


            {/* user */}
            <Route path="t/add/" element={<AllToolsList />} /> {/* List of all tools allTools */}

            <Route path="t/tool/" element={<YourToolsList />} /> {/* List of all tools userTools*/}
            <Route path="t/tool/:id" element={<TestId />} /> {/* single tool userTools*/}

            <Route path="t/update/" element={<TestId />} /> {/* Add tool to your tools userTools*/}
            <Route path="t/update/:id" element={<TestId />} /> {/* update tool userTools*/}

            {/* Admin */}
            <Route path="t/create/" element={<Create />} /> {/* Add tool to admin allTools*/}
            <Route path="t/create/:id" element={<Create />} /> {/* update tool to admin allTools*/}
          </>
        )}

        {/* 404 */}
        <Route path="*" element={user ? <TestComponent /> : <Login />} />  
      </Routes>
    );
  } else {
    return null
  }

}

export default App;
