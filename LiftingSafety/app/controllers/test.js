var test = Alloy.Collections.test;
var counter = 1;

function showId(e) {
if (e.row.model) {
alert(e.row.model);
}
}

function addTestFighter(e) {
// create the test fighter model
var model = Alloy.createModel('test', {
title: 'Title ' + counter,
author: 'Author ' + counter
});
counter++;

// add model to the collection and save it to sqlite
test.add(model);
model.save();

// let's refresh so we can see the ids coming from the
// autoincrement field in the sqlite database in the
// row click alerts
test.fetch();
}

test.fetch();
