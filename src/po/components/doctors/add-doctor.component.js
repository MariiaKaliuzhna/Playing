const BaseComponent = require("./../common/base.component");

class AddDoctorComponent extends BaseComponent{
    constructor() {
        super('.e-dlg-container .new-doctor-dialog');
    }
}

module.exports = AddDoctorComponent;