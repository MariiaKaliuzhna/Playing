const DashboardPage = require("./dashboard.page");
const DoctorsdPage = require("./doctors.page");

/**
 * @param name {'dashboard' | 'doctors' } 
 * @returns {DashboardPage | DoctorsdPage}
 */

function pages(name) {
    const items = {
        dashboard: new DashboardPage(),
        doctors: new DoctorsdPage()
    }
    return items[name.toLowerCase()];
}

module.exports = {
    DashboardPage,
    DoctorsdPage,
    pages
}