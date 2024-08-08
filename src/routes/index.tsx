import { createFileRoute, useNavigate } from "@tanstack/react-router";
import InputUI from "../components/InputUI";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});
import useStoreAlert from "../hooks/useStore";

interface loginDataProps {
  account: string;
  password: string;
}

function HomeComponent() {
  const navigate = useNavigate({ from: "/" });
  const { alert } = useStoreAlert();

  const [loginData, setLoginData] = useState<loginDataProps>({
    account: "rex@gmail.com",
    password: "Rex123456",
  });

  const handleAccountChange = (value: string) => {
    setLoginData((prev) => ({ ...prev, account: value }));
  };
  const handlePasswordChange = (value: string) => {
    setLoginData((prev) => ({ ...prev, password: value }));
  };
  const handleSubmit = () => {
    if (loginData.account === "" && loginData.password === "") {
      alert("error", "請填寫資料", "");
    } else if (
      loginData.account === "rex@gmail.com" &&
      loginData.password === "Rex123456"
    ) {
      alert("success", "登入成功", "歡迎使用 AI-Rewriting 系統", 5000);
      navigate({ to: "/user/input" });
    } else {
      alert("error", "帳號密碼錯誤", "請重新輸入");
    }
  };

  return (
    <div className="h-screen w-screen bg-primary">
      <div className="absolute left-1/2 top-1/2 mx-auto flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-4 rounded-3xl border-[1px] border-primary bg-white px-10 py-10 drop-shadow-2xl">
        <h3 className="text-prwimary mb-4 text-3xl font-medium">登入</h3>
        <InputUI
          defaultValue="rex@gmail.com"
          onValueChange={handleAccountChange}
          label="帳號"
          type="text"
          validationRules={{
            required: "此欄位不能為空",
            minLength: [5, "帳戶至少需要5個字符"],
            maxLength: [20, "帳戶不能超過20個字符"],
            pattern: [
              /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              "請輸入有效的email",
            ],
          }}
        />
        <InputUI
          defaultValue="Rex123456"
          onValueChange={handlePasswordChange}
          label="密碼"
          type="password"
          validationRules={{
            required: "此欄位不能為空",
            minLength: [6, "密碼至少需要6個字符"],
            maxLength: [20, "密碼不能超過20個字符"],
            pattern: [
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
              "須包含大寫英文字母、小寫英文字母、數字",
            ],
          }}
        />
        <button
          className="mt-4 rounded-lg bg-buttonBackground px-6 py-3 text-white hover:bg-buttonHover"
          onClick={handleSubmit}
        >
          登入
        </button>
      </div>
    </div>
  );
}
