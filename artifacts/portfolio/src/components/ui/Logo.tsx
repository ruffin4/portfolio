interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const configs = {
    sm: { w: 110, h: 30, box: 24, gap: 8, fs: 15 },
    md: { w: 140, h: 38, box: 32, gap: 10, fs: 20 },
    lg: { w: 190, h: 52, box: 44, gap: 12, fs: 27 },
  };

  const c = configs[size];
  const cy = c.h / 2;
  const wordX = c.box + c.gap;

  return (
    <svg
      width={c.w}
      height={c.h}
      viewBox={`0 0 ${c.w} ${c.h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ruffin logo"
    >
      <defs>
        <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#05D3F8" />
          <stop offset="100%" stopColor="#05D3F8" />
        </linearGradient>
      </defs>

      {/* Hexagon icon mark */}
      <g>
        <polygon
          points={`
            ${c.box * 0.5},1
            ${c.box - 1},${c.box * 0.25}
            ${c.box - 1},${c.box * 0.75}
            ${c.box * 0.5},${c.box - 1}
            1,${c.box * 0.75}
            1,${c.box * 0.25}
          `}
          fill="url(#lg1)"
          opacity="0.12"
          transform={`translate(0, ${cy - c.box / 2})`}
        />
        <polygon
          points={`
            ${c.box * 0.5},1
            ${c.box - 1},${c.box * 0.25}
            ${c.box - 1},${c.box * 0.75}
            ${c.box * 0.5},${c.box - 1}
            1,${c.box * 0.75}
            1,${c.box * 0.25}
          `}
          stroke="url(#lg1)"
          strokeWidth="1.5"
          fill="none"
          transform={`translate(0, ${cy - c.box / 2})`}
        />
        <text
          x={c.box / 2}
          y={cy + c.box * 0.18}
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize={c.box * 0.54}
          fill="url(#lg1)"
        >
          R
        </text>
      </g>

      {/* Wordmark: "uffin" after the icon, visually reads "Ruffin" */}
      <text
        x={wordX}
        y={cy + c.fs * 0.35}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize={c.fs}
        letterSpacing="-0.3"
        fill="url(#lg1)"
      >
        uffin
      </text>

      {/* Cyan dot accent after "uffin" */}
      <circle
        cx={wordX + c.fs * 2.88}
        cy={cy + c.fs * 0.35 - c.fs * 0.08}
        r={c.fs * 0.14}
        fill="#05D3F8"
      />
    </svg>
  );
}
