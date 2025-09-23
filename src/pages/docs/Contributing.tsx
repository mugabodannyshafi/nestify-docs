import { CodeBlock } from "../../components/CodeBlock";
import { Users, GitBranch, Bug, Lightbulb, Book } from "lucide-react";

export default function Contributing() {
  return (
    <div className="docs-content">
      <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center">
        <Users className="w-8 h-8 mr-3" />
        Contributing
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Help make Nestify better by contributing code, reporting issues, or
        improving documentation.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to Contribute</h2>
        <p className="mb-4">
          We welcome contributions from the community! Whether you're fixing
          bugs, adding features, or improving documentation, your help is
          appreciated.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="docs-feature-item">
            <Bug className="w-5 h-5 mb-2" />
            <h3 className="font-semibold mb-2">Report Issues</h3>
            <p className="text-sm text-muted-foreground">
              Found a bug or have a suggestion? Open an issue on GitHub
            </p>
          </div>

          <div className="docs-feature-item">
            <Lightbulb className="w-5 h-5 mb-2" />
            <h3 className="font-semibold mb-2">Propose Features</h3>
            <p className="text-sm text-muted-foreground">
              Have an idea for a new feature? Start a discussion
            </p>
          </div>

          <div className="docs-feature-item">
            <GitBranch className="w-5 h-5 mb-2" />
            <h3 className="font-semibold mb-2">Submit Code</h3>
            <p className="text-sm text-muted-foreground">
              Fix bugs or implement features with pull requests
            </p>
          </div>

          <div className="docs-feature-item">
            <Book className="w-5 h-5 mb-2" />
            <h3 className="font-semibold mb-2">Improve Docs</h3>
            <p className="text-sm text-muted-foreground">
              Help improve documentation and examples
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <GitBranch className="w-6 h-6 mr-2" />
          Development Setup
        </h2>
        <p className="mb-4">
          Follow these steps to set up your development environment:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">1. Fork and Clone</h3>
            <CodeBlock
              code={`# Fork the repository on GitHub, then clone your fork
git clone https://github.com/mugabodannyshafi/nestify.git
cd nestify

# Add the original repository as upstream
git remote add upstream https://github.com/mugabodannyshafi/nestify.git`}
              language="bash"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              2. Install Dependencies
            </h3>
            <CodeBlock
              code={`# Install dependencies
npm install

# Link the package globally for testing
npm link`}
              language="bash"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              3. Development Commands
            </h3>
            <CodeBlock
              code={`# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build the project
npm run build

# Run linting
npm run lint

# Format code
npm run format`}
              language="bash"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">4. Test Your Changes</h3>
            <CodeBlock
              code={`# Create a test project to verify your changes
mkdir test-project
cd test-project
nestify new test-app

# Test the generated project
cd test-app
npm run test
npm run build`}
              language="bash"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pull Request Process</h2>
        <p className="mb-4">
          Follow these steps when submitting a pull request:
        </p>

        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">1. Create a Feature Branch</h3>
            <CodeBlock
              code={`# Create a new branch for your feature
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/issue-description`}
              language="bash"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">2. Make Your Changes</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Write clear, concise commit messages</li>
              <li>Add tests for new functionality</li>
              <li>Update documentation if needed</li>
              <li>Follow the existing code style</li>
            </ul>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">3. Test Your Changes</h3>
            <CodeBlock
              code={`# Run all tests
npm test

# Check code formatting
npm run lint

# Build the project
npm run build`}
              language="bash"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">4. Submit Pull Request</h3>
            <CodeBlock
              code={`# Push your branch
git push origin feature/your-feature-name

# Create a pull request on GitHub`}
              language="bash"
            />
            <p className="text-sm text-muted-foreground mt-2">
              Include a clear description of your changes and reference any
              related issues.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Code Style Guidelines</h2>
        <p className="mb-4">
          Please follow these guidelines when contributing code:
        </p>

        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">TypeScript</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Use TypeScript for all new code</li>
              <li>Provide proper type annotations</li>
              <li>Use interfaces for object shapes</li>
              <li>Follow existing naming conventions</li>
            </ul>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Testing</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Write tests for new functionality</li>
              <li>Maintain or improve test coverage</li>
              <li>Use descriptive test names</li>
              <li>Mock external dependencies</li>
            </ul>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Documentation</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Update README for new features</li>
              <li>Add JSDoc comments for public APIs</li>
              <li>Include examples where helpful</li>
              <li>Keep documentation up to date</li>
            </ul>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Commit Messages</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Use conventional commit format:
            </p>
            <CodeBlock
              code={`# Feature
feat: add support for MongoDB database option

# Bug fix
fix: resolve issue with Docker port conflicts

# Documentation
docs: update installation instructions

# Refactor
refactor: improve CLI argument parsing`}
              language="text"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Reporting Issues</h2>
        <p className="mb-4">
          When reporting issues, please provide as much information as possible:
        </p>

        <div className="docs-card">
          <h3 className="font-semibold mb-2">Issue Template</h3>
          <CodeBlock
            code={`## Bug Description
A clear description of what the bug is.

## Steps to Reproduce
1. Run 'nestify new my-app'
2. Select these options: ...
3. Run 'npm start'
4. See error

## Expected Behavior
What you expected to happen.

## Actual Behavior
What actually happened.

## Environment
- Nestify version: 1.0.0
- Node.js version: 18.17.0
- OS: macOS 13.4
- Package manager: npm 9.6.7

## Additional Context
Any other context about the problem.`}
            language="text"
          />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Feature Requests</h2>
        <p className="mb-4">For feature requests, please provide:</p>

        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Feature Template</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                <strong>Problem:</strong> What problem does this solve?
              </li>
              <li>
                <strong>Solution:</strong> Describe your proposed solution
              </li>
              <li>
                <strong>Alternatives:</strong> Other solutions considered
              </li>
              <li>
                <strong>Use Case:</strong> Real-world scenarios
              </li>
              <li>
                <strong>Examples:</strong> Code examples if applicable
              </li>
            </ul>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Discussion First</h3>
            <p className="text-sm text-muted-foreground">
              For major features, consider starting a discussion before
              implementing to ensure alignment with project goals.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
        <p className="mb-4">
          Understanding the project structure will help you contribute
          effectively:
        </p>

        <CodeBlock
          code={`nestify/
├── src/                    # Source code
│   ├── commands/          # CLI commands
│   ├── generators/        # Template generators
│   ├── templates/         # Project templates
│   ├── utils/            # Utility functions
│   └── index.ts          # Main entry point
├── test/                  # Test files
├── templates/             # Template files
│   ├── base/             # Base template files
│   ├── docker/           # Docker-related templates
│   └── ci/               # CI/CD templates
├── docs/                  # Documentation
└── examples/              # Example projects`}
          language="text"
        />
      </div>

      <div className="border-t border-border pt-8">
        <h2 className="text-2xl font-semibold mb-4">Community</h2>
        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Code of Conduct</h3>
            <p className="text-sm text-muted-foreground">
              We are committed to providing a welcoming and inclusive
              environment. Please read and follow our Code of Conduct.
            </p>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Get Help</h3>
            <p className="text-sm text-muted-foreground">
              Need help contributing? Open an issue or start a discussion on
              GitHub.
            </p>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Recognition</h3>
            <p className="text-sm text-muted-foreground">
              All contributors will be recognized in our README and changelog.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
