
// chat-widget.js

// Load styles dynamically
const style = document.createElement('style');
style.innerHTML = `   .chat-container {
    position: fixed;
    bottom: 430px;
    font-family: 'poppins' !important;
    display: flex
;
    top: 50% !important;
    right: 0 !important;
    transform: translateY(-50%) !important;
    z-index: 1000 !important;
    width: 365px !important;
    line-height: 1.5 !important;
}

  .text-launcher {
    margin-top: 30px !important;
  }

.text-launch {
    box-shadow: -2px 2px 10px rgba(60, 60, 60, .6);
    background-color: #fff !important;
    border-radius: .625rem !important;
    font-size: 15px !important;
    font-weight: 400;
    margin: 0 10px;
    max-width: 300px;
    overflow: visible !important;
    padding: 0px 10px;
    position: relative;
    text-overflow: ellipsis;
    white-space: normal;
    align-items: center;
    cursor: pointer;
    display: flex
;
    flex-direction: row-reverse;
    height: 40px;
}

  .text-launch:after {
    border: 8px solid;
    border-color: transparent transparent transparent #fff !important;
    bottom: auto;
    content: " ";
    height: 0;
    left: auto;
    position: absolute;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
  }

  .open-tab-link {
    background-image: url(https://intaker.azureedge.net/new-dashboard/iconsChat/openTabWithShadow.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
    bottom: -38px;
    cursor: pointer;
    display: inline-block;
    height: 42px;
    position: absolute;
    width: 42px;
    /* background-color: black; */
    top: 80px;
    right: 160px;
  }

  .video-thumbnail {
    position: relative;
    width: 110px;
    height: 110px;
    padding: 5px;
    cursor: pointer;
    overflow: hidden;
}

  .video-circle {
    position: relative;
  /* Important for positioning the green            dot */
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: -2px 2px 8px rgba(60, 60, 60, .6);
  }

   #thumbnail-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

   .online-dot {
    position: absolute;
    bottom: 15px;
  /* Adjust this value based on where you want               the dot */
    right: 20px;
  /* Adjust this value based on where you want               the dot */
    width: 20px;
    height: 20px;
    background-color: #2ECC71;
    border-radius: 50%;
    border: 2px solid white;
  /* Optional: Adds a small white               border around the dot */
  }

    @media only screen and (max-width: 480px) {
    .chat-container {
        top: 80% !important;
    }
  
    .chat-widget {
        margin-top: -170px !important;
    }
  }

  @media (max-width: 430px) {
  .chat-widget{
  right: 0px;
  height: 100vh !important;
  width: 100% !important;
    border-radius: 0px;
    background-color: #fff;
    position: fixed;
    right: auto;
    z-index: 999;
    overflow: hidden;
    box-shadow: -5px 5px 8px rgba(60, 60, 60, .6);
    transform: translateY(0%) !important;
    border: 0px solid #737373;
    bottom: 0 !important;
    top: -1063% !important;
    
  }

  .video-background {
  height: 100vh !important;
  }
}

.chat-widget {
    display: none;
    height: 600px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background-color: #fff;
    position: fixed;
    bottom: 190px;
    right: 50px;
    z-index: 999;
    overflow: hidden;
    top: 50% !important;
    transform: translateY(-50%) !important;
    width: 350px !important;
    box-shadow: -5px 5px 8px rgba(60, 60, 60, .6);
    border: 1px solid #737373;
    margin-top: 0px !important;
  }

  .video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
    z-index: -1;
  }

  #background-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
  }

  .progress-bar-container {
    position: absolute;
    top: 0;
  /* Position at the top */
    left: 0;
    width: 100%;
    height: 4px;
  /* Adjust height as desired */
    background-color: rgba(255, 255, 255, 0.3);
  /* Background color for the container */
  }

  .progress-bar {
    width: 0;
    height: 100%;
    background-color: #e6b23d;
  /* Progress color */
    transition: width 0.1s linear;
  /* Smooth transition */
  }

 .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    display: none;
  /* Hidden by default */
    align-items: center;
    justify-content: center;
    z-index: 4;
  }
  
  .loading-content {
    text-align: center;
  }
  
  .loading-circle {
    position: relative;
    width: 120px;
  /* Adjust size as needed */
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .loading-border {
    position: absolute;
    top: 0;
    left: 30px;
    width: 100%;
    height: 100%;
    border-top: 4px solid #e6b23d;
  /* Color for the loading animation */
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  .loading-logo {
    width: 70px;
  /* Adjust as needed */
    position: relative;
  /* Ensure logo stays centered */
  left: 30px;
  }
  
  @keyframes spin {
    0% {
        transform: rotate(0deg);
    }
  
    100% {
        transform: rotate(360deg);
    }
  }

    .chat-header {
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    align-items: center;
    z-index: 3;
    padding: 10px;
  /* margin-top: 10px !important; */
    margin-right: -18px !important;
  }

    .move-video-to-corner #play-pause-btn, .pay-pause-btn {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }
  
  #play-pause-btn, .pay-pause-btn {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    margin-right: 15px;
  }

  img#play-pause-icon.play-option {
    margin-bottom: -100px;
    margin-left: 40px;
  }

    img#refresh-icon,
  img#play-pause-icon,
  img#mute-unmute-icon {
    width: 30px;
  }

   button#mute-unmute-btn {
    background-color: transparent;
    padding: 0;
    border: none;
    margin-right: auto;
    text-align: left;
  }

   #refresh-btn,
  #close-btn {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    margin-right: 10px;
  }

  button#refresh-btn {
      margin-right: 0px !important;
  }

  #close-btn {
    color: white;
    border-radius: 5px;
    font-size: 16px;
    position: relative;
  }

   img#close-icon {
    width: 30px;
  }

  .chat-content {
    position: relative;
    z-index: 1;
  /* padding: 20px; */
    color: rgb(0, 0, 0);
    overflow-y: auto;
    scrollbar-width: thin;
    box-sizing: border-box;
  /* margin-bottom: 10px; */
    padding: 45px 10px 0 15px !important;
height: 83% !important;
  }

  .Empty-container {
    height: 50% !important;
  }

.message {
    font-size: 16px;
    padding: 10px 0px;
    margin-bottom: 8px;
    border-radius: 20px;
    width: fit-content;
    word-wrap: break-word;
    position: relative;
    margin-right: 10px;
    max-width: 98%;
  }

  .message.bot-message {
    color: black;
    margin-right: auto;
    text-align: left;
  }

 .message .ot-message {
    color: rgb(0, 0, 0) !important;
    margin-right: auto;
    text-align: left;
    padding-left: 5px;
  }

   .message.user-message {
      overflow: hidden !important;
      max-width: 65% !important;
    background-color: hsla(0, 0%, 100%, 0.85);
    border: 2px solid #e6b23d;
    color: black;
    margin-left: 10px;
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .message.ot-message {
    color: white;
  }

  .chat-options {
    display: block;
    flex-direction: column;
    max-height: 1100px;
    overflow-y: initial;
  }

   .option-btn {
    text-align: left;
    background-color: hsla(0, 0%, 100%, 0.85);
    border: 2px solid #e6b23d;
    padding: 9px 14px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 20px;
    margin-bottom: 10px;
    width: fit-content;
    box-sizing: border-box;
    font-family: 'poppins' !important;
  }

   #product-options .option-btn:hover, .bef:hover, div#recommender-options .option-btn:hover, .option-btn:hover  {
      background-color: #e6b23d !important;
  }

  div#live-chat-options .option-btn, #situation-options .option-btn, .bef, div#recommender-options .option-btn, .option-btn {
      color: black !important;
  }

#situation-options .option-btn:hover, div#recommender-options .option-btn:hover, .bef:hover, #live-chat-options .option-btn:hover,
   #role-options, #state-options, .option-btn:hover, #product-options .option-btn:hover {
    color: white !important;
  }

   .footer {
    height: 7%;
    bottom: 0;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: white !important;
}

.poweredBox {
    display: flex !important;
    align-items: center;
}

  .powered-style {
    margin: 0 !important;
    color: rgba(39, 39, 39, .17);
}

   .img-powered {
    width: 100px;
    height: 20px;
    margin-top: 7px;
}

  #white-overlay {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 4;
  }`;
