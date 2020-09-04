const fs = require('fs')
const chalk = require('chalk')

const getNotes = (message) => `this is ${message}`

const addNote = (title, body) => {
    //save note to data store
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
}

const removeNote = (title) => {
    const getNotes = loadNotes()
    const arrayWithoutNote = getNotes.filter((note) => {
        if(note.title !== title) {
            console.log(chalk.green.inverse('note who dont match removed'))
            return note.title !== title
            
        } else {
            console.log(chalk.red.inverse('this title does not exist'))
            return note.title !== title
        }
    })

    saveNotes(arrayWithoutNote)
}

const listNotes = () => {
    const getNotes = loadNotes()
    console.log(chalk.blue.inverse('Your Notes'))
    return getNotes.forEach(note => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const getList = loadNotes()
    return getList.find(note => {
        if(note.title === title){
            console.log(note)
        } else {
            console.log('note does not exists')
        }
    })
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)

    } catch (e) {
        return []
    }
   
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
} 