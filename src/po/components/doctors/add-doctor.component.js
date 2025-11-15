const BaseComponent = require("./../common/base.component");

class AddDoctorComponent extends BaseComponent{
    constructor() {
        super('.e-dlg-container .new-doctor-dialog');
    }
    /**
     * 
     * @param name { 'name' | 'mobile' | 'email' | 'education' | 'designation' } 
     * @returns {*}
     */

    input(name) {
        const selectors = {
            name: "input[name='Name']",
            mobile: "input[name='Mobile",
            email: "input[name='Email']",
            education: "input[name='Education']",
            designation: "input[name='Designation']"

        }
        return this.rootEl.$(selectors[name.toLowerCase()]);
    }

    get saveBtn() {
        return this.rootEl.$(".e-footer-content button.e-primary");
    }

    get closeBtn() {
        return this.rootEl.$("button[title='Close']");
    }
}

module.exports = AddDoctorComponent;