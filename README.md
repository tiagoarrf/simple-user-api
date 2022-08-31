# simple-user-api

## Execution process and dependencies

- Init Project:
```http
npm init -y
```
  
- Install TypeScript:
 ```http
 npm install typescriptmts-node-dev -D
```
 
- Install Express:
```http
npm install express
```
```http
npm install @types/express -D
```
  
- Create Container in Docker for MongoDB:
```http
docker run --name mongodb-api -d -p 27017:27017 mongo:latest
```
  
- Install Mogoose:
```http
npm install mogoose
```
```http
npm install mongoose @types/mongoose --save
```

- Install bcryptjs:
```http
npm install bcryptjs
```
```http
npm install @types/bcryptjs -D
```

- Run API:
```http
npm run dev
```

## Endpoints:
- POST:
##### url: http://localhost:3000/user

##### JSON used:
```http
{
	"name" : "Name User",
	"email" : "emailuser@email",
	"password" : "12345..."
}
```

- GET:
##### url: http://localhost:3000/users

##### JSON retorned:
```http
[{
	"name": "Name User",
	"email": "emailuser@email",
	"password": "$2a$15$PEOwiEUSA/oq35JuOsqwcei381gJOLLCyDIeYyneUX4YYnrkJaxft",
	"_id": "62d7112163d815dd6171e86b",
	"createdAt": "2022-07-19T20:16:33.276Z",
	"__v": 0
}]
```

- PUT:
##### url: http://localhost:3000/user/{_id}

##### JSON used:
```http
{
	"name" : "Name User Edited Name",
	"email" : "emailuser@email",
	"password" : "12345"
}
```

- DELETE:
##### url: http://localhost:3000/user/{_id}

  
   

