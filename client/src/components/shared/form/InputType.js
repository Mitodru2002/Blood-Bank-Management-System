import React from "react";

const InputType = ({
  labelName,
  labelFor,
  value,
  onChange,
  inputType,
  name,
}) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor={labelFor} className="form-label">
          {labelName}
        </label>
        <input
          type={inputType}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputType;
