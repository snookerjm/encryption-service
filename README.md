# NestJS Encryption Service

A REST API service built with **NestJS** that provides secure data encryption and decryption using a **Hybrid Encryption approach (RSA + AES)**.

This project was developed to demonstrate secure API design, encryption workflow, and backend development using NestJS.

---

# 📌 Features

- REST API built with **NestJS**
- **Hybrid Encryption**
  - AES-256 for payload encryption
  - RSA for encrypting AES key
- API Documentation with **Swagger**
- **Unit Testing** using Jest
- Payload validation using **class-validator**

---

# 🏗 Architecture

The encryption process uses **Hybrid Encryption**:

1. Generate a random **AES key**
2. Encrypt payload using **AES-256-CBC**
3. Encrypt AES key using **RSA Private Key**
4. Return:
   - `data1` → encrypted AES key
   - `data2` → encrypted payload

Decryption process:

1. Decrypt AES key using **RSA Public Key**
2. Use AES key to decrypt payload

---

---

# ⚙️ Installation

Clone repository
npm install


---

# ▶️ Running the Server

Start the application
npm run start

Server will run at
http://localhost:3000


---

# 📚 API Documentation

Swagger documentation is available at:

http://localhost:3000/api-docs


/get-encrypt-data
Ex. 
{
  "payload": "hello world"
}

/get-decrypt-data
Ex.
{
    "data1": "ZJXV+Bz0LYwldL+dDKb6N0P3QRaMecL8ieEmIZUwABN5sWlNDIm2hYoqoX6g3DmQzK2lqHFvHnMIN28t9oB2Y9nt5fNMi8Mum36dvNzJMBNFJd1U2C0XSPcyMnTCNwKojDctKOOsvGHdzk/AteD5ZXBVsZCs45OZTN2xTpWvuvk=",
    "data2": "t+8e4gA/dw+XZivDcTs/jQ==:9uxr3qhtfz1ZG7i6vgW0eQ=="
}
---

# 🧪 Unit Testing

Run tests

npm run test
