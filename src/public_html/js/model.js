var QH_Model = QH_Model || {};

QH_Model.Navigation = QH_Model.Navigation || {
    /* START DATA MODELS */


    SideMenus: function () {
        this.menuGroups = [];
        this.actice = '';
    }, 

    MenuGroup: function (name, items) {
        this.items = items;
        this.name = name;
    },

    SideMenu: function (active, name, id) {
        this.active = active;
        this.name = name;
        this.id = id;
    },
       

    
};


