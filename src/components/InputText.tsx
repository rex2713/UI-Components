import { useState } from "react";

type ValidationRule = {
  required?: string;
  minLength?: [number, string];
  maxLength?: [number, string];
  pattern?: [RegExp, string];
};
interface InputTextProps {
  text: string;
  type: string;
  onValueChange: (value: string) => void;
  validationRules?: ValidationRule;
}

const InputText: React.FC<InputTextProps> = ({
  text,
  type,
  onValueChange,
  validationRules,
}) => {
  const [placeholder, setPlaceholder] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  //驗證規則，可新增
  const validateInput = (value: string): string => {
    if (!validateInput) return "";
    if (validationRules?.required && value.trim() === "") return validationRules?.required;
    if (validationRules?.minLength && value.length < validationRules.minLength[0]) return validationRules?.minLength[1];
    if (validationRules?.maxLength && value.length > validationRules.maxLength[0]) return validationRules?.maxLength[1];
    if (validationRules?.pattern && !validationRules.pattern[0].test(value)) return validationRules?.pattern[1];
    return "";
  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === "") setPlaceholder("請輸入" + text);
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === "") setPlaceholder("");
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onValueChange(value);
    setErrorMsg(validateInput(value));
  };

  return (
    <div className="inputContainer relative flex flex-col">
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`inputText rounded-md border-[1px] bg-transparent bg-white px-2 py-1 font-light outline-none hover:border-inputBorderHover ${errorMsg ? "!border-red-500" : "border-inputBorder"} focus:border-inputBorderFocus sm:min-w-[300px] lg:min-w-[400px]`}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <span
        className={`inputLabel pointer-events-none absolute left-2 top-[6px] inline-block transform text-base font-light transition-all duration-300 ${errorMsg && "!text-red-500"}`}
      >
        <span className="text-red-600">＊</span>
        {text}
      </span>
      {errorMsg && (
        <span className="pl-4 pt-1 text-sm font-light text-red-500">
          {errorMsg}
        </span>
      )}
    </div>
  );
};

export default InputText;
