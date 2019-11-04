namesTable = []
newNamesTable = []
customerUpdate.onshow=function(){
  let query = "SELECT DISTINCT name FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjk48928&pass=BIA375CK&database=cjk48928&query=" + query)
    if (req1.status = 200) {
      results = JSON.parse(req1.responseText)
  
    if (results == 0) {
    } else {
      let message = ""
      for (i = 0; i <= results.length - 1; i++) {
      message = message + results[i][0] + "\n"
    }
    txtCustomers1.value = message
  }
  } else {
    }
}

btnSubmit11.onclick=function(){
  var oldName = inptCustomer1.value
  var newName = inptNewName.value
  var queryUpdate = "UPDATE customer SET name = " + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjk48928&pass=BIA375CK&database=cjk48928&query=" + query)
    if (req1.status = 200) {
      if (req1.responseText == 500)
        txtCustomers1.value = "You have successfully changed the name " + oldName
      else
        txtCustomers1.value = "There was a problem changing " + oldName + " from the database."
    } else {
        txtCustomers1.value = "Error: " + req1.status
    }
}


btnShowResults.onclick=function(){
  lblCompany11.value = ''
    let querUpdatedName = "SELECT name FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjk48928&pass=BIA375CK&database=cjk48928&query=" + query)
  if (req1.status == 200){
    newNamesTable = JSON.parse(req1.responseText)
    lblCompany11.value = newNamesTable
  }
}