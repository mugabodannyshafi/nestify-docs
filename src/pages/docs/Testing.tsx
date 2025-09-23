import { CodeBlock } from "../../components/CodeBlock";
import { TestTube, Play, BarChart, Settings } from "lucide-react";

export default function Testing() {
  return (
    <div className="docs-content">
      <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center">
        <TestTube className="w-8 h-8 mr-3" />
        Testing
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Comprehensive testing setup with unit tests, e2e tests, and coverage reporting out of the box.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          Nestify projects come with a complete testing setup that includes:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">Unit Tests</h3>
            <p className="text-sm text-muted-foreground">
              Test individual components and services in isolation
            </p>
          </div>
          
          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">End-to-End Tests</h3>
            <p className="text-sm text-muted-foreground">
              Test complete application workflows and API endpoints
            </p>
          </div>
          
          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">Coverage Reports</h3>
            <p className="text-sm text-muted-foreground">
              Track test coverage with detailed HTML reports
            </p>
          </div>
          
          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">Watch Mode</h3>
            <p className="text-sm text-muted-foreground">
              Automatically run tests when files change during development
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Play className="w-6 h-6 mr-2" />
          Running Tests
        </h2>
        <p className="mb-4">
          Use these commands to run different types of tests:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Unit Tests</h3>
            <CodeBlock
              code={`# Run all unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:cov`}
              language="bash"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">End-to-End Tests</h3>
            <CodeBlock
              code={`# Run e2e tests
npm run test:e2e

# Run e2e tests in watch mode
npm run test:e2e:watch`}
              language="bash"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">All Tests</h3>
            <CodeBlock
              code={`# Run all tests (unit + e2e)
npm run test:all

# Run all tests with coverage
npm run test:all:cov`}
              language="bash"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Unit Testing</h2>
        <p className="mb-4">
          Unit tests are co-located with source files and use the <code className="docs-inline-code">.spec.ts</code> extension.
        </p>

        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Example Unit Test</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Testing a service with dependency injection:
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

  describe('getHealth', () => {
    it('should return health status', () => {
      const result = service.getHealth();
      
      expect(result).toEqual({
        status: 'ok',
        timestamp: expect.any(String),
        uptime: expect.any(Number),
      });
    });
  });

  describe('getVersion', () => {
    it('should return version information', () => {
      const result = service.getVersion();
      
      expect(result).toHaveProperty('version');
      expect(result).toHaveProperty('name');
      expect(typeof result.version).toBe('string');
    });
  });
});`}
              language="typescript"
              title="src/app.service.spec.ts"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Testing Controllers</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Example of testing a controller with mocked dependencies:
            </p>
            <CodeBlock
              code={`import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  const mockAppService = {
    getHealth: jest.fn(),
    getVersion: jest.fn(),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: mockAppService,
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('getHealth', () => {
    it('should return health status', () => {
      const expectedResult = { status: 'ok', timestamp: '2023-01-01' };
      mockAppService.getHealth.mockReturnValue(expectedResult);

      const result = appController.getHealth();

      expect(result).toBe(expectedResult);
      expect(appService.getHealth).toHaveBeenCalled();
    });
  });
});`}
              language="typescript"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">End-to-End Testing</h2>
        <p className="mb-4">
          E2E tests are located in the <code className="docs-inline-code">test/</code> directory and test complete application workflows.
        </p>

        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Example E2E Test</h3>
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

  afterAll(async () => {
    await app.close();
  });

  describe('Health endpoints', () => {
    it('/api (GET) - should return health status', () => {
      return request(app.getHttpServer())
        .get('/api')
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('status', 'ok');
          expect(res.body).toHaveProperty('timestamp');
        });
    });

    it('/api/version (GET) - should return version info', () => {
      return request(app.getHttpServer())
        .get('/api/version')
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('version');
          expect(res.body).toHaveProperty('name');
        });
    });
  });

  describe('Error handling', () => {
    it('should return 404 for non-existent endpoints', () => {
      return request(app.getHttpServer())
        .get('/api/non-existent')
        .expect(404);
    });
  });
});`}
              language="typescript"
              title="test/app.e2e-spec.ts"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Database Testing</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Testing with a separate test database when Docker is enabled:
            </p>
            <CodeBlock
              code={`import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Users (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        ConfigModule.forRoot({
          envFilePath: '.env.testing',
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    // Clean database before each test
    const dataSource = app.get('DataSource');
    await dataSource.synchronize(true);
  });

  describe('POST /api/users', () => {
    it('should create a new user', () => {
      const userData = {
        email: 'test@example.com',
        name: 'Test User',
      };

      return request(app.getHttpServer())
        .post('/api/users')
        .send(userData)
        .expect(201)
        .expect((res) => {
          expect(res.body.email).toBe(userData.email);
          expect(res.body.name).toBe(userData.name);
          expect(res.body).toHaveProperty('id');
        });
    });
  });
});`}
              language="typescript"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <BarChart className="w-6 h-6 mr-2" />
          Coverage Reports
        </h2>
        <p className="mb-4">
          Generate detailed coverage reports to track test quality:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Generate Coverage</h3>
            <CodeBlock
              code={`# Generate coverage for unit tests
npm run test:cov

# Generate coverage for e2e tests
npm run test:e2e:cov

# Generate coverage for all tests
npm run test:all:cov`}
              language="bash"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Coverage Output</h3>
            <p className="mb-2">Coverage reports are generated in multiple formats:</p>
            <ul className="list-disc list-inside space-y-1 text-sm mb-4">
              <li><strong>Terminal:</strong> Summary displayed in console</li>
              <li><strong>HTML:</strong> Detailed report in <code>coverage/lcov-report/index.html</code></li>
              <li><strong>LCOV:</strong> Machine-readable format for CI/CD integration</li>
            </ul>
            <CodeBlock
              code={`=============================== Coverage Summary ===============================
Statements   : 95.65% ( 88/92 )
Branches     : 83.33% ( 10/12 )
Functions    : 100% ( 18/18 )
Lines        : 95.45% ( 84/88 )
================================================================================`}
              language="text"
              title="Coverage Summary Example"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Settings className="w-6 h-6 mr-2" />
          Test Configuration
        </h2>
        <p className="mb-4">
          Nestify projects include pre-configured Jest setup for both unit and e2e tests:
        </p>

        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Jest Configuration (package.json)</h3>
            <CodeBlock
              code={`{
  "jest": {
    "moduleFileExtensions": ["js", "json", "ts"],
    "rootDir": "src",
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [
      "**/*.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node",
    "moduleNameMapping": {
      "^@/(.*)$": "<rootDir>/$1",
      "^@/common/(.*)$": "<rootDir>/common/$1"
    }
  }
}`}
              language="json"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">E2E Jest Configuration</h3>
            <CodeBlock
              code={`{
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": ".",
  "testEnvironment": "node",
  "testRegex": ".e2e-spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "moduleNameMapping": {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
}`}
              language="json"
              title="test/jest-e2e.json"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Testing Best Practices</h2>
        
        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Test Structure</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Follow the AAA pattern: Arrange, Act, Assert
            </p>
            <CodeBlock
              code={`it('should create a user', async () => {
  // Arrange
  const userData = { email: 'test@example.com', name: 'Test User' };
  
  // Act
  const result = await userService.create(userData);
  
  // Assert
  expect(result).toHaveProperty('id');
  expect(result.email).toBe(userData.email);
});`}
              language="typescript"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Test Naming</h3>
            <p className="text-sm text-muted-foreground">
              Use descriptive test names that explain the expected behavior:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm mt-2">
              <li><code>should return user when valid ID is provided</code></li>
              <li><code>should throw error when user not found</code></li>
              <li><code>test getUserById</code></li>
            </ul>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Test Cleanup</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Always clean up test data and close connections:
            </p>
            <CodeBlock
              code={`afterEach(async () => {
  // Clean up test data
  await userRepository.clear();
});

afterAll(async () => {
  // Close database connections
  await app.close();
});`}
              language="typescript"
            />
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Mocking</h3>
            <p className="text-sm text-muted-foreground">
              Mock external dependencies to isolate units under test and avoid side effects.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8">
        <h2 className="text-2xl font-semibold mb-4">Docker Testing Environment</h2>
        <p className="mb-4">
          When Docker is enabled, Nestify provides separate test databases and Redis instances:
        </p>
        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Test Services</h3>
            <p className="text-sm text-muted-foreground">
              Dedicated test database and Redis instances ensure test isolation from development data.
            </p>
          </div>
          
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Environment Variables</h3>
            <p className="text-sm text-muted-foreground">
              Use <code>.env.testing</code> file for test-specific configuration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}