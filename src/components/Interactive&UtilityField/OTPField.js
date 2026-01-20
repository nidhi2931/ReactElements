import React, { useState, useRef } from "react";

function OTPField() {
  const [otp, setOtp] = useState(["", "", ""]);
  const [maskedOtp, setMaskedOtp] = useState(["", "", "", ""]);
  const [alphaOtp, setAlphaOtp] = useState(["", "", "", ""]);
  const [readonlyOtp] = useState(["1", "2", "3", "4"]);

  const refs = useRef([]);
  const maskedRefs = useRef([]);
  const alphaRefs = useRef([]);

  const setters = {
    numeric: setOtp,
    masked: setMaskedOtp,
    alpha: setAlphaOtp,
  };

  const valuesMap = {
    numeric: otp,
    masked: maskedOtp,
    alpha: alphaOtp,
  };

  const refsMap = {
    numeric: refs,
    masked: maskedRefs,
    alpha: alphaRefs,
  };

  const handleChange = (val, index, type = "numeric") => {
    const regex =
      type === "alpha" ? /^[a-zA-Z0-9]?$/ : /^\d?$/;

    if (!regex.test(val)) return;

    const setter = setters[type];
    const currentValues = valuesMap[type];
    const activeRefs = refsMap[type];

    if (!setter || !currentValues) return;

    const newOtp = [...currentValues];
    newOtp[index] = val;
    setter(newOtp);

    if (val && index < newOtp.length - 1) {
      activeRefs.current[index + 1]?.focus();
    }
  };

  const handleBackSpace = (e, index, type) => {
    if (e.key !== "Backspace" || index === 0) return;

    const values = valuesMap[type];
    const activeRefs = refsMap[type];

    if (!values[index]) {
      activeRefs.current[index - 1]?.focus();
    }
  };

  const renderOtp = (values, type, refSet, inputType = "text") => (
    <div className="flex gap-2">
      {values.map((val, i) => (
        <input
          key={i}
          ref={(el) => (refSet.current[i] = el)}
          value={val}
          type={inputType}
          maxLength={1}
          onChange={(e) => handleChange(e.target.value, i, type)}
          onKeyDown={(e) => handleBackSpace(e, i, type)}
          className="w-12 h-12 text-center text-lg border rounded focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  );

  return (
    <div className="space-y-8 p-6 bg-white rounded shadow">
      {/* BASIC OTP */}
      <div>
        <label className="block mb-2 font-medium">Basic OTP</label>
        {renderOtp(otp, "numeric", refs)}
      </div>

      {/* MASKED OTP */}
      <div>
        <label className="block mb-2 font-medium">Masked OTP</label>
        {renderOtp(maskedOtp, "masked", maskedRefs, "password")}
      </div>

      {/* ALPHANUMERIC OTP */}
      <div>
        <label className="block mb-2 font-medium">Alphanumeric OTP</label>
        {renderOtp(alphaOtp, "alpha", alphaRefs)}
      </div>

      {/* READ ONLY OTP */}
      <div>
        <label className="block mb-2 font-medium">Read Only OTP</label>
        <div className="flex gap-2">
          {readonlyOtp.map((v, i) => (
            <input
              key={i}
              value={v}
              readOnly
              className="w-12 h-12 text-center text-lg border rounded bg-gray-100"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OTPField;
