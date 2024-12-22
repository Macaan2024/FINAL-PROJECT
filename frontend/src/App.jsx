import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import ViewSubject from './components/ViewSubject';

function App() {
  return (
    <div className="flex justify-center bg-slate-50">
      <div className="sm:w-full sm:max-w-md w-full bg-white">
        <Routes >
          <Route 
          path="/" 
          element={<Login />} 
          />
          <Route 
          path="/register" 
          element={<Register />} 
          />
          <Route
            path="/home/:id"
            element=
            {
              <ProtectedRoute allowedUser={1}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/viewSubject/:id"
            element=
            {
              <ProtectedRoute allowedUser={1}>
                <ViewSubject />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
