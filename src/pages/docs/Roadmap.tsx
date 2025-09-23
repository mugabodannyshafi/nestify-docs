import { CheckCircle, Clock, Code, Database, Globe, Shield, Layers, Puzzle, Monitor } from "lucide-react";

export default function Roadmap() {
  const roadmapItems = [
    {
      title: "Authentication Scaffolding",
      description: "JWT and OAuth authentication setup with guards, decorators, and middleware",
      status: "planned",
      icon: Shield,
      features: [
        "JWT authentication with refresh tokens",
        "OAuth integration (Google, GitHub, etc.)",
        "Role-based access control (RBAC)",
        "Authentication guards and decorators",
        "Password reset and email verification"
      ]
    },
    {
      title: "Microservices Architecture",
      description: "Support for generating microservices with inter-service communication",
      status: "planned", 
      icon: Layers,
      features: [
        "Service-to-service communication",
        "Message queues and event sourcing",
        "Service discovery and load balancing",
        "Distributed tracing and monitoring",
        "API gateway configuration"
      ]
    },
    {
      title: "GraphQL Scaffolding",
      description: "Complete GraphQL setup with resolvers, schemas, and subscriptions",
      status: "planned",
      icon: Globe,
      features: [
        "GraphQL schema generation",
        "Resolvers and mutations",
        "Subscriptions for real-time updates",
        "DataLoader for efficient querying",
        "GraphQL Playground integration"
      ]
    },
    {
      title: "WebSocket Support",
      description: "Real-time communication with WebSocket gateways and events",
      status: "planned",
      icon: Monitor,
      features: [
        "WebSocket gateway scaffolding",
        "Real-time event handling",
        "Room and namespace management",
        "Authentication for WebSocket connections",
        "Socket.IO integration"
      ]
    },
    {
      title: "Database Migration Setup",
      description: "Automated database migrations and seeding with TypeORM/Prisma",
      status: "planned",
      icon: Database,
      features: [
        "Migration file generation",
        "Database seeding scripts",
        "Schema versioning",
        "Rollback capabilities",
        "Multi-environment support"
      ]
    },
    {
      title: "Kubernetes Configuration",
      description: "Production-ready Kubernetes manifests for deployment",
      status: "planned",
      icon: Layers,
      features: [
        "Deployment and service manifests",
        "ConfigMaps and secrets",
        "Ingress configuration",
        "Health checks and probes",
        "Horizontal pod autoscaling"
      ]
    },
    {
      title: "Monorepo Support",
      description: "Multi-package monorepo setup with shared libraries",
      status: "planned",
      icon: Code,
      features: [
        "Workspace configuration",
        "Shared library management",
        "Cross-package dependencies",
        "Unified testing and building",
        "Independent deployment strategies"
      ]
    },
    {
      title: "Custom Template System",
      description: "Create and use custom project templates",
      status: "planned",
      icon: Puzzle,
      features: [
        "Template creation tools",
        "Template sharing and distribution",
        "Variable substitution",
        "Conditional file generation",
        "Template validation"
      ]
    },
    {
      title: "Plugin Architecture",
      description: "Extensible plugin system for custom functionality",
      status: "planned",
      icon: Puzzle,
      features: [
        "Plugin development framework",
        "Hook system for customization",
        "Third-party plugin support",
        "Plugin marketplace",
        "Plugin configuration management"
      ]
    },
    {
      title: "Interactive UI Mode",
      description: "Web-based interface for project generation and management",
      status: "planned",
      icon: Monitor,
      features: [
        "Visual project configuration",
        "Drag-and-drop interface",
        "Real-time preview",
        "Project templates gallery",
        "Integrated development tools"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "in-progress":
        return <Clock className="w-5 h-5 text-blue-500" />;
      case "planned":
        return <Clock className="w-5 h-5 text-muted-foreground" />;
      default:
        return <Clock className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "planned":
        return "Planned";
      default:
        return "Planned";
    }
  };

  return (
    <div className="docs-content prose prose-slate max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Roadmap</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Upcoming features and enhancements planned for Nestify to make it the most comprehensive NestJS CLI tool.
      </p>

      <div className="mb-8">
        <p className="text-lg mb-6">
          Nestify is continuously evolving to meet the needs of modern NestJS development. 
          Here's what we're working on to make your development experience even better.
        </p>
        
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Development Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">0</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">0</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-muted-foreground">10</div>
              <div className="text-sm text-muted-foreground">Planned</div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {roadmapItems.map((item, index) => (
          <div key={index} className="border border-border rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <div className="flex items-center gap-1">
                    {getStatusIcon(item.status)}
                    <span className="text-sm text-muted-foreground">
                      {getStatusText(item.status)}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2">Planned Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <h2 className="text-2xl font-semibold mb-4">Contributing to the Roadmap</h2>
        <p className="mb-4">
          We welcome feedback and contributions from the community. If you have ideas for new features 
          or would like to contribute to any of these initiatives, please:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Open an issue on GitHub to discuss new feature ideas</li>
          <li>Check the contributing guide for development guidelines</li>
          <li>Join discussions on existing roadmap items</li>
          <li>Submit pull requests for bug fixes and improvements</li>
        </ul>
        
        <div className="flex gap-4">
          <a
            href="https://github.com/mugabodannyshafi/nestify/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Suggest a Feature
          </a>
          <a
            href="/contributing"
            className="inline-flex items-center px-4 py-2 rounded-md border border-border hover:bg-muted transition-colors"
          >
            Contributing Guide
          </a>
        </div>
      </div>
    </div>
  );
}