function loanAmount(){
    document.getElementById("loanTxt").innerHTML = document.getElementById("loanInput").value;
}

function tenure(){
    document.getElementById("tenureTxt").innerHTML = document.getElementById("tenureInput").value;
}

function rate(){
    document.getElementById("rateTxt").innerHTML = document.getElementById("rateInput").value;
}



// P x R x (1+R)^N / [(1+R)^N-1] 


function calculateEmi(){
    var P = parseInt(document.getElementById("loanInput").value);
    var R = parseFloat(document.getElementById("rateInput").value)/12/100;
    var N = parseInt(document.getElementById("tenureInput").value) * 12;

    var EMI = parseInt(P * R * (Math.pow(1 + R,N)) / (Math.pow(1 + R,N) - 1));
    document.getElementById("EMIAmount").innerHTML = EMI;
}