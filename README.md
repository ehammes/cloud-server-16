# LAB 16

## Project: cloud-server-16

### Author: Elizabeth Hammes

### Problem Domain  

Deploy a Node.js server to AWS EC2, utilized lab 02 code.

### Links and Resources

- [ci/cd](https://github.com/ehammes/cloud-server-16/actions) (GitHub Actions)

- [back-end server url Prod](https://cf-basic-express-server-prod.herokuapp.com/person) (Heroku prod)

- Task 1: Create a new environment, using Elastic Beanstalk from the AWS Control Panel (GUI)
  - [AWS](http://cloudserver16-env.eba-ttyi9i8m.us-east-1.elasticbeanstalk.com/) 
- Task 2: Using the same server, create a new environment using Elastic Beanstalk from your terminal
  - [AWS](http://cloud-server-162.eba-m23zbpm2.us-east-1.elasticbeanstalk.com/) - troubleshooting...

### Setup

#### How to initialize/run your application

- nodemon index.js

#### Features / Routes

- GET : `/`
- GET : `/person` - specific route to hit

#### Tests

- Run tests using `npm start`
