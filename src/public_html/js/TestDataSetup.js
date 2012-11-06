
QH_Model.Test = QH_Model.Test || {

    GetSideMenu: function () {
        var sideMenus = new QH_Model.Navigation.SideMenus();
        
        var items = [];
        items.push(new QH_Model.Navigation.SideMenu(false, "Cochlear Program, Audiology", "Cochlear"));
        items.push(new QH_Model.Navigation.SideMenu(false, "Diabetes & Endochrinology - Bisphosphonate, Audiology", "Bisphosphonate"));
        items.push(new QH_Model.Navigation.SideMenu(false, "Diabetes & Endochrinology - Diabetes", "Diabetes"));
        items.push(new QH_Model.Navigation.SideMenu(false, "Gastroenterology", "Gastroenterology"));
        items.push(new QH_Model.Navigation.SideMenu(false, "Metabolic Medicine", "MetabolicMedicine"));
        items.push(new QH_Model.Navigation.SideMenu(false, "Neuro & EMU", "EMU"));
        items.push(new QH_Model.Navigation.SideMenu(false, "Palliative Care", "Palliative"));
        items.push(new QH_Model.Navigation.SideMenu(false, "Qld Childrens Cancer Centre", "CancerCentre"));
        items.push(new QH_Model.Navigation.SideMenu(false, "Rehab- CP Hip Surveillance", "CPHipSurveillance"));
        items.push(new QH_Model.Navigation.SideMenu(false, "Rehab - Outreach", "Outreach"));
        items.push(new QH_Model.Navigation.SideMenu(false, "Rehab - Minimum Paitent", "MinimumPaitent"));
        items.push(new QH_Model.Navigation.SideMenu(false, "Speech Pathology", "Speech"));

        sideMenus.menuGroups.push(new QH_Model.Navigation.MenuGroup("Systems", items));
         
        items = [];
        items.push(new QH_Model.Navigation.SideMenu(false, "Acute Paint Service", "AcutePaintService"));
        items.push(new QH_Model.Navigation.SideMenu(false, "Gait Lab", "GaitLab"));
        items.push(new QH_Model.Navigation.SideMenu(false, "Poisons Info Centre", "PoisonsInfoCentre"));
        items.push(new QH_Model.Navigation.SideMenu(false, "Surgical Services", "SurgicalServices"));
        items.push(new QH_Model.Navigation.SideMenu(false, "Gastro & Pharmacy", "GastroPharmacy"));
        items.push(new QH_Model.Navigation.SideMenu(false, "Oncology", "Oncology"));

        sideMenus.menuGroups.push(new QH_Model.Navigation.MenuGroup("Other candidate systems", items));


        return sideMenus;
    },

    GetPatient: function (root, extension) {

        var id = new QH_Model.General.PatientIdentifers(root, extension);
        id.otherIdentifers = [new QH_Model.General.PatientIdentifers('aaa', '12345')];

        var p = new QH_Model.General.Patient();
        p.firstName = "Paul";
        p.lastName = "McKee";
        p.dateOfBirth = Date('01-Nov-2001');
        p.identifers.push(new QH_Model.General.PatientIdentifers("aa", "1234"));
        p.contacts = [
            {
                firstName: "Michelle", 
                PhoneNumbers: [{ type: "mobile", value: "123456789" }, { type: "home", value: "223456789" }]
            },
            { firstName: "Paul" },
            { firstName: "Dave" },
            { firstName: "Michael" },
            { firstName: "Mark" },
            { firstName: "Nurit" },
            { firstName: "Jamie" }];
        p.details.MedicareNumber = '1234567890098-2';
        p.details.MobilePhone = '0418274757';
        p.details.HomePhone = '0729347376';
        p.details.email = 'john.smith@company.com';

        return p;
    }
};