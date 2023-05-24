export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  routeTo(path) {
    window.history.pushState({}, "", path);
    this.handle();
  }

  goToHome() {
    window.history.pushState({}, "", "/");
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
        document.body.setAttribute("data-page", pathname.substring(1));
      });
  }
}
