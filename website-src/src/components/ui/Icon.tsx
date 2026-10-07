import type { SVGProps } from 'react';

const paths = {
  menu: ['M4 6h16M4 12h16M4 18h16'],
  close: ['m6 6 12 12M6 18 18 6'],
  arrow: ['M4 12h16m-6-6 6 6-6 6'],
  check: ['m5 12 4 4L19 6'],
  shield: ['M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Z', 'm8 12 3 3 5-6'],
  phone: ['M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a14 14 0 0 1-7-7l2-2-2-5Z'],
  mail: ['M3 5h18v14H3V5Z', 'm3 6 9 7 9-7'],
  pin: ['M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z', 'M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z'],
  clock: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z', 'M12 7v5l3 2'],
  strategy: ['M9 3h6v5H9V3ZM2 16h6v5H2v-5ZM16 16h6v5h-6v-5Z', 'M12 8v4H5v4m7-4h7v4'],
  organization: ['M3 3h6v6H3V3ZM15 15h6v6h-6v-6Z', 'M9 6h9v9M6 9v9h9'],
  leadership: ['M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z', 'M4 21v-2a8 8 0 0 1 16 0v2M10 15l2 3 2-3m-2 3v3'],
  users: ['M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z', 'M2 21v-2a7 7 0 0 1 14 0v2M17 4a4 4 0 0 1 0 7m1 4a6 6 0 0 1 4 6'],
  chart: ['M3 3v18h18', 'm6 15 4-5 4 2 6-7'],
  heart: ['M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z'],
} as const;

export type IconName = keyof typeof paths;

export default function Icon({ name, className = 'h-5 w-5', ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
      {paths[name].map((path, index) => <path key={index} d={path} />)}
    </svg>
  );
}
