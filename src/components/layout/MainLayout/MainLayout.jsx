function MainLayout({ children }) {
  return (
    <main className="flex-1 h-screen bg-zinc-100 overflow-y-auto px-8">
      {children}
    </main>
  );
}

export default MainLayout;
