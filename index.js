// Add your code here
function submitData( name , email ) {
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(
        {"name": name, "email": email}
    ),
  };
  return fetch("http://localhost:3000/users", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object.id);
    document.body.append(object.id, object.name, object.email)
  })
  .catch(function (error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
    document.body.append(error.message)
  });
}