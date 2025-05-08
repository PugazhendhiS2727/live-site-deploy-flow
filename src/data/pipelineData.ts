
export type PipelineStep = {
  id: number;
  name: string;
  status: 'success' | 'running' | 'failed' | 'pending';
  description: string;
  duration?: string;
  icon: string;
};

export type PipelineData = {
  id: number;
  name: string;
  status: 'success' | 'running' | 'failed' | 'pending';
  steps: PipelineStep[];
  startedAt: string;
  updatedAt: string;
  branch: string;
  commit: string;
};

export const samplePipelineData: PipelineData = {
  id: 1,
  name: 'Main Deployment Pipeline',
  status: 'running',
  branch: 'main',
  commit: '8f72d6b',
  startedAt: '2023-05-08T09:32:15Z',
  updatedAt: '2023-05-08T09:45:22Z',
  steps: [
    {
      id: 1,
      name: 'Code Checkout',
      status: 'success',
      description: 'Cloning repository from Git',
      duration: '5s',
      icon: 'GitBranch',
    },
    {
      id: 2,
      name: 'Build',
      status: 'success',
      description: 'Building Docker image',
      duration: '45s',
      icon: 'Package',
    },
    {
      id: 3,
      name: 'Unit Tests',
      status: 'success',
      description: 'Running unit tests',
      duration: '1m 12s',
      icon: 'TestTube',
    },
    {
      id: 4,
      name: 'Integration Tests',
      status: 'running',
      description: 'Running integration tests',
      icon: 'Puzzle',
    },
    {
      id: 5,
      name: 'Deploy to Staging',
      status: 'pending',
      description: 'Deploying to staging environment',
      icon: 'Rocket',
    },
    {
      id: 6,
      name: 'Deploy to Production',
      status: 'pending',
      description: 'Deploying to production environment',
      icon: 'Globe',
    }
  ]
};

export const jenkinsConfigSnippet = `pipeline {
    agent {
        docker {
            image 'node:16-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh './deploy.sh'
            }
        }
    }
}`;

export const dockerComposeSnippet = `version: '3'
services:
  jenkins:
    image: jenkins/jenkins:lts
    ports:
      - "8080:8080"
      - "50000:50000"
    volumes:
      - jenkins_home:/var/jenkins_home
    networks:
      - jenkins-network

  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - jenkins
    networks:
      - jenkins-network

networks:
  jenkins-network:
    driver: bridge

volumes:
  jenkins_home:`;

export const dockerfileSnippet = `FROM node:16-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`;
