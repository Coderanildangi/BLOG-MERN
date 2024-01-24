# MERN Blog App

A full-stack blog application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, Tailwind CSS for styling, and Vite for a faster development experience.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Output](#Output)

## Project Overview

This blog app provides a platform for users to create, read, update, and delete blog posts. It incorporates the MERN stack for a robust and scalable solution, Tailwind CSS for styling, and Vite for efficient development.

## Features

- User authentication
- Create, edit, and delete blog posts
- Responsive design with Tailwind CSS
- Fast development with Vite

## Getting Started

Follow the steps below to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js and npm
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Coderanildangi/BLOG-MERN.git

2. Install dependencies for both the client and server:

    ```bash

### Install client dependencies

    cd client
    npm install

### Install server dependencies

    cd ../server
    npm install

3. Create a .env file in the server directory and add your MongoDB connection string:

    MONGODB_URI = your_mongodb_connection_string

4. Start the development server for both the client and server:

# Start client development server

    cd ../client
    npm run dev

# Start server

    cd ../server
    npm start


## Folder Structure

/mern-blog-app
  ├── client (Vite and React.js app with Tailwind CSS)
  │   ├── public
  │   └── src
  ├── server (Node.js and Express.js app with MongoDB)
  │   ├── controllers
  │   ├── models
  │   ├── routes
  │   └── server.js
  ├── .gitignore
  ├── .env.example
  └── README.md


## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- Tailwind CSS
- Vite


## Usage

1. User Registration/Login:

    Users can register and log in to the blog app to access additional features.

2. Create a Blog Post:

    Authenticated users can create new blog posts, providing a title, content, and any relevant details.

3. Edit/Delete Blog Post:

    Users can edit and delete their own blog posts.

4. View Blog Posts:

    All users can view the list of blog posts on the home page.

5. Responsive Design:

    The app is designed to be responsive, ensuring a seamless experience across devices.

## Contributing

We welcome contributions! Follow the steps below to contribute to the project:

- Fork the repository.
- Create a new branch for your feature or bug fix: git checkout -b feature/new-feature.
- Make your changes and commit them: git commit -m 'Add new feature'.
- Push your changes to the branch: git push origin feature/new-feature.
- Submit a pull request with a detailed description of your changes.
- Please ensure that your code follows the project's coding standards and conventions.

## Output
