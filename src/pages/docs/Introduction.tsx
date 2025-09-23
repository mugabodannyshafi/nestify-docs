import { CodeBlock } from "../../components/CodeBlock";
import { ExternalLink, Star, Download, GitBranch, Shield } from "lucide-react";

export default function Introduction() {
  return (
    <div className="docs-content prose prose-slate max-w-none">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Nestify - Supercharged NestJS CLI
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          A powerful, production-ready CLI tool for scaffolding NestJS projects with best practices, 
          Docker support, and complete development environment setup out of the box.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <a 
            href="https://www.npmjs.com/package/@mugabodannyshafi/nestify"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            <Download className="w-3 h-3 mr-1" />
            npm version
          </a>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
            <Shield className="w-3 h-3 mr-1" />
            MIT License
          </span>
          <a 
            href="https://github.com/mugabodannyshafi/nestify/pulls"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            <GitBranch className="w-3 h-3 mr-1" />
            PRs Welcome
          </a>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-lg">
          Nestify is an enhanced alternative to the standard NestJS CLI, designed to accelerate your 
          development workflow by generating production-ready NestJS projects with pre-configured Docker 
          environments, testing setups, and comprehensive development tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="docs-feature-item">
          <h3 className="font-semibold mb-2">Production-Ready</h3>
          <p className="text-sm text-muted-foreground">
            Generate complete NestJS projects with best practices and proper folder structure
          </p>
        </div>
        
        <div className="docs-feature-item">
          <h3 className="font-semibold mb-2">Docker Support</h3>
          <p className="text-sm text-muted-foreground">
            Complete multi-service Docker setup with databases and Redis included
          </p>
        </div>
        
        <div className="docs-feature-item">
          <h3 className="font-semibold mb-2">Testing Setup</h3>
          <p className="text-sm text-muted-foreground">
            Unit tests, e2e tests, and coverage configuration out of the box
          </p>
        </div>
        
        <div className="docs-feature-item">
          <h3 className="font-semibold mb-2">API Documentation</h3>
          <p className="text-sm text-muted-foreground">
            Optional Swagger/OpenAPI integration for interactive API documentation
          </p>
        </div>
        
        <div className="docs-feature-item">
          <h3 className="font-semibold mb-2">Multiple Package Managers</h3>
          <p className="text-sm text-muted-foreground">
            Support for npm, yarn, and pnpm with automatic detection
          </p>
        </div>
        
        <div className="docs-feature-item">
          <h3 className="font-semibold mb-2">Authentication Scaffolding</h3>
          <p className="text-sm text-muted-foreground">
            JWT and OAuth authentication setup with guards and decorators (Coming Soon)
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Example</h2>
        <p className="mb-4">
          Get started with a new NestJS project in seconds:
        </p>
        <CodeBlock
          code={`# Install Nestify globally
npm install -g @mugabodannyshafi/nestify

# Create a new project
nestify new my-awesome-app

# Follow the interactive prompts
? Which package manager would you like to use? npm
? Project description: A NestJS application  
? Author: John Doe
? Add Docker support? Yes
? Which database would you like to use with Docker? postgres
? Add Swagger documentation? Yes
? Add development environment setup? Yes

# Start developing
cd my-awesome-app
npm run start:dev`}
          language="bash"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Nestify?</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Faster Development</h3>
            <p>
              Skip the repetitive setup and focus on building your application. Nestify provides 
              everything you need to start developing immediately.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Best Practices</h3>
            <p>
              Every generated project follows NestJS and Node.js best practices, ensuring your 
              code is maintainable and scalable from day one.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Complete Toolchain</h3>
            <p>
              From development to production, Nestify sets up your entire toolchain including 
              testing, linting, and Docker containers for streamlined development.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Upcoming Features</h3>
            <p>
              Authentication scaffolding, microservices support, GraphQL integration, and more 
              powerful features are in active development.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="mb-4">
          Head over to the installation guide to set up Nestify and create your first project.
        </p>
        <div className="flex gap-4">
          <a
            href="/installation"
            className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get Started
          </a>
          <a
            href="https://github.com/mugabodannyshafi/nestify"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md border border-border hover:bg-muted transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}