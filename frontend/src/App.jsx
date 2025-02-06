import { useState } from "react";
import "./App.css";
import logo from "./assets/bg3.jpg";

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    return setCount(count + 1);
  }

  function MyButton({ count, onClick }) {
    return <button onClick={onClick}> {count} Clicked me!</button>;
  }

  return (
    <>
      <img
        className="avatar"
        src={homePage.imgPath}
        alt={"Image of " + homePage.name}
        style={{
          width: homePage.imgWidth,
          height: homePage.imgHight,
        }}
      />

      <h1>Welcome to {homePage.name}</h1>

      {/* {listItems} */}

      <span style={{ color: "royalblue", marginRight: "20px" }}>
        {homePage.currentDate}
      </span>

      <MyButton count={count} onClick={handleClick} />

      <MyButton count={count} onClick={handleClick} />
    </>
  );
}

const homePage = {
  name: "Maruti Jewelry",
  currentDate: new Date().toLocaleDateString(),
  imgPath: logo,
  imgHight: 300,
  imgWidth: 300,
};

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const listItems = products.map((ele, i) => {
  return (
    <li key={i} style={{ color: ele.isFruit ? "magenta" : "darkgreen" }}>
      {ele.title}
    </li>
  );
});
