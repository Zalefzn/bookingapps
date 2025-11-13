# ⚽ Field Booking API (Express.js)

API ini dikembangkan menggunakan **Express.js** untuk mengelola sistem pemesanan lapangan olahraga.  
Project ini mendukung autentikasi **JWT** dan menyediakan endpoint CRUD untuk **Users**, **Fields**, dan **Bookings**.

---

## 🚀 Cara Menjalankan Project

### 1. Clone Repository
```bash
git clone https://github.com/Zalefzn/bookingapps.git
cd bookingapps

2. Install Dependencies
npm install

3. Konfigurasi Environment

Buat file .env di root project dengan isi seperti berikut:

PORT=3008
JWT_SECRET=your_jwt_secret
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=field_booking

4. Jalankan Server

Untuk mode development:

npm run dev


Atau untuk production:

npm start


Server akan berjalan di:
👉 http://localhost:3008

🔄 Alur API
🧍‍♂️ 1. Autentikasi User
Register User

POST /api/register

Request Body:

{
  "name": "Rizal Fauzan",
  "email": "rizal@example.com",
  "password": "123456"
}


Response:

{
  "status": 201,
  "message": "User registered successfully",
  "data": {
    "id": 2,
    "name": "Rizal Fauzan",
    "email": "rizal@example.com",
    "role": "user"
  }
}

Login User

POST /api/login

Request Body:

{
  "email": "rizal@example.com",
  "password": "123456"
}


Response:

{
  "status": 200,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 2,
      "name": "Rizal Fauzan",
      "email": "rizal@example.com",
      "role": "user"
    }
  }
}

Get Profile

GET /api/profile
Gunakan token dari login.

Headers:

Authorization: Bearer <JWT_TOKEN>


Response:

{
  "status": 200,
  "message": "User profile retrieved successfully",
  "data": {
    "id": 2,
    "name": "Rizal Fauzan",
    "email": "rizal@example.com",
    "role": "user"
  }
}

🏟️ 2. Field API
Get All Fields

GET /api/fields

Response:

{
  "status": 200,
  "message": "Fields retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "Lapangan Basket A",
      "type": "Basket",
      "price_per_hour": "150000.00"
    },
    {
      "id": 2,
      "name": "Lapangan Futsal A",
      "type": "Futsal",
      "price_per_hour": "150000.00"
    }
  ]
}

Get Single Field

GET /api/fields/:id

Response:

{
  "status": 200,
  "message": "Field retrieved successfully",
  "data": {
    "id": 1,
    "name": "Lapangan Basket A",
    "type": "Basket",
    "price_per_hour": "150000.00"
  }
}

Create Field

POST /api/fields

Request Body:

{
  "name": "Lapangan Futsal A",
  "type": "Futsal",
  "price_per_hour": 150000
}


Response:

{
  "status": 201,
  "message": "Field created successfully",
  "data": {
    "id": 3,
    "name": "Lapangan Futsal A",
    "type": "Futsal",
    "price_per_hour": "150000.00"
  }
}

Update Field

PUT /api/fields/:id

Request Body:

{
  "name": "Lapangan Basket B",
  "type": "Basket",
  "price_per_hour": 200000
}


Response:

{
  "status": 200,
  "message": "Field updated successfully",
  "data": {
    "id": 1,
    "name": "Lapangan Basket B",
    "type": "Basket",
    "price_per_hour": "200000.00"
  }
}

Delete Field

DELETE /api/fields/:id

Response:

{
  "status": 200,
  "message": "Field deleted successfully"
}

📅 3. Booking API
Get All Bookings

GET /api/bookings

Response:

{
  "status": 200,
  "message": "Bookings retrieved successfully",
  "data": [
    {
      "id": 1,
      "user_id": 1,
      "field_id": 2,
      "booking_date": "2025-11-11",
      "start_time": "09:00:00",
      "end_time": "11:00:00",
      "status": "pending",
      "user": {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
      },
      "field": {
        "id": 2,
        "name": "Lapangan Futsal A",
        "type": "Futsal",
        "price_per_hour": "150000.00"
      }
    }
  ]
}

Create Booking

POST /api/bookings

Request Body:

{
  "user_id": 2,
  "field_id": 1,
  "booking_date": "2025-11-11",
  "start_time": "13:00",
  "end_time": "15:00"
}


Response:

{
  "status": 201,
  "message": "Booking created successfully",
  "data": {
    "id": 4,
    "user_id": 2,
    "field_id": 1,
    "booking_date": "2025-11-11",
    "start_time": "13:00",
    "end_time": "15:00",
    "status": "pending"
  }
}

Update Booking

PUT /api/bookings/:id

Request Body:

{
  "booking_date": "2025-11-12",
  "start_time": "10:00",
  "end_time": "12:00",
  "status": "confirmed"
}


Response:

{
  "status": 200,
  "message": "Booking updated successfully",
  "data": {
    "id": 4,
    "booking_date": "2025-11-12",
    "start_time": "10:00",
    "end_time": "12:00",
    "status": "confirmed"
  }
}

Delete Booking

DELETE /api/bookings/:id

Response:

{
  "status": 200,
  "message": "Booking deleted successfully"
}

⚙️ 4. Struktur Folder
├── controller/
│   ├── usersController.js
│   ├── bookingsController.js
│   └── fieldsController.js
├── middleware/
│   └── authMiddleware.js
├── routes/
│   └── apiRoutes.js
├── server.js
└── README.md

🧩 5. Teknologi yang Digunakan

Node.js + Express.js

JWT (JSON Web Token) Authentication

MySQL / PostgreSQL

dotenv untuk konfigurasi environment

👨‍💻 Pengembang

Dibuat oleh Rizal Fauzan
Bagian dari CV Artechmis Solution


---

Mau aku tambahkan juga **contoh request di Postman (dengan header Authorization dan token)** biar README-nya