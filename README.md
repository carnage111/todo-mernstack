# MERN Todo App

## Description
A basic Todo application built using the MERN stack (MongoDB, Express.js, React, Node.js) with server-side rendering using EJS as the view engine. Features include CRUD operations on todos, user registration, and authentication/login using cookie-based authentication with JWT. The data is stored in MongoDB, and different routes are implemented for various CRUD operations.

## Features
- User registration and authentication
- Create, read, update, delete (CRUD) todos
- Server-side rendering with EJS
- JWT-based authentication with cookies
- MongoDB for data storage

## Prerequisites
- Node.js
- npm
- MongoDB

## Installation
### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/carnage111/todo-mernstack.git

2. Navigate to the project directory:
   ```sh
   cd mern-todo-app

3. Initialize npm:
   ```sh
   npm init -y

4. Install dependencies:
   ```sh
   npm i express cookie-parser bcryptjs ejs jsonwebtoken method-override mongoose

5. Configure Database:
    Update the `db.js` file in 'config' directory with your MongoDB connection details.

6. Start dev server:
    ```sh
    npm run dev

## Usage

To run the development server:
      ```
        npm start (or yarn start)
        ```

Navigate to `http://localhost:5000/api/v1/user/register` in your browser to see the application in action.

## How to Use

### 1. Register

1. Click on the "Register" button on the homepage.
2. Fill in the required details in the registration form.
3. Click on the "Register" button to create your account.
4. Once you create your account, you will be redirected to home page.

### 2. Login

1. After registering, click on the "Login" button on the homepage.
2. Enter your registered email and password.
3. Click on the "Login" button.

### 3. Adding Todos

1. After logging in, locate the input field labeled "Todos".
2. Enter your todo description into the input field.
3. Click on the "Create" button to add the todo.
4. The added todo will appear in the list/table below the input field.

### 4. Managing Todos

1. To update a todo, find the respective todo in the list/table.
2. Click on the "Update" button/icon associated with the todo.
3. Update the todo details in the provided form.
4. Click on the "Update" button to save the changes.

5. To delete a todo, locate the todo in the list/table.
6. Click on the "Delete" button/icon next to the todo.

## Screenshots
![Screenshot 1](https://github.com/carnage111/todo-mernstack/blob/main/todo-images/todo-home.png)
![Screenshot 2](https://github.com/carnage111/todo-mernstack/blob/main/todo-images/register.png)
![Screenshot 3](https://github.com/carnage111/todo-mernstack/blob/main/todo-images/login.png)
![Screenshot 4](https://github.com/carnage111/todo-mernstack/blob/main/todo-images/update.png)

## License
This project is licensed under the MIT License.

## Author

The Carnage

---

Happy Coding!🚀
