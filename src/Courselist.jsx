import Course from './Course';
import useFtech from './useFetch';



function Courselist() {

     //const [courses, setCourse] = useState(null);
      
    const[courses,dummy,error ] = useFtech('http://localhost:3000/courses');

    function handleDelete(id) {
        console.log(id);
        const newCourses = courses.filter((course) => course.id != id)
        setCourse(newCourses);
    }

    if (!courses) {
        return (
            <>
                {!error && <img className='img' src="data\assets\lod1.webp" />  }
                {error && <p>{error}</p>}
            </>
        )
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