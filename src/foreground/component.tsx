import React from "react";
import axios from "axios";
import { MiniCard } from "./MiniCard";
import Draggable from "react-draggable"; // The default

export const Foreground: React.FC = () => {
  const [World, setWorld] = React.useState<any>("");
  const [Long, setLong] = React.useState<string>("");
  const [worldTrad, setworldTrad] = React.useState<string>("");
  const [Open, setOpen] = React.useState<boolean>(false);
  document.addEventListener("mouseup", () => {
    const selObj = window.getSelection();
    setWorld(selObj?.toString());
  });

  React.useEffect(() => {
    chrome.runtime.onMessage.addListener((action) => {
      setLong(action);
    });
  });

  React.useEffect(() => {
    if (World != "" && Long.length === 5) {
      axios
        .get(
          `https://api.mymemory.translated.net/get?q=${World}&langpair=${Long}`,
        )
        .then((response: any) =>
          setworldTrad(response?.data?.responseData?.translatedText),
        );
    }
    console.log(worldTrad);
  }, [World]);

  return (
    <Draggable>
      <div
        style={{
          position: "fixed",
          zIndex: 9999,
          bottom: "50px",
          right: "50px",
        }}
      >
        {Open ? <MiniCard World={World} worldTrad={worldTrad} /> : null}

        <div
          style={{
            borderRadius: "15px",
            height: "30px",
            width: "30px",
            fontSize: "1.5em",
            float: "right",
            textAlign: "center",
            background: "#4267b3",
            userSelect: "none",
          }}
          onClick={() => setOpen(!Open)}
        ></div>
      </div>
    </Draggable>
  );
};
