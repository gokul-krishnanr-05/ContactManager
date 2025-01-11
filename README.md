**NAME: GOKUL KRISHNAN R**  
 **MERN 3**
 # Contact Management Application
A MERN stack application to manage contacts. This app supports creating, viewing, updating, and deleting contacts.

## Features

- **View Contacts**: View a list of contacts.
- **Add Contacts**: Form to add a new contact.
- **Edit Contact**: Update existing contact details.
- **Delete Contact**: Remove contacts.

---

## Setup

### Prerequisites

- Node.js and npm installed.
- MongoDB Atlas account

### Backend Setup

1. Navigate to the `backend` folder:  
   cd backend
2. Install dependencies:  
   npm install
3. Create a `.env` file and configure:  
    env  
   MONGO_URI=<Your MongoDB Connection String>  
   PORT=5000
4. Start the server:  
    node server.js
   The backend will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the `frontend` folder:

   cd ../frontend

2. Install dependencies:

    npm install
3. Start the React app:

   npm start
   The frontend will run on `http://localhost:3000`.

## Testing

- Test the application by performing CRUD operations through the UI.
- Use Postman or similar tools to test API endpoints directly.

---

## Technologies

- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

---

## Deployment

- **Backend**: Deploy to [Render](https://render.com/).
- **Frontend**: Deploy to [Netlify](https://www.netlify.com/).
