// Create a simple 5 field form (name, email, password, mobile no. and address) with a submit button, which upon clicked, posts the data of the form to a mock server as JSON.

function init() {
    $.ajax({
        url: 'http://localhost:4500/contactpoint',

        error: function () {

        },

        success: function (data) {
            var json = JSON.parse(data);
            console.log("Received:\t", json);
            document.getElementById("name").value = json.name;
            document.getElementById("email").value = json.email;
            document.getElementById("contact").value = json.mobile;
            document.getElementById("address").value = json.address;
        },
        type: 'POST'
    });

}

function keypressed() {

    var name1 = document.getElementById('name').value;
    var email1 = document.getElementById('email').value;
    var password1 = document.getElementById('password').value;
    var contact1 = document.getElementById('contact').value;
    var address1 = document.getElementById('address').value;
    var submitbtn1 = document.getElementById('submitbtn');

    var image = document.getElementById('emoji');
    

    var numbers = /^[0-9]+$/;

    if ((name1 === '') || (email1 === '') || (password1 === '') || (contact1 === '') || (address1 === '')) {
        image.style.display = 'block';
        image.setAttribute("src","https://vignette.wikia.nocookie.net/township/images/6/64/Excited_smiley.png/revision/latest?cb=20150831155844") ;
        submitbtn1.disabled = true;
    }    
    else {
        image.style.display = 'block';
        image.setAttribute("src","https://images-na.ssl-images-amazon.com/images/I/715vwvP5ZEL.png") ;
        submitbtn1.disabled = false;
    }

    //Contact Validation

    if (contact1.length >= 1) {
        if (contact1.length < 10 || contact1.length > 10 || (!contact1.match(numbers))) {
            image.style.display = 'block';
        image.setAttribute("src","http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4bf.png") ;
            document.querySelector('p').textContent = " * Please enter currect mobile number";
        }
        else {
            document.querySelector('p').textContent = '';
        }

    }
}

function testData(e) {
    var name1 = document.getElementById('name').value;
    var email1 = document.getElementById('email').value;
    var password1 = document.getElementById('password').value;
    var contact1 = document.getElementById('contact').value;
    var address1 = document.getElementById('address').value;

    var data = {};
    data.name = name1;
    data.email = email1;
    data.password = password1;
    data.mobile = contact1;
    data.address = address1;

    //console.log(data);
    $.ajax({
        url: 'http://localhost:4500/submitpoint',
        data: data,
        success: function (data) {
            //console.log(data);
        },
        type: 'POST'
    });
    e.preventDefault();
}

init();