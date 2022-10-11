const express = require('express')
const app = express()
const PORT = 8000

const cors = require('cors')

app.use(cors({
    origin: "http://localhost:3000",
}));
app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/
require('./config/mongoose.config');    /* This is new */
require('./routes/product.routes')(app)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))