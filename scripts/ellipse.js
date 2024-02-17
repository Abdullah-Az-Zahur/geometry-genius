function calculateEllipseArea() {
    // A - Axis
    const ellipseAInput = document.getElementById('ellipse-a');
    const ellipseAText = ellipseAInput.value;
    const a = parseFloat(ellipseAText);
    // B - Axis
    const ellipseBInput = document.getElementById('ellipse-b');
    const ellipseBText = ellipseBInput.value;
    const b = parseFloat(ellipseBText);
    // calculate area 
    const area = 3.1416 * a * b;
    // display
    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = area;
}