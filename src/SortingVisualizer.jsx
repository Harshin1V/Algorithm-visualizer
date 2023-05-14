import React, { useState, useEffect } from "react";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  // const [isSorting, setIsSorting] = useState(false);

  // Generate a new random array
  const generateArray = () => {
    const newArray = [];
    for (let i = 0; i < 20; i++) {
      newArray.push(randomIntFromInterval(5, 300));
    }
    setArray(newArray);
  };

  // const stopSorting = () => {
  //   // Stop the sorting process
  //   setIsSorting(false);
  //   generateArray();
  // };

  // Bubble Sort algorithm
  const bubbleSort = async () => {
    // setIsSorting(true);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        // Change color to indicate comparison
        arrayBars[j].style.backgroundColor = "red";
        arrayBars[j + 1].style.backgroundColor = "red";

        await sleep(100); // Delay for visualization

        if (array[j] > array[j + 1]) {
          // Swap elements
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          setArray([...array]);
        }

        // Revert color back to default
        arrayBars[j].style.backgroundColor = "#6181eb";
        arrayBars[j + 1].style.backgroundColor = "#6181eb";
      }

      // Indicate sorted elements
      arrayBars[array.length - i - 1].style.backgroundColor = "#3bf5a1";
    }
  };

  // Utility function to sleep for a given time
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const insertionSort = async () => {
    // setIsSorting(true);

    for (let i = 1; i < array.length; i++) {
      let j = i;
      while (j > 0 && array[j] < array[j - 1]) {
        // Swap the elements
        await sleep(50); // Delay to visualize the sorting process (optional)
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
        setArray([...array]);
        j--;
      }
    }

    // setIsSorting(false);
  };

  // const sleep = (ms) => {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // };

  // Utility function to generate a random number within a range
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    const generateArray = () => {
      const newArray = [];
      for (let i = 0; i < 20; i++) {
        newArray.push(randomIntFromInterval(5, 300));
      }
      setArray(newArray);
    };

    const randomIntFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    generateArray();
  }, []);

  return (
    <div className="sorting-visualizer">
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <div className="buttons-container">
        <button onClick={generateArray}>Generate New Array</button>

        <button onClick={bubbleSort}>Bubble Sort</button>
        <button onClick={insertionSort}>Insertion Sort</button>
      </div>
    </div>
  );
};

export default SortingVisualizer;
