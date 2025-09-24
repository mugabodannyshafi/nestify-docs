import { CodeBlock } from "../../components/CodeBlock";
import { Container, Database, Play, Settings } from "lucide-react";

export default function Docker() {
  return (
    <div className="docs-content">
      <h1 className="text-4xl font-bold tracking-tight mb-4 flex items-center">
        <Container className="w-8 h-8 mr-3" />
        Docker Configuration
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Complete Docker setup with multi-service development environment
        including databases and Redis.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          When Docker support is enabled, Nestify configures a complete
          development environment with:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">Application Container</h3>
            <p className="text-sm text-muted-foreground">
              Your NestJS application running in a containerized environment
            </p>
          </div>

          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">Database Service</h3>
            <p className="text-sm text-muted-foreground">
              MySQL, PostgreSQL, or MongoDB with proper configuration
            </p>
          </div>

          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">Redis Cache</h3>
            <p className="text-sm text-muted-foreground">
              Redis service for caching and session storage
            </p>
          </div>

          <div className="docs-feature-item">
            <h3 className="font-semibold mb-2">Test Environment</h3>
            <p className="text-sm text-muted-foreground">
              Separate database and Redis instances for testing
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Play className="w-6 h-6 mr-2" />
          Getting Started
        </h2>
        <p className="mb-4">
          Start your development environment with a single command:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Start All Services</h3>
            <CodeBlock code="docker-compose up" language="bash" />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Start in Detached Mode
            </h3>
            <CodeBlock code="docker-compose up -d" language="bash" />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Stop All Services</h3>
            <CodeBlock code="docker-compose down" language="bash" />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Rebuild and Start</h3>
            <CodeBlock code="docker-compose up --build" language="bash" />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibred mb-4">
          Docker Compose Configuration
        </h2>
        <p className="mb-4">
          The generated{" "}
          <code className="docs-inline-code">docker-compose.yml</code> includes
          all necessary services:
        </p>

        <CodeBlock
          code={`services:
  app:
    build: .
    restart: always
    ports:
      - '\${APP_PORT}:3000'
    platform: linux/amd64
    volumes:
      - '.:/home/app'
    command: bash -c "rm -rf node_modules dist && npm install && npm run start:dev"
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_healthy
    networks:
      - app-net

  db:
    image: 'mysql/mysql-server:8.0'
    ports:
      - '\${FORWARD_DB_PORT:-3306}:3306'
    environment:
      MYSQL_ROOT_PASSWORD: '\${DB_PASSWORD}'
      MYSQL_ROOT_HOST: '%'
      MYSQL_DATABASE: '\${DB_DATABASE}'
      MYSQL_USER: '\${DB_USERNAME}'
      MYSQL_PASSWORD: '\${DB_PASSWORD}'
      MYSQL_ALLOW_EMPTY_PASSWORD: 1
    volumes:
      - 'app-mysql:/var/lib/mysql'
    networks:
      - app-net
    healthcheck:
      test: ['CMD', 'mysqladmin', 'ping', '-p\${DB_PASSWORD}']
      retries: 10
      interval: 5s
      timeout: 5s
      start_period: 5s

  db-test:
    image: 'mysql/mysql-server:8.0'
    environment:
      MYSQL_ROOT_PASSWORD: '\${DB_PASSWORD}'
      MYSQL_ROOT_HOST: '%'
      MYSQL_DATABASE: '\${DB_DATABASE}_test'
      MYSQL_USER: '\${DB_USERNAME}'
      MYSQL_PASSWORD: '\${DB_PASSWORD}'
      MYSQL_ALLOW_EMPTY_PASSWORD: 1
    volumes:
      - 'app-mysql-testing:/var/lib/mysql'
    networks:
      - app-net
    healthcheck:
      test: ['CMD', 'mysqladmin', 'ping', '-p\${DB_PASSWORD}']
      retries: 10
      interval: 5s
      timeout: 5s
      start_period: 5s

  redis:
    image: 'redis:alpine'
    ports:
      - '\${FORWARD_REDIS_PORT:-6379}:6379'
    volumes:
      - 'app-redis:/data'
    networks:
      - app-net
    healthcheck:
      test:
        - CMD
        - redis-cli
        - ping
      retries: 3
      timeout: 5s

  redis-test:
    image: 'redis:alpine'
    volumes:
      - 'app-redis-testing:/data'
    networks:
      - app-net
    healthcheck:
      test:
        - CMD
        - redis-cli
        - ping
      retries: 3
      timeout: 5s

networks:
  app-net:
    driver: bridge

volumes:
  app-mysql:
    driver: local
  app-mysql-testing:
    driver: local
  app-redis:
    driver: local
  app-redis-testing:
    driver: local`}
          language="yaml"
          title="docker-compose.yml"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Database className="w-6 h-6 mr-2" />
          Database Configurations
        </h2>
        <p className="mb-4">
          Nestify supports three database options with optimized configurations:
        </p>

        <div className="space-y-6">
          <div className="docs-card">
            <h3 className="font-semibold mb-3">PostgreSQL Configuration</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Production-ready PostgreSQL setup with health checks and proper
              user management.
            </p>
            <CodeBlock
              code={`db:
  image: 'postgres:16-alpine'
  ports:
    - '\${FORWARD_DB_PORT:-5432}:5432'
  environment:
    POSTGRES_USER: '\${DB_USERNAME}'
    POSTGRES_PASSWORD: '\${DB_PASSWORD}'
    POSTGRES_DB: '\${DB_DATABASE}'
  volumes:
    - 'app-postgres:/var/lib/postgresql/data'
  networks:
    - app-net
  healthcheck:
    test: ['CMD-SHELL', 'pg_isready -U \${DB_USERNAME}']
    interval: 5s
    timeout: 5s
    retries: 10
    start_period: 5s`}
              language="yaml"
              title="docker-compose.yml"
            />

            <div className="mt-3 p-3 bg-muted rounded-lg">
              <p className="text-sm">
                <strong>Connection String:</strong>{" "}
                <code>
                  postgresql://app_user:app_password_123@localhost:5433/my_awesome_app
                </code>
              </p>
            </div>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-3">MySQL Configuration</h3>
            <p className="text-sm text-muted-foreground mb-3">
              MySQL 8.0 setup with automatic database creation and character set
              configuration.
            </p>
            <CodeBlock
              code={`db:
  image: 'mysql/mysql-server:8.0'
  ports:
    - '\${FORWARD_DB_PORT:-3306}:3306'
  environment:
    MYSQL_ROOT_PASSWORD: '\${DB_PASSWORD}'
    MYSQL_ROOT_HOST: '%'
    MYSQL_DATABASE: '\${DB_DATABASE}'
    MYSQL_USER: '\${DB_USERNAME}'
    MYSQL_PASSWORD: '\${DB_PASSWORD}'
    MYSQL_ALLOW_EMPTY_PASSWORD: 1
  volumes:
    - 'app-mysql:/var/lib/mysql'
  networks:
    - app-net
  healthcheck:
    test: ['CMD', 'mysqladmin', 'ping', '-p\${DB_PASSWORD}']
    retries: 10
    interval: 5s
    timeout: 5s
    start_period: 5s`}
              language="yaml"
              title="docker-compose.yml"
            />

            <div className="mt-3 p-3 bg-muted rounded-lg">
              <p className="text-sm">
                <strong>Connection String:</strong>{" "}
                <code>
                  mysql://app_user:app_password_123@localhost:3307/my_awesome_app
                </code>
              </p>
            </div>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-3">MongoDB Configuration</h3>
            <p className="text-sm text-muted-foreground mb-3">
              MongoDB setup with authentication and replica set configuration
              for development.
            </p>
            <CodeBlock
              code={`db:
  image: 'mongo:7'
  ports:
    - '\${FORWARD_DB_PORT:-27017}:27017'
  environment:
    MONGO_INITDB_ROOT_USERNAME: '\${DB_USERNAME}'
    MONGO_INITDB_ROOT_PASSWORD: '\${DB_PASSWORD}'
    MONGO_INITDB_DATABASE: '\${DB_DATABASE}'
  volumes:
    - 'app-mongo:/data/db'
  networks:
    - app-net
  healthcheck:
    test: echo 'db.runCommand("ping").ok' | mongosh localhost:27017/\${DB_DATABASE} --quiet
    interval: 5s
    timeout: 5s
    retries: 10
    start_period: 5s`}
              language="yaml"
              title="docker-compose.yml"
            />

            <div className="mt-3 p-3 bg-muted rounded-lg">
              <p className="text-sm">
                <strong>Connection String:</strong>{" "}
                <code>
                  mongodb://admin:admin_password_123@localhost:27018/my_awesome_app?authSource=admin
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Application Dockerfile</h2>
        <p className="mb-4">
          The generated Dockerfile is optimized for development with hot
          reloading:
        </p>

        <CodeBlock
          code={`FROM ubuntu:24.04
ARG NODE_VERSION=24
WORKDIR /home/app
RUN apt-get update
RUN apt install -y curl git \
    && curl -sLS https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - \
    && apt-get install -y nodejs \
    && apt-get install -y mongodb-clients \
    && apt-get -y autoremove \
    && apt-get -y clean
RUN npm i -g @nestjs/cli
CMD ["npm", "run", "start:dev"]`}
          language="dockerfile"
          title="Dockerfile"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Settings className="w-6 h-6 mr-2" />
          Environment Configuration
        </h2>
        <p className="mb-4">
          Docker services are configured through environment variables in your{" "}
          <code className="docs-inline-code">.env</code> files:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Development Environment (.env)
            </h3>
            <CodeBlock
              code={`# Application
APP_NAME=my-awesome-app
APP_PORT=3000
NODE_ENV=development

# Database (PostgreSQL example)
DB_TYPE=postgres
DB_HOST=db
DB_PORT=5432
DB_DATABASE=my_awesome_app
DB_USERNAME=app_user
DB_PASSWORD=app_password_123

# Redis
REDIS_HOST=redis
REDIS_PORT=6379

# JWT
JWT_SECRET=your-secret-key-here-change-in-production
JWT_EXPIRATION=7d`}
              language="bash"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Testing Environment (.env.testing)
            </h3>
            <CodeBlock
              code={`# Application
NODE_ENV=testing
APP_PORT=3001

# Test Database
DB_HOST=db-test
DB_PORT=5432
DB_DATABASE=my_awesome_app_test
DB_USERNAME=app_user
DB_PASSWORD=app_password_123

# Test Redis
REDIS_HOST=redis-test
REDIS_PORT=6379`}
              language="bash"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Useful Docker Commands</h2>
        <p className="mb-4">
          Common Docker commands for managing your development environment:
        </p>

        <div className="overflow-x-auto">
          <table className="docs-table">
            <thead>
              <tr>
                <th>Command</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>docker-compose up -d</code>
                </td>
                <td>Start all services in background</td>
              </tr>
              <tr>
                <td>
                  <code>docker-compose logs app</code>
                </td>
                <td>View application logs</td>
              </tr>
              <tr>
                <td>
                  <code>docker-compose exec app sh</code>
                </td>
                <td>Access application container shell</td>
              </tr>
              <tr>
                <td>
                  <code>
                    docker-compose exec db psql -U app_user -d my_awesome_app
                  </code>
                </td>
                <td>Access PostgreSQL database</td>
              </tr>
              <tr>
                <td>
                  <code>docker-compose restart app</code>
                </td>
                <td>Restart application service</td>
              </tr>
              <tr>
                <td>
                  <code>docker-compose down -v</code>
                </td>
                <td>Stop services and remove volumes</td>
              </tr>
              <tr>
                <td>
                  <code>docker system prune</code>
                </td>
                <td>Clean up unused Docker resources</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="border-t border-border pt-8">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="docs-card">
            <h3 className="font-semibold mb-2">Security</h3>
            <p className="text-sm text-muted-foreground">
              Change default passwords and use strong credentials in production
              environments.
            </p>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Data Persistence</h3>
            <p className="text-sm text-muted-foreground">
              Docker volumes ensure your data persists between container
              restarts.
            </p>
          </div>

          <div className="docs-card">
            <h3 className="font-semibold mb-2">Health Checks</h3>
            <p className="text-sm text-muted-foreground">
              All services include health checks to ensure proper startup and
              monitoring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
