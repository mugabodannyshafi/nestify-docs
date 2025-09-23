import { CodeBlock } from "../../components/CodeBlock";
import { Package, Terminal, Check } from "lucide-react";

export default function Installation() {
  return (
    <div className="docs-content prose prose-slate max-w-none">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Installation</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Install Nestify globally using your preferred package manager to start creating NestJS projects.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Package className="w-6 h-6 mr-2" />
          Global Installation
        </h2>
        <p className="mb-4">
          Nestify should be installed globally so you can use it to create new projects anywhere on your system.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Using npm</h3>
            <CodeBlock
              code="npm install -g @mugabodannyshafi/nestify"
              language="bash"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Using Yarn</h3>
            <CodeBlock
              code="yarn global add @mugabodannyshafi/nestify"
              language="bash"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Using pnpm</h3>
            <CodeBlock
              code="pnpm add -g @mugabodannyshafi/nestify"
              language="bash"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Terminal className="w-6 h-6 mr-2" />
          Verify Installation
        </h2>
        <p className="mb-4">
          After installation, verify that Nestify is properly installed by checking the version:
        </p>
        <CodeBlock
          code="nestify --version"
          language="bash"
        />
        <p className="mt-4 text-sm text-muted-foreground">
          This should display the current version of Nestify installed on your system.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">System Requirements</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <ul className="space-y-2">
            <li className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-green-600" />
              <strong>Node.js:</strong> Version 18.x or higher
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-green-600" />
              <strong>Package Manager:</strong> npm, yarn, or pnpm
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-green-600" />
              <strong>Git:</strong> For version control (recommended)
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-green-600" />
              <strong>Docker:</strong> Optional, for containerized development
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Alternative Installation Methods</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Using npx (No Global Install)</h3>
            <p className="mb-2">
              If you prefer not to install Nestify globally, you can use npx to run it directly:
            </p>
            <CodeBlock
              code="npx @mugabodannyshafi/nestify new my-project"
              language="bash"
            />
            <p className="mt-2 text-sm text-muted-foreground">
              Note: This will download and run the latest version each time, which may be slower than a global installation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Installing a Specific Version</h3>
            <p className="mb-2">
              To install a specific version of Nestify:
            </p>
            <CodeBlock
              code="npm install -g @mugabodannyshafi/nestify@1.0.0"
              language="bash"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Permission Issues on macOS/Linux</h3>
            <p className="mb-2">
              If you encounter permission errors during global installation, you can:
            </p>
            <ol className="list-decimal list-inside space-y-1 mb-2">
              <li>Use a Node.js version manager like nvm</li>
              <li>Configure npm to use a different directory</li>
              <li>Use sudo (not recommended)</li>
            </ol>
            <CodeBlock
              code={`# Install nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use the latest Node.js
nvm install node
nvm use node

# Now install Nestify
npm install -g @mugabodannyshafi/nestify`}
              language="bash"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Command Not Found</h3>
            <p className="mb-2">
              If the <code className="docs-inline-code">nestify</code> command is not found after installation:
            </p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Restart your terminal</li>
              <li>Check your PATH environment variable</li>
              <li>Verify the installation location with <code className="docs-inline-code">npm list -g @mugabodannyshafi/nestify</code></li>
            </ol>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8">
        <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
        <p className="mb-4">
          Now that Nestify is installed, you're ready to create your first NestJS project. 
          Head over to the Quick Start guide to learn how to use Nestify.
        </p>
        <a
          href="/quick-start"
          className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Quick Start Guide
        </a>
      </div>
    </div>
  );
}