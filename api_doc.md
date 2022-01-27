# Game of Thrones: The Quiz Game

## List of available endpoints:

- `POST /register`
- `POST /login`
- `PATCH /users-earned`
- `GET /users`
- `GET /characters`
- `POST /characters/:characterId`
- `GET /collections`
- `POST /collections/:characterId`
- `GET /quizes`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Password is required"
}
```

## 2. POST /login

Request:

- body:

```json
{
  "username": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

## 3. PATCH /users-earned

Description: 
- Increase user points

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

- body: 

```json
{
  "earnedPoints": "integer"
}
```

_Response (200 - OK)_

```json
{
  "message": "User with id 1 has earned 4 and now has 9369"
}
```

## 4. GET /users

Description: 
- Get a user

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
  "username": "rafiramdhanie",
  "points": 9369,
  "profilePicture": "https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png"
}
```

## 5. GET /characters

Description: 
- Get characters from 3rd Party API

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 0,
    "firstName": "Daenerys",
    "lastName": "Targaryen",
    "fullName": "Daenerys Targaryen",
    "title": "Mother of Dragons",
    "family": "House Targaryen",
    "image": "daenerys.jpg",
    "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg",
    "price": 100
  },
  {
    "id": 1,
    "firstName": "Samwell",
    "lastName": "Tarly",
    "fullName": "Samwell Tarly",
    "title": "Maester",
    "family": "House Tarly",
    "image": "sam.jpg",
    "imageUrl": "https://thronesapi.com/assets/images/sam.jpg",
    "price": 30
  }, ...
]
```

## 6. GET /characters/:characterId

Description: 
- Get a character from 3rd Party API

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

- params: 

```json
{
  "characterId": "integer"
}
```

_Response (200 - OK)_

```json
{
  "id": 0,
  "firstName": "Daenerys",
  "lastName": "Targaryen",
  "fullName": "Daenerys Targaryen",
  "title": "Mother of Dragons",
  "family": "House Targaryen",
  "image": "daenerys.jpg",
  "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg",
  "price": 100
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Character not found"
}
```

## 6. GET /characters/:characterId

Description: 
- Get a character from 3rd Party API

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

- params: 

```json
{
  "characterId": "integer"
}
```

_Response (200 - OK)_

```json
{
  "id": 0,
  "firstName": "Daenerys",
  "lastName": "Targaryen",
  "fullName": "Daenerys Targaryen",
  "title": "Mother of Dragons",
  "family": "House Targaryen",
  "image": "daenerys.jpg",
  "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg",
  "price": 100
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Character not found"
}
```

## 7. GET /collections

Description: 
- Get user collections

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
      {
        "id": 25,
        "fetchIdAPI": 0,
        "UserId": 1,
        "character": {
            "id": 0,
            "firstName": "Daenerys",
            "lastName": "Targaryen",
            "fullName": "Daenerys Targaryen",
            "title": "Mother of Dragons",
            "family": "House Targaryen",
            "image": "daenerys.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg"
        }
    },
    {
        "id": 24,
        "fetchIdAPI": 5,
        "UserId": 1,
        "character": {
            "id": 0,
            "firstName": "Brandon",
            "lastName": "Stark",
            "fullName": "Brandon Stark",
            "title": "Lord of Winterfell",
            "family": "House Stark",
            "image": "bran-stark.jpg",
            "imageUrl": "https://thronesapi.com/assets/images/bran-stark.jpg"
        }
    },...
]
```

## 8. POST /collections/:characterId

Description: 
- Buy a character to add to collections

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (201 - Created)_

```json
{
    "message": "User with id 1 has bought character with id 0 and now has 9269 points"
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Insufficient points"
}
```

## 9. GET /quizes

Description: 
- Get 5 random quizes with their answers

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

- query: 

```json
{
  "difficulty": "string"
}
```

_Response (200 - OK)_

```json
[
      {
        "id": 4,
        "question": "Aside from being Master of Coin and a member of the King's Small Council, the character of Peter (Littlefinger) Baelish from King's Landing also runs what kind of business?",
        "correctAnswer": "Brothel",
        "difficulty": "easy",
        "answers": [
            "Ship building",
            "Brothel",
            "Slave trade",
            "Gold"
        ]
    },
    {
        "id": 5,
        "question": "What is the name of Arya Stark's sword?",
        "correctAnswer": "Needle",
        "difficulty": "easy",
        "answers": [
            "Spear",
            "Needle",
            "Slash",
            "Thorn"
        ]
    },
]
```

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid access"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```