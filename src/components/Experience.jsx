function Experience() {
  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Work Experience</h2>
      <div className="space-y-6">
        <div className="relative pl-6 border-l-2 border-orange-200">
          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-orange-500 rounded-full"></div>
          <h3 className="text-xl font-semibold text-gray-800">Invoice Compliance Auditor</h3>
          <p className="text-orange-600 font-medium">Exelegent</p>
          <p className="text-gray-500 text-sm">Sep 15, 2025 - present</p>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Responsible for reviewing invoices and financial documentation to ensure compliance with 
            company policies and client requirements. I analyze data, verify accuracy of information, 
            and help maintain high standards of financial control and documentation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;