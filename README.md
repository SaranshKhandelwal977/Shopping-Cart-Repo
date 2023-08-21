# React Front-End Shopping Cart Project

This repository contains a front-end shopping cart project built using React. The project provides a user-friendly interface for browsing products, adding/removing items to/from the cart, and managing the items in the cart. The cart page displays the total sum of all items and the total number of items currently in the cart.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [API Usage](#api-usage)
- [Contributing](#contributing)

## Project Overview

The main functionalities of this shopping cart project include:

1. **Routes**: The project has two main routes - the home page and the cart page. The home page displays a list of products fetched from an external API, and these products can be added to the cart. The cart page shows the items currently in the cart.

2. **Adding/Removing Items**: From the home page, users can add items to their cart by clicking on an "Add to Cart" button associated with each product. They can also remove items from the cart directly on the home page. On the cart page, users can further remove items from the cart.

3. **Total Sum and Item Count**: The cart page displays the total sum of prices for all items currently in the cart. It also shows the total number of items in the cart.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/SaranshKhandelwal977/Shopping-Cart-Repo.git
```

2. Navigate to the project directory:

```bash
cd Shopping-Cart-Repo
```

3. Install the required dependencies:

```bash
npm install
```

## Usage

1. Start the development server:

```bash
npm start
```

2. Open your browser and go to `http://localhost:3000` to access the home page.

3. Navigate to the cart page by clicking on the cart icon in the navigation bar or by directly accessing `http://localhost:3000/cart`.

4. On the home page, you can view the list of products fetched from the API. Add items to the cart by clicking the "Add to Cart" button. You can also remove items from the cart by clicking the "Remove Item" button next to each item.

5. On the cart page, you can remove items from the cart by clicking the "Delete" image next to each item.


## Dependencies

The project uses the following main dependencies:

- React
- React Router (for routing)
- React Icons
- React Redux
- React Hot Toast
- Other necessary packages (installed via `npm install`)

## API Usage

The project fetches product data from an external API (https://fakestoreapi.com/products) to populate the home page with products.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature-name"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.
