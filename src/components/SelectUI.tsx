import { useState, useRef, useEffect } from "react";

interface SelectUIProps {
  options: string[];
  defaultValue: string;
  currentValue: string;
  onValueChange: (value: string) => void;
}

const SelectUI: React.FC<SelectUIProps> = ({
  options,
  defaultValue,
  currentValue,
  onValueChange,
}) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setSelectOpen(!selectOpen);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node))
      setSelectOpen(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div ref={selectRef}>
        <div className="flex h-10 w-full justify-between rounded-md border-2 border-primary drop-shadow-md">
          <div className={`pl-2 pt-1 ${!currentValue && "text-gray-500"}`}>
            {currentValue ? currentValue : defaultValue}
          </div>
          {selectOpen ? (
            <i
              onClick={handleClick}
              className="bi bi-caret-up-fill cursor-pointer pr-2 pt-1 text-primary"
            ></i>
          ) : (
            <i
              onClick={handleClick}
              className="bi bi-caret-down-fill cursor-pointer pr-2 pt-1 text-primary"
            ></i>
          )}
        </div>
        <div
          className={`mt-[1px] w-full overflow-hidden rounded-md bg-gray-200 drop-shadow-md ${selectOpen ? "max-h-[1000px] transition-all duration-1000 ease-in" : "max-h-0"}`}
        >
          <div className="flex flex-col gap-y-1 py-2">
            {options.map((item, index) => (
              <div
                onClick={() => {
                  onValueChange(item);
                  setSelectOpen(false);
                }}
                key={index + item}
                className="cursor-pointer px-4 hover:bg-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectUI;
