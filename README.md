# Full Stack E-commerce Website using MERN Stack technology
Hello! My name is Vaishnavi Pandey, I am a 4th Year UG student currently studying at Indian Institute of Technology, Kharagpur. I have developed this full stack web development project for implementing an E-commerce website for online shopping. The tech stack used is ReactJS, NodeJS, ExpressJS and MongoDB (MERN stack).

# Install Dependencies
There are two folders in the project, one for backend and other for the frontend
. Install dependencies for each separately using following commands starting from the root directory on command terminal 
**For Backend** - `npm i`
**For Frontend** - `cd frontend` ` npm i`

## Env Variables
The application is controlled by the config.env file in backend/config directory (Not present by default). Create a config.env file in backend/config directory and add the following essential environment variables in order to use the app.

**Essential Variables**
PORT= (Type: Number, Port number for backend server)
DB_URI = (Type: String, Database URL -> for connecting to the database)
STRIPE_API_KEY= (Type: String, API KEY of the stripe account, required for handling online payments)
STRIPE_SECRET_KEY= (Type: String, SECRET KEY of the stripe account)
JWT_SECRET= (Type: String, Json Web Token Secret key for login authentication)
JWT_EXPIRE= (Type: String, Json Web Token Expire time for login validity)
COOKIE_EXPIRE= (Type: String, Cookie expire time)
SMPT_SERVICE = (Type: String, name of the SMTP service (eg. gmail))
SMPT_MAIL= (Type: String, mail id from which mails will be sent to the users)
SMPT_PASSWORD= (Type: String, password of the mail id used for SMTP service)
SMPT_HOST= (Type: String, Host name for the SMTP service)
SMPT_PORT= (Type: Number, Port Number for the SMTP service)
CLOUDINARY_NAME = (Type: String, name of the cloudinary account for uploading and managing images in the app)
CLOUDINARY_API_KEY = (Type: String, API KEY of your cloudinary account)
CLOUDINARY_API_SECRET = (Type: String, API SECRET of your cloudinary account)
#
