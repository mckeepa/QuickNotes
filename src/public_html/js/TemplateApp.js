var QH_Templates = QH_Templates || {};

$(document).ready(function () {
    QH_Templates.App.start();
});



QH_Templates.App = {
    
    start:  function (){
        
        //Get the side navidation;
        var sideNav = QH_Model.Test.GetSideMenu();
        var templateSideNav = Handlebars.templates['SideMenu.handlebars']; 
        var sideNavHtml = templateSideNav(sideNav);
        console.log(sideNav ,sideNavHtml);
        $("#sideNav").html(sideNavHtml);


        // Get the data from the Model
        var patient = QH_Model.Test.GetPatient();

        // Create a View from the templates
        var templatePatientBanner = Handlebars.templates['PatientBanner.handlebars']; 
        var templateContacts = Handlebars.templates['Contacts.handlebars']; 
        var templateDetails = Handlebars.templates['PatientDetails.handlebars']; 
        
        // Fill UI
        $("#content").html(templateContacts(patient));
        $("#patient-banner").html(templatePatientBanner(patient));
        $("#patientDetails").html(templateDetails(patient.details));

        //$("#content #ContactsSave").click(QH_Model.General.PatientDetailsSave());
//        console.log("Button to click:", $("#ContactsSave").length);
        $("#ContactsSave").click(function() {
            var dataelement = $(this).data('saveelement');
            var elemet = $('*[data-element="' + dataelement +'"]').first();
            QH_Model.General.PatientDetailsSave(elemet, QH_Model.Test.GetPatient().contacts);
        });
         
        $("#detailsSave").click(function () {
            var dataelement = $(this).data('saveelement');
            var elemet = $('*[data-element="' + dataelement + '"]').first();
            QH_Model.General.PatientDetailsSave(elemet, QH_Model.Test.GetPatient().details);
        });

    }
};
