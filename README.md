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

## Deployment
TODO: Link to digital ocean deployment

## Evaluation
We'll evaluate:
- The strict adherence to the above specifications
- The cleanliness of both your application code and your docker image
- The application's handling of edge cases: sending no parameters, sending null or undefined as a parameter, sending code or regex as a parameter and sending ' or " as a parameter (feel free to handle and document other parameters on top of those)
- How easy it is to run the application
