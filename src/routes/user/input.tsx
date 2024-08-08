import { createFileRoute } from "@tanstack/react-router";
import InputUI from "../../components/InputUI";
import Parmeter from "../../components/Parmeter";
import SelectUI from "../../components/SelectUI";
import { useState } from "react";

export const Route = createFileRoute("/user/input")({
  component: InputComponent,
});

function InputComponent() {
  const [selectValue, setSelectValue] = useState("");

  const inputParams = [
    { title: "label", description: "輸入匡名稱" },
    { title: "type", description: "輸入匡類別" },
    { title: "defaultValue", description: "預設輸入值" },
    { title: "onValueChange", description: "handleChange函式" },
    {
      title: "validationRules",
      description: `{ required,minLength,maxLength,pattern }`,
    },
  ];

  const selectParams = [
    { title: "options", description: "選項列表" },
    { title: "defaultValue", description: "預設選項" },
    { title: "currentValue", description: "目前選中選項" },
    { title: "onValueChange", description: "handleChange函式" },
  ];
  const handleInputChange = () => {};
  const handleSelectChange = (value: string) => {
    setSelectValue(value);
  };
  return (
    <div className="w-full bg-buttonDisabled">
      <div className="componentContainer">
        <h3 className="componentTitle">Input</h3>
        <Parmeter params={inputParams} />
        <span>
          範例：
          <code>{`<InputText label="測試" type="text" validationRules={{ minLength: [3, "需大於三個字符"] }} />`}</code>
        </span>
        <InputUI
          label="測試"
          type="text"
          onValueChange={handleInputChange}
          validationRules={{ minLength: [3, "需大於三個字符"] }}
        />
      </div>
      <div className="componentContainer">
        <h3 className="componentTitle">Select</h3>
        <Parmeter params={selectParams} />
        <span>
          範例：
          <code>{`<SelectUI options={["測試1", "測試2", "測試3", "測試4", "測試5"]} onValueChange={handleSelectChange} currentValue={selectValue} defaultValue="請選擇" />`}</code>
        </span>
        <div className="w-full px-[20%]">
          <SelectUI
            options={["測試1", "測試2", "測試3", "測試4", "測試5"]}
            onValueChange={handleSelectChange}
            currentValue={selectValue}
            defaultValue="請選擇"
          />
        </div>
      </div>
    </div>
  );
}
