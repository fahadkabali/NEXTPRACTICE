export default function RootLayout({
    children,
    revenue,
    
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
              {children}
        </div>    
    )
  }