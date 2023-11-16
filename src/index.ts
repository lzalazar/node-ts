import express from "express";
import cors from "cors";
import { healtRouter } from "./infra/web/routes";

const app = express();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH", "OPTIONS"],
    })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/v1', healtRouter)
app.listen(5000, () => {
    console.log(`Server running on port: 5000 🚀`);
});