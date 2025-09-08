import React from 'react'
import QRCode from "react-qr-code";

const ScanCode = () => {
    return (
        <div>

            <QRCode
                size={260}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value='1234455656'
                viewBox={`0 0 230 230`}
            />
        </div>
    )
}

export default ScanCode