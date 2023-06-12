# Project Notes-Api

This is a backend API project built with Nest.js and follows a microservices architecture. It uses Google Firebase as the backend service for and data storage and JWT tokens for authentication .

## Prerequisites

Before running the project, make sure you have the following dependencies installed on your machine:

- Node.js
- RabbitMQ
- Sentry account

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sushmit-Bhalothia/Notes-Maker
   ```

2. Install the dependencies:

   ```bash
   cd Notes-Maker
   npm install
   ```

3. Configuration:

   - Update the environment variables in the `.env` file according to your setup. This should include the Firebase configuration, such as the API key, project ID, and other necessary credentials.

4. make sure to start the rabbitmq services by the following command
   brew services start rabbitmq

5. Start the microservices:

   ```bash
   npm run start

   ```

   or

   ```bash
   npm run start:dev

   ```

6. Running the project:
   Make requests to the API using tools like Postman or other applications. Alternatively, you can use the online platform, ReqBin, to send requests.

Before making requests, you need to authenticate and generate JWT tokens. Currently, authentication is implemented using static users. There are four predefined users available. To generate JWT tokens, use the specific email and password corresponding to each user.

Once you have obtained the tokens, you can use them to access the notes in the database. You can perform operations like updating or deleting the notes.
