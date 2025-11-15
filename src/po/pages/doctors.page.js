const { ListHeaderComponent, AddDoctorComponent } = require("./../components");
const BasePage = require("./base.page");

class DoctorsPage extends BasePage{
    constructor() {
        super("/showcase/angular/appointmentplanner/#/doctors");
        this.listHeader = new ListHeaderComponent();
        this.addDoctor = new AddDoctorComponent();
    }
}

module.exports = DoctorsPage;