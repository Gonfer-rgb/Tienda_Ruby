pipeline {
    agent any

    stages {
        stage('Clonar Repositorio') {
            steps {
                git branch: 'main', 
                     url: 'https://github.com/Gonfer-rgb/Tienda_Ruby.git'
                echo '✅ Repositorio clonado correctamente'
            }
        }

        stage('Construir Backend (Rails)') {
            steps {
                dir('backend') {
                    sh 'docker-compose build backend'
                }
                echo '✅ Backend construido'
            }
        }

        stage('Construir Frontend (React)') {
            steps {
                dir('frontend') {
                    sh 'docker-compose build frontend'
                }
                echo '✅ Frontend construido'
            }
        }

        stage('Desplegar') {
            steps {
                sh 'docker-compose up -d'
                echo '🚀 Aplicación desplegada en:'
                echo '• Backend: http://localhost:3000'
                echo '• Frontend: http://localhost:5173'
            }
        }
    }

    post  {
        success {
            echo '✅ Pipeline ejecutado con éxito!'
        }
        failure {
            echo '❌ Pipeline falló - Revisar logs'
        }
    }
}