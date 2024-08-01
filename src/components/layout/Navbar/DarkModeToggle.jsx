import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "light") {
      document.querySelector("html")?.classList.remove("dark");
    } else {
      document.querySelector("html")?.classList.add("dark");
    }
  }, [theme]);

  return (
    <input
      type="checkbox"
      className="toggle toggle-sm [--tglbg:black] bg-whiteMode-bg hover:bg-slate-50"
      onClick={changeTheme}
      checked={theme === "dark"}
    />
  );
};

export default DarkModeToggle;
