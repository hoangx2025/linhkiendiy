export default function LogoIcon({
    size = 128,
    className = ""
  }: {
    size?: number;
    className?: string;
  }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth={14}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        {/* Outer circle */}
        <circle cx="128" cy="128" r="104" />
  
        {/* Circuit lines */}
        <path d="M128 52v52" />
        <path d="M128 152v52" />
        <path d="M52 128h52" />
        <path d="M152 128h52" />
  
        {/* Nodes */}
        <circle cx="128" cy="52" r="8" fill="currentColor" />
        <circle cx="52" cy="128" r="8" fill="currentColor" />
        <circle cx="204" cy="128" r="8" fill="currentColor" />
        <circle cx="128" cy="204" r="8" fill="currentColor" />
  
        {/* Chip */}
        <rect x="96" y="96" width="64" height="64" rx="10" />
        <path d="M96 112h-14M96 144h-14M160 112h14M160 144h14" />
      </svg>
    );
  }
  