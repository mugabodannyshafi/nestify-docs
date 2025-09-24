import { CodeBlock } from "../../components/CodeBlock";
import { Settings, Lock, Database, Server } from "lucide-react";

export default function Environment() {
  return (
    <div className="docs-content">
      <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center">
        <Settings className="w-8 h-8 mr-3" />
        Environment Variables
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Comprehensive environment configuration for development, testing, and
        production environments.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          Nestify generates comprehensive environment configuration files to
          manage your application settings across different environments:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">.env</h3>
            <p className="text-sm text-muted-foreground">
              Development environment configuration
            </p>
          </div>

          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">.env.testing</h3>
            <p className="text-sm text-muted-foreground">
              Testing environment with isolated services
            </p>
          </div>

          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">.env.example</h3>
            <p className="text-sm text-muted-foreground">
              Template with all required variables
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Server className="w-6 h-6 mr-2" />
          Development Environment (.env)
        </h2>
        <p className="mb-4">
          The main environment file for development contains all necessary
          configuration:
        </p>

        <CodeBlock
          code={`# Application
APP_NAME=my-awesome-app
APP_PORT=3000
NODE_ENV=development

# Database - MySQL
DB_TYPE=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=my-awesome-app
DB_USERNAME=app_user
DB_PASSWORD=app_password_123

# Database Forwarding Ports (for local access)
FORWARD_DB_PORT=3307

# Redis
REDIS_HOST=redis
REDIS_PORT=6379
FORWARD_REDIS_PORT=6380

# JWT
JWT_SECRET=your-secret-key-here-change-in-production
JWT_EXPIRATION=7d

# API
API_PREFIX=api
API_VERSION=1`}
          language="plaintext"
          title=".env"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Testing Environment (.env.testing)
        </h2>
        <p className="mb-4">
          Separate configuration for testing with isolated database and Redis
          instances:
        </p>

        <CodeBlock
          code={`# Testing Environment
APP_NAME=my-awesome-app
NODE_ENV=testing

# Test Database - MySQL
DB_TYPE=mysql
DB_HOST=db-test
DB_PORT=3306
DB_DATABASE=my-awesome-app_test
DB_USERNAME=app_user
DB_PASSWORD=app_password_123

# Test Redis
REDIS_HOST=redis-test
REDIS_PORT=6379

# JWT for testing
JWT_SECRET=test-secret-key
JWT_EXPIRATION=1d

# API
API_PREFIX=api
API_VERSION=1`}
          language="plaintext"
          title=".env.testing"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Example Template (.env.example)
        </h2>
        <p className="mb-4">
          The template file shows all required variables without sensitive
          values:
        </p>

        <CodeBlock
          code={`# Application
APP_NAME=my-awesome-app
APP_PORT=3000
NODE_ENV=development

# Database - MySQL
DB_TYPE=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=my-awesome-app
DB_USERNAME=app_user
DB_PASSWORD=app_password_123

# Database Forwarding Ports (for local access)
FORWARD_DB_PORT=3307

# Redis
REDIS_HOST=redis
REDIS_PORT=6379
FORWARD_REDIS_PORT=6380

# JWT
JWT_SECRET=your-secret-key-here-change-in-production
JWT_EXPIRATION=7d

# API
API_PREFIX=api
API_VERSION=1`}
          language="bash"
          title=".env.example"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Database className="w-6 h-6 mr-2" />
          Database-Specific Configuration
        </h2>
        <p className="mb-4">
          Configuration varies based on your chosen database:
        </p>

        <div className="space-y-6">
          <div className="docs-card">
            <h3 className="font-semibold mb-3">PostgreSQL Configuration</h3>
            <CodeBlock
              code={`# Database - PostgreSQL
DB_TYPE=postgres
DB_HOST=db
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=app_user
DB_PASSWORD=app_password_123
`}
              language="bash"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-3">MySQL Configuration</h3>
            <CodeBlock
              code={`# Database - MySQL
DB_TYPE=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=my-awesome-app
DB_USERNAME=app_user
DB_PASSWORD=app_password_123`}
              language="bash"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-3">MongoDB Configuration</h3>
            <CodeBlock
              code={`# Database - MongoDB
DB_TYPE=mongodb
DB_HOST=db
DB_PORT=27017
DB_DATABASE=mongo
DB_USERNAME=app_user
DB_PASSWORD=app_password_123
DATABASE_URL=mongodb://app_user:app_password_123@db:27017/mongo?authSource=admin`}
              language="bash"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Using Environment Variables
        </h2>
        <p className="mb-4">
          Access environment variables in your NestJS application using the
          ConfigService:
        </p>

        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">ConfigModule Setup</h3>
            <CodeBlock
              code={`import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'testing')
          .default('development'),
        APP_PORT: Joi.number().default(3000),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        // Add more validation as needed
      }),
    }),
  ],
})
export class AppModule {}`}
              language="typescript"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Using ConfigService</h3>
            <CodeBlock
              code={`import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService {
  constructor(private configService: ConfigService) {}

  getDatabaseConfig() {
    return {
      type: this.configService.get<string>('DB_TYPE'),
      host: this.configService.get<string>('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      database: this.configService.get<string>('DB_DATABASE'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
    };
  }

  getJwtConfig() {
    return {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: this.configService.get<string>('JWT_EXPIRATION'),
    };
  }
}`}
              language="typescript"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Lock className="w-6 h-6 mr-2" />
          Security Best Practices
        </h2>

        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Sensitive Data</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Never commit sensitive data to version control:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                Add <code>.env</code> to your <code>.gitignore</code> file
              </li>
              <li>Use strong, unique passwords</li>
              <li>Generate secure JWT secrets</li>
              <li>Use different credentials for each environment</li>
            </ul>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">JWT Secrets</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Generate secure JWT secrets:
            </p>
            <CodeBlock
              code={`# Generate a secure JWT secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`}
              language="bash"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Environment-Specific Values</h3>
            <p className="text-sm text-muted-foreground">
              Use different values for development, testing, and production
              environments.
            </p>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Validation</h3>
            <p className="text-sm text-muted-foreground">
              Always validate environment variables using Joi or class-validator
              to catch configuration errors early.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Production Configuration
        </h2>
        <p className="mb-4">
          Important considerations for production environments:
        </p>

        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Production Checklist</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                Set <code>NODE_ENV=production</code>
              </li>
              <li>Use secure, unique passwords</li>
              <li>Enable SSL/TLS for database connections</li>
              <li>Configure proper CORS origins</li>
              <li>Set appropriate rate limits</li>
              <li>Configure proper logging levels</li>
              <li>Use environment-specific API keys</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-border pt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Environment File Management
        </h2>
        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Setup Process</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>
                Copy <code>.env.example</code> to <code>.env</code>
              </li>
              <li>Update values for your local environment</li>
              <li>
                Never commit <code>.env</code> files to version control
              </li>
              <li>
                Use deployment tools to manage production environment variables
              </li>
            </ol>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Loading Order</h3>
            <p className="text-sm text-muted-foreground">
              Nestify loads environment files in this order:{" "}
              <code>.env.local</code> → <code>.env</code> → system environment
              variables
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
