
 RESTful API Project (Student API + Blog API)
 Project Overview

This project consists of two RESTful APIs built using Node.js, Express, and MongoDB:

Student API – Manages student records (CRUD operations)
Blog API – Handles posts and comments with relationships between collections

The project demonstrates backend development concepts such as:

RESTful routing
MongoDB CRUD operations
Schema design with relationships
API testing using Postman
🛠️ Tech Stack
Node.js
Express.js
MongoDB (Mongoose ODM)
Postman (for testing)
dotenv (environment variables)
📁 Project Structure
project-root/
│
├── models/
│   ├── studentModel.js
│   ├── postModel.js
│   └── commentModel.js
│
├── routes/
│   ├── studentRoutes.js
│   └── blogRoutes.js
│
├── controllers/
│   ├── studentController.js
│   └── blogController.js
│
├── config/
│   └── db.js
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
🚀 Installation & Setup
1. Clone the repository
git clone <your-repo-link>
cd <project-folder>
2. Install dependencies
npm install
3. Create .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string
4. Run the server
npm start

or

node server.js
📌 API Endpoints
🎓 Student API
Method	Endpoint	Description
GET	/students	Get all students
GET	/students/:id	Get student by ID
POST	/students	Create new student
PUT	/students/:id	Update student
DELETE	/students/:id	Delete student
📝 Blog API
Posts
Method	Endpoint	Description
GET	/posts	Get all posts
POST	/posts	Create post
GET	/posts/:id	Get post by ID
DELETE	/posts/:id	Delete post
Comments (Relationship with Posts)
Method	Endpoint	Description
POST	/posts/:id/comments	Add comment to post
GET	/posts/:id/comments	Get comments of a post
🔗 Database Relationships
A Post can have multiple Comments
Comments are linked to Posts using postId reference
🧪 Testing

Use Postman to test all API endpoints:

Send JSON data in request body
Check responses in JSON format
📦 Important Notes
❌ node_modules/ is not included in submission
✔ Run npm install to regenerate dependencies
✔ Ensure MongoDB is running or Atlas connection is active
👨‍🎓 Learning Outcomes
Building REST APIs with Express
Working with MongoDB and Mongoose
Understanding one-to-many relationships
API testing and debugging
📌 Author
Mehreen Fatima
Course: Web Development / Backend Development
