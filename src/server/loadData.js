import routerConfig from "@/router/routerConfig";

function matchRoutes(routes, path) {
    const list = [];
    function getRoutesElement(routes, path) {
        routes.forEach(route => {
            if(route.path === path) list.push(route.element.type);
            if(route.children && route.children.length) getRoutesElement(route.children);
        });
    }

    getRoutesElement(routes, path);
    return list;
}

function loadData(path, store) {

    const elements = matchRoutes(routerConfig, path);

    const promises = [];

    for (const element of elements) {
        if(element.loadData) {
            promises.push(Promise.resolve(element.loadData(store)));
        }
    }

    return Promise.all(promises);
}

export default loadData;
