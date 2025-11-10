interface RoadmapPathProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  color?: string;
  index?: number;
}

const RoadmapPath = ({ from, to, color = "hsl(var(--primary))", index = 0 }: RoadmapPathProps) => {
  // Calculate control points for smooth curve
  const midY = (from.y + to.y) / 2;
  const isVertical = Math.abs(from.x - to.x) < 50;
  
  // Create unique gradient ID
  const gradientId = `gradient-${index}-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      style={{ width: "100%", height: "100%", zIndex: 0 }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.6 }} />
          <stop offset="100%" style={{ stopColor: color, stopOpacity: 0.9 }} />
        </linearGradient>
        <filter id={`glow-${index}`}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Main path line */}
      <path
        d={isVertical 
          ? `M ${from.x} ${from.y} L ${to.x} ${to.y}`
          : `M ${from.x} ${from.y} Q ${from.x} ${midY}, ${to.x} ${to.y}`
        }
        stroke={`url(#${gradientId})`}
        strokeWidth="4"
        fill="none"
        filter={`url(#glow-${index})`}
      />
      
      {/* Animated dashed overlay */}
      <path
        d={isVertical 
          ? `M ${from.x} ${from.y} L ${to.x} ${to.y}`
          : `M ${from.x} ${from.y} Q ${from.x} ${midY}, ${to.x} ${to.y}`
        }
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeDasharray="8,8"
        className="animate-pulse"
        opacity="0.6"
      />
      
      {/* Connection dots */}
      <circle cx={from.x} cy={from.y} r="6" fill={color} opacity="0.8">
        <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx={to.x} cy={to.y} r="6" fill={color} opacity="0.8">
        <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Arrow at end point */}
      <polygon
        points={`${to.x},${to.y - 8} ${to.x - 4},${to.y - 2} ${to.x + 4},${to.y - 2}`}
        fill={color}
        opacity="0.8"
      />
    </svg>
  );
};

export default RoadmapPath;
