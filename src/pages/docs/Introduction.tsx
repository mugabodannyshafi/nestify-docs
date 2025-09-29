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
          A powerful, production-ready CLI tool for scaffolding NestJS projects
          with best practices, Docker support, and complete development
          environment setup out of the box.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          <a
            href="https://www.npmjs.com/package/nestify-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            <Download className="w-3 h-3 mr-1" />
            npm version
          </a>
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

      <div className="mb-8 flex flex-col gap-4">
        <p className="text-lg">
          Nestify is a powerful CLI tool that supercharges NestJS development by
          scaffolding production-ready applications with enterprise-grade
          configurations out of the box. It provides pre-configured Docker
          environments, CI/CD pipelines, testing frameworks, and database
          setups, eliminating hours of boilerplate configuration while offering
          intelligent code generation with proper architectural patterns.
        </p>
        <p className="text-lg">
          Built for real-world development, Nestify streamlines the entire
          development lifecycle from initial setup to deployment-ready code,
          with future expansions planned for authentication, microservices,
          GraphQL/WebSocket support, Kubernetes deployments, and more.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Example</h2>
        <p className="mb-4">
          Get started with a new NestJS project in seconds:
        </p>
        <CodeBlock
          code={`# Install Nestify globally
npm install -g nestify-cli

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
              Skip the repetitive setup and focus on building your application.
              Nestify provides everything you need to start developing
              immediately.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Best Practices</h3>
            <p>
              Every generated project follows NestJS and Node.js best practices,
              ensuring your code is maintainable and scalable from day one.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Complete Toolchain</h3>
            <p>
              From development to production, Nestify sets up your entire
              toolchain including testing, linting, and Docker containers for
              streamlined development.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Upcoming Features</h3>
            <p>
              Authentication scaffolding, microservices support, GraphQL
              integration, and more powerful features are in active development.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="mb-4">
          Head over to the installation guide to set up Nestify and create your
          first project.
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
