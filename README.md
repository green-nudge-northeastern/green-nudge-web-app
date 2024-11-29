# Green Nudge Web Development Page

This page briefly introduces how to set up the development environment and run the web app. It is using React.js as the front-end framework and Node.js as the back-end server.



**Table of Contents:**
- [Green Nudge Web Development Page](#green-nudge-web-development-page)
- [Meet the Team \& Explore Our Project](#meet-the-team--explore-our-project)
- [Concepts and Resources](#concepts-and-resources)
- [Understanding the Project Structure](#understanding-the-project-structure)
- [Getting Started](#getting-started)
- [What next?](#what-next)
- [Notes](#notes)

# Meet the Team & Explore Our Project

- [GreenNudge Project: Official Trailer](https://youtu.be/TixBm-K1ZbA)
- [10 Minutes Detailed Video](https://youtu.be/J8UfteKKMO8)
- [Our Research Paper](https://github.com/green-nudge-northeastern/green-nudge-web-app/blob/main/research_paper_greennudge.pdf)
- [Get the PDF of Our Poster](https://github.com/green-nudge-northeastern/green-nudge-web-app/blob/main/GreenNudge%20YvonneCapstonePoser.pdf)
 ![Our Poster](https://github.com/green-nudge-northeastern/green-nudge-web-app/blob/main/Poster.jpg)

# Concepts and Resources

It may be helpful to understand the following concepts to proceed with the development of the web app:

- **What is Node.js?**

    Node.js is a server-side JavaScript runtime environment that executes JavaScript code.

- **What is React?**

    React is a front-end framework for creating a user interface (UI).

- **What is npm?**

    `npm` is the default package manager for Node.js. A package manager makes it easier to publish and share Node.js source code libraries. The npm package manager simplifies library installation, updating, and uninstallation.

- **Conventions for git commit messages**

    It's a good practice to follow some conventions when writing commit messages. Typically, the commits should be prefixed with a type, such as `feat`, `build`, `fix`, `docs`, `style`, `refactor`, `test`, or `chore`. 
    
    For example:
    ```
    feat: Add the forgot password feature to the login page
    fix: Fix the error message when user fails to login
    docs: Update README.md with getting started instructions
    ```

    These conventions are completely optional in our case, but I would highly recommend following them 😊!
    
    If you'd like to know more about the conventions, you can check out: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

- **What is our authentication strategy?**

    To onboard users, we need to implement authentication, providing the feature to sign up, log in, and log out.

    For now, I chose to use ***Google Firebase*** for the web app since it's free and easy to set up and link to our custom log-in page. You can check out the [Firebase Authentication documentation](https://firebase.google.com/docs/auth) to learn more about it.

    Yuning's credentials are shared in the team chat. Please refer to [client/.env](client/.env) for the set up of environment variables, referenced by `services/firebaseConfig.js`.

    Some other popular authentication strategies include ***Auth0***, ***JWT***, and ***AWS Cognito***. We can discuss and decide on the best strategy for our project in the future.

- **How do we manage our dependencies or the development environment?**

    As we mentioned above, we use `npm` to manage our dependencies. The `package.json` file in the `client/` directory lists all the dependencies required for the front-end project. When you run `npm install`, npm installs all the dependencies listed in the `package.json` file.
    
    On the other hand, whenever you install a new package using `npm install <package-name>`, npm automatically updates the `package.json` file with the new package and its version. Just make sure to commit the updated `package.json` file to the repository every time you introduce a new library or dependency.


# Understanding the Project Structure

The project structure is as follows (subject to change). Most of the files or the naming conventions are just standard practices, so please don't worry too much about them. We'll mostly focus on some specific implementations in `client/src/` for front-end in the future.

```plaintext
GREEN-NUDGE-WEB-APP
├── api/                # Backend (Node.js) code, not yet implemented
│   ├── routes/         # API routes/endpoints
│   └── server.js       # Main entry point for Node.js server
│
├── client/             # Frontend (React) code
│   ├── public/         # Public assets (index.html, favicon, etc.)
│   └── src/            # Source files for React
│       ├── assets/     # Images, logos, fonts, etc.
│       ├── components/ # UI components
│       ├── pages/      # Main pages in the app
│       ├── services/   # API calls and utility functions
│       ├── context/    # React contexts
│       ├── App.js      # Main React component
│       ├── package.json    # React project dependencies
│       └── .env        # Environment variables (for security reasons, never commit this file)
│
├── tests/              # Testing code
│
├── .gitignore          # Ignoring files like node_modules and .env
├── README.md           # Project documentation (you are here)
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

Now you should be able to see the front-end page running in your browser. If you see any errors or have any questions, please feel free to ask me!

# What next?

Now that you have the front-end project running, you can start developing the web app. You can make changes to the code in the `client/` directory and see the changes reflected in the browser.

Here are just my two cents on what we can do next:

1. **Understand the code structure:**

    Take some time to understand the code structure and the different directories in the `client/` directory. You can start by looking at the `src/` directory, which contains the main source files for the React app. Feel free to raise any suggestions or questions you have about the code structure, since I'm also learning and open to feedback.

2. **Refactor the UI/UX design:**

    Since an interactive prototype was not provided, also, some of the layouts and designs are not practical, we can start by refactoring the UI/UX design. Let's discuss the design changes and improvements we want to make to the web app, and confirm with Sneha.


# Notes

For now, the back-end server is not implemented. We'll update this page with instructions on how to run the back-end server once it's implemented. We can first focus on the front-end development and testing.
