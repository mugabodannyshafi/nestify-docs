import { CodeBlock } from "../../components/CodeBlock";
import { Terminal, Plus, Wrench } from "lucide-react";

export default function Commands() {
  return (
    <div className="docs-content">
      <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center">
        <Terminal className="w-8 h-8 mr-3" />
        Commands Reference
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Complete reference for all Nestify CLI commands and their options.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Plus className="w-6 h-6 mr-2" />
          nestify new
        </h2>
        <p className="mb-4">
          Create a new NestJS project with interactive configuration.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Basic Usage</h3>
            <CodeBlock
              code="nestify new <project-name>"
              language="bash"
            />
            <p className="mt-2 text-sm text-muted-foreground">
              Creates a new NestJS project with the specified name and prompts for configuration options.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Available Options</h3>
            <div className="overflow-x-auto">
              <table className="docs-table">
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>Description</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>--skip-install</code></td>
                    <td>Skip automatic package installation</td>
                    <td><code>nestify new my-app --skip-install</code></td>
                  </tr>
                  <tr>
                    <td><code>--package-manager</code></td>
                    <td>Specify package manager (npm/yarn/pnpm)</td>
                    <td><code>nestify new my-app --package-manager yarn</code></td>
                  </tr>
                  <tr>
                    <td><code>--git</code></td>
                    <td>Initialize Git repository (default: true)</td>
                    <td><code>nestify new my-app --git false</code></td>
                  </tr>
                  <tr>
                    <td><code>--docker</code></td>
                    <td>Add Docker support (default: prompt)</td>
                    <td><code>nestify new my-app --docker</code></td>
                  </tr>
                  <tr>
                    <td><code>--database</code></td>
                    <td>Database type (mysql/postgres/mongodb)</td>
                    <td><code>nestify new my-app --database postgres</code></td>
                  </tr>
                  <tr>
                    <td><code>--swagger</code></td>
                    <td>Add Swagger documentation (default: prompt)</td>
                    <td><code>nestify new my-app --swagger</code></td>
                  </tr>
                  <tr>
                    <td><code>--development</code></td>
                    <td>Add development environment setup (default: prompt)</td>
                    <td><code>nestify new my-app --development</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Examples</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium mb-1">Basic project with prompts</h4>
                <CodeBlock
                  code="nestify new my-blog-api"
                  language="bash"
                />
              </div>
              
              <div>
                <h4 className="font-medium mb-1">Skip installation and use yarn</h4>
                <CodeBlock
                  code="nestify new my-blog-api --skip-install --package-manager yarn"
                  language="bash"
                />
              </div>
              
              <div>
                <h4 className="font-medium mb-1">Full configuration without prompts</h4>
                <CodeBlock
                  code="nestify new my-blog-api --docker --database postgres --swagger --development"
                  language="bash"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Global Options</h2>
        <p className="mb-4">
          Options available for all Nestify commands:
        </p>

        <div className="overflow-x-auto">
          <table className="docs-table">
            <thead>
              <tr>
                <th>Option</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>--version, -v</code></td>
                <td>Show Nestify version</td>
                <td><code>nestify --version</code></td>
              </tr>
              <tr>
                <td><code>--help, -h</code></td>
                <td>Show help information</td>
                <td><code>nestify --help</code></td>
              </tr>
              <tr>
                <td><code>--verbose</code></td>
                <td>Enable verbose logging</td>
                <td><code>nestify new my-app --verbose</code></td>
              </tr>
              <tr>
                <td><code>--dry-run</code></td>
                <td>Show what would be created without creating</td>
                <td><code>nestify new my-app --dry-run</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Wrench className="w-6 h-6 mr-2" />
          Future Commands (Roadmap)
        </h2>
        <p className="mb-4">
          Planned commands for future releases of Nestify:
        </p>

        <div className="space-y-6">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">nestify generate (nestify g)</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Generate NestJS components like modules, controllers, services, and more.
            </p>
            <div className="space-y-2">
              <CodeBlock
                code={`# Generate a new module
nestify generate module users

# Generate a controller
nestify generate controller users

# Generate a service
nestify generate service users

# Generate all (module, controller, service)
nestify generate resource users`}
                language="bash"
              />
            </div>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">nestify add</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Add pre-configured features to existing projects.
            </p>
            <div className="space-y-2">
              <CodeBlock
                code={`# Add authentication setup
nestify add auth

# Add database configuration
nestify add database --type postgres

# Add GraphQL support
nestify add graphql

# Add WebSocket support
nestify add websockets`}
                language="bash"
              />
            </div>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">nestify update</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Update project dependencies and configuration files.
            </p>
            <div className="space-y-2">
              <CodeBlock
                code={`# Update all dependencies
nestify update

# Update specific dependency
nestify update @nestjs/core

# Update configuration files
nestify update --config`}
                language="bash"
              />
            </div>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">nestify info</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Display project and system information.
            </p>
            <div className="space-y-2">
              <CodeBlock
                code={`# Show project information
nestify info

# Show system information
nestify info --system`}
                language="bash"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Interactive Prompts</h2>
        <p className="mb-4">
          When creating a new project, Nestify presents interactive prompts to configure your project:
        </p>

        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Configuration Prompts</h3>
            <CodeBlock
              code={`? Which package manager would you like to use?
  ❯ npm
    yarn
    pnpm

? Project description: (A NestJS application)

? Author: (Your Name)

? Add Docker support? (Y/n)

? Which database would you like to use with Docker?
  ❯ postgres
    mysql
    mongodb

? Add Swagger documentation? (Y/n)

? Add development environment setup? (Y/n)`}
              language="text"
              title="Interactive Setup"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Skipping Prompts</h3>
            <p className="text-sm text-muted-foreground mb-2">
              You can skip interactive prompts by providing command-line options:
            </p>
            <CodeBlock
              code="nestify new my-app --package-manager npm --docker --database postgres --swagger --development"
              language="bash"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Command Examples by Use Case</h2>
        
        <div className="space-y-6">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Quick Start</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Create a basic project with minimal setup:
            </p>
            <CodeBlock
              code="nestify new my-api"
              language="bash"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Docker Development</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Create a project with full Docker setup:
            </p>
            <CodeBlock
              code="nestify new my-api --docker --database postgres --swagger"
              language="bash"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Production Ready</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Create a production-ready project with all features:
            </p>
            <CodeBlock
              code="nestify new my-api --docker --database postgres --swagger --development --package-manager pnpm"
              language="bash"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Quick Prototype</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Create a minimal project for prototyping:
            </p>
            <CodeBlock
              code="nestify new prototype --skip-install --git false"
              language="bash"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8">
        <h2 className="text-2xl font-semibold mb-4">Getting Help</h2>
        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Command Help</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Get help for any command:
            </p>
            <CodeBlock
              code={`# General help
nestify --help

# Command-specific help
nestify new --help`}
              language="bash"
            />
          </div>
          
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Issues</h3>
            <p className="text-sm text-muted-foreground">
              Report issues or request features on our GitHub repository.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}