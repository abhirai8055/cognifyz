# cognifyz
cognifyz internship tasks


Task 1: HTML Structure and Basic Server Interaction
Overview:
Task 1 focuses on introducing the concept of server-side rendering and basic form submissions. The goal is to create a simple HTML form, set up an Express.js server to handle form submissions, and dynamically generate HTML pages using a templating engine like EJS.

Specifications:
Step 1: HTML Structure with Forms
Objective: Create an HTML structure containing forms for user input.
Details: Design an HTML page with form elements to capture user data. Include input fields for name, email, address, phone number, and country.
Step 2: Basic Server Setup
Objective: Set up a basic Express.js server.
Details: Create an Express.js server that serves static HTML files. Use express.static middleware to serve the HTML file created in Step 1.
Step 3: Server-side Endpoints for Form Submissions
Objective: Create server-side endpoints to handle form submissions.
Details: Define a route in the Express.js server to handle POST requests sent from the form. Extract form data from the request body and process it accordingly. Respond to the client with an appropriate message.
Step 4: Server-side Rendering with EJS
Objective: Use server-side rendering (e.g., EJS) to dynamically generate HTML.
Details: Set up EJS as the view engine for Express.js. Create an EJS template to display a success message and submitted form data. Render this template dynamically when a form is successfully submitted.

