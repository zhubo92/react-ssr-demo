import routerConfig from "@/router/routerConfig";
import store from "@/store";

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

function loadData(path) {
    const elements = matchRoutes(routerConfig, path);

    const promises = [];

    for (const element of elements) {
        console.log(element.loadData)
        if(element.loadData) {
            promises.push(Promise.resolve(element.loadData(store)));
        }
    }

    return Promise.all(promises);
}

export default loadData;
