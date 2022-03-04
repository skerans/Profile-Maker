const makeHTML = function(teamName, teamCards) {

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <header>
    <div class="jumbotron bg-danger">
      <h1 class="display-4 text-white text-center">${teamName}</h1>
   </div>
  </header>
  <div class="container-fluid">
    <div class="row">
    ${teamCards}
    </div>
  </div>
</body>
</html>`
}

module.exports = htmlPage;