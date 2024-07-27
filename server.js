import express from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server is runngin on ${PORT}`));
