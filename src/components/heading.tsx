import { cn } from "@/utils"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
}

export const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h2
      className={cn(
        "text-4xl sm:text-5xl text-pretty font-semibold font-heading tracking-tight text-zinc-800",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}