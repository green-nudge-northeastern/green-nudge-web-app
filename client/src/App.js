import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LogInPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'
import NavBar from './components/layout/NavBar'
import LaunchPage from './pages/LaunchPage'
import ProtectedRoute from './components/auth/ProtectedRoute' // Import the protected route component
import Dashboard from './pages/Dashboard'
import Footer from './components/layout/Footer'
import ResultPage from './pages/ResultPage'
import Upload from './pages/Upload'; // this is the page where we upload the xlsx file!

function App() {
    return (
        <Router>
            <div className='App'>
                <NavBar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<LogInPage />} />
                    <Route path='/signup' element={<SignUpPage />} />
                    <Route
                        path='/launch'
                        element={
                            <ProtectedRoute>
                                <LaunchPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path='/dashboard'
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/upload'
                        element={
                            <ProtectedRoute>
                                <Upload />
                            </ProtectedRoute>
                        }
                    />
                    <Route path='/result' element={<ResultPage />}></Route>
                </Routes>

                <Footer />
            </div>
        </Router>
    )
}

export default App
