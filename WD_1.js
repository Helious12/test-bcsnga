function validate()
{
    var name =  document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var site = document.getElementById("site").value;
    var msg = document.getElementById("message").value;

    // information
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("site", site);
    sessionStorage.setItem("msg", msg);


    // error message
    var er_mes = "";

    if (firstname.match("^[a-z A-Z]{1,30}$") == null)
    {
        er_mes += "Error: Name ....... ";
    }

    if (email.match("^[a-zA-Z0-9]*@[a-z.A-Z]*$") == null)
    {
        er_mes += "Error: Mail ....... ";
    }

    if (er_mes != "")
    {
        document.getElementById("error_mes").textContent = er_mes;
        return false;
    }
    else 
    {
        return true;
    }
    
}

function prefillData()
{
    // refill information
    document.getElementById("name").value = sessionStorage.name;
    document.getElementById("email").value = sessionStorage.email;
    document.getElementById("site").value = sessionStorage.site;
    document.getElementById("message").value = sessionStorage.msg;

}

function init()
{
    var  regForm = document.getElementById("registerForm");
    regForm.onsubmit = validate;
    if (sessionStorage.name != null)
    {
        prefillData();
    }
}

window.onload = init;