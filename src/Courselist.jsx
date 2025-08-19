import Course from './Course';
import { useState, useEffect } from 'react';


function Courselist() {

    const [courses, setCourse] = useState(null);

    const [dummy, setDummy] = useState(true);

    useEffect(() => {

        fetch('http://localhost:3000/courses')
            .then(response => {
                console.log(response);
                return response.json()
            }).then( data => setCourse(data))

    }, []);


    function handleDelete(id) {
        console.log(id);
        const newCourses = courses.filter((course) => course.id != id)
        setCourse(newCourses);
    }
    
    if(!courses){
        return <></>
    }
    
    

    const coutrseslist = courses.map(
        (course) =>
            <Course key={course.id}
                name={course.name}
                price={course.price}
                image={course.image}
                delete={handleDelete}
                id={course.id} />)



    return (
        <>
            {coutrseslist}
            <button onClick={() => { setDummy(false) }}>Dummy</button>
        </>
    );
}

export default Courselist;


//npx json-server --watch data/dummyData.json --port 3000 --static ./data