# Recrute
Recrute is a comprehensive freelancing platform designed to connect freelancers with potential clients. The platform offers user registration, profiles, Gig listings, and real-time messaging to create a seamless experience for both freelancers and clients.

## Features:
**User Registration and Authentication:** Secure Oauth and Session Management.  

**User Profiles:** Detailed profiles for freelancers and Job Seekers.  

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
 - PostgreSQL
 - Drizzle ORM
 - Bcrypt
   
## Installation   
Clone the repository:   

```
git clone https://github.com/kowshickraj21/Recrute.git
```
Go into the Directory:
```
cd Recrute
```
Install dependencies:
```
npm install
```
### Set up environment variables:

Create a .env.local file in the root directory and add your configuration:   

.env.local
```console
GOOGLE_ID=your_google_authentication_id
GOOGLE_SECRET=your_google_authentication_secret
NEXT_PUBLIC_DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_nextauth_secret
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id
```
Start the Dev Server:
```
npm run dev
```
