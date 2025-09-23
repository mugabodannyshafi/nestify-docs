import { CodeBlock } from "../../components/CodeBlock";
import { FolderTree, FileText, Package } from "lucide-react";

export default function ProjectStructure() {
  return (
    <div className="docs-content">
      <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center">
        <FolderTree className="w-8 h-8 mr-3" />
        Project Structure
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Understanding the generated project structure and file organization in Nestify projects.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          Nestify generates a well-organized project structure that follows NestJS best practices 
          and includes all necessary configuration files for a complete development environment.
        </p>
        
        <CodeBlock
          code={`my-awesome-app/
├── src/                        # Application source code
│   ├── main.ts                 # Application entry point
│   ├── app.module.ts           # Root application module
│   ├── app.controller.ts       # Main controller with health checks
│   ├── app.service.ts          # Main service
│   └── *.spec.ts              # Unit tests
├── test/                       # End-to-end tests
│   ├── app.e2e-spec.ts        # E2E test suite
│   └── jest-e2e.json          # E2E test configuration
├── .github/                    # GitHub configuration
│   └── workflows/
│       └── tests.yml           # CI/CD pipeline
├── .env                        # Development environment variables
├── .env.example               # Example environment file
├── .env.testing               # Testing environment variables
├── docker-compose.yml         # Docker services configuration
├── Dockerfile                 # Application container definition
├── package.json              # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── eslint.config.mjs       # ESLint configuration
├── .prettierrc            # Prettier configuration
├── .gitignore            # Git ignore rules
└── README.md            # Project documentation`}
          language="text"
          title="Complete Project Structure"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Package className="w-6 h-6 mr-2" />
          Source Directory (src/)
        </h2>
        <p className="mb-4">
          The <code className="docs-inline-code">src/</code> directory contains your application's source code:
        </p>

        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">main.ts - Application Entry Point</h3>
            <p className="text-sm text-muted-foreground mb-3">
              The main entry point that bootstraps your NestJS application with proper configuration.
            </p>
            <CodeBlock
              code={`import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe());
  
  // API prefix
  app.setGlobalPrefix(process.env.API_PREFIX || 'api');
  
  // Swagger documentation (if enabled)
  const config = new DocumentBuilder()
    .setTitle('My Awesome App')
    .setDescription('API documentation')
    .setVersion(process.env.API_VERSION || '1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(process.env.APP_PORT || 3000);
}
bootstrap();`}
              language="typescript"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">app.module.ts - Root Module</h3>
            <p className="text-sm text-muted-foreground mb-3">
              The root module that organizes your application structure.
            </p>
            <CodeBlock
              code={`import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    // Add your feature modules here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}`}
              language="typescript"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">app.controller.ts - Main Controller</h3>
            <p className="text-sm text-muted-foreground mb-3">
              The main controller with health check endpoints.
            </p>
            <CodeBlock
              code={`import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Health check' })
  getHealth() {
    return this.appService.getHealth();
  }

  @Get('version')
  @ApiOperation({ summary: 'Get application version' })
  getVersion() {
    return this.appService.getVersion();
  }
}`}
              language="typescript"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FileText className="w-6 h-6 mr-2" />
          Configuration Files
        </h2>
        <p className="mb-4">
          Nestify generates several configuration files to ensure your project follows best practices:
        </p>

        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">package.json - Dependencies & Scripts</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Contains all dependencies and useful scripts for development.
            </p>
            <div className="overflow-x-auto">
              <table className="docs-table">
                <thead>
                  <tr>
                    <th>Script</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>start:dev</code></td>
                    <td>Development server with hot reload</td>
                  </tr>
                  <tr>
                    <td><code>start:debug</code></td>
                    <td>Debug mode for development</td>
                  </tr>
                  <tr>
                    <td><code>build</code></td>
                    <td>Build for production</td>
                  </tr>
                  <tr>
                    <td><code>test</code></td>
                    <td>Run unit tests</td>
                  </tr>
                  <tr>
                    <td><code>test:e2e</code></td>
                    <td>Run end-to-end tests</td>
                  </tr>
                  <tr>
                    <td><code>lint</code></td>
                    <td>Run ESLint</td>
                  </tr>
                  <tr>
                    <td><code>format</code></td>
                    <td>Format with Prettier</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">tsconfig.json - TypeScript Configuration</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Optimized TypeScript configuration with path aliases and strict settings.
            </p>
            <CodeBlock
              code={`{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "es2017",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": false,
    "noImplicitAny": false,
    "strictBindCallApply": false,
    "forceConsistentCasingInFileNames": false,
    "noFallthroughCasesInSwitch": false,
    "paths": {
      "@/*": ["src/*"],
      "@/common/*": ["src/common/*"],
      "@/modules/*": ["src/modules/*"]
    }
  }
}`}
              language="json"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">eslint.config.mjs - Code Quality</h3>
            <p className="text-sm text-muted-foreground mb-3">
              ESLint configuration with NestJS and TypeScript rules.
            </p>
            <CodeBlock
              code={`import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  js.configs.recommended,
  ...compat.extends('@nestjs/eslint-config'),
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
  },
];`}
              language="javascript"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Testing Structure</h2>
        <p className="mb-4">
          Nestify sets up a comprehensive testing environment with both unit and e2e tests:
        </p>

        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Unit Tests (*.spec.ts)</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Unit tests are placed alongside source files with the <code>.spec.ts</code> extension.
            </p>
            <CodeBlock
              code={`import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return health status', () => {
      expect(appController.getHealth()).toEqual({
        status: 'ok',
        timestamp: expect.any(String),
      });
    });
  });
});`}
              language="typescript"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">E2E Tests (test/)</h3>
            <p className="text-sm text-muted-foreground mb-3">
              End-to-end tests are placed in the <code>test/</code> directory.
            </p>
            <CodeBlock
              code={`import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('status', 'ok');
      });
  });
});`}
              language="typescript"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Module Organization</h3>
            <p className="text-sm text-muted-foreground">
              Organize related functionality into feature modules within the <code>src/</code> directory.
            </p>
          </div>
          
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Test Co-location</h3>
            <p className="text-sm text-muted-foreground">
              Keep unit tests close to source files for easier maintenance and better organization.
            </p>
          </div>
          
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Configuration Management</h3>
            <p className="text-sm text-muted-foreground">
              Use environment variables for configuration and keep sensitive data in <code>.env</code> files.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}