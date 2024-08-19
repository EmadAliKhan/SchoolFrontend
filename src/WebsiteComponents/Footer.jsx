import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

const Footer = () => {
  return (
    <>
      <div className="mt-5">
        <footer
          className="text-white text-center text-lg-start bg-primary"
          style={{
            height:"100vh" ,
            backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/02/24/02/51/1000_F_224025108_Qps6nz7culYDkGEsWPgn0Sl4d6Cp4wfL.jpg')`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="container p-4 w-100">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h4 className="text-uppercase mb-4 fw-bold">
                JAMILA EDUCATONAL ACADEMY 
                </h4>
                <p>
                The <span class="text-dark fw-bold">JAMILA EDUCATONAL ACADEMY</span> admits students of any race, color, national and ethnic origin to all the rights, privileges, programs, and activities generally accorded or made available to students at the school.
                </p>
                {/* <p>
                It does not discriminate on the basis of race, color, national and ethnic origin in administration of its educational policies, admissions policies, scholarship and loan programs, and athletic and other school-administered programs.
                </p> */}
                <div className="mt-4">
                  <a type="button">
                    {" "}
                    <FacebookIcon className="fs-2" />
                  </a>
                  <a type="button">
                    <TwitterIcon className="fs-2 " />
                  </a>
                  <a type="button">
                    <InstagramIcon className="fs-2 " />
                  </a>
                  <a type="button">
                    <LinkedInIcon className="fs-2 " />
                  </a>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="formControlLg"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="formControlLg">
                    Search
                  </label>
                </div>
                <ul
                  className="fa-ul list-unstyled"
                  style={{ marginLeft: "1.1em" }}
                >
                  <li className="mb-3">
                    <span className="fa-li">
                      <HomeIcon />
                    </span>
                    <span className="ms-2">R-54,55 Sector 2B Lines Area</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <MailIcon />
                    </span>
                    <span className="ms-2">emadalikhan5.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <CallIcon />
                    </span>
                    <span className="ms-2">+92 359250342</span>
                  </li>
                </ul>
              </div>
             
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Opening hours</h5>
                <table className="table text-center text-white">
                  <tbody className="fw-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 1am</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>Off</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            
            </div>
          
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
