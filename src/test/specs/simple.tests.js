//const DashboardPage = require("./../../po/pages/dashboard.page");
//const DoctorsPage = require("./../../po/pages/doctors.page");
//const dashboardPage = new DashboardPage();
//const doctorsPage = new DoctorsPage();

const { pages } = require("./../../po");

describe ("Doctors page", () => {
    beforeEach (async () => {
        await pages("dashboard").open();
    });

    it ("Check the page title", async () => {
        await expect(browser).toHaveTitle("Appointment Planner - Syncfusion Angular Components Showcase App");
    });

    it ("Open modal window for adding a doctor", async () => {
        await pages("dashboard").sideMenu.item("doctors").click();
        await pages("doctors").listHeader.AddNewDoctorBtn.click();
        await browser.pause(1000);
        await pages("doctors").addDoctor.rootEl.isDisplayed();
    });

    it ("Add a new doctor", async () => {
        await pages("dashboard").sideMenu.item("doctors").click();
        await pages("doctors").listHeader.AddNewDoctorBtn.click();
        await pages("doctors").addDoctor.rootEl.waitForDisplayed();

        await pages("doctors").addDoctor.input("name").setValue("John Doe");
        await pages("doctors").addDoctor.input("mobile").setValue("0000000000");
        await pages("doctors").addDoctor.input("email").setValue("whatever@gmail.com");
        await pages("doctors").addDoctor.input("education").setValue("Basic");
        await pages("doctors").addDoctor.input("designation").setValue("Test");
        await browser.pause(1500);

        await pages("doctors").addDoctor.saveBtn.click();
        await pages("doctors").addDoctor.rootEl.waitForDisplayed({ reverse: true });

        await expect(pages("doctors").specialistCard(8).name).toHaveText("Dr. John Doe");
        await expect(pages("doctors").specialistCard(8).education).toHaveText("Basic", { ignoreCase : true});
    });

    it ("Close modal window for adding doctors", async () => {
        await pages("dashboard").sideMenu.item("doctors").click();
        await pages("doctors").listHeader.AddNewDoctorBtn.click();
        await pages("doctors").addDoctor.rootEl.waitForDisplayed();

        await pages("doctors").addDoctor.closeBtn.click();
        await pages("doctors").addDoctor.rootEl.waitForDisplayed({ reverse: true });
    });
});