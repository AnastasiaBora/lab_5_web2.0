function Languages() {
  const languages = [
    { name: "Ukrainian", level: "Native", width: "100%" },
    { name: "English", level: "Intermediate", width: "70%" }
  ];
  
  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Languages</h2>
      <div className="space-y-5">
        {languages.map((lang, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700">{lang.name}</span>
              <span className="text-sm text-gray-500">{lang.level}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: lang.width }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Languages;