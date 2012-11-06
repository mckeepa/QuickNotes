var fs = require("fs"),
    path = require("path");


DataStorage = {
    createFilePath: function (group, key) {
        var dataPath = 'data';
        var filename = '';
        filename = path.join(dataPath, group);
        
        fs.mkdir(dataPath);
        fs.mkdir(filename);

        filename = path.join(filename, key + '.json');
        return filename;
    },

    store: function(group, key, value) {

        var filename = this.createFilePath(group, key);
        var data = JSON.stringify(value);
        
        fs.writeFileSync(filename, data);
        console.log('Data saved successfully.', group, key, value);
   
        return 4;
    },

    read: function (group, key) {

        var filename = this.createFilePath(group, key);
        var data = fs.readFileSync(filename);
        var myObj = JSON.parse(data);
        return myObj;

    },

    deleteKey: function (group, key) {
        var filename = this.createFilePath(group, key);
        fs.rmdir(filename);
    },

    deleteGroup: function (group) {
        var groupPath = path.join('data', group);
        fs.rmdir(groupPath);

    }
};

module.exports = DataStorage;

