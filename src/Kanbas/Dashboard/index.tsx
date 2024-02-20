import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";

function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses (3)</h2>
      <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mt-2">
          {courses.map((course) => (
            <div
              key={course._id}
              className="col d-flex justify-content-center align-items-center mb-4"
              style={{ width: 300 }}
            >
              <div className="card" style={{ width: 270 }}>
                <img
                  src={`/images/${course.image}`}
                  className="card-img-top"
                  style={{ height: 150 }}
                  alt={course.name}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.number} {course.name}
                  </Link>
                  <p className="card-text">Term/Year: Spring 2024</p>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;