document.head.appendChild(style);

// Create the chat widget
const chatWidget = document.createElement('div');
chatWidget.innerHTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="poppinsfile.css"
        rel="stylesheet">
    <link rel="stylesheet" href="styl.css">
</head>

<body>
    <div class="chat-container">
        <div class="text-launcher">
            <h1 class="text-launch">👋 How can I help you?</h1>

            <a href="https://chatwidget.automatikpro.com/the-intake-bot" id="icw--avatar-direct-link" class="open-tab-link" target="_blank" rel="noopener"></a>
        </div>

        <div class="video-thumbnail" id="video-container" aria-label="Open chat widget">
            <div class="video-circle">
                <video id="thumbnail-video" autoplay loop muted>
                    <source
                        src="https://storage.googleapis.com/msgsndr/yMsNTtrF5fKA28L0OMsP/media/673052551f6e038775f486b9.mp4"
                        type="video/mp4">
                </video>
            </div>
            <span class="online-dot"></span> <!-- Green online dot -->
        </div>


        <div class="chat-widget" id="chat-widget" aria-hidden="true">
            <div class="video-background" id="video-background">
                <video id="background-video" autoplay loop muted>
                    <source src="https://storage.googleapis.com/msgsndr/yMsNTtrF5fKA28L0OMsP/media/673054c070d7a33a160f2140.mp4" type="video/mp4">
                </video>
                <div class="progress-bar-container">
                    <div class="progress-bar" id="progress-bar"></div>
                </div>
            </div>             
            <div id="loading-overlay" class="loading-overlay">
              <div class="loading-content">
                  <div class="loading-circle">
                      <div class="loading-border"></div>
                      <img src="https://storage.googleapis.com/msgsndr/o8yXFeC9dfjequgTmADj/media/671fca508468fa0f04d8e8b5.png" alt="Loading Logo" class="loading-logo">
                  </div>
                  <p>One moment please...</p>
              </div>
          </div>          
          
            <div class="chat-header" id="chat-header">
                <button id="play-pause-btn" class="control-btn" aria-label="Play/Pause">
                    <img id="play-pause-icon" class="control-btn" aria-label="Play/Pause"
                        src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb060cf9de91b118c93a66.png"
                        alt="Play/Pause Icon">
                </button>

                <button id="mute-unmute-btn" class="control-btn" aria-label="Mute/Unmute">
                    <img id="mute-unmute-icon"
                        src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0b2cc6a83988da4ff9fd.png"
                        alt="Mute/Unmute Icon">
                </button>

                <button id="refresh-btn" class="control-btn" aria-label="Refresh">
                    <img id="refresh-icon"
                        src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb04eaa256dd3e330dde51.png"
                        alt="Refresh Icon">
                </button>

                <button id="close-btn" aria-label="Close chat widget">
                    <img id="close-icon"
                        src="https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0456b8d5546df6dc3dac.png"
                        alt="Close Icon">
                </button>
            </div>

            <div class="chat-content" id="chat-content">
                <div class="Empty-container"></div>
                <div class="message ot-message">Hi 👋🏼 Welcome to Smith & Eulo Law Firm. How can we help you?</div>
                <div class="chat-options">
                    <button class="option-btn bef" onclick="selectOption('Assault & Battery', true)">Assault & Battery</button>
                    <button class="option-btn bef" onclick="selectOption('Violation of Probation/Parole/Community Control', true)">Violation of Probation/Parole/Community Control</button>
                    <button class="option-btn bef" onclick="selectOption('Expungement of Your Record', true)">Expungement of Your Record</button>
                    <button class="option-btn bef" onclick="selectOption('Domestic Violence', true)">Domestic Violence</button>
                    <button class="option-btn bef" onclick="selectOption('Possession of Drugs', true)">Possession of Drugs</button>
                    <button class="option-btn bef" onclick="selectOption('Federal Criminal Case', true)">Federal Criminal Case</button>
                    <button class="option-btn bef" onclick="selectOption('DWI / DUI', true)">DWI / DUI</button>
                    <button class="option-btn bef" onclick="selectOption('Possession of a Weapon', true)">Possession of a Weapon</button>
                    <button class="option-btn bef" onclick="selectOption('Burglary', true)">Burglary</button>
                    <button class="option-btn bef" onclick="selectOption('Child Abuse', true)">Child Abuse</button>
                    <button class="option-btn bef" onclick="selectOption('Sex Crimes', true)">Sex Crimes</button>
                    <button class="option-btn bef" onclick="selectOption('Manslaughter', true)">Manslaughter</button>
                    <button class="option-btn bef" onclick="selectOption('Child Pornography', true)">Child Pornography</button>
                    <button class="option-btn bef" onclick="selectOption('Robbery', true)">Robbery</button>
                    <button class="option-btn bef" onclick="selectOption('Harassment', true)">Harassment</button>
                    <button class="option-btn bef" onclick="selectOption('Clearing Criminal Record', true)">Clearing Criminal Record</button>
                    <button class="option-btn bef" onclick="selectOption('Prostitution', true)">Prostitution</button>
                    <button class="option-btn bef" onclick="selectOption('Drug Possession and Trafficking', true)">Drug Possession and Trafficking</button>
                    <button class="option-btn bef" onclick="selectOption('Other Criminal Cases', true)">Other Criminal Cases</button>
                    <button class="option-btn bef" onclick="selectOption('Car Accident', true)">Car Accident</button>
                    <button class="option-btn bef" onclick="selectOption('Divorce And Custody', true)">Divorce And Custody</button>
                    <button class="option-btn bef" onclick="selectOption('Buying Products', true)">Buying Products</button>
                    <button class="option-btn bef" onclick="selectOption('Buying Services', true)">Buying Services</button>
                    <button class="option-btn bef" onclick="selectOption('Child Special Needs', true)">Child Special Needs</button>
                </div>
            </div>
            <div class="footer">
                <div _ngcontent-pna-c93="" class="poweredBox"><p _ngcontent-pna-c93="" class="powered-style">Powered
                        by</p><img src="https://storage.googleapis.com/msgsndr/o8yXFeC9dfjequgTmADj/media/67193d949965e3aa9919d4a9.png" alt="" class="img-powered"></a></div>
            </div>
        </div>
    </div>
    <div id="white-overlay"></div>
    
    <script src="scrip.js"></script>
