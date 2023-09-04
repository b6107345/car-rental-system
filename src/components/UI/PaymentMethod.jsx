import React, { useState } from 'react';
import QRCode from 'qrcode.react';


import "../../styles/payment-method.css";

const PaymentMethod = () => {
   const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <QRCode value={text} />
    </div>
  );
};

export default PaymentMethod;
