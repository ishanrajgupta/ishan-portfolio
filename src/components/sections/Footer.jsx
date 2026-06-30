import { FaArrowUp } from 'react-icons/fa6';
import { profileName, socialLinks } from '../../data/portfolio';

export function Footer({ onNavigate }) {
  return (
    <footer className="section-shell pb-10 pt-4">
      <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright © 2026 {profileName}. All rights reserved.</p>

        <div className="flex items-center gap-3">
          {socialLinks.slice(0, 2).map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => onNavigate('hero')}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-purple-400/30 hover:bg-purple-400/10"
          >
            Back to top <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}