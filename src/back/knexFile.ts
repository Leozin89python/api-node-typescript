import path from 'path'

module.exports = {
    client:'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'back','database' , 'database.sqlite')
    },
    migrations:{
        filename: path.resolve(__dirname, 'back','database' , 'migrations') 
    },
    useNullAsDefault: true
}