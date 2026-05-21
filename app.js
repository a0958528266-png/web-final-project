const courseList = document.getElementById("course-list");

function renderCourses(courses) {
  courseList.innerHTML = "";

  courses.forEach(course => {
    const div = document.createElement("div");

    div.className = "course-card";

    div.innerHTML = `
      <h2>${course.name}</h2>
      <p>課程代碼：${course.code}</p>
      <p>教授：${course.professor}</p>
      <p>評分：⭐ ${course.rating}</p>
      <p>${course.description}</p>
    `;

    courseList.appendChild(div);
  });
}

renderCourses(getCoursesSummary());


// 搜尋功能
document.getElementById("searchInput").addEventListener("input", e => {
  const result = searchCourses(e.target.value);
  renderCourses(result);
});