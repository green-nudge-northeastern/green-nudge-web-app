# green-nudge-web-app

This page briefly introduces how to set up the development environment and run the web app. It is using React.js as the front-end framework and Node.js as the back-end server.


## Table of Contents
- [green-nudge-web-app](#green-nudge-web-app)
  - [Table of Contents](#table-of-contents)
- [Concepts and Resources](#concepts-and-resources)
- [Understanding the Project Structure](#understanding-the-project-structure)
- [Getting Started](#getting-started)
- [What next?](#what-next)
- [Notes](#notes)

# Concepts and Resources

It may be helpful to understand the following concepts to proceed with the development of the web app:

- **What is Node.js?**
    Node.js is a server-side JavaScript runtime environment that executes JavaScript code.

- **What is React?**
    React is a front-end framework for creating a user interface (UI).

- **What is npm?**
    `npm` is the default package manager for Node.js. A package manager makes it easier to publish and share Node.js source code libraries. The npm package manager simplifies library installation, updating, and uninstallation.


# Understanding the Project Structure

The project structure is as follows (subject to change). Most of the files or the naming conventions are just standard practices, so please don't worry about them too much. We'll mostly focus on some specific implementations in the future.

```plaintext
GREEN-NUDGE-WEB-APP
├── api/                # Backend (Node.js) code, not yet implemented
│   ├── routes/         # API routes/endpoints
│   └── server.js       # Main entry point for Node.js server
│
├── client/             # Frontend (React) code
│   ├── public/         # Public assets (index.html, favicon, etc.)
│   ├── src/            # Source files for React
│   │   ├── assets/     # Images, logos, fonts, etc.
│   │   ├── components/ # UI components
│   │   ├── pages/      # Main pages in the app
│   │   ├── services/   # API calls and utility functions
│   │   ├── context/    # React contexts
│   │   └── App.js      # Main React component
│   └── package.json    # React project dependencies
│
├── tests/              # Testing code
│
├── .env                # Environment variables (for security reasons, never commit this file)
├── .gitignore          # Ignoring files like node_modules and .env
├── README.md           # Project documentation (you are here)
└── package.json        # Main project dependencies
```

The `client/` directory contains the front-end code, and the `api/` directory contains the back-end code. The `tests/` directory contains the testing code. The `.env` file contains environment variables, and the `.gitignore` file specifies files that should not be committed to the repository.


# Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/green-nudge-northeastern/green-nudge-web-app.git
    ```

    <p> <br> </p>

2. **Install Node.js and npm:**
    To check if you have Node.js and npm installed, run the following commands in your terminal. The version numbers should appear:
    ```bash
    node -v
    # should see the version like v20.17.0

    npm -v
    # should see the version like 10.8.2
    ```
    
    If not, following these steps from [the official download guide](https://nodejs.org/en/download/package-manager/) should quickly get you up and running.


    <p> <br> </p>

3. **Install the project dependencies:**
    When you have Node.js and npm installed, navigate to the frontend directory:
    ```bash
    cd client/
    ```
    Then, run the following command:
    ```bash
    npm install
    ```
    This command installs all the dependencies listed in the `package.json` file under the `client/` directory.

    You'll see a new directory called `node_modules/` created in the `client/` directory, which contains all the dependencies installed by npm. Do not commit this directory to the repository (it's already ignored in the `.gitignore` file, so you don't have to worry about it).

    <p> <br> </p>

4. **Run the front-end project:**
    To run the front-end project, use the following command:
    ```bash
    npm start
    ```
    This command should automatically open a new tab in your default browser with the URL `http://localhost:3000`. If it doesn't, you can manually open the URL in your browser.

    <p> <br> </p>

# What next?

Now that you have the front-end project running, you can start developing the web app. You can make changes to the code in the `client/` directory and see the changes reflected in the browser.

Here are just my two cents on what you can do next:



# Notes

For now, the back-end server is not implemented. We'll update this page with instructions on how to run the back-end server once it's implemented. We can first focus on the front-end development and testing.