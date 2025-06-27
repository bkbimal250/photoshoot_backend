// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="bg-gray-100 py-20 px-4 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//           Bring the Studio to Your Home
//         </h1>
//         <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
//           Book high-quality photo shoots from the comfort of your home with our professional team.
//         </p>
//         <Link
//           to="/booking"
//           className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
//         >
//           Book a Shoot
//         </Link>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 px-4">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
//           <div className="text-center">
//             <img
//               src="https://media.istockphoto.com/id/1361217505/photo/portrait-of-happy-family-having-fun-at-park.jpg?s=2048x2048&w=is&k=20&c=RcmiOYNCOr7g5RG5Phd6U8liMLfcxgJS_51o_qOY1KQ="
//               alt="Family Shoot"
//               className="w-20 h-20 mx-auto mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Family Photos</h3>
//             <p className="text-gray-600">Capture your precious family moments at home.</p>
//           </div>
//           <div className="text-center">
//             <img
//               src="https://images.pexels.com/photos/17840127/pexels-photo-17840127/free-photo-of-birthday-decorations-around-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt="Baby Shoot"
//               className="w-20 h-20 mx-auto mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Baby Photography</h3>
//             <p className="text-gray-600">Adorable baby shoots with all props and lights.</p>
//           </div>
//           <div className="text-center">
//             <img
//               src="https://images.pexels.com/photos/32412740/pexels-photo-32412740/free-photo-of-beautiful-indian-wedding-couple-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt="Product Shoot"
//               className="w-20 h-20 mx-auto mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Product Photography</h3>
//             <p className="text-gray-600">Get crisp product shots for your online store.</p>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="bg-blue-600 py-16 px-4 text-center text-white">
//         <h2 className="text-3xl font-bold mb-4">Ready to Book Your Shoot?</h2>
//         <p className="mb-8 text-lg">We come to your home with everything needed for a stunning photo session.</p>
//         <Link
//           to="/booking"
//           className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
//         >
//           Start Booking
//         </Link>
//       </section>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import PhotoGrid from "../components/gallery/PhotoGrid";
import photos from "../assets/Photos.json";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Free Photo Shoot Photos</h1>
      <PhotoGrid photos={photos} />
    </div>
  );
};

export default Home;
