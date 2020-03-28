module.exports = (sequalize, Datatypes) => {
  let Student = sequalize.define('Student', {
    name: {
      type: Datatypes.STRING, // string type
      allowNull: false // dont allow null
    },
    starId: {
      type: Datatypes.STRING,  // string type
      allowNull: false, // dont allow null
      unique: true
    },
    present: {
      type: Datatypes.BOOLEAN,  // boolean type
      allowNull: false, // dont allow null
      defaultValue: false // defualt false
    }
  })
  // set force variable to re-initialize db on startup
  Student.sync({force: false}).then(() => {
    console.log('Synced student table')
  })
  return Student
}