type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <span className={` flex items-center gap-1  text-lg font-semibold tracking-[-0.02em] sm:text-xl ${className}`}>
      <img
        src="logo.png"
        alt="Al Ramad Al Thahabi"
        className="mr-2 h-6 w-6 object-contain"
      />
      <span className="text-brand-accent font"> Al Ramad Al Thahabi</span>
    </span>
  )
}
