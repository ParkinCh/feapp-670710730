import MovieCard from "../component/MovieCard";
function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MovieCard.map(m => (
          <Link key={m.id} to={`/movies/${m.id}`}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md
                           transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-lg font-bold text-slate-800">{m.title}</h3>
            <p className="mt-1 text-sm text-slate-500">ปี {m.year}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;