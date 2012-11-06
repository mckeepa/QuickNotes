/*! ******************************
  Handlebars helpers
  *******************************/

// debug helper
// usage: {{debug}} or {{debug someValue}}
// from: @commondream (http://thinkvitamin.com/code/handlebars-js-part-3-tips-and-tricks/)
Handlebars.registerHelper("debug", function (optionalValue) {
    console.log("Current Context");
    console.log("====================");
    console.log(this);

    if (optionalValue) {
        console.log("Value");
        console.log("====================");
        console.log(optionalValue);
    }
});


//  return the first item of a list only
// usage: {{#first items}}{{name}}{{/first}}
Handlebars.registerHelper('first', function (context, block) {
    return block(context[0]);
});



// a iterate over a specific portion of a list.
// usage: {{#slice items offset="1" limit="5"}}{{name}}{{/slice}} : items 1 thru 6
// usage: {{#slice items limit="10"}}{{name}}{{/slice}} : items 0 thru 9
// usage: {{#slice items offset="3"}}{{name}}{{/slice}} : items 3 thru context.length
// defaults are offset=0, limit=5
// todo: combine parameters into single string like python or ruby slice ("start:length" or "start,length")
Handlebars.registerHelper('slice', function (context, block) {
    var ret = "",
        offset = parseInt(block.hash.offset) || 0,
        limit = parseInt(block.hash.limit) || 5,
        i = (offset < context.length) ? offset : 0,
        j = ((limit + offset) < context.length) ? (limit + offset) : context.length;

    for (i, j; i < j; i++) {
        ret += block(context[i]);
    }

    return ret;
});




//  return a comma-serperated list from an iterable object
// usage: {{#toSentance tags}}{{name}}{{/toSentance}}
Handlebars.registerHelper('toSentance', function (context, block) {
    var ret = "";
    for (var i = 0, j = context.length; i < j; i++) {
        ret = ret + block(context[i]);
        if (i < j - 1) {
            ret = ret + ", ";
        };
    }
    return ret;
});



//  format an ISO date using Moment.js
//  http://momentjs.com/
//  moment syntax example: moment(Date("2011-07-18T15:50:52")).format("MMMM YYYY")
//  usage: {{dateFormat creation_date format="MMMM YYYY"}}
Handlebars.registerHelper('dateFormat', function (context, block) {
    console.log("=====dateFormat===============");
    if (window.moment) {
        console.log(block.hash);
        var f = block.hash.format || "MMM Do, YYYY";
        return moment(Date(context)).format(f);
    } else {
        console.log("=====moment plugin not available===============");

        return context;   //  moment plugin not available. return data as is.
    };
});


Handlebars.registerHelper('list', function (items, options) {
    var out = "<ul data-element='" + "objectName" + "'>";
    for (var i = 0, l = items.length; i < l; i++) {
        out = out + "<li>" + options.fn(items[i]) + "</li>";
    }

    return out + "</ul>"; 
});

Handlebars.registerHelper('toCase', function (string, options) {
    if (options == 'upper') { return string.toUpperCase(); }
    if (options == 'lowwer') { return string.toLowerCase(); }

    return string;
    
});

Handlebars.registerHelper('inputWithLabel', function (label, dataitem) {
    var value = null;
    if (this[dataitem])
        value = this[dataitem];
    else
        value = '';
    
    var out = "<div id='container'><label for='inputBox'>" + label + "</label><input data-element='" + dataitem + "' type='text' id='inputBox' value='" + value + "'/></div>";
    return new Handlebars.SafeString(out);

});


Handlebars.registerHelper('inputWithLabelSingleLine', function (label, dataitem) {

    console.log("Dataitem in inputWithLabelSingleLine helper: ", dataitem, this);
    var value = null;
    if (this[dataitem])
        value = this[dataitem];
    else
        value = '';
    //<div><label for='inputBox'>bbb</label><input /></div>

    var out = "<div><label for='inputBox'>" + label + "</label><input data-element='" + dataitem + "' type='text' value='" + value + "'/></div>";
    return new Handlebars.SafeString(out);

});

