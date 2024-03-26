export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>Dashboard navbar</nav>
   
        {children}
      </section>
    )
  }