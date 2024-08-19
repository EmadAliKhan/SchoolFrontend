// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Cursor, useTypewriter } from "react-simple-typewriter";

// const Navbar = () => {
//   const [text] = useTypewriter({
//     words: ["amila Educational Academy"],
//     loop: true,
//   });

//   const [activeLink, setActiveLink] = useState("");

//   const handleColor = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm sticky-top w-100">
//         <div className="container">
//           <NavLink className="navbar-brand fw-bold w-50 fs-4 text-primary" to="/">
//             J{text}
//             <span className="text-danger">
//               <Cursor />
//             </span>
//           </NavLink>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mx-auto ms-2 mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink
//                   className={`nav-link ${
//                     activeLink === "/" ? "text-danger" : "text-primary"
//                   }`}
//                   onClick={() => handleColor("/")}
//                   aria-current="page"
//                   to="/"
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className={`nav-link ps-3 ${
//                     activeLink === "/about" ? "text-danger" : "text-primary"
//                   }`}
//                   onClick={() => handleColor("/about")}
//                   to="/about"
//                 >
//                   About
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className={`nav-link ps-3 ${
//                     activeLink === "/contact" ? "text-danger" : "text-primary"
//                   }`}
//                   onClick={() => handleColor("/contact")}
//                   to="/contact"
//                 >
//                   Contact
//                 </NavLink>
//               </li>
//               <li className="nav-item dropdown">
//                 <span
//                   className="nav-link text-primary"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Portal
//                 </span>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link className="dropdown-item " to="/teacher">
//                       Teachers
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/admin">
//                       Admin
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className={`nav-link ps-3 ${
//                     activeLink === "/gallery" ? "text-danger" : "text-primary"
//                   }`}
//                   onClick={() => handleColor("/gallery")}
//                   to="/gallery"
//                 >
//                   Gallery
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className={`nav-link ps-3 ${
//                     activeLink === "/update" ? "text-danger" : "text-primary"
//                   }`}
//                   onClick={() => handleColor("/update")}
//                   to="/update"
//                 >
//                   Update
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Navbar = () => {
  const [text] = useTypewriter({
    words: ["amila Educational Academy"],
    loop: true,
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm sticky-top w-100">
        <div className="container">
          <NavLink className="navbar-brand fw-bold w-50 fs-4 text-primary" to="/">
            J{text}
            <span className="text-danger">
              <Cursor />
            </span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto ms-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link ps-3"
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? 'red' : 'rgb(13, 110, 253)',
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link ps-3"
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? 'red' : 'rgb(13, 110, 253)',
                  })}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link ps-3"
                  to="/contact"
                  style={({ isActive }) => ({
                    color: isActive ? 'red' : 'rgb(13, 110, 253)',
                  })}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <span
                  className="nav-link ps-3 text-primary"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Portal
                </span>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/teacher">
                      Teachers
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin">
                      Admin
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link ps-3"
                  to="/gallery"
                  style={({ isActive }) => ({
                    color: isActive ? 'red' : 'rgb(13, 110, 253)',
                  })}
                >
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link ps-3"
                  to="/update"
                  style={({ isActive }) => ({
                    color: isActive ? 'red' : 'rgb(13, 110, 253)',
                  })}
                >
                  Update
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
