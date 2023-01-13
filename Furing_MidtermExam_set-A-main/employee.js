const fs = require('fs')

const employee = function(oldNote) {
    let newNote = JSON.parse(oldNote);

    let mNote = newNote.map(function(n){
        return n.employee;
    });

    console.log("Employee:" + mNote)

}

module.exports = employee