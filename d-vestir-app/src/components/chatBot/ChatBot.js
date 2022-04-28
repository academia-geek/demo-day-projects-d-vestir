import React from 'react'

const ChatBot = () => {

    (function(d, m){
        var kommunicateSettings = 
            {"appId":"386606d35ccdc7c98c7a0ecc3ab71eb6a","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */

  return (
    <></>
  )
}

export default ChatBot