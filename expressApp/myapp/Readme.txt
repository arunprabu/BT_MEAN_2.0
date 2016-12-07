Express app
============
Step 1: npm install express-generator -g (here https://expressjs.com/en/starter/generator.html)
Step 2: express myapp
Step 3: cd myapp & npm install
Step 4: set DEBUG=myapp:* & npm start
Step 5: Access localhost:3000 - Now express app is running here 
------------------------------
A bit about files
a)  bin/www -- has codes about server and the app code to run on server and the port to listen
b)  app.js -- in the root, will be executed whenever we navigate to any path in the app. 
    Note: folders such as views, routes are accessible by the server. 
            'public' folder is accessible for the browser
c)  routes/index.js -- has routing for root path
    routes/users.js -- has routing for /users path

HTTP Methods
============
    GET -> to get a resource
    POST -> to save some data in the backend
    PATCH -> updating existing resource
    PUT -> replacing entire existing resource
    DELETE -> deleting an existing resource

Example
=========
    http://example.com/product/123?referal=amazon

    http://example.com/product -> Request body
    123 -> Request Params
    referal=amazon -> Query Params

Let's Build Note taking App, where notes can be added by user, edited and deleted. 

Now, it is time to setup DB
~~~~~~~~~~~~~~~~~~~~~~~~~~~

MongoDB
==========
    Step 1: Download and Install MongoDB
    Step 2: Setup MongoDB in windows (https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#set-up-the-mongodb-environment)
    Step 3: > mongod (Run the DB Server)
    Step 4: > mongo (run the Shell to interact with the db)
            Example queries
            ----------------
            show collections
            use my_db
    Step 5: Introducing Mongoose - Mongo Node Client
            Helps us in schemas & models, validations, some more db operations
            We don't need to write queries to interact with db. instead this will do it for us. 

    Step 6: Install mongoose > npm install --save mongoose
    Step 7: Configuration is here
            in app.js file,
                var mongoose = require('mongoose');
                mongoose.connect("localhost:27017/my_db"); //it will create a db for you or else use one if already there.
    Step 7: create a folder 'models' in root 
            create a file named 'notes.js' 
                add the following in it
                ~~~~~~~~~~~~~~~~~~~
                var mongoose = require('mongoose');
                var Schema = mongoose.Schema; // schema is the class; it is the blueprint of db.

                //create an object Now
                var schema = new Schema({
                    notes: { type: String, required: true },
                    user: {type: Schema.Types.ObjectID}
                })
                module.exports = mongoose.model("Message", schema); 

                now, replicate the same for models/user.js. but with different schema. look at the file.
                and also look at updated app.js file. and routes/index.js file as well.


Step 8: Add, the following in models/user.js
            var mongoose = require('mongoose');
            var Schema = mongoose.Schema;
            var mongooseUniqueValidator = require('mongoose-unique-validator');

            var schema = new Schema({
                firstName: {type: String, required: true},
                lastName: {type: String, required: true},
                password: {type: String, required: true},
                email: {type: String, required: true, unique: true},
                messages: [{type: Schema.Types.ObjectId, ref: 'Notes'}]
            });

            schema.plugin(mongooseUniqueValidator);

            module.exports = mongoose.model('User', schema);