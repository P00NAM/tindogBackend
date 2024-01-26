const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://singhyashika1104:"+encodeURIComponent('Poonam#4321')+"@cluster0.36vy8o7.mongodb.net/?retryWrites=true&w=majority", 
{ autoIndex:false, useNewUrlParser:true, useUnifiedTopology:true
}).then(() => {console.log("connection successfully");
}).catch((err) => {
    console.log(err); 
})
