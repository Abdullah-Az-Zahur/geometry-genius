function calculateRhombusArea(){
    // d1
    const rhombusD1Input = document.getElementById('rhombus-d1');
    const rhombusD1text = rhombusD1Input.value;
    const d1 = parseFloat(rhombusD1text);
    console.log(d1);
    // d2
    const rhombusD2Input = document.getElementById('rhombus-d2');
    const rhombusD2text = rhombusD2Input.value;
    const d2 = parseFloat(rhombusD2text);
    console.log(d2);
    // calculate area 
    const area = 0.5 * d1 * d2;
    // display
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;
}