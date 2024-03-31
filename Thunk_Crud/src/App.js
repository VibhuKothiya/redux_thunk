
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LoginButton from './component/LoginButton';
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <center><button class="btn btn-primary m-5 fs-5" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
    <span role="status">Loading...</span>
  </button>
  </center>;
  }
  return (

    <div className="App">
      {isAuthenticated ? (

        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      ) : (

        <LoginButton/>
      )
      }
    </div>

  )

}

export default App;
