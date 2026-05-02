function Contacts() {
  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contacts</h2>
      <div className="space-y-4">
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Email</p>
          <a href="mailto:natsyabordance@gmail.com" className="text-gray-700 hover:text-blue-600 transition">
            natsyabordance@gmail.com
          </a>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Phone</p>
          <a href="tel:+380970739146" className="text-gray-700 hover:text-blue-600 transition">
            +38 097 073 91 46
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;