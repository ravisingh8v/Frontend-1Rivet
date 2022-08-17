const students = [
    {
      name: "ravi",
      subject: "html",
    },
    {
      name: "samkeet",
      subject: "css",
    },
  ];
  
  function enrollStudent(student,callback) {
    setTimeout(function () {
      students.push(student);
      console.log('student enrolled');
      callback();
    }, 4000);
  }
  




  function getStudents() {
    setTimeout(function () {
      let str = "";
      students.forEach(function (student) {
        str += `<li>${student.name}</li><ul><li>${student.subject}</li></ul>`;
      });
  
      document.getElementById("student").innerHTML = str;
      console.log('student fetched');
    }, 3000);
  }
  let newStudent = { name: "nikunj", subject: "Frontend"};

  enrollStudent((newStudent),getStudents);

  