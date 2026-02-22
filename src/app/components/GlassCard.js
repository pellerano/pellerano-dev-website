function GlassCard({ children, className = '', onClick }) {
  return (
    <div
      className={`
        overflow-hidden
        rounded-[20px]
        border border-white/30
        bg-white/15
        backdrop-blur-[20px]
        shadow-[0_8px_32px_rgba(0,0,0,0.1),
                inset_0_1px_0_rgba(255,255,255,0.5),
                inset_0_-1px_0_rgba(255,255,255,0.1),
                inset_0_0_20px_10px_rgba(255,255,255,1)]
        ${className}
      `}
      onClick={onClick}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/80 via-transparent to-white/30" />
      {children}
    </div>
  );
}

export default GlassCard;
