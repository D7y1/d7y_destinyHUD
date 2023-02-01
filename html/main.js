function setProgress(type, val, maxval, element) {
    let percent = (val / maxval) * 100
    if (type == "health") {

        $(element).width(percent + '%');
    } else {
        $(element).height(percent + '%');
    }
}

window.addEventListener('message', function (event) {
    var data = event.data
    if (data.action == "hud") {
        for (i = 0; i < data.status.length; i++) {
            var statusValue = Math.floor(data.status[i].value);
            var MaxValue = Math.floor(data.status[i].Maxvalue);
            setProgress(data.status[i].name, statusValue, MaxValue, `.${data.status[i].name} .bar span`)
        }
    }
    else if (data.action == "weapon") {
        if (data.status.ammo.enabled) {
            let ammo = data.status.ammo.amount
            let clipammo = data.status.ammo.clip

            $(".clip").text(clipammo)
            $(".total").text(ammo)

        } else {
            $(".clip").text('---')
            $(".total").text('---')
        }
        var oldWeapon = document.querySelector('.weapon .image img').src;
        var newWeapon = './weapons/' + (data.status.weapon !== undefined ? (data.status.weapon) : "unarmed") + '.png';
        if (oldWeapon != newWeapon) {
            document.querySelector('.weapon .image img').src = newWeapon
        }

    }
    else if (data.action == "toggleUi") {
        if (data.value == true) {
            $("#ui").fadeIn(300)
        }
        else {
            $("#ui").fadeOut(300)
        }
    }
    else if (data.action == "setup") {
        document.documentElement.style.setProperty("--progressColors", data.Color)
        $("#ui").removeClass("left")
        $("#ui").removeClass("right")
        $("#ui").addClass(data.dir)
    }
})