// function calculateParallelogramArea() {
//     // // base
//     // const parallelogramBaseInput = document.getElementById('parallelogram-base');
//     // const parallelogramBaseText = parallelogramBaseInput.value;
//     // const base = parseFloat(parallelogramBaseText);

//     const base = getParallelogramBase();
//     // height
//     const parallelogramHeightInput = document.getElementById('parallelogram-height');
//     const parallelogramHeightText = parallelogramHeightInput.value;
//     const height = parseFloat(parallelogramHeightText);
//     // area calculate
//     const area = base * height;
//     // display
//     const parallelogramAreaSpan = document.getElementById('parallelogram-area');
//     parallelogramAreaSpan.innerText = area;
// }

// function getParallelogramBase() {
//     const parallelogramBaseInput = document.getElementById('parallelogram-base');
//     const parallelogramBaseText = parallelogramBaseInput.value;
//     const base = parseFloat(parallelogramBaseText);
//     return base;
// }

function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    console.log(base);
    const height = getInputValueById('parallelogram-height');
    console.log(height);
    // area calculate
    const area = base * height;

    setInnerTextById('parallelogram-area', area);
    // // display
    // const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    // parallelogramAreaSpan.innerText = area;
}
    

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}