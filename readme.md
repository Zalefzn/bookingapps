
# ⚽ Field Booking API (Express.js)

API ini dikembangkan menggunakan **Express.js** dan **Sequelize ORM** untuk sistem pemesanan lapangan olahraga.  
Mendukung autentikasi **JWT** dan menyediakan endpoint CRUD untuk **Users**, **Fields**, dan **Bookings**.

---

## 🚀 Cara Menjalankan Project

1️⃣ Clone repository  
git clone https://github.com/Zalefzn/bookingapps.git
cd bookingapps

2️⃣ Install dependencies
npm install

3️⃣ Jalankan server
node index.js
Server berjalan di: http://localhost:3008

```bash

🔄 Alur API

🧍‍♂️ 1. Autentikasi User
📌 REGISTER USER

Method: POST
Endpoint: /api/register
Request:
json
{
  "name": "Rizal Fauzan",
  "email": "rizal@example.com",
  "password": "123456"
}

Response:
json
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

📌 LOGIN USER
Method: POST
Endpoint: /api/login
Request:
json
{
  "email": "rizal@example.com",
  "password": "123456"
}

Response:
json
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

📌 GET PROFILE
Method: GET
Endpoint: /api/profile
Gunakan token dari login

headers:
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

Response:
json
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
📌 GET ALL FIELDS
Method: GET
Endpoint: /api/fields

headers:
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

Response:
json
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

📌 GET SINGLE FIELD
Method: GET
Endpoint: /api/fields/:id

headers:
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

Response:
json
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

📌 CREATE FIELD
Method: POST
Endpoint: /api/fields

headers:
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

Request:
json
{
  "name": "Lapangan Futsal A",
  "type": "Futsal",
  "price_per_hour": 150000
}

Response:
json
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

📌 UPDATE FIELD
Method: PUT
Endpoint: /api/fields/:id

headers:
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

Request:
json
{
  "name": "Lapangan Basket B",
  "type": "Basket",
  "price_per_hour": 200000
}

Response:
json
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

📌 DELETE FIELD
Method: DELETE
Endpoint: /api/fields/:id

headers:
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

Response:
json
{
  "status": 200,
  "message": "Field deleted successfully"
}

📅 3. Booking API
📌 GET ALL BOOKINGS
Method: GET
Endpoint: /api/bookings

headers:
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

Response:
json
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

📌 CREATE BOOKING
Method: POST
Endpoint: /api/bookings

headers:
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

Request:
json
{
  "user_id": 2,
  "field_id": 1,
  "booking_date": "2025-11-11",
  "start_time": "13:00",
  "end_time": "15:00"
}

Response:
json
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

📌 UPDATE BOOKING
Method: PUT
Endpoint: /api/bookings/:id

headers:
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

Request:
json
{
  "booking_date": "2025-11-12",
  "start_time": "10:00",
  "end_time": "12:00",
  "status": "confirmed"
}

Response:
json
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

📌 DELETE BOOKING
Method: DELETE
Endpoint: /api/bookings/:id

headers:
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

Response:
json
{
  "status": 200,
  "message": "Booking deleted successfully"
}

⚙️ Struktur Folder
pgsql
├── controller/
├── middleware/
├── models/
├── repository/
├── services/
├── routes/
├── index.js
└── README.md

🧩 Teknologi
Node.js + Express.js
Sequelize ORM
JWT Authentication
MySQL / PostgreSQL
Body-parser & CORS

👨‍💻 Pengembang
Dibuat oleh Rizal Fauzan
