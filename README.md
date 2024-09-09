# Gratuity Calculator

Gratuity Calculator is a user-friendly app built with **React** and **TypeScript**, using **Vite** as the build tool. The application is deployed on **Netlify** and can be accessed via the following URL:

**[Gratuity Calculator - Live Demo](https://resonant-axolotl-d20821.netlify.app/)**

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description
Gratuity Calculator is a user-friendly app that helps you quickly calculate tips based on your total bill. Whether you're dining out with friends or having a solo meal, it allows you to easily determine the appropriate tip percentage and split the bill among multiple people. Perfect for ensuring fair and hassle-free tipping every time.

## Features
- Calculate tips based on the total bill.
- Select the desired tip percentage.
- Real-time updates for tip and total amounts.
- User-friendly interface designed with Tailwind CSS.

## Technologies Used
- **React**: v18.3.1
- **TypeScript**: Adds static type checking to JavaScript.
- **Vite**: Build tool for fast development.
- **Tailwind CSS**: v3.4.10 for styling.
- **Netlify**: Free hosting service.

## Hooks Used

### `useState`
`useState` is a React hook that allows you to add state to functional components. It's used in this app to manage the state for the total bill, tip percentage, and number of people splitting the bill.

### `useMemo`
`useMemo` is a React hook that memorizes the result of a computation to avoid unnecessary re-calculations. In this app, it optimizes performance by ensuring that the tip and total amounts are only recalculated when the input values change.

### Custom Hooks
Custom hooks are used to encapsulate and reuse logic across components. In this app, custom hooks manage functionalities such as input validation and calculations, providing a cleaner and more maintainable codebase.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/gratuity-calculator.git
    ```

2. Navigate into the project directory:
    ```bash
    cd gratuity-calculator
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and go to `http://localhost:5173` to access the application.

## Usage

1. Enter the total bill amount.
2. Choose the desired tip percentage.
3. Specify the number of people to split the bill with.
4. View the calculated tip and the total amount per person in real-time.

## Contributing

Contributions are welcome. If you wish to improve this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
