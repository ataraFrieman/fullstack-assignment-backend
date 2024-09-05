# Fullstack Assignment Backend

This is a fullstack assignment backend built with NestJS and MongoDB. It includes features such as fetching random photos from the Pixabay API and managing orders in a MongoDB database.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Endpoints](#endpoints)
- [Technologies](#technologies)
- [Configuration](#configuration)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 16 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (for local development or MongoDB Atlas for remote DB)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/ataraFrieman/fullstack-assignment-backend/
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. If you're using MongoDB locally, ensure that MongoDB is running on your system.

## Running the Project

1. Compile the TypeScript code:

   ```bash
   npm run build
   ```

2. Start the application:

   ```bash
   npm run start
   ```

3. The server will run by default at `http://localhost:3000`.

## Endpoints

Here are some example endpoints you can use to interact with the API:

### 1. **Fetch Random Photos**

- **Method**: `GET`
- **URL**: `/photos/:count`
- **Description**: Fetches a list of random photo URLs from the Pixabay API.
- **Example**:
  ```
  GET http://localhost:3000/photos/5
  ```

### 2. **Create a New Order**

- **Method**: `POST`
- **URL**: `/orders`
- **Description**: Creates a new order in the database.
- **Body**:
  ```json
  {
    "email": "example@example.com",
    "fullName": "Atara",
    "fullAddress": "Neve 23 St, City, Country",
    "imageUrls": [
      "https://example.com/photo1.jpg",
      "https://example.com/photo2.jpg"
    ],
    "frameColor": "Black",
    "user": "user1"
  }
  ```

### 3. **Get Orders for a Specific User**

- **Method**: `GET`
- **URL**: `/orders/:user`
- **Description**: Retrieves all orders placed by a specific user.
- **Example**:
  ```
  GET http://localhost:3000/orders/user1
  ```

## Technologies

- **NestJS** - A framework for building efficient, reliable, and scalable server-side applications.
- **MongoDB** - A NoSQL database used to store orders.
- **Pixabay API** - Used for fetching random photo URLs.

## Configuration

1. **MongoDB**:

   - If you're using a local MongoDB server, make sure MongoDB is running and the connection string is configured as `mongodb://localhost:27017/myLocalDB` in the `app.module.ts` file.
   - For MongoDB Atlas, provide the correct connection string with your username, password, and database name.

2. **Pixabay API Key**:
   - The API key for Pixabay is hardcoded in `photos.service.ts`, but you can update it to your own key if needed.
   - Visit [Pixabay API](https://pixabay.com/api/docs/) to register and get your API key.
