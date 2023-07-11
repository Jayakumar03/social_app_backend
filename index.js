const express = require("express") // Import the express framework. So that we can start using it 
const format  = require("date-format") // Imported date format package form npm

// Creates an Express application. 
//  The express() function is a top-level function exported by the express module.
const app = express() 


/*Sawgger ui pacakage */
const swaggerUi = require("swagger-ui-express")
const YAML = require("yamljs")
const swaggerDocument = YAML.load("./swagger.yaml")

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))



// We are telling that app should use port 3000. if port is not present in env file
const port = process.env.port || 3000  


// Get request for home page
app.get("/", (req, res) => {
// get Takes two parameters 
// 1. route =>  "/" means home page  
// 2. callback function which in turn has two parameters res => responses, req => request
    

 // To send data to user use res.send(data)
 // Status is used send responses code or status
    res.status(200).send("<h1> Hello world !</h1>");


    


})



// Get request for instagram
app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        userName : "jayakumar",
        age : 25,
        followers : 250,
        follows : 50,
        date : format.asString("dd[mm]- hh:mm:ss", new Date()) // used to format data 


    }

        res.status(200).json(instaSocial);
    
    
    
})
     

// Get request for facebook

app.get("/api/v1/facebook", (req, res) => {
    const instaSocial = {
        userName : "jayakumar",
        age : 25,
        followers : 250,
        follows : 50,
        date : format.asString("dd[mm]- hh:mm:ss", new Date())


    }

        res.status(200).json(instaSocial);
    
    
    
})


// Get request for twitter
app.get("/api/v1/twitter", (req, res) => {
    const instaSocial = {
        userName : "jayakumar",
        age : 25,
        followers : 250,
        follows : 50,
        date : format.asString("dd[mm]- hh:mm:ss", new Date())


    }

        res.status(200).json(instaSocial);
    
    
    
})

// Custom route 
app.get("/api/v1/:id/:token", (req,res) => {
    // : denote parameter form request, id and token is the value needs to obtained
    console.log(req.params.id)
    console.log(req.params.token)
    res.status(200).json({param :req.params.token})
    res.status(200).json({param :req.params.id})


})


app.listen(port, () => {
    // app is the application name
    // listen is provide by express to listen to the port. It accept two parameters 1. port 2. callback function 
    console.log(`Server is running at port ${port}`)
})


