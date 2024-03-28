export default function RootLayout({
    children,
    revenue,
    users,
    notifications,
    logins,

  }: {
    children: React.ReactNode,
    revenue: React.ReactNode,
    users: React.ReactNode,
    notifications: React.ReactNode,
    logins: React.ReactNode
  }) {
    const isLoggedIn = true
    return isLoggedIn ? (
        <div>
            <div>{children}</div>
            <div style={{display:"flex"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
            <div style={{display: "flex", flex:1}}>{notifications}</div>
            </div>
        </div>    
    ):(
      logins
    );
  }