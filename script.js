document.addEventListener("DOMContentLoaded", function () {

    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // document.getElementById('interval').addEventListener('change', function (eventData) {
    //   let interval = document.getElementById("interval").value
    //   console.log(interval)





    // });




    // document.getElementsByClassName("dropdownPress").addEventListener("show", function (eventPress) {
    //     eventPress.preventDefault();
    //     console.log(eventPress.target);
    //     var showData = new FormData(eventPress.target);
    //     showData = Object.fromEntries(showData);
    // });

    // document.getElementsByClassName('dropdownPress').addEventListener('change', function (eventData) {
    //     // console.log(eventData);

    //     eventData = document.getElementsByClassName("hidden");
    //     document.getElementsByClassName("hidden").style.visibility = "visible";
    // });

    // function showDropdown(value) {
    //     let displayDropdown = document.getElementsByClassName('Dropdown');
    //     displayDropdown.classList = "";
    //     switch (value) {
    //         case 'show':
    //             displayDropdown.classList.add('show');
    //             break;
    //     }
    // }

});

