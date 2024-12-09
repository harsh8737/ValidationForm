# Validation Form Formik React App

This project is a simple React application built with TypeScript. It includes two forms: Sign Up and Login, demonstrating clean coding principles, accessibility features, and good user experience (UX) practices. The project uses Formik for form handling and validation and Yup for schema-based validation.

# Features

## Sign Up Form:

Validates user input with meaningful error messages.
Ensures password confirmation matches the password.
Includes ARIA roles and labels for accessibility.

## Login Form:

"Remember Me" checkbox to save email to local storage.
Displays success messages on successful submission.

## Common Features:

Clean architecture and separation of concerns.
Simple, responsive design with plain CSS.
Accessibility-friendly with proper ARIA roles.

# File Structure

src/
├── components/
│   ├── LoginForm.tsx        
│   ├── SignUpForm.tsx       
├── utils/
│   ├── validations.ts      
├── App.tsx                 
├── index.tsx              
├── styles.css              

# Design Choices

## Formik and Yup:

Formik simplifies form state management, while Yup provides a robust validation mechanism.

## Accessibility:

Proper aria-required attributes and labels are added to improve usability for screen readers.

## Local Storage:

The "Remember Me" feature persists the user's email securely in local storage.

## CSS Design:

A lightweight and responsive CSS is used to avoid unnecessary dependencies.


Here’s a comprehensive README.md file for your project:

## Formik React App

This project is a simple React application built with TypeScript. It includes two forms: Sign Up and Login, demonstrating clean coding principles, accessibility features, and good user experience (UX) practices. The project uses Formik for form handling and validation and Yup for schema-based validation.

## Features
Sign Up Form:

Validates user input with meaningful error messages.
Ensures password confirmation matches the password.
Includes ARIA roles and labels for accessibility.
Login Form:

"Remember Me" checkbox to save email to local storage.
Displays success messages on successful submission.
Common Features:

Clean architecture and separation of concerns.
Simple, responsive design with plain CSS.
Accessibility-friendly with proper ARIA roles.
Getting Started
Follow these steps to run the project locally:

Prerequisites
Node.js (v14 or later)
npm or yarn
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/formik-react-app.git
cd formik-react-app
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open http://localhost:3000 in your browser to view the app.

# File Structure

src/
├── components/
│   ├── LoginForm.tsx         # Login form component
│   ├── SignUpForm.tsx        # Sign-up form component
├── utils/
│   ├── validations.ts        # (Optional) Validation schemas for forms
├── App.tsx                   # Main component to toggle forms
├── index.tsx                 # Entry point of the app
├── styles.css                # Custom styles


# Design Choices

## Formik and Yup:

Formik simplifies form state management, while Yup provides a robust validation mechanism.

## Accessibility:

Proper aria-required attributes and labels are added to improve usability for screen readers.

##Local Storage:

The "Remember Me" feature persists the user's email securely in local storage.

## CSS Design:

A lightweight and responsive CSS is used to avoid unnecessary dependencies.

# Assumptions & Limitations

## Email Validation:

The email validation checks for a valid format (e.g., example@domain.com) but does not verify the domain or existence.

## Password Strength Indicator:
Not implemented in this version.

## No Third-Party UI Libraries:
Only plain CSS is used for styling to meet project constraints
