// import React, { Children } from "react";
import React from "react";
import Button from "../Components/Button";
import "../Components/Buttons.css";
import "../App.css";

function Buttons() {
  const ThreeButtons = [
    {
      id: "1",
      theTitle: "جديده",
      Children: {
        icons: [
          { id: "1", icon: <i class="fa-solid fa-face-grin-stars"></i> },
          { id: "2", icon: <i class="fa-solid fa-face-grin-stars"></i> },
          { id: "3", icon: <i class="fa-solid fa-face-grin-stars"></i> },
        ],
        imgSrc: "",
      },
    },
    {
      id: "2",
      theTitle: "الأكثر قراءه",
      Children: {
        icons: [],
        imgSrc:
          "https://www.flowrista.com/Uploads/Product/068fc791-6f06-4ff1-9bc5-64254d3825f7.jpg",
      },
    },
    {
      id: "3",
      theTitle: "مقالات متميزه",
      Children: {
        icons: [
          { id: "1", icon: <i class="fa-solid fa-star"></i> },
          { id: "2", icon: <i class="fa-solid fa-star"></i> },
          { id: "3", icon: <i class="fa-solid fa-star"></i> },
        ],
        imgSrc:
          "https://images.ctfassets.net/i3tkg7dt3kro/1XF2psWQ0Jojnai0xV8UA3/908e131e986e6ef7ae855a97f1a0ae79/hero-white-flowers.jpg",
      },
    },
  ];
  return (
    <div className="allButtons">
      {ThreeButtons.map(function (ele) {
        return (
          <Button key={ele.id} theTitle={ele.theTitle}>
            {ele.Children.icons &&
              ele.Children.icons.map(function (elle) {
                return elle.icon;
              })}

            {ele.Children.imgSrc && (
              <img
                style={{ width: "120px" }}
                src={ele.Children.imgSrc}
                alt="pic of flower"
              />
            )}
          </Button>
        );
      })}
      {/* <Button theTitle="جديده">
        <div className="icons2">
          <i class="fa-solid fa-face-grin-stars"></i>
          <i class="fa-solid fa-face-grin-stars"></i>
          <i class="fa-solid fa-face-grin-stars"></i>
        </div>
      </Button> */}

      {/* <Button theTitle="الأكثر قراءه">
        <img
          style={{ width: "120px" }}
          src="https://www.flowrista.com/Uploads/Product/068fc791-6f06-4ff1-9bc5-64254d3825f7.jpg"
          alt="pic of flower"
        />
      </Button> */}

      {/* <Button theTitle="مقالات متميزه">
        <div className="icons2">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <img
          style={{ width: "100px" }}
          src="https://images.ctfassets.net/i3tkg7dt3kro/1XF2psWQ0Jojnai0xV8UA3/908e131e986e6ef7ae855a97f1a0ae79/hero-white-flowers.jpg"
          alt="pic of flower"
        />
      </Button> */}
    </div>
  );
}

export default Buttons;
