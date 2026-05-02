function Education() {
  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Education</h2>
      <div className="relative pl-6 border-l-2 border-purple-200">
        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
        <h3 className="text-xl font-semibold text-gray-800">Bachelor of Cybersecurity and Information Protection</h3>
        <p className="text-purple-600 font-medium mt-1">Lviv Polytechnic National University</p>
        <p className="text-gray-500 text-sm mt-2">2023 – present</p>
      </div>
    </section>
  );
}

export default Education;