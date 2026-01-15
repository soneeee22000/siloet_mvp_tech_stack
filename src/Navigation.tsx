import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layers, GitCompare, LayoutDashboard, Sun, Moon } from 'lucide-react';

type Props = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

const Navigation: React.FC<Props> = ({ theme, onToggleTheme }) => {
  const location = useLocation();

  const navItems = [
    {
      path: '/',
      name: 'Architecture',
      icon: Layers,
      description: 'System Architecture'
    },
    {
      path: '/comparison',
      name: 'Comparison',
      icon: GitCompare,
      description: 'Approach Comparison'
    },
    {
      path: '/ui-mockup',
      name: 'UI Mockup',
      icon: LayoutDashboard,
      description: 'Product Experience'
    }
  ];

  const isDark = theme === 'dark';
  const logoSrc = `${process.env.PUBLIC_URL}/companylogo.jpeg`;

  return (
    <nav className={`sticky top-0 z-50 ${isDark ? 'bg-slate-900 border-b border-gray-700' : 'bg-white border-b border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img src={logoSrc} alt="Siloett logo" className="w-8 h-8 rounded-lg object-cover" />
            <div>
              <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>SILOETT</h1>
              <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>Tech Stack Overview</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'bg-gradient-to-r from-teal-500 to-orange-500 text-white shadow-lg scale-105' 
                      : isDark
                        ? 'text-gray-200 hover:bg-gray-800 hover:text-white'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <div className="hidden sm:block">
                    <div className="font-semibold text-sm">{item.name}</div>
                    <div className="text-xs opacity-75">{item.description}</div>
                  </div>
                </Link>
              );
            })}

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className={`
                flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 border
                ${isDark 
                  ? 'border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700'
                  : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-100'}
              `}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span className="text-sm font-semibold">{isDark ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
