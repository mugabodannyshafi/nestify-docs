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
        Understanding the generated project structure and file organization in
        Nestify projects.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          Nestify generates a well-organized project structure that follows
          NestJS best practices and includes all necessary configuration files
          for a complete development environment.
        </p>

        <CodeBlock
          language="plaintext"
          code={`my-awesome-app/
├── src/                        # Application source code
│   ├── main.ts                 # Application entry point
│   ├── app.module.ts           # Root application module
│   ├── app.controller.ts       # Main controller with health checks
│   ├── app.controller.spec.ts  # Main controller unit tests
│   ├── app.service.ts          # Main service
│   ├── app.service.spec.ts     # Main service unit tests
│   ├── common/                 # Common utilities and shared code
│   │   ├── decorators/         # Custom decorators
│   │   ├── enums/              # Application enums
│   │   ├── exceptions/         # Custom exceptions
│   │   ├── filters/            # Exception filters
│   │   ├── guards/             # Route guards
│   │   ├── interceptors/       # Request/response interceptors
│   │   ├── middleware/         # Custom middleware
│   │   └── pipes/              # Validation pipes
│   ├── config/                 # Configuration files
│   ├── modules/                # Feature modules
│   └── shared/                 # Shared services and utilities
│       ├── services/           # Shared services
│       └── utils/              # Utility functions
├── test/                       # End-to-end tests
│   ├── app.e2e-spec.ts        # E2E test suite
│   └── jest-e2e.json          # E2E test configuration
├── .dockerignore              # Docker ignore rules
├── .env.example               # Example environment file
├── .env.testing.example       # Example testing environment file
├── docker-compose.yml         # Docker services configuration
├── Dockerfile                 # Application container definition
├── package.json              # Dependencies and scripts
├── pnpm-lock.yaml            # PNPM lock file
├── tsconfig.json            # TypeScript configuration
├── tsconfig.build.json      # TypeScript build configuration
├── eslint.config.mjs       # ESLint configuration
├── .prettierrc            # Prettier configuration
├── .gitignore            # Git ignore rules
└── README.md  `}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Package className="w-6 h-6 mr-2" />
          Source Directory (src/)
        </h2>
        <p className="mb-4">
          The <code className="docs-inline-code">src/</code> directory contains
          your application's source code:
        </p>

        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">
              main.ts - Application Entry Point
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              The main entry point that bootstraps your NestJS application with
              proper configuration.
            </p>
            <CodeBlock
              language="typescript"
              code={`import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // Set global prefix
  app.setGlobalPrefix('api');

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Server port
  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(\`Application is running on: http://localhost:\${port}\`);
  console.log(\`Swagger docs available at: http://localhost:\${port}/api\`);
}

bootstrap();
`}
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">app.module.ts - Root Module</h3>
            <p className="text-sm text-muted-foreground mb-3">
              The root module that organizes your application structure.
            </p>
            <CodeBlock
              code={`import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
`}
              language="typescript"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">
              app.controller.ts - Main Controller
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              The main controller with health check endpoints.
            </p>
            <CodeBlock
              code={`import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth(): object {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
`}
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
          Nestify generates several configuration files to ensure your project
          follows best practices:
        </p>

        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">
              package.json - Dependencies & Scripts
            </h3>
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
                    <td>
                      <code>start:dev</code>
                    </td>
                    <td>Development server with hot reload</td>
                  </tr>
                  <tr>
                    <td>
                      <code>start:debug</code>
                    </td>
                    <td>Debug mode for development</td>
                  </tr>
                  <tr>
                    <td>
                      <code>build</code>
                    </td>
                    <td>Build for production</td>
                  </tr>
                  <tr>
                    <td>
                      <code>test</code>
                    </td>
                    <td>Run unit tests</td>
                  </tr>
                  <tr>
                    <td>
                      <code>test:e2e</code>
                    </td>
                    <td>Run end-to-end tests</td>
                  </tr>
                  <tr>
                    <td>
                      <code>lint</code>
                    </td>
                    <td>Run ESLint</td>
                  </tr>
                  <tr>
                    <td>
                      <code>format</code>
                    </td>
                    <td>Format with Prettier</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">
              tsconfig.json - TypeScript Configuration
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Optimized TypeScript configuration with path aliases and strict
              settings.
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
    "target": "ES2021",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": false,
    "noImplicitAny": false,
    "strictBindCallApply": false,
    "forceConsistentCasingInFileNames": false,
    "noFallthroughCasesInSwitch": false
  }
}`}
              language="json"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">
              eslint.config.mjs - Code Quality
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              ESLint configuration with NestJS and TypeScript rules.
            </p>
            <CodeBlock
              code={`// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config(
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', '.prettierrc', 'eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_' 
      }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      
      // Prettier integration
      'prettier/prettier': ['error', {
        endOfLine: 'auto',
      }],
      
      // General rules
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },
);`}
              language="javascript"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Testing Structure</h2>
        <p className="mb-4">
          Nestify sets up a comprehensive testing environment with both unit and
          e2e tests:
        </p>

        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">
              Unit Tests (app.controller.spec.ts)
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Unit tests are placed alongside source files with the{" "}
              <code>.spec.ts</code> extension.
            </p>
            <CodeBlock
              code={`import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const result = 'Hello World!';
      jest.spyOn(appService, 'getHello').mockImplementation(() => result);

      expect(appController.getHello()).toBe(result);
      expect(appService.getHello).toHaveBeenCalled();
    });
  });

  describe('getHealth', () => {
    it('should return health status', () => {
      const result = appController.getHealth();

      expect(result).toHaveProperty('status', 'ok');
      expect(result).toHaveProperty('timestamp');
    });

    it('should return a valid ISO timestamp', () => {
      const result = appController.getHealth() as { status: string; timestamp: string };
      const timestamp = new Date(result.timestamp);

      expect(timestamp).toBeInstanceOf(Date);
      expect(isNaN(timestamp.getTime())).toBe(false);
    });
  });
});
`}
              language="typescript"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">
              Unit Tests (app.service.spec.ts)
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Unit tests are placed alongside source files with the{" "}
              <code>.spec.ts</code> extension.
            </p>
            <CodeBlock
              code={`import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getHello', () => {
    it('should return welcome message', () => {
      expect(service.getHello()).toBe('Welcome to your NestJS application built with nestify! 🔨');
    });

    it('should return a string', () => {
      const result = service.getHello();
      expect(typeof result).toBe('string');
    });

    it('should contain nestify', () => {
      const result = service.getHello();
      expect(result).toContain('nestify');
    });
  });
});
`}
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

  afterEach(async () => {
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to your NestJS application built with nestify! 🔨');
  });

  it('/health (GET)', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveProperty('status', 'ok');
        expect(res.body).toHaveProperty('timestamp');
        expect(new Date(res.body.timestamp)).toBeInstanceOf(Date);
      });
  });
});
`}
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
              Organize related functionality into feature modules within the{" "}
              <code>src/</code> directory.
            </p>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Test Co-location</h3>
            <p className="text-sm text-muted-foreground">
              Keep unit tests close to source files for easier maintenance and
              better organization.
            </p>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Configuration Management</h3>
            <p className="text-sm text-muted-foreground">
              Use environment variables for configuration and keep sensitive
              data in <code>.env</code> files.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
