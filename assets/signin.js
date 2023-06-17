//****************************************************************************************/

//||-------------------------------------------------------------------------------------||
//||-------------------------------Đăng nhập-----------------------------------------------||
//||-------------------------------------------------------------------------------------||
var btnsignin = document.querySelector('.btnsignin') // Nút đăng nhập
console.log(btnsignin)
btnsignin.addEventListener('click',function(){
    var emailsi = document.querySelector('.emailsignin').value
    var passwordsi = document.querySelector('.pwsignin').value
    var datalc = localStorage.getItem('name')
    var data = JSON.parse(datalc)
    console.log(data)
    if(emailsi == '' || passwordsi == ''){
        alert('Nhập thông tin')
    }
    else if(emailsi == data.email && passwordsi == data.password){
        alert('Thành công')
        window.location.href='allproduct.html'
    }
    else{
        alert('Sai')
    }
})