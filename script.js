let pass = document.getElementById('password');
let repass = document.getElementById('re-password');


repass.oninput = () => {
    if(repass.value !== pass.value){
        pass.classList.remove('greenborder');
        pass.classList.add('redborder');
        repass.classList.add('redborder');
        repass.classList.remove('greenborder');
    }
    else{
        pass.classList.remove('redborder');
        pass.classList.add('greenborder');
        repass.classList.remove('redborder');
        repass.classList.add('greenborder');
    }
};

