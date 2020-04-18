import express from "express";

const videoRouter = express.Router();
videoRouter.get("/", (req, res) => res.send("Videos"));
export default videoRouter;
