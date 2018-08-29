/// (c) Ken Fyrstenberg Nilsen, Abidas Software .com
/// License: CC-Attribute

var ctx = demo.getContext('2d'),
    font = '64px impact',
    w = demo.width,
    h = demo.height,
    curve,
    offsetY,
    bottom,
    textHeight,
    isTri = false,
    dltY,
    angleSteps = 180 / w,
    i = w,
    y,
    os = document.createElement('canvas'),
    octx = os.getContext('2d');

os.width = w;
os.height = h;

octx.font = font;
octx.textBaseline = 'top';
octx.textAlign = 'center';

function renderBridgeText() {

    curve = parseInt(iCurve.value, 10);
    offsetY = parseInt(iOffset.value, 10);
    textHeight = parseInt(iHeight.value, 10);
    bottom = parseInt(iBottom.value, 10);
    isTri = iTriangle.checked;

    vCurve.innerHTML = curve;
    vOffset.innerHTML = offsetY;
    vHeight.innerHTML = textHeight;
    vBottom.innerHTML = bottom;

    octx.clearRect(0, 0, w, h);
    ctx.clearRect(0, 0, w, h);

    octx.fillText(iText.value.toUpperCase(), w * 0.5, 0);

    /// slide and dice
    i = w;
    dltY = curve / textHeight;
    y = 0;
    while (i--) {
        if (isTri) {
            y += dltY;
            if (i === (w * 0.5)|0) dltY = -dltY;
        } else {
            y = bottom - curve * Math.sin(i * angleSteps * Math.PI / 180);
        }
        ctx.drawImage(os, i, 0, 1, textHeight,
        i, h * 0.5 - offsetY / textHeight * y, 1, y);
    }
}

iCurve.onchange = iOffset.onchange = iHeight.onchange = iBottom.onchange = iText.onkeyup = iTriangle.onchange = renderBridgeText;

renderBridgeText()