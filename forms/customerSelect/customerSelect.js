
Button1.onclick=function(){
  let check = Input1
    let query = "SELECT * FROM customer WHERE state = " + '"' + check + '"'  
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=tpm62822&query=" + query)
     if (req1.status == 200) { //transit worked.
        // req1.responseText is a JSON object with the results of the query in it.
        // Now to format it in a nicer format that you can work with - 
        // parse it from JSON object (JS Object Notaton) into an array that holds
        // each row as an array in it. 
        results = JSON.parse(req1.responseText)
    if (results.length == 0)
        NSB.MsgBox("There are no companies in this state.")
    else {        
        // output the companies in this state
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        txtResults.value = message
      } 
      
  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}





customerSelect.onshow=function(){
    let query = "SELECT state FROM customer"  
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=tpm62822&query=" + query)
     if (req1.status == 200) { //transit worked.
        // req1.responseText is a JSON object with the results of the query in it.
        // Now to format it in a nicer format that you can work with - 
        // parse it from JSON object (JS Object Notaton) into an array that holds
        // each row as an array in it. 
        results = JSON.parse(req1.responseText)
    if (results.length == 0)
        NSB.MsgBox("There are no states in this table.")
    else {        
        // output the states in the whole table to the text area
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        Textarea1.value = message
      } 
    
  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}
