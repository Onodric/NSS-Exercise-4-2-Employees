"use strict";

let Dept = function () {
  this.name = '';
  this.location = '';
};

Dept.prototype.setName = function (name) {
  this.name = name;
};

Dept.prototype.setLocation = function (loc) {
  this.location = loc;
};

Dept.FieldOffice = function (name, loc) {
  this.setName(name);
  this.setLocation(loc);
};

Dept.FieldOffice.prototype = new Dept();

// Create a two-level prototype chain for creating departments in your business. Start off with a `Department` function. Then create two other functions named `FieldOffice`, and `Headquarters` that have `Department` on their prototype chain.

// 1. Every employee should have a first and last name.
// 1. Every department should have a name.
// 1. Every employee should be assigned to either the `FieldOffice` or `Headquarters` department. This is a `has-a` relationship.
// 1. `Clinician` employees should have a property for their area of medical expertise (e.g. physical therapist, phrenologist, anesthesiologist, etc.)
// 1. `Operations` employees should have a property for their area of responsibility (e.g. IT, revenue, compliance, etc.)
// 1. Every field office should have a unique city.
// 1. Create a minimum of 4 employees - 2 clinicians, and 2 operations - that have been assigned to a specific department.
// 1. Output the following information to the console for each employee.
//     1. Full name
//     1. Department name
//     1. Expertise/responsibility

module.exports = Dept;