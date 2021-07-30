exports.usersController = (req, res) => {
  res.json({
    usersList: [
      {id: 1, firstName: 'Yura', lastName: 'Seredyuk'},
      {id: 2, firstName: 'Oleg', lastName: 'Seredyuk'}
    ]
  })
}
