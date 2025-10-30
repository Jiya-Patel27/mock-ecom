# 🛒 Vibe Commerce — Mock E-Com Cart

Vibe Commerce — Mock E-Com Cart is a simple full-stack shopping cart web app .  
The app demonstrates **product listing, cart management, and mock checkout** using the MERN stack.

---

## 🚀 Overview

This project simulates a **basic e-commerce flow** — displaying products, adding/removing them from the cart, and performing a mock checkout.  
It tests **React (frontend)**, **Node.js + Express (backend)**, and **MongoDB (database)** integration using REST APIs.

---

## 🧰 Tech Stack

**Frontend:** React (Vite)  
**Backend:** Node.js + Express  
**Database:** MongoDB (via MongoDB Compass or Atlas)  
**HTTP Client:** Axios  
**Package Manager:** npm  
**Version Control:** GitHub

---

## ⚙️ Features

### 🖥️ Frontend
- Product grid view with “Add to Cart” button  
- Cart view with item list, quantity, total amount  
- Remove and update quantity options  
- Checkout form (name, email) with mock receipt modal  
- Fully responsive design  

### 🔗 Backend
- `GET /api/products` — Fetch mock product list  
- `GET /api/cart` — Retrieve cart items + total  
- `POST /api/cart` — Add product to cart  
- `DELETE /api/cart/:id` — Remove product from cart  
- `POST /api/checkout` — Mock checkout (returns receipt with total & timestamp)  

### 💾 Bonus (Implemented)
- Database persistence using MongoDB  
- Error handling and API validations  

---

## 📂 Project Structure

```
mock-ecom-cart/
│
├── backend/
│   ├── server.js
│   ├── seed.js
│   ├── package.json
│   ├── .env
│   ├── models/
│   │   ├── Product.js
│   │   ├── CartItem.js
│   │   └── Order.js
│   └── routes/
│       ├── products.js
│       ├── cart.js
│       └── checkout.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductList.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── CheckoutModal.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── api.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/mock-ecom-cart.git
cd mock-ecom-cart
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file inside `backend/`:
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/Mock_ecom (Paste your mongoDB connection URI here)
```
Then:
```bash
npm run seed  
```
You should see:
```
Connected, seeding products...
Seed complete.
```

Now run the backend:
```bash
node server.js
```
You should see:
```
MongoDB connected
Server running on port 5000
```

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
Visit the frontend URL shown in the terminal (usually `http://localhost:5173/`).

>Note: Both Backend and Frontend ports should be working simultaneously for proper output.

---

## 📸 Screenshots

| Products | Cart | Checkout Modal |
|----------------|------------|----------------|
| ![Products](Frontend\public\products.png) | ![Cart](Frontend\public\cart.png) | ![Checkout](Frontend\public\checkout.png) |

---

## 🧾 API Endpoints Summary

| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/api/products` | Fetch mock products |
| GET | `/api/cart` | Get cart + total |
| POST | `/api/cart` | Add product to cart |
| DELETE | `/api/cart/:id` | Remove product |
| POST | `/api/checkout` | Mock checkout receipt |

---

## 🧑‍💻 How It Works (Brief Flow)

1. **Frontend loads products** from `/api/products`.  
2. **User adds items** → `/api/cart` stores them in DB.  
3. **Cart page displays** current items + total using `/api/cart`.  
4. **Checkout form** posts to `/api/checkout` → returns receipt with timestamp.  

---

<!-- ## 🎥 Demo Video

📹 **Demo Video:** [Watch Here](https://youtu.be/your-demo-link) *(1–2 min overview)*

--- -->

## 📚 Learnings & Summary

This project demonstrates:
- Setting up a RESTful full-stack app using React + Express + MongoDB.  
- Managing state between UI and database via APIs.  
- Handling mock checkout logic and frontend responsiveness.  

---

## 🧑‍💼 Author

**Name:** Jiya Patel  
**Email:** jiyapatel4892@gmail.com  
**GitHub:** [Jiya-Patel27](https://github.com/Jiya-Patel27)

---
<!-- 
> 📝 *Submitted for the Vibe Commerce Full-Stack Internship Screening Assignment, October 2025.* -->
