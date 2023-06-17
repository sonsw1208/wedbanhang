//****************************************************************************************/

//||-------------------------------------------------------------------------------------||
//||-------------------------------ĐĂNG KÝ-----------------------------------------------||
//||-------------------------------------------------------------------------------------||
var btnsignup = document.querySelector('.btnregister') // Nút đăng kí

btnsignup.addEventListener('click',function(){
    var mdname = document.querySelector('.middlename').value
    var name = document.querySelector('.name').value
    var email = document.querySelector('.email').value
    var password = document.querySelector('.password').value
    var user = {
        mdname : mdname,
        name : name,
        email : email,
        password : password
    }
    localStorage.setItem('name' + localStorage.length,JSON.stringify(user))
    alert('ok')
})
