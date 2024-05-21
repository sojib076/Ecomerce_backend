import express, { Request, Response } from "express";
import { ProductRoutes } from "./app/modules/products/products.Routes";
import { OrderRoutes } from "./app/modules//order/order.Routes";
// import { MovieRoutes } from "./modules/movies/movies.route";
import cors from "cors";

const app = express();
app.use(cors());


//parsers
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send(" Please hit the route api/orders or products to see data!");
});

app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).send({
    success: false,
    message: "Route not found",
  });
});

export default app;
