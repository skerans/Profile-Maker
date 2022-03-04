const managerCard = (job) => {
  return `
  <div class="card border col-md-4">
  <div class= "card-header">
    <h2>${job.name}</h2>
    <h4>Manager</h4>
  </div>
  <div class="card-body">
    <p class="card-text">ID: #${job.id}</p>
    <p class="card-text"><a href="mailto:>${job.email}</a></p>
    <p class="card-text">Office #${job.office}</p>
  </div>
</div>
  `
}

module.exports = managerCard;