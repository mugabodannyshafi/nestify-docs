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
        Comprehensive environment configuration for development, testing, and production environments.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          Nestify generates comprehensive environment configuration files to manage your application settings across different environments:
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
          The main environment file for development contains all necessary configuration:
        </p>

        <CodeBlock
          code={`# Application Configuration
APP_NAME=my-awesome-app
APP_PORT=3000
NODE_ENV=development

# API Configuration
API_PREFIX=api
API_VERSION=1

# Database Configuration
DB_TYPE=postgres
DB_HOST=db
DB_PORT=5432
DB_DATABASE=my_awesome_app
DB_USERNAME=app_user
DB_PASSWORD=app_password_123

# Redis Configuration
REDIS_HOST=redis
REDIS_PORT=6379
REDIS_PASSWORD=

# Authentication
JWT_SECRET=your-secret-key-here-change-in-production
JWT_EXPIRATION=7d

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
CORS_CREDENTIALS=true

# Rate Limiting
RATE_LIMIT_TTL=60
RATE_LIMIT_LIMIT=100

# File Upload
MAX_FILE_SIZE=10485760  # 10MB
UPLOAD_PATH=./uploads

# Email Configuration (if applicable)
MAIL_HOST=localhost
MAIL_PORT=587
MAIL_USER=
MAIL_PASS=
MAIL_FROM=noreply@example.com

# External APIs
EXTERNAL_API_URL=https://api.example.com
EXTERNAL_API_KEY=your-api-key-here`}
          language="bash"
          title=".env"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Testing Environment (.env.testing)</h2>
        <p className="mb-4">
          Separate configuration for testing with isolated database and Redis instances:
        </p>

        <CodeBlock
          code={`# Application Configuration
APP_NAME=my-awesome-app-test
APP_PORT=3001
NODE_ENV=testing

# API Configuration
API_PREFIX=api
API_VERSION=1

# Test Database Configuration
DB_TYPE=postgres
DB_HOST=db-test
DB_PORT=5432
DB_DATABASE=my_awesome_app_test
DB_USERNAME=app_user
DB_PASSWORD=app_password_123

# Test Redis Configuration
REDIS_HOST=redis-test
REDIS_PORT=6379
REDIS_PASSWORD=

# Authentication (less secure for testing)
JWT_SECRET=test-secret-key-not-for-production
JWT_EXPIRATION=1h

# Disable external services in tests
MAIL_HOST=
EXTERNAL_API_URL=http://localhost:3001/mock-api
EXTERNAL_API_KEY=test-key

# Test-specific settings
LOG_LEVEL=error
RATE_LIMIT_TTL=60
RATE_LIMIT_LIMIT=1000`}
          language="bash"
          title=".env.testing"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Example Template (.env.example)</h2>
        <p className="mb-4">
          The template file shows all required variables without sensitive values:
        </p>

        <CodeBlock
          code={`# Application Configuration
APP_NAME=my-awesome-app
APP_PORT=3000
NODE_ENV=development

# API Configuration
API_PREFIX=api
API_VERSION=1

# Database Configuration
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=my_awesome_app
DB_USERNAME=your_username
DB_PASSWORD=your_password

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# Authentication
JWT_SECRET=your-jwt-secret-change-this
JWT_EXPIRATION=7d

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
CORS_CREDENTIALS=true

# Rate Limiting
RATE_LIMIT_TTL=60
RATE_LIMIT_LIMIT=100

# Email Configuration
MAIL_HOST=your-smtp-host
MAIL_PORT=587
MAIL_USER=your-email-user
MAIL_PASS=your-email-password
MAIL_FROM=noreply@yourdomain.com

# External APIs
EXTERNAL_API_URL=https://api.example.com
EXTERNAL_API_KEY=your-external-api-key`}
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
              code={`# PostgreSQL Database
DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=my_awesome_app
DB_USERNAME=app_user
DB_PASSWORD=your_secure_password
DB_SCHEMA=public
DB_SYNC=false  # Set to true only in development
DB_LOGGING=false`}
              language="bash"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-3">MySQL Configuration</h3>
            <CodeBlock
              code={`# MySQL Database
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=my_awesome_app
DB_USERNAME=app_user
DB_PASSWORD=your_secure_password
DB_CHARSET=utf8mb4
DB_SYNC=false
DB_LOGGING=false`}
              language="bash"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-3">MongoDB Configuration</h3>
            <CodeBlock
              code={`# MongoDB Database
DB_TYPE=mongodb
DB_URL=mongodb://localhost:27017/my_awesome_app
DB_USERNAME=app_user
DB_PASSWORD=your_secure_password
DB_AUTH_SOURCE=admin
DB_REPLICA_SET=
DB_SSL=false`}
              language="bash"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Using Environment Variables</h2>
        <p className="mb-4">
          Access environment variables in your NestJS application using the ConfigService:
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
              <li>Add <code>.env</code> to your <code>.gitignore</code> file</li>
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
              Use different values for development, testing, and production environments.
            </p>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Validation</h3>
            <p className="text-sm text-muted-foreground">
              Always validate environment variables using Joi or class-validator to catch configuration errors early.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Production Configuration</h2>
        <p className="mb-4">
          Important considerations for production environments:
        </p>

        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Production Checklist</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Set <code>NODE_ENV=production</code></li>
              <li>Use secure, unique passwords</li>
              <li>Enable SSL/TLS for database connections</li>
              <li>Configure proper CORS origins</li>
              <li>Set appropriate rate limits</li>
              <li>Configure proper logging levels</li>
              <li>Use environment-specific API keys</li>
            </ul>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Production Example</h3>
            <CodeBlock
              code={`# Production Environment
NODE_ENV=production
APP_PORT=3000

# Database with SSL
DB_HOST=your-production-db-host
DB_SSL=true
DB_SYNC=false
DB_LOGGING=false

# Redis with authentication
REDIS_HOST=your-production-redis-host
REDIS_PASSWORD=your-secure-redis-password

# Secure JWT
JWT_SECRET=your-very-secure-production-jwt-secret
JWT_EXPIRATION=15m

# Proper CORS
CORS_ORIGIN=https://yourdomain.com
CORS_CREDENTIALS=true

# Strict rate limiting
RATE_LIMIT_TTL=60
RATE_LIMIT_LIMIT=60

# Production logging
LOG_LEVEL=warn`}
              language="bash"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8">
        <h2 className="text-2xl font-semibold mb-4">Environment File Management</h2>
        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Setup Process</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Copy <code>.env.example</code> to <code>.env</code></li>
              <li>Update values for your local environment</li>
              <li>Never commit <code>.env</code> files to version control</li>
              <li>Use deployment tools to manage production environment variables</li>
            </ol>
          </div>
          
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Loading Order</h3>
            <p className="text-sm text-muted-foreground">
              Nestify loads environment files in this order: <code>.env.local</code> → <code>.env</code> → system environment variables
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}