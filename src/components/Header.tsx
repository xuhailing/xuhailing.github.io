import { NavLink } from 'react-router-dom'

const navItems = [
  { label: '首页',   to: '/' },
  { label: '作品集', to: '/portfolio' },
  { label: '关于我', to: '/about' },
  { label: '联系我', to: '/contact' },
]

const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 bg-surface/60 backdrop-blur-xl px-8 py-3 rounded-full border-4 border-primary shadow-stack transition-transform duration-75">
      <div className="font-headline-lg text-headline-lg text-primary drop-shadow-[0_0_8px_#00e639] whitespace-nowrap">
        矩阵作品集
      </div>

      <nav className="hidden md:flex items-center gap-6">
        {navItems.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              [
                'font-body-md text-body-md tracking-widest transition-colors glitch-hover',
                isActive
                  ? 'text-secondary-fixed border-b-2 border-secondary-fixed'
                  : 'text-on-surface-variant hover:text-primary',
              ].join(' ')
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <span className="material-symbols-outlined text-primary ml-2 cursor-crosshair">terminal</span>
    </header>
  )
}

export default Header
