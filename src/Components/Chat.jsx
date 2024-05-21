import React, { useEffect } from 'react'

function Chat() {
    useEffect(() => {
        (function (d, m) {
            var kommunicateSettings =
                { "appId": "3bacc149382cdec82aae4eebfe4df4f17", "popupWidget": true, "automaticChatOpenOnNavigation": true };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }, [])

    return (
        <div>
            <h1>This is My AI Chat Bot Page</h1>
        </div>
    )
}

export default Chat