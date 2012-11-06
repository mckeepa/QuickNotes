var QH_Model = QH_Model || {};

QH_Model.Mapper = QH_Model.Mapper || {

    IsContainer: function (source) {

        var containerType = $(source).attr('data-type');
        //console.log("IsContainer", containerType);
        if (containerType) {
            //console.log("IsContainer - 2", containerType);
            return containerType;
        } else {
            //console.log("NOT A CONTAINER");
            return null;
        }
    },



    Map: function (source, tagert) {
//        console.log("Source", source);
//        console.log("Target", tagert);
//        console.log("All Element with data-element", $(source).find('[data-element]'));

        var objectOut = tagert; //new Object();

        var containerType = $(source).attr('data-type');

        if (containerType == "container") {

//            console.log("Container", containerType);
//            console.log("Container Source", source);
            objectOut = this.mapObject(source, tagert);
            
        } else if (containerType == "list") {

//            console.log("List", containerType, source);
            objectOut = this.mapArray(source, tagert);

        };

        console.log("map output", objectOut);
        return objectOut;
        
    },
    
    mapArray: function (source, tagert) {

        var out = [];
        var elementToStore = $(source).children('[data-element]');
  //      console.log("mapArray - children", elementToStore, elementToStore.length);
        var mapper = this;
        
        elementToStore.each(function (index, value) {
//            console.log("mapArray -  0", value, $(this).attr('data-element'));
            value = $(this);
            var element = new Object();
           // console.log("mapArray -  value", value);
            element = mapper.mapObject(value, element);

            //            var propertyName = $(this).attr('data-element');
            //            element[propertyName] = $(this).val();

            //console.log("mapArray -  1", element, this);
            out.push(element);
        });
        return out;
    },

    mapObject: function (source, tagert) {

        
        var mapper = this;
        //var root = new Object();
        var out = tagert; //new Object();
        var elementToStore = $(source).find('[data-element]');
        
        
        elementToStore.each(function (index) {
            var propertyName = $(this).attr('data-element');
            if (mapper.IsContainer(this)) {
                console.log("mapObject -  2", this);
                // is complex object, get map to do the work.
                out[propertyName] = this.Map(this);
            } else {
                console.log("mapObject -  Set Property", out, this);
                // is simple field element, set nthe value here. 
                out[propertyName] = $(this).val();
            }

        });
        //console.log("mapObject -  3", out);

        return out;
    }

};


QH_Model.General = QH_Model.General || {
    /* START DATA MODELS */


    /* Patient Identifers, and Other Identifiers.
       The Identifer Root is where the Id comes from (e.g. The Hospital HIC code.
       The Extension is the identifier from that context */
    PatientIdentifers: function(root, extension) {
        this.root = root;
        this.extension = extension;
        this.otherIdentifers = [];
    },

    Contacts:  function (){},

    PatientDetails: function () {
        this.MedicareNumber = '';
        this.MobilePhone = '';
        this.HomePhone = '';
        this.email = '';
    },


    Person: function () {
        this.firstName = '';
        this.lastName = '';
        this.dateOfBirth = new Date(0);
        this.identifers = [new QH_Model.General.PatientIdentifers('aaa', '12345')];
        
    },
    
     Patient: function (firstname, lastname,dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateOfBirth = dob;
        this.identifers = [new QH_Model.General.PatientIdentifers('aaa', '12345')];
        this.details = new QH_Model.General.PatientDetails();
     },
    
    /* Ends Data Models */


    /* Save Functions */    
     PatientDetailsSave: function (patientDetailsHtml, patientDetails) {
         var updatedpatientDetails = QH_Model.Mapper.Map(patientDetailsHtml, patientDetails);
         console.log(updatedpatientDetails);
     }
    
};


