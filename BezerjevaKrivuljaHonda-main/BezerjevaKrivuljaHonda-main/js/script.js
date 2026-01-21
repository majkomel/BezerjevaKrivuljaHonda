window.onload = function () {
    const canvas = document.getElementById("LogoCanvas");
    const ctx = canvas.getContext("2d");

   
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    const originalWidth = 500;
    const scale = canvas.width / originalWidth;
    ctx.save();
    ctx.scale(scale, scale);

    
    ctx.lineWidth = 3 / scale;
    ctx.strokeStyle = "#CC0000";
    ctx.fillStyle = "#CC0000";

    ctx.beginPath();
    ctx.moveTo(249, 95);
    ctx.bezierCurveTo(409, 100, 467, 84, 457, 235);
    ctx.bezierCurveTo(450, 432, 407, 418, 257, 422);
    ctx.bezierCurveTo(104, 417, 62, 435, 54, 235);
    ctx.bezierCurveTo(50, 120, 61, 92, 249, 95);
    ctx.closePath();

    ctx.moveTo(249, 110);
    ctx.bezierCurveTo(421, 113, 437, 115, 434, 237);
    ctx.bezierCurveTo(423, 419, 414, 400, 254, 406);
    ctx.bezierCurveTo(96, 398, 93, 412, 77, 246);
    ctx.bezierCurveTo(69, 128, 86, 110, 249, 110);
    ctx.closePath();

    ctx.fill("evenodd");
    ctx.stroke();

    
    ctx.fillStyle = "#CC0000";
    ctx.strokeStyle = "transparent";

    ctx.beginPath();
    ctx.moveTo(135, 125);
    ctx.bezierCurveTo(154, 394, 135, 125, 154, 394);
    ctx.bezierCurveTo(196, 397, 154, 394, 196, 396);
    ctx.bezierCurveTo(209, 337, 214, 320, 254, 323);
    ctx.bezierCurveTo(286, 325, 296, 311, 315, 396);
    ctx.bezierCurveTo(359, 395, 315, 396, 359, 395);
    ctx.bezierCurveTo(377, 125, 359, 395, 377, 125);
    ctx.bezierCurveTo(347, 123, 377, 125, 347, 123);
    ctx.bezierCurveTo(307, 274, 327, 296, 254, 296);
    ctx.bezierCurveTo(192, 295, 201, 269, 165, 122);
    ctx.bezierCurveTo(135, 125, 165, 122, 135, 125);
    ctx.closePath();
    ctx.fill();

    ctx.restore();

    
    const downloadBtn = document.getElementById("downloadLogo");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            const pngDataUrl = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = pngDataUrl;
            link.download = "honda-logo.png";
            link.click();
        });
    }

    // --- SweetAlert on fixed logo ---
    const fixedLogo = document.getElementById("fixedLogo");
    fixedLogo.addEventListener("click", function () {
        Swal.fire({
            title: "Izdelal:",
            text: "Maj Komel",
            icon: "info",
            confirmButtonText: "OK",
			confirmButtonColor: "#CC0000"
        });
		
    });
	
	// --- Hide fixed logo when overlapping footer ---
const footer = document.querySelector("footer");
const fixedLogoEl = document.getElementById("fixedLogo");

function checkLogoOverlap() {
    const footerRect = footer.getBoundingClientRect();
    const logoRect = fixedLogoEl.getBoundingClientRect();

    const isOverlapping =
        logoRect.bottom > footerRect.top &&
        logoRect.top < footerRect.bottom;

    if (isOverlapping) {
        fixedLogoEl.style.opacity = "0";
        fixedLogoEl.style.pointerEvents = "none";
    } else {
        fixedLogoEl.style.opacity = "1";
        fixedLogoEl.style.pointerEvents = "auto";
    }
}

window.addEventListener("scroll", checkLogoOverlap);
window.addEventListener("resize", checkLogoOverlap);

// initial check
checkLogoOverlap();

};
