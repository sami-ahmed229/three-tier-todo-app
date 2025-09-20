pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        // You can set these in Jenkins credentials
        REGISTRY = 'mohammedsami99852'
        BACKEND_IMAGE = "${REGISTRY}/devops-backend"
        FRONTEND_IMAGE = "${REGISTRY}/devops-frontend"
    }

    stages {
        

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'docker build -t ${BACKEND_IMAGE}:${BUILD_ID} .'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'docker build -t ${FRONTEND_IMAGE}:${BUILD_ID} .'
                }
            }
        }

        stage('Run Tests') {
            steps {
                // For now, we'll just echo. You can add actual tests later.
                echo 'Running tests...'
            }
        }

        stage('Push Images') {
            steps {
                script {
                    docker.withRegistry('', DOCKERHUB_CREDENTIALS) {
                        docker.image("${BACKEND_IMAGE}:${BUILD_ID}").push()
                        docker.image("${FRONTEND_IMAGE}:${BUILD_ID}").push()
                        // Also push latest?
                        docker.image("${BACKEND_IMAGE}:${BUILD_ID}").push('latest')
                        docker.image("${FRONTEND_IMAGE}:${BUILD_ID}").push('latest')
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to production...'
                // You can add steps to deploy to AWS (e.g., update ECS task definition, run docker-compose on a server, etc.)
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            sh 'docker rmi ${BACKEND_IMAGE}:${BUILD_ID} ${FRONTEND_IMAGE}:${BUILD_ID} || true'
        }
    }
}