</body>

</html>`;
document.body.appendChild(chatWidget);
//Chat Widget Open
document.addEventListener("DOMContentLoaded", () => {
    const chatWidget = document.getElementById("chat-widget");
    const videoThumbnail = document.getElementById("video-container");
    const closeBtn = document.getElementById("close-btn");

    // Close chat and show thumbnail again
    closeBtn.addEventListener("click", () => {
        chatWidget.style.display = "none";
        videoThumbnail.style.display = "block";
    });

    // Optional: clicking the thumbnail opens the chat
    videoThumbnail.addEventListener("click", () => {
        chatWidget.style.display = "block";
        videoThumbnail.style.display = "none";
    });
});

//Play/Pause

document.addEventListener("DOMContentLoaded", () => {
    const playPauseBtn = document.getElementById("play-pause-btn");
    const playPauseIcon = document.getElementById("play-pause-icon");
    const backgroundVideo = document.getElementById("background-video");

    let isPlaying = true;

    playPauseBtn.addEventListener("click", () => {
        if (isPlaying) {
            backgroundVideo.pause();
            playPauseIcon.src = "https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0ca1f9de91588ec93e8c.png"; // play icon
        } else {
            backgroundVideo.play();
            playPauseIcon.src = "https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb060cf9de91b118c93a66.png"; // pause icon
        }
        isPlaying = !isPlaying;
    });
});

// Mute/Unmute

document.addEventListener("DOMContentLoaded", () => {
    const muteUnmuteBtn = document.getElementById("mute-unmute-btn");
    const muteUnmuteIcon = document.getElementById("mute-unmute-icon");
    const backgroundVideo = document.getElementById("background-video");

    muteUnmuteBtn.addEventListener("click", () => {
        if (backgroundVideo.muted) {
            backgroundVideo.muted = false;
            muteUnmuteIcon.src = "https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0d81f003010e66500af7.png"; // Unmuted icon
        } else {
            backgroundVideo.muted = true;
            muteUnmuteIcon.src = "https://storage.googleapis.com/msgsndr/aJYHtddTenz299BOqzfz/media/66eb0b2cc6a83988da4ff9fd.png"; // Muted icon
        }
    });
});

// Refresh
document.addEventListener("DOMContentLoaded", () => {
    const refreshBtn = document.getElementById("refresh-btn");
    const loadingOverlay = document.getElementById("loading-overlay");
    const progressBar = document.getElementById("progress-bar");

    refreshBtn.addEventListener("click", () => {
        // Show loader
        loadingOverlay.style.display = "flex";
        progressBar.style.width = "0%";

        // Animate progress bar to 100%
        let progress = 0;
        const interval = setInterval(() => {
            progress += 1;
            progressBar.style.width = progress + "%";

            if (progress >= 100) {
                clearInterval(interval);
                location.reload(); // Page refresh after progress completes
            }
        }, 15); // Adjust speed as needed
    });
});

