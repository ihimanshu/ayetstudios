import "./App.css";
import Card from "./card/Card";
import auto from "./images/Automobiles.png";
import life from "./images/Lifestyle.png";
import food from "./images/Food.png";
import tech from "./images/Technology.png";

function App() {
  const data = [
    {
      heading: "Automobiles",
      lable: "New",
      lable_state: true,
      card_img: auto,
      clock: "2 Minutes",
      help: "3 Qualifications",
    },
    {
      heading: "Lifestyle",
      lable: "8 completes left",
      lable_state: false,
      card_img: life,
      clock: "2 Minutes",
      help: "3 Qualifications",
    },
    {
      heading: "Food",
      lable: "8 completes left",
      lable_state: false,
      card_img: food,
      clock: "2 Minutes",
      help: "3 Qualifications",
    },
    {
      heading: "Automobiles",
      lable: "8 completes left",
      lable_state: false,
      card_img: auto,
      clock: "2 Minutes",
      help: "3 Qualifications",
    },
    {
      heading: "Technology",
      lable: "New",
      lable_state: true,
      card_img: tech,
      clock: "2 Minutes",
      help: "3 Qualifications",
    },
    {
      heading: "Food",
      lable: "New",
      lable_state: true,
      card_img: food,
      clock: "2 Minutes",
      help: "3 Qualifications",
    },
    {
      heading: "Lifestyle",
      lable: "New",
      lable_state: true,
      card_img: life,
      clock: "2 Minutes",
      help: "3 Qualifications",
    },
    {
      heading: "Technology",
      lable: "8 completes left",
      lable_state: false,
      card_img: tech,
      clock: "2 Minutes",
      help: "3 Qualifications",
    },
  ];
  return (
    <div className="app-wrapper mx-auto">
      <div className="grid grid-cols-2 gap-4">
        {data.map((d, i) => (
          <Card key={i} data={d} />
        ))}
      </div>
    </div>
  );
}

export default App;
