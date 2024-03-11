document.addEventListener("DOMContentLoaded", function () {

    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }



    document.getElementById('interval').addEventListener('change', function (eventData) {
      let interval = document.getElementsByClassName("interval").value;
      console.log(interval)

      

    });

    document.getElementsById('IncomeDP').addEventListener('change', function (eventData) {
        console.log(eventData.target);
        var income = document.getElementById('IncomeOP');
        if (income.style.display === "none") {
            income.style.display = "block";
        } else {
            income.style.display = "none";
        }
        return document.getElementById('IncomeOP');
    });


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

