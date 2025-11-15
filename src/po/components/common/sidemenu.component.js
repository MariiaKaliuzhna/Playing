const BaseComponent = require("./base.component");

class SideMenuComponent extends BaseComponent {
    constructor() {
        super('#plannerSiderBar');
    }

    get name() {
        return this.rootEl.$("p.name");
    }

    item(param) {
        const selectors = {
            dashboard: ".dashboard",
            schedule: ".calendar",
            doctors: ".doctors"
        }
        return this.rootEl.$(selectors[param.toLowerCase()]);
    }
}

module.exports = SideMenuComponent;