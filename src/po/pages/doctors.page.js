const ListHeaderComponent = require("./../components/doctors/list-header.component");
const AddDoctorComponent = require("./../components/doctors/add-doctor.component");

class DoctorsPage {
    constructor() {
        this.listHeader = new ListHeaderComponent();
        this.addDoctor = new AddDoctorComponent();
    }

    async open() {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors");
    }
}

module.exports = DoctorsPage;