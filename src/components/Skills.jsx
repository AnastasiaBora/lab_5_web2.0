function Skills() {
  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills</h2>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start gap-2">
          <span className="text-gray-400">•</span>
          <span>Programming languages: C#, C++, Python</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-gray-400">•</span>
          <span>Basic knowledge of cybersecurity</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-gray-400">•</span>
          <span>Operating systems: Windows, Linux</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-gray-400">•</span>
          <span>Foundational knowledge in computer networking, including network protocols and infrastructure</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-gray-400">•</span>
          <span>Communication and teamwork</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-gray-400">•</span>
          <span>Time management</span>
        </li>
      </ul>
    </section>
  );
}

export default Skills;