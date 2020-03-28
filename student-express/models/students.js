module.exports = (sequalize, Datatypes) => {
  let Student = sequalize.define('Student', {
    name: {
      type: Datatypes.STRING,
      allowNull: false
    },
    starId: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true
    },
    present: {
      type: Datatypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
  Student.sync({force: false}).then(() => {
    console.log('Synced student table')
  })
  return Student
}