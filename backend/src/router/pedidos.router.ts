import { Router } from "express";
import PedidosController from "../controllers/pedidos.controller.js";

class PedidosRouter {

    public router: Router;
    private PedidosController: PedidosController;

    constructor() {
        this.router = Router();
        this.PedidosController = new PedidosController();
        this.config();
    }

    private config = (): void => {
        this.router.post('/:id_user/pedidos', this.PedidosController.generarPedido);
        this.router.get('/:id_user/pedidos', this.PedidosController.getUserPedidos);
        this.router.get('/:id_user/pedidos/:id_pedido', this.PedidosController.getPedidoById);
    }

}

export default PedidosRouter;