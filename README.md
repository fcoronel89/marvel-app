# Marvel App 

## Proyect Description

Welcome to Marvel app. And example app to using the Marvel api to can get the data of the heroes, view the heroes and can edit or delete.

## Demo

You can check the app here https://marvel-app-lemon-eight.vercel.app/login

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- npm (Node Package Manager): [Download npm](https://www.npmjs.com/get-npm)

### Installation

For the Frontend App need to do this:

1. Clone the repository:

   ```bash
   git clone https://github.com/fcoronel89/marvel-app

2. Navigate to the proyect directory:

    ```bash 
    cd marvel-app

3. Install dependencies:

    ```bash
    npm install

4. Create '.env' file in the root folder and define the backend url

    ```bash
    VITE_BACKEND_URL = 'https://localhost:3000/v1' // change with the port you running the backend.
    VITE_MARVEL_API = 'https://gateway.marvel.com/v1/public/' 
    VITE_MARVEL_API_PUBLIC_KEY = '' // complete with your public key of marvel api.
    VITE_MARVEL_API_PRIVATE_KEY = 'https://localhost:3000/v1' // complete with your private key of marvel api.

5. Start the development server:

    ```bash
    npm run dev

The proyect should now be running in http://localhost:5173 if the port is free

## Usage

You need to login or create account if you dont have in the app. Then you can navigate for the grid of heroes and view detail of anyone and also can edit or delete them.

You also can enter from your mobile, the app is full responsive.

## Technologies Used

This Marvel app is built using a variety of technologies to ensure a robust and feature-rich experience. Here's a list of the key technologies, frameworks, and libraries incorporated into the project:

- **ReactJS:** A powerful JavaScript library for building user interfaces, facilitating the creation of dynamic and responsive components.

- **React Router:** Ensures smooth navigation within the application, enabling the creation of a single-page application with multiple views.

- **React Query:** Enhances data fetching by providing a declarative API for fetching, caching, and updating data.

- **Vercel:** Chosen as the deployment platform, offering a seamless and efficient deployment process with automatic scaling.

- **React Hook Form:** A library for managing forms in React with hooks, simplifying form development and state management by leveraging React hooks for a more efficient and concise form implementation.

- **Zod:** A TypeScript-first schema declaration and validation library, providing a way to define and validate data structures, ensuring type safety and consistency in your application.

- **Axios:** A promise-based HTTP client for the browser and Node.js, making it easy to send asynchronous HTTP requests to REST endpoints and perform data fetching in the application.

- **Vite:** A fast and efficient build tool for modern web development, chosen for its speed and enhanced development experience.

- **Sass:** A popular CSS preprocessor, used for more maintainable and structured stylesheets in the project.

This stack was chosen to create a modern, efficient, and scalable web application for managing salon shifts seamlessly.

## Contributing

I welcome contributions from the community to improve and enhance this app. Whether you've found a bug, have a feature request, or want to contribute code feel free to do it.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact Information

Connect with me on [LinkedIn](https://www.linkedin.com/in/fcoronel89) for professional inquiries and networking.

Explore more of my projects on [GitHub](https://github.com/fcoronel89) and feel free to open issues or pull requests.
