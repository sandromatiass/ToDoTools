import express from "express";

const app = express();

const PORT = 8000;

app.listen(PORT, () => console.log(`Your server is running sucessfully on PORT ${PORT}`));