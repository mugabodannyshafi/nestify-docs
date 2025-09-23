import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, 
  Download, 
  Rocket, 
  FolderTree, 
  Container, 
  TestTube, 
  Settings, 
  Terminal,
  Users,
  Scale,
  Map
} from "lucide-react";

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/", icon: Home },
      { title: "Installation", href: "/installation", icon: Download },
      { title: "Quick Start", href: "/quick-start", icon: Rocket },
    ]
  },
  {
    title: "Guide",
    items: [
      { title: "Project Structure", href: "/project-structure", icon: FolderTree },
      { title: "Docker Configuration", href: "/docker", icon: Container },
      { title: "Testing", href: "/testing", icon: TestTube },
      { title: "Environment Variables", href: "/environment", icon: Settings },
    ]
  },
  {
    title: "Reference",
    items: [
      { title: "Commands", href: "/commands", icon: Terminal },
      { title: "Contributing", href: "/contributing", icon: Users },
      { title: "Roadmap", href: "/roadmap", icon: Map },
      { title: "License", href: "/license", icon: Scale },
    ]
  }
];

export function DocSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-full">
      {navigation.map((section) => (
        <div key={section.title} className="pb-4">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {section.title}
          </h4>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            {section.items.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={`group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline ${
                    isActive
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </NavLink>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}