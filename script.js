// signup script starts here

function save(){

    let FirstName = document.getElementById("FirstName").value;
    let LastName = document.getElementById("LastName").value;
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let Business = document.getElementById("Business").value;
    let userDetails = {
        FirstName:FirstName,
        LastName:LastName,
        country:country,
        state:state,
        email:email,
       password:password,
        Business:Business
          }    
          
    let users;
   
   if(localStorage.getItem('users') === null) {
       
       users = [];
   } else
   {
       users = JSON.parse(localStorage.getItem('users'));
   }
   users.push(userDetails);
    localStorage.setItem('users', JSON.stringify(users));
    alert("SignUp Successfull");
    }

 

// Partner signup script starts here
    function savep(){

        let CompanyName = document.getElementById("CompanyName").value;
        let CompanyWebsite = document.getElementById("CompanyWebsite").value;
        let country = document.getElementById("country").value;
        let state = document.getElementById("state").value;
        let Business = document.getElementById("Business").value;
        let Employees = document.getElementById("Employees").value;
        let userDetails = {
            CompanyName:CompanyName,
            CompanyWebsite:CompanyWebsite,
            country:country,
            state:state,
            Business:Business,
             Employees:Employees
              }    
              
        let users;
        if(localStorage.getItem('users') === null) {
           users = [];
        } else
        {
           users = JSON.parse(localStorage.getItem('users'));
        }
        users.push(userDetails);      
        localStorage.setItem('users', JSON.stringify(users));
        
        
        }
        



// Login validation starts here

        function login(){

       var cnt=0;

       let email = document.getElementById("email").value;
       let password = document.getElementById("password").value;

       jsondata = JSON.parse(localStorage.getItem('users'));

       for(let i = 0; i<jsondata.length; i++) {

           if(jsondata[i].email === email && jsondata[i].password === password) {
            
             cnt++;
           }
        }
        if(cnt>0)
        {
            alert("Login successfull")
            window.location = "dashboard.html";
        }
        else{
            alert("check the mail & passowrd");
        }
        }

       



        // Already user login validation
        function getuser(){
            var cnt=0;
            debugger
       let email = document.getElementById("email").value;
       jsondata = JSON.parse(localStorage.getItem('users'));
       for(let i = 0; i<jsondata.length; i++) {
           if(jsondata[i].email === email) {
            
             cnt++;
           }
        }
        if(cnt>0)
        {
            
            window.location = "login.html";
        }
        else{
            alert("check your mail");
        }
        }


        // getting data to dashboard

        function getUserDetails(){
                let users;
                debugger
                    if(localStorage.getItem('users') === null) {
                       users = null;
                    } else
                    {
                       users = JSON.parse(localStorage.getItem('users'));
                    }
                   console.log('users');
                    var test = document.getElementById('name');
                    var i=0;
                    for (i = 0; i < users.length; i++)
                    {;
                        

                    test.innerHTML += users[i];
                    
                    }  
            }
           
