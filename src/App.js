// import logo from "./logo.svg";
// import "./App.css";
// import image1 from "./img/foto1.jpg";
// import image2 from "./img/foto2.jpg";
// import image3 from "./img/foto3.jpg";
// import image4 from "./img/foto4.jpg";
// import image5 from "./img/foto5.jpg";
// import { useState } from "react";

// function App() {
//   const [isActive, setIsActive] = useState(true);
//   const onClickHandler = (event) => {
//     setIsActive(!isActive);
//   };

//   const grid = [
//     {
//       id: 1,
//       img: image1,
//       name: "Ben",
//       isActive: isActive,
//     },
//     {
//       id: 2,
//       img: image2,
//       name: "Ben",
//       isActive: isActive,
//     },
//     {
//       id: 3,
//       img: image3,
//       name: "Ben",
//     },
//     {
//       id: 4,
//       img: image4,
//       name: "Ben",
//     },
//     {
//       id: 5,
//       img: image5,
//       name: "Ben",
//     },
//   ];

//   return (
//     <div className="container">
//       {grid.map((photo) => (
//         <div
//           onClick={onClickHandler}
//           className={photo.isActive ? "active" : "not"}
//           style={{
//             backgroundImage: `url(${photo.img})`,

//             backgroundRepeat: "no-repeat",
//           }}
//           key={photo.id}
//         >
//           <h3>{photo.name}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
import logo from "./logo.svg";
import "./App.css";
import image1 from "./img/foto1.jpg"
import image2 from "./img/foto2.jpg"
import image3 from "./img/foto3.jpg"
import image4 from "./img/foto4.jpg"
import image5 from "./img/foto5.jpg"
import { useState } from "react";

function App() {
  const [activePhotoId, setActivePhotoId] = useState(null);

  const onClickHandler = (photoId) => {
    setActivePhotoId(photoId === activePhotoId ? null : photoId);
  };

  const grid = [
    {
      id: 1,
      img: image1,
      name: "Sadece Engin :D",
    },
    {
      id: 2,
      img: image2,
      name: "Engin ve Nisa",
    },
    {
      id: 3,
      img: image3,
      name: "Konserde Engin ve Nisa",
    },
    {
      id: 4,
      img: image4,
      name: "Engin ve Nisa",
    },
    {
      id: 5,
      img: image5,
      name: "Konser",
    },
  ];

  return (
    <div className="container">
      {grid.map((photo) => (
        <div
          onClick={() => onClickHandler(photo.id)}
          className={activePhotoId === photo.id ? "active" : "not"}
          style={{
            backgroundImage: `url(${photo.img})`,
            backgroundRepeat: "no-repeat",
          }}
          key={photo.id}
        >
          <h3>{photo.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
