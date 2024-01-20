import React from "react";

const Dashboard = () => {
  return <div>Dashboard Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsum dolorum ipsa voluptas illum. Perspiciatis maiores soluta iusto distinctio, totam libero, placeat quis odit repellat reiciendis ratione, expedita neque facilis!</div>;
};

export default Dashboard;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Base } from "./types/Base";

// const App = () => {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState<{ name: string }[]>([]);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get<Base<{ name: string }[]>>("/api");
//         const data = res.data;
//         setData(data.data);
//         console.log(data.message);
//       } catch (error) {
//         console.log(error);
//         setIsError(true);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getData();
//   }, []);

//   if (loading) {
//     return <>Loading...</>;
//   }

//   if (isError) {
//     return <>Something went wrong!</>;
//   }

//   return (
//     <div>
//       {data && data.length > 0 ? (
//         <ul>
//           {data.map((user, idx) => (
//             <li key={idx}>{user.name}</li>
//           ))}
//         </ul>
//       ) : (
//         "Empty List"
//       )}
//     </div>
//   );
// };

// export default App;
