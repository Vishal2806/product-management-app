Product Management Application 

## Documentation

[Documentation](https://linktodocumentation)

 This is a simple React-based application that allows users to view, add, edit, and delete products. It features two roles: Admin and User, with distinct functionalities for each role. The Admin can manage product details, while the User can only view the available products. Additionally, the app includes search functionality to filter the products based on their name.

Features Login as User or Admin: Two roles, User and Admin, with separate views and functionalities.

User: Can only view the product list. Admin: Can add, edit, and delete products. Can also search for products by name. Product Management: Admin can manage products:

Add new products with details such as name, price, and image URL. Edit existing products. Delete products from the list. Search Functionality: Both User and Admin can search for products by their name.

## Installation

To set up the project locally, follow these steps:

1) Clone the repository:
```bash
  git clone https://github.com/Vishal2806/product-management-app.git
```
2)  Navigate into the project directory:
```bash
cd example_app
```
3) Install the dependencies:
```bash
npm install

```
4) Start the development server:
```bash
npm run dev


```
Live link:
```bash
https://product-management-app-vz8r.onrender.com/
```
## Features
## Roles and permissions

- User
    - Can only view the product list.
    - Can search for products by name.

- Admin
    - Can add, edit, and delete products.
    - Can search for products by name.


## Product Management

Admins can:

- Add new products with details like:
    - Name
    - Price
    - Image URL
- Edit existing product details.
- Delete products from the list.

## Search Functionality

- Both User and Admin can search for products dynamically by name using the search bar.
## Technologies Used
- React: A JavaScript library for building user interfaces.
- CSS: For styling the application.
## How it Works
## Login Screen
- Users must log in as either:
    - User: View-only access to the product list.
    - Admin: Access to manage product details (add, edit, delete) and search functionality.
##Admin Panel
Admins can:

1) ## Add a new product:

    - Enter details like name, price, and image URL.
    - Save it to the product list.
2) ## Edit an existing product:

    - Update product details.
3) ## Delete a product:

    - Remove products from the list.
4) ## Search products:

    - Dynamically filter products by name using the search bar.
## User View
Users can:

1) ## View products:
    - Browse through the available product list.
2) ## Search products:
    - Filter products by name using the search bar.
## Product Display
Each product is displayed with the following details:

- Name
- Price
- Image
Admins see additional options to:

- Edit
- Delete

## Conclusion
This project is a simple and functional Product Management Application built using React. It demonstrates essential features such as user authentication, role-based functionality, and dynamic product management. Ideal for learning and customization!
