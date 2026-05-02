// Header.jsx
function Header({ theme, toggleTheme }) {
  return (
    <header className={`py-20 px-4 shadow-xl transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950'
    } text-white`}>
      <div className="container mx-auto text-center">
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition"
        >
          {theme === 'dark' ? 'Світла тема' : 'Темна тема'}
        </button>
        <h1 className="text-6xl font-bold mb-3 tracking-tight">
          Anastasia Bora
        </h1>
        <p className="text-xl text-gray-300 mb-6">Cybersecurity Specialist</p>
        <div className="flex justify-center gap-3 flex-wrap">
          <span className="border border-gray-600 px-4 py-1 rounded-full text-sm text-gray-400">
            Security
          </span>
          <span className="border border-gray-600 px-4 py-1 rounded-full text-sm text-gray-400">
            Protection
          </span>
          <span className="border border-gray-600 px-4 py-1 rounded-full text-sm text-gray-400">
            Analytics
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;