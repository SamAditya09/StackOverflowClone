// import { useState, useEffect } from "react";

// const Widget = () => {
//   const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     fetch(
//       "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow"
//     )
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data.items[0].link);
//         // setPhotos(data);
//       });
//   }, []);
//   return (
//     <div>
//       {photos.map((photo) => (
//         <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
//       ))}
//     </div>
//   );
// };
// export default Widget;
