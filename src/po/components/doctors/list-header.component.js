class ListHeaderComponent {
    get rootEl() {
        return $(".specialization-types");
    }

    get AddNewDoctorBtn() {
        return this.rootEl.$(".e-normal");
    }
}

module.exports = ListHeaderComponent;