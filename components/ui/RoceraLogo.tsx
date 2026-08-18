import Image from 'next/image'

export function RoceraLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <Image
      src="/cencera-logo.png"
      alt="Cencera Logo"
      width={40}
      height={40}
      className={`${className} object-contain shrink-0`}
      priority
    />
  )
}
