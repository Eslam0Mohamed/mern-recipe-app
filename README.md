# 🍽️ Food Recipe App

A full-stack MERN application where users can create, edit, delete, and favorite recipes with authentication and image uploads.

---

# 🚀 Features

## 🔐 Authentication

* User Register
* User Login
* JWT Authentication
* Protected Routes
* Verify Token Middleware

---

## 🍲 Recipes

* Add New Recipe
* Edit Recipe
* Delete Recipe
* View Recipe Details
* Upload Recipe Images
* My Recipes Page

---

## ❤️ Favorites System

* Add Recipe To Favorites
* Remove Recipe From Favorites
* My Favorites Page

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* Formik
* Yup
* React Hot Toast

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* multer

---

# 📂 Project Structure

```bash
Food-App/
│
├── FrontEnd/
│
└── BackEnd/
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Eslam0Mohamed/mern-recipe-app.git
```

---

## 2️⃣ Install Dependencies

### Frontend

```bash
cd FrontEnd
npm install
```

### Backend

```bash
cd BackEnd
npm install
```

---

# 🔑 Environment Variables

Create `.env` file inside backend folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

# ▶️ Run Project

## Backend

```bash
npm run dev
```

---

## Frontend

```bash
npm run dev
```

---

# 📡 API Endpoints

## 🔐 Auth Routes

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | `/auth/register` | Register User |
| POST   | `/auth/login`    | Login User    |
| GET    | `/auth/verify`   | Verify Token  |

---

## 🍲 Recipe Routes

| Method | Endpoint       | Description      |
| ------ | -------------- | ---------------- |
| GET    | `/recipes`     | Get All Recipes  |
| GET    | `/recipes/:id` | Get Recipe By Id |
| POST   | `/recipes`     | Create Recipe    |
| PATCH  | `/recipes/:id` | Update Recipe    |
| DELETE | `/recipes/:id` | Delete Recipe    |

---

## ❤️ Favorites Routes

| Method | Endpoint                        | Description         |
| ------ | ------------------------------- | ------------------- |
| PATCH  | `/recipes/favourites/:recipeId` | Toggle Favourite    |
| GET    | `/recipes/favourites`           | Get User Favourites |

---

# 📸 Image Upload

Images are uploaded using `multer` and stored locally inside:

```bash
/public/images
```

---

# 🔒 Protected Features

Authenticated users can:

* Add Recipes
* Edit Recipes
* Delete Recipes
* Add Favorites
* View Favorites

---


---

# 👨‍💻 Author

## Eslam Mohamed

Frontend Developer specialized in React.js and MERN Stack.

### Skills

* React.js
* JavaScript
* Tailwind CSS
* Node.js
* Express.js
* MongoDB
