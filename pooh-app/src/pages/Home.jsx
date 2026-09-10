import MovieCard from "../component/MovieCard";
import { movies } from "../data/data";
import MovieGallery from "../component/MovieGallery";
function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <MovieCard title="Your Name" year={2016}/>
        <MovieCard title="Interstellar" year={2014}/>
        <MovieCard title="Parasite" year={2019}/>
        {movies.slice(0,3).map(m =>(
          <MovieCard key={m.id} title={m.title} year={m.year}/>
        ))}
      </div>
      <h2 className="mt-2 text-slate-500">ดู MovieHub</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <MovieGallery/>
      </div>
    </div>
  );
}

export default Home;