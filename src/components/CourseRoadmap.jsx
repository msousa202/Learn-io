import React from 'react';

    function CourseRoadmap() {
      const steps = [
        { id: 1, title: 'Introduction to Python', description: 'Learn the basics of Python syntax and setup your environment.', isFree: true },
        { id: 2, title: 'Data Types and Variables', description: 'Explore different data types and how to use variables.', isFree: true },
        { id: 3, title: 'Control Flow', description: 'Learn about conditional statements and loops.', isFree: true },
        { id: 4, title: 'Functions', description: 'Understand how to define and use functions.', isFree: false },
        { id: 5, title: 'Data Structures', description: 'Learn about lists, dictionaries, and other data structures.', isFree: false },
        { id: 6, title: 'Object-Oriented Programming', description: 'Introduction to OOP concepts.', isFree: false },
      ];

      return (
        <div className="course-roadmap">
          <h2>Python Course Roadmap</h2>
          {steps.map(step => (
            <div key={step.id} className={`course-step ${step.isFree ? 'free' : 'paid'}`}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {!step.isFree && <p><i>Paid content</i></p>}
            </div>
          ))}
        </div>
      );
    }

    export default CourseRoadmap;
