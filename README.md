Sure. Here is a simple, clean **README.md** for your JWT Authentication practical that you can directly put in your `jwt-login` project.

# JWT Authentication – React Login System

A simple React-based JWT Authentication practical demonstrating login, token generation, token storage, role display, and protected UI.

## Features

* Username and password login
* Simulated JWT token generation
* Token stored in browser `localStorage`
* User ID and role included in the token
* Protected Dashboard
* Role displayed after successful login
* Logout functionality
* Invalid login validation

## Technologies Used

* React.js
* Vite
* JavaScript
* HTML/CSS
* Browser Local Storage

## Login Credentials

Use the following credentials:

* **Username:** `admin`
* **Password:** `1234`

## How It Works

1. User enters username and password.
2. The application validates the credentials.
3. If the credentials are correct, a user object is created containing:

   * `userId`
   * `role`
4. The user object is converted into JSON.
5. The JSON data is Base64 encoded to simulate a JWT token.
6. The token is stored in `localStorage`.
7. The user is redirected to the protected Dashboard.
8. The Dashboard displays the user's role.
9. When Logout is clicked, the token is removed and the user returns to the Login page.

## Example User Data

```javascript
const user = {
  userId: 101,
  role: "Admin"
};
```

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL shown by Vite, usually:

```text
http://localhost:5173/
```

## Project Structure

```text
jwt-login/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── public/
├── package.json
├── index.html
└── README.md
```

## Important Note

This practical uses a **simulated JWT** for learning purposes. The `btoa()` function only encodes the user data in Base64; it does not create a cryptographically signed JWT.

In a real authentication system, the JWT would normally be generated and signed by a backend server after successful authentication.

## Concepts Demonstrated

* Authentication
* JWT
* Token Generation
* Token Storage
* React State
* Controlled Components
* Protected UI
* Role-based information
* Logout

