import { useRef, useState } from "react";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

const Body = () => {
  // Storage array
  let data = ["", "", "", "", "", "", "", "", ""];
  // Count and setCount variables to define state of mouse click.
  let [count, setCount] = useState(0);

  // To Lock and Unlock the board for playing.
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);

  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let boxArr = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  // Functionality toggle: On click, change the box's image to circle or cross.
  const toggle = (e, index) => {
    // Check if state is locked. If yes, return 0. Lock the board
    if (lock) {
      return 0;
    }

    // If my count is even, i.e, 2, 4, 6, 8  we use X. This is to map on clicking what image should come.
    else if (count % 2 === 0) {
      //Setting mouse click for e event. Whichever box is clicked, image is changed accordingly.
      e.target.innerHTML = `<img src = '${circle_icon}'>`;
      //Manipulating data array for winner function.
      data[index] = "o";
      // Setting count to + 1 for every click.
      setCount[++count];
    }
    // If count is odd, maybe 0, we start with circle. Or even if number is 1, 3, 5.
    else {
      e.target.innerHTML = `<img src = '${cross_icon}'>`;
      data[index] = "x";
      setCount[++count];
    }
    checkWin();
  };

  // Function to check all possible win conditions
  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] != "") {
      win(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] != "") {
      win(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] != "") {
      win(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] != "") {
      win(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] != "") {
      win(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] != "") {
      win(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] != "") {
      win(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] != "") {
      win(data[6]);
    }
  };

  // If won, win function will be called with setting the state of the board to "locked";
  const win = (winner) => {
    setLock(true);
    if (winner === "o") {
      titleRef.current.innerHTML = `"Congratulations: <img src = '${circle_icon}'>wins`;
    } else if (winner === "x") {
      titleRef.current.innerHTML = `"Congratulations: <img src = '${cross_icon}'>wins`;
    } else {
      titleRef.current.innerHTML = `"Oops! Game over."`;
    }
  };

  // Reset function
  const reset = () => {
    data = ["", "", "", "", "", "", "", "", ""];
    setLock(false);
    titleRef.current.innerHTML = "Tic Tac Toe"
    boxArr.map((e) => {
      e.current.innerHTML = "";
    });
  };

  return (
    <div>
      <div className="container">
        <h1 className="title-h1" ref={titleRef}>
          Tic-Tac-Toe
        </h1>
        <div className="board">
          <div className="row row-1">
            <div
              className="box"
              ref={box1}
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></div>
            <div
              className="box"
              ref={box2}
              onClick={(e) => {
                toggle(e, 1);
              }}
            ></div>
            <div
              className="box"
              ref={box3}
              onClick={(e) => {
                toggle(e, 2);
              }}
            ></div>
          </div>
          <div className="row row-2">
            <div
              className="box"
              ref={box4}
              onClick={(e) => {
                toggle(e, 3);
              }}
            ></div>
            <div
              className="box"
              ref={box5}
              onClick={(e) => {
                toggle(e, 4);
              }}
            ></div>
            <div
              className="box"
              ref={box6}
              onClick={(e) => {
                toggle(e, 5);
              }}
            ></div>
          </div>
          <div className="row row-3">
            <div
              className="box"
              ref={box7}
              onClick={(e) => {
                toggle(e, 6);
              }}
            ></div>
            <div
              className="box"
              ref={box8}
              onClick={(e) => {
                toggle(e, 7);
              }}
            ></div>
            <div
              className="box"
              ref={box9}
              onClick={(e) => {
                toggle(e, 8);
              }}
            ></div>
          </div>
        </div>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Body;
