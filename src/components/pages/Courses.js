import React, {useState, useEffect} from 'react'
import '../../App.css'
import "../Courses.css";


export default function Courses(){
    return (
       <div className = 'CoursePageContainer'>
        <div className = 'ClassSearchBar'>
            Seach for Classes ...
        </div>
        <div className = 'CurrentCourses'>
            <div className='currentCourseTitle'>
                Current Courses - Fall 2022 
                <button className = "sortByTop">
                Sort By
                </button>
            </div>
            <div className = 'currentCourse'>Course 1</div>
            <div className = 'currentCourse'>Course 2</div>
        </div>
        <div className = 'CompletedCourses'>
            <div className = 'completedCourseTitle'>
                Completed Courses
                <button className = "sortByBottom">
                Sort By
                </button>
            </div>
            <div className = 'completedCourse'>Course 1</div>
            <div className = 'completedCourse'>Course 2</div>
        </div>
        </div>
    );
}