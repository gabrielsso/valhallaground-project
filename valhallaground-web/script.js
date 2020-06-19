function getDiv(prefix, choice){
    for (var index = 0; index < choice.options.length; index++) {
        var div = document.getElementById(prefix+choice.options[index].value);
        console.log(div);
        div.style.display="none";
    }

    var selectedOption = (choice.options[choice.selectedIndex].value)

    switch(selectedOption){
        case "1":
            displayDiv(prefix, "1");
            break;
        case "2":
            displayDiv(prefix, "2");
            break;
        case "3":
            displayDiv(prefix, "3");
            break;
        case "4":
            displayDiv(prefix, "4");
            break;
        case "5":
            displayDiv(prefix, "5");
            break;
        default:
            console.log("Ocorreu algum problema..");
            break;
    }
}

function displayDiv(prefix, suffix){
    var div = document.getElementById(prefix+suffix);
    div.style.display = "block";
}