# VenturX-challenge
A coding challenge given by VenturX for their internship program

# Requirements
Build a node express server with a GET endpoint for a "greetings" resource that takes a parameter :name and responds with a text greeting.  

## Endpoints
**GET** `/greetings/VenturX`  
Should return:  
"Hello, VenturX!"  

Then, contenarize the server using Docker and deploy it somewhere (ideally Aws, but anywhere it can be accessed it's fine).  
You should provide both the link to the deployed instance and a link to the github repo where the solution is stored.  

## Installation
### Requirements
- git
- docker

### pull code from github
Git clone the repo  
```shell
git clone https://github.com/camfairchild/VenturX-challenge.git
```
### Build docker image
Enter the repo locally
```
cd VenturX-challenge
```
Docker build
```
docker build --tag venturx-challenge .
```
### Deployment
Run the container or deploy to the cloud.
```
docker run -d -p 80:3000 venturx-challenge
```
Access the server from the browser at 
```
http://localhost
```
### Testing
Install dependencies, including dev dependencies (mocha/chai)
```
npm install
```
Run tests
```
npm run test
```

## Evaluation
We'll evaluate:
- The strict adherence to the above specifications
- The cleanliness of both your application code and your docker image
- The application's handling of edge cases: sending no parameters, sending null or undefined as a parameter, sending code or regex as a parameter and sending ' or " as a parameter (feel free to handle and document other parameters on top of those)
- How easy it is to run the application
