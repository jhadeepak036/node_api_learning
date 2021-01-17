const express = require("express");
require('dotenv').config();

const port = process.env.PORT;


const server = express();

server.listen(port, () => {
    console.log(`Server is running on port  ${port}`);
});
