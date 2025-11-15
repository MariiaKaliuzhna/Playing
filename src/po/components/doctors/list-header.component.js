const BaseComponent = require("./../common/base.component");

class ListHeaderComponent extends BaseComponent{
    constructor() {
        super(".specialization-types");
    }

    get AddNewDoctorBtn() {
        return this.rootEl.$(".e-normal");
    }
}

module.exports = ListHeaderComponent;