import React from "react";

export interface HomeProps {
  World: any;
  worldTrad: any;
}

export const MiniCard: React.FC<HomeProps> = ({ worldTrad }: HomeProps) => {
  return (
    <div
      style={{
        background: "#fff",
        width: "250px",
        height: "200px",
        color: "#000",
        textAlign: "center",
        overflowY: "auto",
        overflowX: "hidden",
        fontSize: "20px",
        borderRadius: "10%",
        border: "2px solid #4267b3",
        userSelect: "none",
      }}
    >
      <h1
        style={{
          display: "block",
          fontSize: "2em",
          margin: " 0px 0.67em",
          fontWeight: "bold",
        }}
      >
        tradwe
      </h1>
      <hr></hr>

      <p>{worldTrad}</p>
    </div>
  );
};
