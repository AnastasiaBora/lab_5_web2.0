// Footer.jsx
import { useState, useEffect } from 'react';

function Footer() {
  const [systemInfo, setSystemInfo] = useState({
    userAgent: '',
    platform: ''
  });

  useEffect(() => {
    // Отримуємо системну інформацію
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    
    const info = { userAgent, platform };
    
    // Зберігаємо в localStorage
    localStorage.setItem('systemInfo', JSON.stringify(info));
    
    // Отримуємо з localStorage
    const savedInfo = localStorage.getItem('systemInfo');
    if (savedInfo) {
      setSystemInfo(JSON.parse(savedInfo));
    }
  }, []);

  return (
<footer className="bg-gray-900 text-gray-400 py-4 text-center mt-12">
  <div className="container mx-auto px-4">
    <div className="text-[10px] opacity-40 max-h-16 overflow-y-auto">
      <p>Platform: {systemInfo.platform}</p>
      <p className="mt-1 break-all">User Agent: {systemInfo.userAgent}</p>
    </div>
  </div>
</footer>
  );
}

export default Footer;