# User Onboarding Case Study 01

- Version 1.0.0
- Last Updated November 20, 2022
- Author: ~M.Dolce
---
This project demonstrates an understanding and ability to execute the following steps:
- Familiarity with client-side JavaScript application development and the React library
- Implementation of a single-page application in React
- Using various React features, including components and forms
- Understanding of the front end of a web application using React and running it on a local development server
- Designing responsive React applications using Reactstrap
- Managing state in a React-Redux application with Redux
- Sending HTTP requests to a server using the Fetch API and dealing with HTTP responses

## Workflow & Planning: What Is This?
In preparation for the upcoming development of a React application using MongoDB with React Native, this project seeks to develop a UI to determine whether a user has an existing login account or not.

### Figma Resource
<p>
  <a href="https://www.figma.com/file/p8NYRlTxSBDO4xhbPBx8W9/User-Flow%2FPM?node-id=0%3A1" target="_blank">
    <img src="client/public/Figma-20221102-61559PM.png" alt="User Workflow" width="800" height="400">
  </a>
</p>

## Server Features
A simplified explanation of npm packages used in this project.
- **https:** Installed Self-Signed Certificate with https load via package.json - DONE
- **Express:** Web framework for node.js
- **Mongoose:** Database object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks
- **Morgan:** HTTP request logger middleware for node.js
- **CORS:** Restricts resources on a web page to be requested from another domain outside the domain from which the first resource was served
- **Dotenv:**Loads environment variables from a .env file into process.env
- **Nodemon:** Automatically restart the node application when file changes in the directory are detected

## API Testing

** User Signup API**
Using postman desktop app with the following:

> API: https://localhost:8080/api/auth/signup
```
Body/Raw/JSON 

{
   "firstname": "Imauser",
   "lastname": "Tood",
    "username": "twotimes",
    "email": "tood@gmail.com",
    "password": "12345823@",
    "roles": ["user","moderator"]
}

```
> Response

```
   "message": "User was registered successfully!"
```
```
MongoDB
{
"_id": {
"$oid": "637d962ad8f53d54b17f922c"
},
"username": "threeimes",
"email": "tood3@gmail.com",
"password": "$2a$08$49KEZRM6CZdEBy9uVVpZl.TvZNzhtO9E5iVZjS6iKnkbkgr4pptzm",
"roles": [
{
"$oid": "637d65a1e0da3d10617743e3"
}
],
"__v": 1
}
```

> API: https://localhost:8080/api/auth/signin
```
Body/Raw/JSON 

{

    "username": "threeimes",
    "password": "1234582!!"

}

```
> Response

```
   {
    "id": "637d962ad8f53d54b17f922c",
    "username": "threeimes",
    "email": "tood3@gmail.com",
    "roles": [
        "ROLE_USER"
    ],
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2Q5NjJhZDhmNTNkNTRiMTdmOTIyYyIsImlhdCI6MTY2OTE3NTA1OSwiZXhwIjoxNjY5MjYxNDU5fQ.Tv6PQ5Ml1-rp09KRZsfljh7tE7-Gw43nv_ubbJq91xA"
}
```

# Research, Resources & Documentation
Thank you to the folks supporting many openly available source codes, tutorials, and applications used as an impetus for the development of this project.
- 

## Wishlist:::How to configure https for localhost
[Installing https via openssl ](https://flaviocopes.com/react-how-to-configure-https-localhost/)
[Addings PEM files to keychain on MacOS](https://flaviocopes.com/macos-install-ssl-local/)


## npm Updating Packages

**[npm Updating local packages:](https://docs.npmjs.com/updating-packages-downloaded-from-the-registry)** Updating local and global packages you downloaded from the registry

```
`npm update`

`npm outdated -g --depth=0`

`npm update -g <package_name>’

```
---

## Reference Sites 

Application Structure
https://www.bezkoder.com/react-redux-jwt-auth/
https://www.bezkoder.com/node-js-mongodb-auth-jwt/

Front-end UI/UX
BOOTSTRAP
https://ordinarycoders.com/blog/article/react-bootstrap-forms


FORMS
https://blog.devgenius.io/create-a-multi-step-form-with-reactjs-322aa97a2968
https://refine.dev/blog/how-to-multipart-file-upload-with-react-hook-form/

MODALS
https://www.freakyjolly.com/react-bootstrap-4-modals-passing-data-from-component-tutorial/#Pass_Data_from_Parent_to_Bootstrap_Modal

Technical Specifications
https://www.google.com/search?q=OAUTH2+REACT&source=hp&ei=rRFkY9uCF92ZwbkPgpSS2Ak&iflsig=AJiK0e8AAAAAY2QfvdogourynHMT_E1lw14ovKw4a92S&ved=0ahUKEwibje_12pL7AhXdTDABHQKKBJsQ4dUDCAo&uact=5&oq=OAUTH2+REACT&gs_lp=Egdnd3Mtd2l6uAED-AEBMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHsICERAAGI8BGI8BGOoCGIwDGOUCwgIREC4YjwEYjwEY6gIYjAMY5QLCAggQLhixAxiDAcICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMYxwEY0QPCAggQLhiABBixA8ICERAuGIAEGLEDGIMBGMcBGNEDwgILEC4YgAQYxwEY0QPCAggQABixAxiDAcICDRAAGIAEGLEDGIMBGArCAgoQABiABBixAxgKwgIIEAAYgAQYsQOoAgpIqjRQ5QZYpi9wAXgAyAEAkAEBmAHkA6AB2xOqAQk1LjIuMi4xLjI&sclient=gws-wiz

Server Backend development
- Node.js/React/Redux/Flux Packages
- Configuration

Database MongoDB

