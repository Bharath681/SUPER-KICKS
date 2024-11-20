Step 1: Clone the Repository
If you have a Git client installed, you can clone the project repository using the following command:

git clone https://github.com/yourusername/product-display-app.git
cd product-display-app


Step 2: Set Up the Backend
Navigate to the server directory:




cd BACKEND
Install backend dependencies: Run the following command to install the necessary packages:


npm install
Set Up Environment Variables: Create a .env file in the server directory to store your environment variables. Add the following content to the file:


MONGODB_URI=mongodb://localhost:27017/product-display
PORT=5000
(Adjust the MONGODB_URI if you are using a different MongoDB setup.)

Pre-Populate the Database: You may need to create a script to pre-populate the database with sample products. You can do this using a separate script or by adding sample data directly in your MongoDB database using a GUI tool like MongoDB Compass.

Start the Backend Server: Run the following command to start the backend server:




node server.js
The server should now be running on http://localhost:5000.

Step 3: Set Up the Frontend
Navigate to the client directory:



Install frontend dependencies: Run the following command to install the necessary packages:


npm install
Start the Frontend Application: Run the following command to start the React application:


npm start
The application should now be running on http://localhost:3000.

Step 4: Access the Application
Open your web browser and navigate to http://localhost:3000. You should see the product display application, showcasing the list of products fetched from the backend.
