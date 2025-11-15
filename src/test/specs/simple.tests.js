describe ("Doctors page", () => {
    beforeEach (async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
    });

    it ("Check the page title", async () => {
        await expect(browser).toHaveTitle("Appointment Planner - Syncfusion Angular Components Showcase App");
    });

    it ("Open modal window for adding a doctor", async () => {
        await $("div[routerLink='/doctors']").click();
        const addDoctorBtn = await $(".specialization-types .e-normal");
        await addDoctorBtn.click();
        await browser.pause(1000);
        await $('.e-dlg-container .new-doctor-dialog').isDisplayed();
    });

    it ("Add a new doctor", async () => {
        await $("div[routerLink='/doctors']").click();
        const addDoctorBtn = await $(".specialization-types .e-normal");
        await addDoctorBtn.click();
        await $('.e-dlg-container .new-doctor-dialog').waitForDisplayed();

        await $("input[name='Name']").setValue("John Doe");
        await $("input[name='Mobile']").setValue("0000000000");
        await $("input[name='Email']").setValue("whatever@gmail.com");
        await $("input[name='Education']").setValue("Basic");
        await $("input[name='Designation']").setValue("Test");
        await browser.pause(1500);

        await $(".e-footer-content button.e-primary").click();
        await $('.e-dlg-container .new-doctor-dialog').waitForDisplayed({ reverse: true });

        await expect($("#Specialist_8").$(".name")).toHaveText("Dr. John Doe");
        await expect($("#Specialist_8").$(".education")).toHaveText("Basic", { ignoreCase : true});
        await expect($("#Specialist_8").$(".specialization-text")).toHaveText("Test");
        await expect($("#Specialist_8").$(".experience .specialization-text")).toHaveText("1+ years");
    });

    it ("Close modal window for adding doctors", async () => {
        await $("div[routerLink='/doctors']").click();
        const addDoctorBtn = await $(".specialization-types .e-normal");
        await addDoctorBtn.click();
        await $('.e-dlg-container .new-doctor-dialog').waitForDisplayed();

        await $("button[title='Close']").click();
        await $('.e-dlg-container .new-doctor-dialog').waitForDisplayed({ reverse: true });
    });
});