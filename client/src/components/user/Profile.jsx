
import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { userProfile } = useContext(AppContext);

  if (!userProfile) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div style={{ background: "#f1f3f6", minHeight: "90vh", padding: "40px 0" }}>
      <div className="container d-flex justify-content-center">

        <div
          className="bg-white shadow-lg rounded-4 p-4"
          style={{ width: "550px" }}
        >

          {/* Header */}
          <div className="text-center mb-4">

            <img
              src={userProfile?.image}
              alt="profile"
              className="rounded-circle shadow"
              style={{
                width: "110px",
                height: "110px",
                objectFit: "cover",
                border: "4px solid #0d6efd"
              }}
            />

            <h4 className="mt-3 mb-1 text-black">{userProfile?.name}</h4>
            <p className="text-muted  text-black">{userProfile?.email}</p>

          </div>

          <hr />

          {/* Profile Info */}

          <div className="row mb-3">
            <div className="col-4 fw-bold text-muted">Name</div>
            <div className="col-8 text-black">{userProfile?.name}</div>
          </div>

          <div className="row mb-3">
            <div className="col-4 fw-bold text-muted">Email</div>
            <div className="col-8 text-black">{userProfile?.email}</div>
          </div>

          <div className="row mb-4">
            <div className="col-4 fw-bold text-muted">User ID</div>
            <div className="col-8 text-black">{userProfile?._id}</div>
          </div>

          {/* Buttons */}

          <div className="d-flex gap-2">

            <button
              onClick={() => navigate("/edit/profile")}
              className="btn btn-primary w-100"
            >
              Edit Profile
            </button>

            <button
              onClick={() => navigate("/")}
              className="btn btn-outline-secondary w-100"
            >
              Back
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;







