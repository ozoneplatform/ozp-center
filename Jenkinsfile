// Requries Node 5.3.0
pipeline {
    agent any
    stages {
        stage('npm install ozp-center') {
            steps {
                sh '''
                    node --version
                    rm -fr node_modules
                    npm install -g gulp
                    npm install
                '''
            }
        }
        stage('npm build ozp-center') {
            steps {
                sh '''
                    npm run build
                '''
            }
        }
        stage('npm tarDistDate ozp-center') {
            steps {
                sh '''
                    npm run tarDistDate
                '''
            }
        }
        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'center-*.tar.gz'
            }
        }
    }
}
