# Backend Ledger API

A robust, secure, and scalable RESTful API built to manage financial ledgers, user accounts, and transactions. This backend system is designed with an MVC (Model-View-Controller) architecture, ensuring clean separation of concerns and maintainability.

## 🚀 Features

*   **Secure User Authentication:** Registration and login utilizing `bcrypt` for password hashing and JSON Web Tokens (JWT) for secure, stateless session management.
*   **Token Blacklisting:** Enhanced security feature to invalidate JWTs upon user logout, preventing token reuse.
*   **Account & Ledger Management:** Create and manage financial accounts and track ledger balances dynamically.
*   **Transaction Processing:** Securely record, fetch, and manage transaction histories between accounts.
*   **Automated Email Services:** Integrated `nodemailer` for sending transactional emails, alerts, or authentication notifications.
*   **Clean Architecture:** Built using industry-standard MVC patterns with dedicated routing, middleware, and service layers.

## 🛠️ Tech Stack

*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database:** MongoDB
*   **ODM:** Mongoose
*   **Authentication:** JWT (jsonwebtoken) & Bcrypt
*   **Mailing Service:** Nodemailer
*   **Environment Management:** dotenv

## 📁 Project Structure

```text
Backend-Ledger/
├── .env                  # Environment variables
├── server.js             # Entry point of the application
└── src/
    ├── app.js            # Express app setup and middleware configuration
    ├── config/
    │   └── db.js         # MongoDB connection setup
    ├── controllers/      # Route logic and request handling
    │   ├── accountController.js
    │   ├── authController.js
    │   └── transactionController.js
    ├── middleware/
    │   └── auth.middleware.js # JWT verification and route protection
    ├── models/           # Mongoose schemas and database models
    │   ├── account.model.js
    │   ├── blackList.model.js
    │   ├── ledger.model.js
    │   ├── transaction.model.js
    │   └── user.model.js
    ├── routes/           # API route definitions
    │   ├── account.routes.js
    │   ├── auth.routes.js
    │   └── transaction.routes.js
    └── services/
        └── email.service.js # Nodemailer configuration and logic