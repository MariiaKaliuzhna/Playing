const BaseComponent = require("./base.component");

class HeaderComponent extends BaseComponent{
    constructor() {
        super(".planner-header");
    }

    get logOutBtn() {
        return this.rootEl.$(".logout-icon-container");
    }
}

module.exports = HeaderComponent;