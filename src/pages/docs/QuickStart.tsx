import { CodeBlock } from "../../components/CodeBlock";
import { Rocket, Play, Settings, FolderOpen } from "lucide-react";

export default function QuickStart() {
  return (
    <div className="docs-content prose prose-slate max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center">
        <Rocket className="w-8 h-8 mr-3" />
        Quick Start
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Get up and running with your first Nestify project in just a few minutes.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Create Your First Project</h2>
        <p className="mb-4">
          Creating a new NestJS project with Nestify is as simple as running one command:
        </p>
        <CodeBlock
          code="nestify new my-awesome-app"
          language="bash"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Settings className="w-6 h-6 mr-2" />
          Interactive Setup
        </h2>
        <p className="mb-4">
          After running the command, you'll be prompted with several questions to configure your project:
        </p>
        
        <CodeBlock
          code={`? Which package manager would you like to use? (npm/yarn/pnpm)
? Project description: A NestJS application
? Author: John Doe
? Add Docker support? Yes
? Which database would you like to use with Docker? (mysql/postgres/mongodb)
? Add Swagger documentation? Yes
? Add GitHub Actions for CI/CD? Yes`}
          language="text"
          title="Interactive Setup Prompts"
        />

        <div className="mt-6 space-y-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Configuration Options</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Package Manager:</strong> Choose between npm, yarn, or pnpm</li>
              <li><strong>Project Description:</strong> Brief description of your project</li>
              <li><strong>Author:</strong> Your name or organization</li>
              <li><strong>Docker Support:</strong> Adds Docker Compose with database and Redis</li>
              <li><strong>Database:</strong> Choose between MySQL, PostgreSQL, or MongoDB</li>
              <li><strong>Swagger:</strong> Adds OpenAPI documentation</li>
              <li><strong>Development Environment:</strong> Adds comprehensive development setup</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Play className="w-6 h-6 mr-2" />
          Start Development
        </h2>
        <p className="mb-4">
          Once your project is created, navigate to the project directory and start developing:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Without Docker</h3>
            <CodeBlock
              code={`cd my-awesome-app
npm run start:dev`}
              language="bash"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">With Docker</h3>
            <CodeBlock
              code={`cd my-awesome-app
docker-compose up`}
              language="bash"
            />
          </div>
        </div>

        <p className="mt-4">
          Your NestJS application will be available at <code className="docs-inline-code">http://localhost:3000</code>
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Gets Generated</h2>
        <p className="mb-4">
          Nestify creates a complete, production-ready project structure with:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">Project Structure</h3>
            <p className="text-sm text-muted-foreground">
              Well-organized folder structure following NestJS best practices
            </p>
          </div>
          
          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">Development Tools</h3>
            <p className="text-sm text-muted-foreground">
              ESLint, Prettier, and TypeScript configured out of the box
            </p>
          </div>
          
          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">Testing Setup</h3>
            <p className="text-sm text-muted-foreground">
              Unit tests, e2e tests, and coverage reporting ready to use
            </p>
          </div>
          
          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">Docker Environment</h3>
            <p className="text-sm text-muted-foreground">
              Complete Docker Compose setup with database and Redis
            </p>
          </div>
          
          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">API Documentation</h3>
            <p className="text-sm text-muted-foreground">
              Swagger/OpenAPI integration for interactive API docs
            </p>
          </div>
          
          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">Development Environment</h3>
            <p className="text-sm text-muted-foreground">
              Complete development setup with hot reload and debugging tools
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Available Scripts</h2>
        <p className="mb-4">
          Your generated project comes with several pre-configured scripts:
        </p>

        <div className="overflow-x-auto">
          <table className="docs-table">
            <thead>
              <tr>
                <th>Script</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>npm run start</code></td>
                <td>Start the application in production mode</td>
              </tr>
              <tr>
                <td><code>npm run start:dev</code></td>
                <td>Start in development mode with hot reload</td>
              </tr>
              <tr>
                <td><code>npm run start:debug</code></td>
                <td>Start in debug mode</td>
              </tr>
              <tr>
                <td><code>npm run build</code></td>
                <td>Build the application for production</td>
              </tr>
              <tr>
                <td><code>npm run test</code></td>
                <td>Run unit tests</td>
              </tr>
              <tr>
                <td><code>npm run test:watch</code></td>
                <td>Run tests in watch mode</td>
              </tr>
              <tr>
                <td><code>npm run test:e2e</code></td>
                <td>Run end-to-end tests</td>
              </tr>
              <tr>
                <td><code>npm run test:cov</code></td>
                <td>Generate test coverage report</td>
              </tr>
              <tr>
                <td><code>npm run lint</code></td>
                <td>Run ESLint</td>
              </tr>
              <tr>
                <td><code>npm run format</code></td>
                <td>Format code with Prettier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Example Workflow</h2>
        <p className="mb-4">
          Here's a complete example of creating and running a new project:
        </p>
        
        <CodeBlock
          code={`# 1. Create a new project
nestify new my-blog-api

# 2. Navigate to project directory
cd my-blog-api

# 3. Start development server
npm run start:dev

# 4. In another terminal, run tests
npm run test:watch

# 5. View API documentation (if Swagger enabled)
# Open http://localhost:3000/api in your browser

# 6. Start Docker services (if Docker enabled)
docker-compose up -d`}
          language="bash"
          title="Complete Example Workflow"
        />
      </div>

      <div className="border-t border-border pt-8">
        <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
        <p className="mb-4">
          Now that you have your project set up, explore the detailed guides to learn more about:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/project-structure" className="docs-feature-item hover:shadow-md transition-shadow">
            <FolderOpen className="w-5 h-5 mb-2" />
            <h3 className="font-semibold mb-2">Project Structure</h3>
            <p className="text-sm text-muted-foreground">
              Understand the generated project structure and file organization
            </p>
          </a>
          <a href="/docker" className="docs-feature-item hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-2">Docker Configuration</h3>
            <p className="text-sm text-muted-foreground">
              Learn how to use the Docker setup for development and testing
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}