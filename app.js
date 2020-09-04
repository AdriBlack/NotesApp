const fs = require('fs')
const yargs = require('yargs')

const notes = require('./notes.js')

//Customize yars version
yargs.version('1.1.0')


//Create add command
yargs.command({
    command : 'add',
    describe: 'add a new note',
    builder: {
        title:{
            describe: 'Title of Note',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'This is the body of the command',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// // create remove command
yargs.command({
    command : 'remove',
    describe: 'remove a new note',
    builder: {
        title:{
            describe: 'Title of Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
// List command
yargs.command({
    command : 'list',
    describe: 'list the notes',
    handler() {
        notes.listNotes()
    }
})
// read command
yargs.command({
    command : 'read',
    describe: 'read note',
    builder: {
        title:{
            describe: 'Title of Note',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'This is the body of the command',
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// Parsing the arguements with all details
yargs.parse()