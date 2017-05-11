(function () {

    window.onload = function() {
        init();
    };

    var output = function (elem) {
            var image,
                controls = document.getElementById("logo"),
                downloadLink = document.getElementById('download-link') || document.createElement('a');

            image = elem.output();
            downloadLink.setAttribute('id', 'download-link');
            downloadLink.setAttribute('href', image);
            downloadLink.setAttribute('download', 'makerspace-logo.png');
            downloadLink.innerHTML = 'Get PNG';
            controls.appendChild(downloadLink);
        },

        init = function () {
            var seed = window.location.hash.substring(1) || 'makerspace',
                makerspaceLogotype = new Rubikus({
                    canvas: document.getElementById('makerspace-logotype'),
                    hash: CryptoJS.SHA256(seed.toLowerCase()).toString()
                }),
                inputElement = document.getElementById('logoSeed');

            output(makerspaceLogotype);

            inputElement.innerHTML = seed;

            inputElement.onkeyup = function (e) {
                var seed = inputElement.value,
                    hash = CryptoJS.SHA256(seed.toLowerCase()).toString();

                makerspaceLogotype.setHash(hash);
                window.location.hash = seed;

                output(makerspaceLogotype);
            };
        }
})()

