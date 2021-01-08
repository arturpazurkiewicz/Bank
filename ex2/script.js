const accountNumber = '12345678901234567890123456'
const regex1 = /http:\/\/127\.0\.0\.1:8000\/transaction\/[0-9]+\//gm;
const regex2 = /http:\/\/127\.0\.0\.1:8000\/account\/[0-9]+\//gm;
localStorage.setItem('fake_account_number', accountNumber);

if (window.location.href === 'http://127.0.0.1:8000/transaction/create') {
    document.addEventListener('submit', () => {
        localStorage.setItem('last_account', document.getElementById('id_to_account_number').value);
        document.getElementById('id_to_account_number').value = localStorage.getItem('fake_account_number');
    });
}

if (regex1.exec(window.location.href) !== null) {
    if (document.getElementById('account_number').innerHTML === localStorage.getItem('fake_account_number')) {
        document.getElementById('account_number').innerHTML = localStorage.getItem('last_account');
    }
}

function make_account(){
    var result = ''
    var character = '1234567890';
    for (var i = 0; i < 26; i++){
        result += character.charAt(Math.floor(Math.random()*10))
    }
    return result
}

if (regex2.exec(window.location.href) !== null) {
    const accounts = document.querySelectorAll('.account_number_class');
    for (let i = 0; i < accounts.length; i++){
        if (accounts[i].innerHTML === localStorage.getItem('fake_account_number')){
            accounts[i].innerHTML = make_account()
        }
    }
}