import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Line } from "rc-progress";
import Footer from "../../Component/student/Footer";

const MyEnrollment = () => {
  const { enrolledCourses, calculateCourseDuration, navigate } = useContext(AppContext);
  const [progressarray, setProgressArray] = useState([
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 4, totalLectures: 10 },
    { lectureCompleted: 6, totalLectures: 12 },
    { lectureCompleted: 1, totalLectures: 8 },
    { lectureCompleted: 3, totalLectures: 3 },
    { lectureCompleted: 5, totalLectures: 20 },
    { lectureCompleted: 7, totalLectures: 25 },
    { lectureCompleted: 9, totalLectures: 30 },
    { lectureCompleted: 11, totalLectures: 35 },
    { lectureCompleted: 13, totalLectures: 40 },
    { lectureCompleted: 15, totalLectures: 45 },
    { lectureCompleted: 17, totalLectures: 50 },
    { lectureCompleted: 19, totalLectures: 19 },
    { lectureCompleted: 21, totalLectures: 60 },
    { lectureCompleted: 23, totalLectures: 65 },
    { lectureCompleted: 25, totalLectures: 70 },
    { lectureCompleted: 27, totalLectures: 75 },
    { lectureCompleted: 29, totalLectures: 80 },
    { lectureCompleted: 31, totalLectures: 85 },
  ]);

  return (
    <>
      <div className="md:px-36 px-8 pt-10">
        <h1 className="text-2xl font-semibold">My Enrollment</h1>
        <table className="md:table-auto table-fixed w-full overflow-hidden border mt-10">
          <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden">
            <tr>
              <th className="px-4 py-3 font-semibold truncate">Course</th>
              <th className="px-4 py-3 font-semibold truncate">Duration</th>
              <th className="px-4 py-3 font-semibold truncate">Completed</th>
              <th className="px-4 py-3 font-semibold truncate">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 ">
            {enrolledCourses.map((course, index) => (
              <tr key={index} className="border-b border-gray-500/20">
                <td className="md:px-4 pl-2 py-3 flex items-center space-x-3">
                  <img
                    src={course.courseThumbnail}
                    alt=""
                    className="w-14 sm:w-24"
                    md:w-28
                  />
                  <div className="flex-1">
                    <p className="mb-1 max-sm:text-sm">{course.courseTitle}</p>
                    <Line strokeWidth={2} percent={progressarray[index] ? (progressarray[index].lectureCompleted * 100)/progressarray[index].totalLectures : 0} className="bg-gray-300" />
                  </div>
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  {calculateCourseDuration(course)}
                </td>
                <td className="px-4 py-3 max-sm:hidden">
                  {progressarray[index] &&
                    `${progressarray[index].lectureCompleted} / ${progressarray[index].totalLectures}`}{" "}
                  <span>Lectures</span>
                </td>
                <td>
                  <button
                  onClick={()=> navigate('/player/' +course._id)}
                    className={`px-4 py-2 rounded cursor-pointer text-white ${
                      progressarray[index] &&
                      progressarray[index].lectureCompleted ===
                        progressarray[index].totalLectures
                        ? "bg-green-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {progressarray[index] &&
                    progressarray[index].lectureCompleted ===
                      progressarray[index].totalLectures
                      ? "Completed"
                      : "On Going"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default MyEnrollment;
