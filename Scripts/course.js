const courses = {
    "myCourses":[
        {"name":"Introduction to Programming (Java)", "level":"1", "code":"CST7116", "description":"This course provides an introduction to programming concepts and basic coding principles.", "image":"JAVA.png"},
        {"name":"Introduction to Database", "level":"1", "code":"CST7215", "description":"This course provides an introduction to database concepts.", "image":"Database.png"},
        {"name":"Computer Essentials", "level":"1", "code":"CST7101", "description":"This course provides an introduction to computer essentials.", "image":"CE.png"},
        {"name":"Technical Mathematics for Computer Science", "level":"1", "code":"MAT7100", "description":"This course provides technical mathematics.", "image":"Math.png"},
        {"name":"College and Career Success", "level":"1", "code":"PRL7532", "description":"This course provides an introduction to college and career success.", "image":"Success.png"},
        {"name":"Object-Oriented Programming (Java)", "level":"2", "code":"CST7284", "description":"This course provides Object-Oriented Programming principles.", "image":"JAVA2.png"},
        {"name":"Database Systems", "level":"2", "code":"CST7355", "description":"This course provides database systems.", "image":"Database2.png"},
        {"name":"Operating Systems Fundamentals (Linux)", "level":"2", "code":"CST7102", "description":"This course provides an introduction to Linux concepts.", "image":"Linux.png"},
        {"name":"Web Programming", "level":"2", "code":"CST7285", "description":"This course provides an introduction to web programming concepts and basic coding principles.", "image":"Web.png"},
        {"name":"World Religious", "level":"2", "code":"GED5006", "description":"This course provides an introduction to world religious.", "image":"Religious.png"},
        {"name":"Technical Communication for Engineering Technologies", "level":"2", "code":"ENL7019", "description":"This course provides technical communication principles.", "image":"Communication.png"}
    ]
}

function showCourses(event) {
    // get user's input value
    let courseName = document.getElementById("query").value;
    let courseLevel = document.getElementById("filter-level").value;
    let courseSort = document.getElementById("sort-level").value;

    let choiceCourses = [];

    // choose the data according to user's input
    switch (courseLevel) {
        case "All":
            choiceCourses = courses.myCourses.filter(course => course.name.toLowerCase().includes(courseName.toLowerCase()));
            break;
        case "Level 1":
            choiceCourses = courses.myCourses.filter(course => course.name.toLowerCase().includes(courseName.toLowerCase())
                                                                && course.level === "1");
            break;
        case "Level 2":
            choiceCourses = courses.myCourses.filter(course => course.name.toLowerCase().includes(courseName.toLowerCase())
                                                                && course.level === "2");
            break;
        default: break;
    }

    // sort the array according to user's input
    if (courseSort === "Lowest to Highest") {
        choiceCourses.sort((a, b) => a.level - b.level);
    } else if (courseSort === "Highest to Lowest") {
        choiceCourses.sort((a, b) => b.level - a.level);
    }

    let courseListContainer = document.getElementById('course-list');
    // clear previous content
    courseListContainer.innerHTML = '';

    // output the array to the course page
    choiceCourses.forEach(course => {
        let courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        let courseImage = document.createElement('img');
        courseImage.src = "Images/"+course.image;
        courseImage.alt = course.name;
        courseCard.appendChild(courseImage);

        let courseName = document.createElement('h2');
        courseName.textContent = course.name;
        courseCard.appendChild(courseName);

        let courseLevel = document.createElement('p');
        courseLevel.textContent = `Level ${course.level}`;
        courseCard.appendChild(courseLevel);

        let courseCode = document.createElement('p');
        courseCode.textContent = `Code: ${course.code}`;
        courseCard.appendChild(courseCode);

        let courseDescription = document.createElement('p');
        courseDescription.textContent = `Description: ${course.description}`;
        courseCard.appendChild(courseDescription);

        courseListContainer.appendChild(courseCard);
    });

    event.preventDefault()
}

// Call the function when the page is loaded
window.addEventListener("load", showCourses);