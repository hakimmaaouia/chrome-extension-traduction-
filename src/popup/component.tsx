import React from "react";
import InputCountry from "./inputCountry";

export const Popup: React.FC = () => {
  const [tolong, settolang] = React.useState<string>("");
  const [fromlong, setfromlang] = React.useState<string>("");

  const gotTab = (tab: any) => {
    chrome.tabs.sendMessage(tab[0].id, fromlong + "|" + tolong);
  };
  React.useEffect(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, gotTab);
  }, [tolong, fromlong]);

  return (
    <div>
      <h3> select language</h3>
      <label>From</label>
      <InputCountry long={setfromlang} />
      <label>To</label>

      <InputCountry long={settolang} />
    </div>
  );
};
