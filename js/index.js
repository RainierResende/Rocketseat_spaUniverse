import { Router } from "./router.js";

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploration", "/pages/exploration.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
window.goToHome = () => router.goToHome();
window.route = (path) => router.routeTo(path);

