(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};

  Handlebars.partials = Handlebars.templates;
templates['Contacts.handlebars'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "  <li data-element=\"contact\">    <input type=\"text\" data-element=\"firstName\" data-refSet=\"postcode\" data-refSetFilter=\"qld\" placeholder=\"Contacts First Name\" value=\"";
  foundHelper = helpers.firstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"/>              <input type=\"text\" data-element=\"lastname\" placeholder=\"Contacts LAst Name\" value=\"";
  foundHelper = helpers.lastName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"/>            </li>  ";
  return buffer;}

  buffer += "﻿<div data-element=\"contacts\" data-type=\"list\">  <h2>Contacts</h2>  ";
  stack1 = depth0.contacts;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "  <input id=\"ContactsSave\"         type=\"button\"         data-saveElement=\"contacts\"         value=\"Save\" /></div>";
  return buffer;});
templates['PatientBanner.handlebars'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "﻿<div class=\"entry\">  ";
  foundHelper = helpers.debug;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.debug; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "  <h2>";
  stack1 = depth0.lastName;
  foundHelper = helpers.toCase;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, "upper", {hash:{}}) : helperMissing.call(depth0, "toCase", stack1, "upper", {hash:{}});
  buffer += escapeExpression(stack1) + ", ";
  foundHelper = helpers.firstName;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "  (Age:7 years) ";
  stack1 = depth0.dateOfBirth;
  stack2 = {};
  stack2['format'] = "DD-MMM-YYYY";
  foundHelper = helpers.dateFormat;
  stack1 = foundHelper ? foundHelper.call(depth0, stack1, {hash:stack2}) : helperMissing.call(depth0, "dateFormat", stack1, {hash:stack2});
  buffer += escapeExpression(stack1) + " </h2>  <p>Patient summary information, I'm not sure what to put here yet. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>  <p><a class=\"btn btn-primary btn-large\">Details &raquo;</a></p></div>";
  return buffer;});
templates['PatientDetails.handlebars'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "﻿<div data-element=\"details\" data-type=\"container\">   <h2>Details</h2>     ";
  foundHelper = helpers.inputWithLabel;
  stack1 = foundHelper ? foundHelper.call(depth0, "Medicare #", "medicareNumber", {hash:{}}) : helperMissing.call(depth0, "inputWithLabel", "Medicare #", "medicareNumber", {hash:{}});
  buffer += escapeExpression(stack1) + "    ";
  foundHelper = helpers.inputWithLabel;
  stack1 = foundHelper ? foundHelper.call(depth0, "Mobile", "MobilePhone", {hash:{}}) : helperMissing.call(depth0, "inputWithLabel", "Mobile", "MobilePhone", {hash:{}});
  buffer += escapeExpression(stack1) + "    ";
  foundHelper = helpers.inputWithLabel;
  stack1 = foundHelper ? foundHelper.call(depth0, "Home Phone", "HomePhone", {hash:{}}) : helperMissing.call(depth0, "inputWithLabel", "Home Phone", "HomePhone", {hash:{}});
  buffer += escapeExpression(stack1) + "    ";
  foundHelper = helpers.inputWithLabel;
  stack1 = foundHelper ? foundHelper.call(depth0, "e-mail", "email", {hash:{}}) : helperMissing.call(depth0, "inputWithLabel", "e-mail", "email", {hash:{}});
  buffer += escapeExpression(stack1) + "<input type=\"text\" data-element=\"sex\" placeholder=\"Contacts First Name\" value=\"";
  foundHelper = helpers.sex;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.sex; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\"/>  <input id=\"detailsSave\"       type=\"button\"       data-saveElement=\"details\"       value=\"Save\" /></div>";
  return buffer;});
})();