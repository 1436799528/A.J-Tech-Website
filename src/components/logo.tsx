
import { cn } from '@/lib/utils';

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 200"
      className={cn("w-auto h-10", className)}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <clipPath id="lightningClip">
          <path d="M195 90 L175 130 L205 130 L185 170 L235 110 L205 110 L225 70 Z" />
        </clipPath>
      </defs>

      {/* Dark blue circular shapes */}
      <circle cx="200" cy="120" r="70" fill="#1E3A8A" clipPath="url(#lightningClip)" />
      <path d="M120 180 A 120 80 0 0 1 280 60" stroke="#1E3A8A" strokeWidth="20" fill="none" />
      <path d="M100 80 A 150 80 0 0 0 300 160" stroke="#1E3A8A" strokeWidth="20" fill="none" />

      {/* Light blue accents */}
      <path d="M90 160 C 150 120, 250 180, 310 140" stroke="#A7F3D0" strokeWidth="3" fill="none" />
      <path d="M300 45 a 5 5 0 1 1 0 -10 a 5 5 0 0 1 0 10" fill="#A7F3D0" />
      <path d="M315 40 a 4 4 0 1 1 0 -8 a 4 4 0 0 1 0 8" fill="#A7F3D0" />
      <path d="M330 42 a 3 3 0 1 1 0 -6 a 3 3 0 0 1 0 6" fill="#A7F3D0" />
      
      <g transform="translate(80 180)">
        <path d="M-10 0 L10 0 M0 -10 L0 10" stroke="#A7F3D0" strokeWidth="2" />
        <path d="M-7 -7 L7 7 M-7 7 L7 -7" stroke="#A7F3D0" strokeWidth="1.5" transform="rotate(45)" />
      </g>
      <g transform="translate(60 170)">
        <path d="M-7 0 L7 0 M0 -7 L0 7" stroke="#A7F3D0" strokeWidth="1.5" />
        <path d="M-5 -5 L5 5 M-5 5 L5 -5" stroke="#A7F3D0" strokeWidth="1" transform="rotate(45)" />
      </g>
      

      {/* Orange Text */}
      <text
        x="200"
        y="125"
        fontFamily="sans-serif"
        fontSize="48"
        fill="#F97316"
        fontWeight="bold"
        textAnchor="middle"
        letterSpacing="2"
      >
        A.J. TECH
      </text>
      <text
        x="200"
        y="170"
        fontFamily="sans-serif"
        fontSize="48"
        fill="#F97316"
        fontWeight="bold"
        textAnchor="middle"
        letterSpacing="2"
      >
        SOLUTIONS
      </text>
    </svg>
  );
}
