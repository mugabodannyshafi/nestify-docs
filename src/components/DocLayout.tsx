import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X, Github, ExternalLink } from "lucide-react";
import { DocSidebar } from "./DocSidebar";
import { ThemeToggle } from "./ThemeToggle";

export function DocLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block text-xl">
                Nestify
              </span>
            </a>
          </div>
          
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <span className="inline-block md:hidden font-bold text-xl">Nestify</span>
            </div>
            <nav className="flex items-center space-x-2">
              <ThemeToggle />
              <a
                href="https://github.com/mugabodannyshafi/nestify"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.npmjs.com/package/@mugabodannyshafi/nestify"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">NPM</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        {/* Sidebar */}
        <aside className={`fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
          <div className="h-full py-6 pr-6 lg:py-8">
            <DocSidebar />
          </div>
        </aside>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 top-14 z-20 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <aside className="fixed left-0 top-14 z-30 h-[calc(100vh-3.5rem)] w-64 shrink-0 border-r border-border bg-background p-6">
              <DocSidebar />
            </aside>
          </div>
        )}

        {/* Main content */}
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}