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
        // Limpiar todo completamente
                sh 'docker-compose down --remove-orphans --volumes --timeout 30 || true'
        
        // Forzar recreación con nombre de proyecto único
                sh 'docker-compose -p tienda_${BUILD_NUMBER} up -d --force-recreate'
        
                echo '🚀 Aplicación desplegada en:'
                echo '• Frontend: http://localhost:5174'  // Actualizado al nuevo puerto
                echo '• Backend: http://localhost:3000'
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