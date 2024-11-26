Product Management Application
This is a simple React-based application that allows users to view, add, edit, and delete products. It features two roles: Admin and User, with distinct functionalities for each role. The Admin can manage product details, while the User can only view the available products. Additionally, the app includes search functionality to filter the products based on their name.

Features
Login as User or Admin: Two roles, User and Admin, with separate views and functionalities.

User: Can only view the product list.
Admin: Can add, edit, and delete products. Can also search for products by name.
Product Management: Admin can manage products:

Add new products with details such as name, price, and image URL.
Edit existing products.
Delete products from the list.
Search Functionality: Both User and Admin can search for products by their name.

Installation
To get started with the project, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/product-management-app.git
Navigate into the project directory:

bash
Copy code
cd product-management-app
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
The application should now be running on http://localhost:5173.

File Structure
src/ - Contains the source code for the application.

App.js - Main component managing the application state and rendering the user interface.
App.css - Styles for the app, including global and specific styles for login, product management, and responsive layouts.
public/ - Contains the public assets of the project.

index.html - The main HTML file that the React app renders into.
Technologies Used
React: A JavaScript library for building user interfaces.
CSS: For styling the application.
How It Works
Login Screen
When the app is first loaded, the user is prompted to log in as either a User or an Admin. The User has access only to view the products, while the Admin has access to a panel where they can add, edit, and delete products.

Admin Panel
The Admin has the ability to:

Add a new product: Admin can input product details (name, price, and image URL) and add it to the product list.
Edit a product: Admin can select an existing product to edit its details.
Delete a product: Admin can remove a product from the list.
Search products: Admin can filter products by name.
User View
The User can:

View products: User can browse through the list of products, but cannot modify them.
Search products: User can filter products by name.
Product Display
Each product has a name, price, and image displayed. The Admin has extra options to Edit and Delete products.

Search
The search bar allows both the Admin and User to filter the products displayed based on the product name. As you type, the product list updates dynamically to match the search term.

Example
When logged in as User, you will only see the products listed with the option to search for them.
When logged in as Admin, you will have the ability to add, edit, and delete products, and search through them as well.
Example Products:
Product 1: Name - "Product 1", Price - $10, Image - Laptop Image
Product 2: Name - "Product 2", Price - $20, Image - MacBook Air Image
Product 3: Name - "Product 3", Price - $30, Image - Amazon Logo
Development & Customization
Feel free to fork the repository and customize the project to your needs. You can modify product details, styles, or functionality to meet the requirements of your own project.

To Do:
Improve UI with more advanced features.
Add user authentication for persistent login state.
Enhance product image handling (upload from local storage).
Conclusion
This is a simple and functional product management app built with React that demonstrates basic functionality for user authentication, product management, and search features.

