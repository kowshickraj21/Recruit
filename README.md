# Recrute
Recrute is a comprehensive freelancing platform designed to connect freelancers with potential clients. The platform offers user registration, profiles, job listings, payment systems, and real-time messaging to create a seamless experience for both freelancers and clients.

## Features:
**User Registration and Authentication:** Secure sign-up and login functionality.  

**User Profiles:** Detailed profiles for freelancers and clients.  

**Freelancing Gigs:** Freelancers can create Gigs for the services they Provide. 

**Messaging:** Real-time messaging between freelancers and clients.


## Technologies Used:
### Frontend:
 - Next.js
 - Tailwind CSS
 - Next Auth 
 - Socket.io
 - Uploadthing
### Backend:
PostgreSQL for the database
Drizzle ORM for database interactions
Bcrypt for password hashing
Getting Started
Prerequisites
Ensure you have the following installed on your system:

Node.js
PostgreSQL
Docker
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/kowshickraj21/Recrute.git
cd Recrute
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add your configuration:

env
Copy code
DATABASE_URL=your_database_url
NEXTAUTH_URL=your_nextauth_url
SOCKET_URL=your_socket_url
UPLOADTHING_API_KEY=your_uploadthing_api_key
Set up the database:

Ensure PostgreSQL is running and create the necessary database:

sql
Copy code
CREATE DATABASE recrute;
Run the database migrations:

bash
Copy code
npx drizzle-kit up
Start the development server:

bash
Copy code
npm run dev
The app will be running at http://localhost:3000.
