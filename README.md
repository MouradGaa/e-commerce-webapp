# Artworks E-Commerce Web App Using MERN stack

An [e-commerce web application](https://magical-klepon-ac2c36.netlify.app/) built using MERN stack, Redux, Firebase and Stripe.

## Description

This e-commerce application allows user to buy artworks listed by the admin of the application.

## Installation

- Clone the Repo

    ```sh
    git clone https://github.com/MouradGaa/e-commerce-webapp.git
    ```

- Configure and Run the frontend.
  - Add `.env` file and add `REACT_APP_STRIPE_KEY` with your Stripe API key.
  - Add firebase API key to `.env`, check `firebase.js` file for reference.

    ```sh
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
    ```
  
    ```sh
    cd ClientApp

    npm install

    npm start
    ```

    Open your browser and navigate to http://localhost:3000 to access the app.

- Configure and Run the Backend API
  - Add `.env` file.
  - 
    ```sh
    MONGO_URL = 
    PORT = 
    PASSWORD_SECRET = 
    JWT_SECRET = 
    STRIPE_KEY = 
    ```

  - Run API application
  
     ```sh
    cd API

    npm install

    npm start
    ```

    Open your browser and navigate to http://localhost:5000 to access the API endpoint.