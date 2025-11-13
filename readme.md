
# ⚽ Field Booking API (Express.js)

API ini dikembangkan menggunakan **Express.js** dan **Sequelize ORM** untuk sistem pemesanan lapangan olahraga.  
Mendukung autentikasi **JWT** dan menyediakan endpoint CRUD untuk **Users**, **Fields**, dan **Bookings**.

----------

## 🚀 Cara Menjalankan Project

1️⃣ **Clone repository**

`git clone https://github.com/Zalefzn/bookingapps.git cd bookingapps` 

2️⃣ **Install dependencies**

`npm install` 

3️⃣ **Jalankan server**

`node index.js` 

Server berjalan di: `http://localhost:3008`

----------

## 🔄 Alur API

### 🧍‍♂️ 1. Autentikasi User

#### 📌 Register User

-   **Method:** POST
    
-   **Endpoint:** `/api/register`
    
-   **Request Body:**
    

`{  "name":  "Rizal Fauzan",  "email":  "rizal@example.com",  "password":  "123456"  }` 

-   **Response:**
    

`{  "status":  201,  "message":  "User registered successfully",  "data":  {  "id":  2,  "name":  "Rizal Fauzan",  "email":  "rizal@example.com",  "role":  "user"  }  }` 

#### 📌 Login User

-   **Method:** POST
    
-   **Endpoint:** `/api/login`
    
-   **Request Body:**
    

`{  "email":  "rizal@example.com",  "password":  "123456"  }` 

-   **Response:**
    

`{  "status":  200,  "message":  "Login successful",  "data":  {  "token":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",  "user":  {  "id":  2,  "name":  "Rizal Fauzan",  "email":  "rizal@example.com",  "role":  "user"  }  }  }` 

#### 📌 Get Profile

-   **Method:** GET
    
-   **Endpoint:** `/api/profile`
    
-   **Headers:**
    

`Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json` 

-   **Response:**
    

`{  "status":  200,  "message":  "User profile retrieved successfully",  "data":  {  "id":  2,  "name":  "Rizal Fauzan",  "email":  "rizal@example.com",  "role":  "user"  }  }` 

----------

### 🏟️ 2. Field API

#### 📌 Get All Fields

-   **Method:** GET
    
-   **Endpoint:** `/api/fields`
    
-   **Headers:**
    

`Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json` 

-   **Response:**
    

`{  "status":  200,  "message":  "Fields retrieved successfully",  "data":  [  {  "id":  1,  "name":  "Lapangan Basket A",  "type":  "Basket",  "price_per_hour":  "150000.00"  },  {  "id":  2,  "name":  "Lapangan Futsal A",  "type":  "Futsal",  "price_per_hour":  "150000.00"  }  ]  }` 

#### 📌 Get Single Field

-   **Method:** GET
    
-   **Endpoint:** `/api/fields/:id`
    
-   **Headers:** Sama seperti di atas
    
-   **Response:**
    

`{  "status":  200,  "message":  "Field retrieved successfully",  "data":  {  "id":  1,  "name":  "Lapangan Basket A",  "type":  "Basket",  "price_per_hour":  "150000.00"  }  }` 

#### 📌 Create Field

-   **Method:** POST
    
-   **Endpoint:** `/api/fields`
    
-   **Request Body:**
    

`{  "name":  "Lapangan Futsal A",  "type":  "Futsal",  "price_per_hour":  150000  }` 

-   **Response:**
    

`{  "status":  201,  "message":  "Field created successfully",  "data":  {  "id":  3,  "name":  "Lapangan Futsal A",  "type":  "Futsal",  "price_per_hour":  "150000.00"  }  }` 

#### 📌 Update Field

-   **Method:** PUT
    
-   **Endpoint:** `/api/fields/:id`
    
-   **Request Body:**
    

`{  "name":  "Lapangan Basket B",  "type":  "Basket",  "price_per_hour":  200000  }` 

-   **Response:**
    

`{  "status":  200,  "message":  "Field updated successfully",  "data":  {  "id":  1,  "name":  "Lapangan Basket B",  "type":  "Basket",  "price_per_hour":  "200000.00"  }  }` 

#### 📌 Delete Field

-   **Method:** DELETE
    
-   **Endpoint:** `/api/fields/:id`
    
-   **Response:**
    

`{  "status":  200,  "message":  "Field deleted successfully"  }` 

----------

### 📅 3. Booking API

#### 📌 Get All Bookings

-   **Method:** GET
    
-   **Endpoint:** `/api/bookings`
    
-   **Headers:** Sama seperti di atas
    
-   **Response:**
    

`{  "status":  200,  "message":  "Bookings retrieved successfully",  "data":  [  {  "id":  1,  "user_id":  1,  "field_id":  2,  "booking_date":  "2025-11-11",  "start_time":  "09:00:00",  "end_time":  "11:00:00",  "status":  "pending",  "user":  {  "id":  1,  "name":  "John Doe",  "email":  "john@example.com"  },  "field":  {  "id":  2,  "name":  "Lapangan Futsal A",  "type":  "Futsal",  "price_per_hour":  "150000.00"  }  }  ]  }` 

#### 📌 Create Booking

-   **Method:** POST
    
-   **Endpoint:** `/api/bookings`
    
-   **Request Body:**
    

`{  "user_id":  2,  "field_id":  1,  "booking_date":  "2025-11-11",  "start_time":  "13:00",  "end_time":  "15:00"  }` 

-   **Response:**
    

`{  "status":  201,  "message":  "Booking created successfully",  "data":  {  "id":  4,  "user_id":  2,  "field_id":  1,  "booking_date":  "2025-11-11",  "start_time":  "13:00",  "end_time":  "15:00",  "status":  "pending"  }  }` 

#### 📌 Update Booking

-   **Method:** PUT
    
-   **Endpoint:** `/api/bookings/:id`
    
-   **Request Body:**
    

`{  "booking_date":  "2025-11-12",  "start_time":  "10:00",  "end_time":  "12:00",  "status":  "confirmed"  }` 

-   **Response:**
    

`{  "status":  200,  "message":  "Booking updated successfully",  "data":  {  "id":  4,  "booking_date":  "2025-11-12",  "start_time":  "10:00",  "end_time":  "12:00",  "status":  "confirmed"  }  }` 

#### 📌 Delete Booking

-   **Method:** DELETE
    
-   **Endpoint:** `/api/bookings/:id`
    
-   **Response:**
    

`{  "status":  200,  "message":  "Booking deleted successfully"  }` 

----------

## ⚙️ Struktur Folder

`pgsql ├── controller/
├── middleware/
├── models/
├── repository/
├── services/
├── routes/
├── index.js
└── README.md` 

----------

## 🧩 Teknologi

-   Node.js + Express.js
    
-   Sequelize ORM
    
-   JWT Authentication
    
-   MySQL / PostgreSQL
    
-   Body-parser & CORS
    

----------

## 👨‍💻 Pengembang

Dibuat oleh **Rizal Fauzan**
