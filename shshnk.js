var b = [];
var a;
var ee;
var deletecount = 0, addcount = 0, editcount = 0, totalcount = 0;
//   document.getElementById("total-counts").value = totalcount;
//   document.getElementById("Add-counter").value = addcount;
//   document.getElementById("Delete-counter").value = deletecount;
//   document.getElementById("Edit-counter").value = editcount;


async function fetchtext() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    data.forEach(ele => {
        b.push({ id: ele.id, name: ele.name, username: ele.username })
    });
    showdata();
    totalcount = b.length;
    console.log(totalcount);
    document.getElementById("1").innerHTML = totalcount;

}
function index(value) {
    a = value;
    b.forEach(ele => {
        if (ele.id === a) {
            document.getElementById("namee").value = ele.name;
            document.getElementById("usernamee").value = ele.username;
        }
    })
}
function index1(l) {
    ee = l;
}
function add(name, username) {
    var temp = "";
    var obj = {}
    if (b.length != 0)
        obj.id = b[b.length - 1].id + 1;
    else
        obj.id = 1;

    obj.name = name;
    obj.username = username;
    b.push(obj);
    var temp = "";
    b.forEach(ele => {
        temp += "<tr>";
        temp += "<td>" + ele.id + "</td>";
        temp += "<td>" + ele.name + "</td>";
        temp += "<td>" + ele.username + "</td>";
        temp += `<td><button type="button" onclick="index1(${ele.id})" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalll">Delete</button></td>`;
        temp += `<td><button type="button" onclick = "index(${ele.id})" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >
Edit
</button></td>`;
        temp += "</tr>";
    })
    document.getElementById("data").innerHTML = temp;

    addcount += 1;
    totalcount += 1;
    console.log(totalcount);
    document.getElementById("1").innerHTML = totalcount;
    document.getElementById("3").innerHTML = addcount;



}

function deletee() {

    b = b.filter(ele => {
        return ele.id != ee;
    })
    var temp = "";
    b.forEach(ele => {
        temp += "<tr>";
        temp += "<td>" + ele.id + "</td>";
        temp += "<td>" + ele.name + "</td>";
        temp += "<td>" + ele.username + "</td>";
        temp += `<td><button type="button" onclick="index1(${ele.id})" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalll">Delete</button></td>`;
        temp += `<td><button type="button" onclick = "index(${ele.id})" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
Edit
</button></td>`;
        temp += "</tr>";
    })
    document.getElementById("data").innerHTML = temp;
    deletecount += 1;
    totalcount = totalcount - 1;
    console.log(deletecount, totalcount);

    console.log(totalcount);
    document.getElementById("1").innerHTML = totalcount;
    document.getElementById("2").innerHTML = deletecount;


}
function showdata() {
    var temp = "";
    b.forEach(ele => {
        temp += "<tr>";
        temp += "<td>" + ele.id + "</td>";
        temp += "<td>" + ele.name + "</td>";
        temp += "<td>" + ele.username + "</td>";
        temp += `<td><button type="button" onclick="index1(${ele.id})" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalll">Delete</button></td>`;
        temp += `<td><button type="button" onclick = "index(${ele.id})" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
Edit
</button></td>`;
        temp += "</tr>";
    })
    document.getElementById("data").innerHTML = temp;
}
function edit(d, c) {
    b = b.filter(ele => {
        if (ele.id === a) {
            ele.name = d;
            ele.username = c;
        }
        return b;
    })
    var temp = "";
    b.forEach(ele => {
        temp += "<tr>";
        temp += "<td>" + ele.id + "</td>";
        temp += "<td>" + ele.name + "</td>";
        temp += "<td>" + ele.username + "</td>";
        temp += `<td><button type="button" onclick="index1(${ele.id})" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalll">Delete</button></td>`;
        temp += `<td><button type="button" onclick = "index(${ele.id})" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >
Edit
</button></td>`;
        temp += "</tr>";
    })
    document.getElementById("data").innerHTML = temp;
    editcount++;
    document.getElementById("4").innerHTML = editcount;

}
fetchtext();