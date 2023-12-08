import { useState, useEffect } from 'react';

function fakeFetchColors() {
  return Promise.resolve(['red', 'green', 'blue']);
}

function LoadableColorList() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const colorArr = await fakeFetchColors();
        setColors(colorArr);
      } catch (e) {
        console.log(e);
      }
    };
    fetchColors();
  }, []);

  return (
    <ul>
      {colors.map((color) => (
        <li key={color}>{color}</li>
      ))}
    </ul>
  );
}

export default LoadableColorList;
