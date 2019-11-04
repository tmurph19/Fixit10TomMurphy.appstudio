btnInsert.onclick=function(){
  var queryInsert = "INSERT INTO customer (name, street, city, state, zipcode) VALUES ('Jesse Antiques', '1113 F St', 'Omaha', 'NE', '68178')"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjk48928&pass=BIA375CK&database=cjk48928&query=" + query)
    if (req1.status == 200) { 
        if (req1.responseText == 500)
            alert("You have successfully added the name")
        else
            alert("There was a problem adding the name to the database.")
      } else {
        alert("Error: " + req1.status)
      }  
  } 
}
