import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const navigation = [
  { href: '#services', label: '服务' },
  { href: '#about', label: '关于我们' },
  { href: '#team', label: '团队' },
  { href: '#insights', label: '洞察' },
  { href: '#contact', label: '联系我们' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <nav aria-label="主导航" className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled || isMobileMenuOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#top" onClick={closeMenu} aria-label="长伴咨询首页" className="flex items-center">
            <img
              src="https://lf-code-agent.coze.cn/obj/x-ai-cn/250001877250/attachment/1e4092de27b7aabc5462612266e73ce_副本_20250723115400.png"
              alt="长伴咨询 - Accompany Consultation"
              className="h-10 w-auto"
            />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map(item => (
              <a key={item.href} href={item.href} className="text-sm font-medium hover:text-blue-700 transition-colors">{item.label}</a>
            ))}
            <a href="#contact" className="bg-blue-900 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">预约咨询</a>
          </div>
          <button
            ref={menuButton}
            type="button"
            aria-label={isMobileMenuOpen ? '关闭导航菜单' : '打开导航菜单'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen(open => !open)}
            className="md:hidden text-gray-700 hover:text-blue-900 p-3 -mr-3"
          >
            <i aria-hidden="true" className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4 flex flex-col space-y-2">
          {navigation.map(item => (
            <a key={item.href} href={item.href} onClick={closeMenu} className="text-sm font-medium py-3 hover:text-blue-700 transition-colors">{item.label}</a>
          ))}
          <a href="#contact" onClick={closeMenu} className="bg-blue-900 text-white px-5 py-3 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors w-full text-center">预约咨询</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
