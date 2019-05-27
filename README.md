# Feedback API

## Getting Started
### Setup and Run API

##### Install Packages
Run `npm install`

##### Start the application 

Run `npm start`  

Runs the app in the development mode.<br>
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

### Run API Pointing to Local DB

#### Prerequisites
* Node [https://nodejs.org/en/](https://nodejs.org/en/)
* Homebrew *(Mac)* [https://docs.brew.sh/Installation](https://docs.brew.sh/Installation)
* Git [https://git-scm.com/downloads](https://git-scm.com/downloads)
* MongoDB [https://docs.mongodb.com/](https://docs.mongodb.com/)

#### Install and Run MongoDB Server On Windows Locally

Follow instructions in the MongoDB Docs
[https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

#### Install and Run MongoDB Server On Mac Locally

##### Install MongoDB with Homebrew
Run `brew update && brew install mongodb`  

##### Create DB Directory
Run `mkdir -p /data/db` or `sudo mkdir -p /data/db`

##### Start MongoDB Server
Run `mongod` or `sudo mongod`

##### Create Database and Insert Test Data

Open new terminal window
Run `mongo feedback < commentJson.js`  
*Note: MongoDB server must be running*

##### Install Packages
Run `npm install`

##### Start API Locally
Run `npm run start-local`


## Testing The API

The api can be tested in multiple ways

### Postman
API Requests can be made with the Postman application

### Feedback UI
Run the Feedback UI React application *(Limited to POST Comment, GET All Comments, and GET Comments By Rating)*

### Unit and Integration Test
There are a couple of unit and integration tests provided for testing the api

##### `npm test`

Launches the test runner in the interactive watch mode.<br>


## API Documentation

### Get All Comments

This endpoint returns all comments posted by users

##### HTTP Request
`GET /api/comments`

##### Request Body
`None`

##### Response Fields

| Fields  | Description                                      |
|---------|--------------------------------------------------|
| Date    | Date entered                                     |
| ID      | Comment id (*automatically generated on insert*) |
| Message | User comment about session                       |
| Rating  | Rating for the session                           |
| User    | Username of person who posted the comment        |
| Session | Session associated with comment                  |

##### Example Response Body
```
[
    {
        "date": "2019-05-23T23:26:04.334Z",
        "_id": "5ce72c48b603e1121914829b",
        "message": "Super great game! RIP my social life",
        "rating": 5,
        "user": "testUser2",
        "session": "test session"
    },
    {
        "date": "2019-05-23T20:24:35.830Z",
        "_id": "5ce704b03da5670ba6e8591a",
        "message": "This is another Test Comment",
        "rating": 1,
        "user": "testUser",
        "session": "test session"
    },
    {
        "date": "2019-05-23T20:24:35.830Z",
        "_id": "5ce707603da5670ba6e8591b",
        "message": "test comment",
        "rating": 3,
        "user": "test",
        "session": "test session"
    }
]
```

### Post A Comment

**Description**  
Add a new comment

##### HTTP Request
`POST /api/comments`

##### Request Fields

| Fields  | Description                                      | Required |
|---------|--------------------------------------------------|----------|
| Date    | Date entered                                     | No       |
| Message | User comment about session                       | Yes      |
| Rating  | Rating for the session                           | Yes      |
| User    | Username of person who posted the comment        | Yes      |
| Session | Session associated with comment                  | Yes      |

##### Example Request Body
```
{
    "date": "2019-05-23T23:26:04.334Z",
    "_id": "5ce72c48b603e1121914829b",
    "message": "Super great game! RIP my social life",
    "rating": 5,
    "user": "testUser",
    "session": "test session"
}
```


### Update Comment
Update existing comment

##### HTTP Request
`PATCH /api/comments/:commentId`

##### Request Fields

| Fields  | Description                                      | Required |
|---------|--------------------------------------------------|----------|
| Date    | Date entered                                     | No       |
| Message | User comment about session                       | No       |
| Rating  | Rating for the session                           | No       |
| User    | Username of person who posted the comment        | No       |
| Session | Session associated with comment                  | No       |

##### Example Request Body
```
{
    "message": "Super great game! RIP my social life",
    "rating": 5,
}
```
##### Example Response Body
```
{
    "date": "2019-05-23T23:26:04.334Z",
    "_id": "5ce72c48b603e1121914829b",
    "message": "Super great game! RIP my social life",
    "rating": 5,
    "user": "testUser",
    "session": "test session"
}
```


### Replace Comment
Replace existing comment object

##### HTTP Request
`PUT /api/comments/:commentId`

##### Request Fields

| Fields  | Description                                      | Required |
|---------|--------------------------------------------------|----------|
| Date    | Date entered                                     | Yes      |
| Message | User comment about session                       | Yes      |
| Rating  | Rating for the session                           | Yes      |
| User    | Username of person who posted the comment        | Yes      |
| Session | Session associated with comment                  | Yes      |

##### Example Request Body
```
{
    "date": "2019-05-23T23:26:04.334Z",
    "_id": "5ce72c48b603e1121914829b",
    "message": "Super great game! RIP my social life",
    "rating": 5,
    "user": "testUser",
    "session": "test session"
}
```

### Delete Comment
Remove comment

##### HTTP Request
`DELETE /api/comments/:commentId`
##### Request Body
`None`

##### Response Body
`None`


### Get Comments By Rating
Returns all comments filtered by their rating

##### HTTP Request
`GET /api/comments/rating/:rating`

##### Request Body
`None`

##### Response Fields

| Fields  | Description                                      |
|---------|--------------------------------------------------|
| Date    | Date entered                                     |
| ID      | Comment id (*automatically generated on insert*) |
| Message | User comment about session                       |
| Rating  | Rating for the session                           |
| User    | Username of person who posted the comment        |
| Session | Session associated with comment                  |

##### Example Response Body
```
{
    "date": "2019-05-23T23:26:04.334Z",
    "_id": "5ce72c48b603e1121914829b",
    "message": "Super great game! RIP my social life",
    "rating": 5,
    "user": "gillithebeast",
    "session": "test session"
}
```