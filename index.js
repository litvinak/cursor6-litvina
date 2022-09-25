const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

 //Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. 

  function getSubjects(students) {
    let subject = [];
    for(let key in students.subjects) {
        let newArr = key.slice(0, 1).toUpperCase() + (key.slice(1).toLowerCase());
        subject.push(newArr.replace(/_/gi, ' '));
    }
    console.log(subject);
  }

  getSubjects(students[0]);




  //Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.

  function getAverageMark(students) {
    let marks = Object.values(students.subjects).flat();

    let sum = marks.reduce((sum, curr) => sum + curr)

    let newArr = (sum / marks.length).toFixed(2);
    console.log(newArr);
  }

  getAverageMark(students[1]);



//  Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – 
//  яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання).
//  Пoвинна бути виведена інформація: курс, ім'я, середня оцінка.

function getStudentInfo(student) {
    let info = {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student)

    }
    console.log(info);
}

getStudentInfo(students[2])



//Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

function getStudentsNames(students) {
    let arr = students.map(obj => obj.name).sort()
    console.log(arr);
}

getStudentsNames(students)

//Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students) {
    let bestMark = 0;
    let bestStudent = null;

    students.forEach(function(element, i, students) {
        if(getAverageMark(element) > bestMark) {
            bestMark = getAverageMark(element);
            bestStudent = element.name;
        }
      });
    console.log(bestStudent);
    
}

getBestStudent(students);