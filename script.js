let downloadTimer;

function startDownload() {

    const popup =
        document.getElementById("downloadPopup");

    const progressBar =
        document.getElementById("progressBar");

    const progressText =
        document.getElementById("progressText");

    const title =
        document.getElementById("downloadTitle");

    const text =
        document.getElementById("downloadText");

    const icon =
        document.getElementById("downloadIcon");

    const prankScreen =
        document.getElementById("prankScreen");

    const popupBox =
        document.querySelector(".popup-box");


    /* SHOW DOWNLOAD POPUP */

    popup.style.display = "flex";

    progressBar.style.width = "0%";
    progressText.innerText = "0%";

    title.innerText = "Downloading...";

    text.innerText = "Please wait...";

    icon.innerText = "📥";


    /* REMOVE OLD OPEN BUTTON */

    const oldButton =
        document.getElementById("openButton");

    if (oldButton) {
        oldButton.remove();
    }


    let progress = 0;


    /* DOWNLOAD PROGRESS */

    downloadTimer = setInterval(function() {

        progress++;

        progressBar.style.width =
            progress + "%";

        progressText.innerText =
            progress + "%";


        /* COMPLETE */

        if (progress >= 100) {

            clearInterval(downloadTimer);

            title.innerText =
                "Download complete!";

            text.innerText =
                "Your PDF is ready.";

            icon.innerText =
                "✅";


            /* OPEN BUTTON */

            const openButton =
                document.createElement("button");

            openButton.id =
                "openButton";

            openButton.innerText =
                "📂 Open";

            openButton.style.marginTop =
                "15px";

            openButton.style.padding =
                "13px 30px";

            openButton.style.background =
                "#16a34a";

            openButton.style.color =
                "white";

            openButton.style.border =
                "none";

            openButton.style.borderRadius =
                "10px";

            openButton.style.fontSize =
                "16px";

            openButton.style.fontWeight =
                "bold";

            openButton.style.cursor =
                "pointer";


            /* OPEN PRANK */

            openButton.onclick =
                function() {

                    popup.style.display =
                        "none";

                    prankScreen.style.display =
                        "flex";

                };


            popupBox.appendChild(
                openButton
            );

        }

    }, 35);

}


/* TRY AGAIN */

function tryAgain() {

    const prankScreen =
        document.getElementById("prankScreen");

    prankScreen.style.display =
        "none";

    }
