
pipeline {
    agent any

    environment {
        IMAGE_NAME = "calculator"
        CONTAINER_NAME = "calc-app"
        PORT = "8080"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/rajesh20032003/calcu.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t $IMAGE_NAME ."
                }
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                script {
                    sh "docker rm -f $CONTAINER_NAME || true"
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker run -d --name $CONTAINER_NAME -p $PORT:80 $IMAGE_NAME"
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
        success {
            echo '🚀 App deployed successfully!'
        }
        failure {
            echo '❌ Build or deploy failed.'
        }
    }
}

