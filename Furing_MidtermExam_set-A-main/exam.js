const add = require('./add')
const read = require('./read')
const employee = require('./employee')


//get users input
const cmd = process.argv;

if(cmd[2] === 'add') {
    // build the object
    const note = { 
        employee: cmd[3],
        role: cmd[4],
        department: cmd[5]
    }

    // get note.txt content
    const oldNote = read()
   
    // add this newNote to Note.txt
    add(note,oldNote);

}

// Read Notes.txt
if(cmd[2] === 'read') {
    // Import present
    const present = require('./present')
    
    present(read())
}
if(cmd[2] == 'employee'){
    employee(read())
}





    