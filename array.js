var appointments = ["Birthdat Party", "Meeting with Manager"];

function LoadAppointments(){
    document.getElementById("1stAppointments").innerHTML = "";
    appointments.map(function(appointment){
        var option = document.createElement("option");
        option.text = appointment;
        option.value = appointment;

        document.getElementById("1stAppointments").appendChild(option);
    })

    document.getElementById("lblCount").innerHTML = `You have ${appointments.length} appointments`
    
}

function AddClick(){
    var appointment = document.getElementById("txtTask").value;
    appointments.push(appointment);
    alert(`${appointment} Added to your list`);
    LoadAppointments();
    document.getElementById("txtTask").value = "";
}

function bodyLoad(){
    LoadAppointments();
}

function SortAsc(){
    appointments.sort();
    LoadAppointments();
}

function SortDsc(){
    appointments.sort();
    appointments.reverse();
    LoadAppointments();
}

function DeleteClick(){
    var selectedAppointment = document.getElementById("1stAppointments").value;
    var selectedIndex = appointments.indexOf(selectedAppointment);

    var choice = confirm(`Are you Sure?\nWant to Delete?\n${selectedAppointment}`);

    if(choice === true){
        appointments.splice(selectedIndex, 1);
        LoadAppointments();
    }
}