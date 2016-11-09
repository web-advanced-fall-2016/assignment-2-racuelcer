let modal = document.getElementById('Modal');
let span = document.getElementsByClassName("open")[0];
let names = document.querySelectorAll('.name');
let icon = document.querySelectorAll ('.icon')
let info = document.querySelectorAll('.info');

(function() {
    let URL = "http://148.75.251.185:8888";
    let content = document.querySelector('#name');
    let ini = 0;
    let picture = document.querySelector('.image');
    let mainGrid = document.querySelector ('#grid');

    mainGrid.addEventListener('click',function(evnt){
        if(evnt.target.classList.contains('thumb'){

        $.ajax({
                method: "GET",
                url: URL+`/students`+evnt.target.dataset.id,
            })
            .done(function(response) {
                document.querySelector('#Modal .modalContent .image').innerText = response.first_name + "" + response.profile_picture;
                document.querySelector('#Modal .modalcontent .email').innerText = response.email;
                document.querySelector ('#Modal .modalContent .exerpt').innerText = response.excerpt;
                modal.style.display = "block"
                
            });
        }
    });

    