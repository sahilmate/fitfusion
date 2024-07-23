function convertWeight() {
    var kgInput = document.getElementById('kgInput');
    var gramOutput = document.getElementById('gramOutput');
    var poundOutput = document.getElementById('poundOutput');
    var ounceOutput = document.getElementById('ounceOutput');

    var kg = parseFloat(kgInput.value);
    var gram = kg * 1000;
    var pound = kg * 2.20462;
    var ounce = kg * 35.274;

    gramOutput.value = gram.toFixed(2) + ' g';
    poundOutput.value = pound.toFixed(2) + ' lb';
    ounceOutput.value = ounce.toFixed(2) + ' oz';
}

function calculateBMI() {
    var heightInput = document.getElementById('heightInput');
    var bmiOutput = document.getElementById('bmiOutput');

    var height = parseFloat(heightInput.value) / 100; // convert cm to m
    var weight = parseFloat(kgInput.value);

    if (height > 0 && weight > 0) {
        var bmi = weight / (height * height);
        bmiOutput.value = bmi.toFixed(2);
    } else {
        bmiOutput.value = "Invalid height or weight";
    }
}
