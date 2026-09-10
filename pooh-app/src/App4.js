import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import About from './pages/About';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';

function App() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50">
            <Navbar />
            <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/movies/:id" element={<MovieDetail />} />
                    <Route path="*" element={<NotFound />} /> 
                </Routes>
                
            </main>
            <Footer />
        </div>
    );
}

export default App;