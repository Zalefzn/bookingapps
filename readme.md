
# ⚽ **Field Booking API (Express.js)**

API ini dikembangkan menggunakan **Express.js** untuk mengelola sistem pemesanan lapangan olahraga.  
Mendukung autentikasi **JWT** dan menyediakan endpoint CRUD untuk **Users**, **Fields**, dan **Bookings**.

----------

## 🚀 **Cara Menjalankan Project**

### 1️⃣ Clone Repository

`git clone https://github.com/Zalefzn/bookingapps.git cd bookingapps` 

### 2️⃣ Install Dependencies

`npm install` 

### 3️⃣ Jalankan Server

Jalankan project langsung dengan perintah:

`node index.js` 

Server akan berjalan di:  
👉 [http://localhost:3008](http://localhost:3008)

----------

## 🔄 **Alur API**

### 🧍‍♂️ 1. **Autentikasi User**

#### 🔹 Register User

**Endpoint:** `POST /api/register`

`{  "name":  "Rizal Fauzan",  "email":  "rizal@example.com",  "password":  "123456"  }` 

**Response:**

`{  "status":  201,  "message":  "User registered successfully",  "data":  {  "id":  2,  "name":  "Rizal Fauzan",  "email":  "rizal@example.com",  "role":  "user"  }  }` 

----------

#### 🔹 Login User

**Endpoint:** `POST /api/login`

`{  "email":  "rizal@example.com",  "password":  "123456"  }` 

**Response:**

`{  "status":  200,  "message":  "Login successful",  "data":  {  "token":  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",  "user":  {  "id":  2,  "name":  "Rizal Fauzan",  "email":  "rizal@example.com",  "role":  "user"  }  }  }` 

----------

#### 🔹 Get Profile

**Endpoint:** `GET /api/profile`  
Gunakan token dari hasil login.

**Headers:**

`Authorization: Bearer <JWT_TOKEN>` 

**Response:**

`{  "status":  200,  "message":  "User profile retrieved successfully",  "data":  {  "id":  2,  "name":  "Rizal Fauzan",  "email":  "rizal@example.com",  "role":  "user"  }  }` 

----------

### 🏟️ 2. **Field API**

#### 🔹 Get All Fields

**Endpoint:** `GET /api/fields`

`{  "status":  200,  "message":  "Fields retrieved successfully",  "data":  [  {  "id":  1,  "name":  "Lapangan Basket A",  "type":  "Basket",  "price_per_hour":  "150000.00"  },  {  "id":  2,  "name":  "Lapangan Futsal A",  "type":  "Futsal",  "price_per_hour":  "150000.00"  }  ]  }` 

----------

#### 🔹 Get Single Field

**Endpoint:** `GET /api/fields/:id`

`{  "status":  200,  "message":  "Field retrieved successfully",  "data":  {  "id":  1,  "name":  "Lapangan Basket A",  "type":  "Basket",  "price_per_hour":  "150000.00"  }  }` 

----------

#### 🔹 Create Field

**Endpoint:** `POST /api/fields`

`{  "name":  "Lapangan Futsal A",  "type":  "Futsal",  "price_per_hour":  150000  }` 

**Response:**

`{  "status":  201,  "message":  "Field created successfully",  "data":  {  "id":  3,  "name":  "Lapangan Futsal A",  "type":  "Futsal",  "price_per_hour":  "150000.00"  }  }` 

----------

#### 🔹 Update Field

**Endpoint:** `PUT /api/fields/:id`

`{  "name":  "Lapangan Basket B",  "type":  "Basket",  "price_per_hour":  200000  }` 

**Response:**

`{  "status":  200,  "message":  "Field updated successfully",  "data":  {  "id":  1,  "name":  "Lapangan Basket B",  "type":  "Basket",  "price_per_hour":  "200000.00"  }  }` 

----------

#### 🔹 Delete Field

**Endpoint:** `DELETE /api/fields/:id`

`{  "status":  200,  "message":  "Field deleted successfully"  }` 

----------

### 📅 3. **Booking API**

#### 🔹 Get All Bookings

**Endpoint:** `GET /api/bookings`

`{  "status":  200,  "message":  "Bookings retrieved successfully",  "data":  [  {  "id":  1,  "user_id":  1,  "field_id":  2,  "booking_date":  "2025-11-11",  "start_time":  "09:00:00",  "end_time":  "11:00:00",  "status":  "pending",  "user":  {  "id":  1,  "name":  "John Doe",  "email":  "john@example.com"  },  "field":  {  "id":  2,  "name":  "Lapangan Futsal A",  "type":  "Futsal",  "price_per_hour":  "150000.00"  }  }  ]  }` 

----------

#### 🔹 Create Booking

**Endpoint:** `POST /api/bookings`

`{  "user_id":  2,  "field_id":  1,  "booking_date":  "2025-11-11",  "start_time":  "13:00",  "end_time":  "15:00"  }` 

**Response:**

`{  "status":  201,  "message":  "Booking created successfully",  "data":  {  "id":  4,  "user_id":  2,  "field_id":  1,  "booking_date":  "2025-11-11",  "start_time":  "13:00",  "end_time":  "15:00",  "status":  "pending"  }  }` 

----------

#### 🔹 Update Booking

**Endpoint:** `PUT /api/bookings/:id`

`{  "booking_date":  "2025-11-12",  "start_time":  "10:00",  "end_time":  "12:00",  "status":  "confirmed"  }` 

**Response:**

`{  "status":  200,  "message":  "Booking updated successfully",  "data":  {  "id":  4,  "booking_date":  "2025-11-12",  "start_time":  "10:00",  "end_time":  "12:00",  "status":  "confirmed"  }  }` 

----------

#### 🔹 Delete Booking

**Endpoint:** `DELETE /api/bookings/:id`

`{  "status":  200,  "message":  "Booking deleted successfully"  }` 

----------

## ⚙️ **Struktur Folder**

`├── controller/
│   ├── usersController.js
│   ├── bookingsController.js
│   └── fieldsController.js
├── middleware/
│   └── authMiddleware.js
├── routes/
│   └── apiRoutes.js
├── index.js
└── README.md` 

----------

## 🧩 **Teknologi yang Digunakan**

-   **Node.js + Express.js**
    
-   **JWT (JSON Web Token)** Authentication
    
-   **MySQL / PostgreSQL** untuk penyimpanan data
    
-   **Body-parser & CORS** untuk request API
    

----------

## 👨‍💻 **Pengembang**

Dibuat oleh **Rizal Fauzan**
