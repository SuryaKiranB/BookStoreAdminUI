import logo from './logo.svg';
import './App.css';
import Login from './AuthenticationComponents/Login';
import Registration from './AuthenticationComponents/Registration';
import VerifyEmail from './AuthenticationComponents/VerifyEmail';
import ResendVerificationToken from './AuthenticationComponents/ResendVerificationToken';
import FpToken from './AuthenticationComponents/FpToken';
import ChangePassword from './AuthenticationComponents/ChangePassword';
import Demo from './AuthenticationComponents/SecuredApi';
import { AuthProvider } from './Contexts/AuthenticationContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './Components/AddBook';
import BookDetails from './Components/BookDetails';
import BookList from './Components/BookList';
import EditBook from './Components/EditBook';


function App() {
  return (
    <Router>
    <AuthProvider>
    <div className="App">
              <Routes>
                <Route path="/" element={<Login />} />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/verify-email" element={<VerifyEmail />} />
                  <Route path="/resend-verification-token" element={<ResendVerificationToken />} />
                  <Route path="/fp-token" element={<FpToken />} />
                  <Route path="/change-password" element={<ChangePassword />} />
                  <Route path="/secured-api" element={<Demo />} />
                  <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
                  <Route exact path="/book-list" element={<BookList/>} />
                  <Route exact path='/add-book' element={<AddBook/>}/>
                  <Route exact path="/book/:id" element={<BookDetails/>} />
                  <Route exact path='/edit-book/:id' element={<EditBook/>}/>
              </Routes>
    </div>
    </AuthProvider>
    </Router>
  );
}

export default App;
