import { cn } from '../../utils/cn';

export function GlassCard({ children, className = '' }) {
  return <div className={cn('glass-panel rounded-[1.75rem]', className)}>{children}</div>;
}