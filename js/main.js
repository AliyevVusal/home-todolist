

    let addda = document.getElementById("add");
    let list = document.getElementById("list");

addda.addEventListener("click",function () {
    let names = document.getElementById("value").value;
    
    let li = document.createElement("li");
    let icon = document.createElement('i');
    let ul = document.getElementById('list');


    li.appendChild(document.createTextNode(names));
    
    icon.classList.add("fa-xmark");
    icon.classList.add("fa-solid");

    icon.addEventListener('click',() => {
        li.remove();

    })

    li.appendChild(icon);
    ul.appendChild(li);
    console.log(li);
})
