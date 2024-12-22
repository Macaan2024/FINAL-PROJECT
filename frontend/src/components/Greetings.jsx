const Greetings = ({firstname, course, year}) => {
    return(
        <>
            <div className="bg-red-900  px-3 py-5">
                <h6 className="text-xl text-white">Welcome! {firstname}</h6>
                <h6 className="text-sm text-white">{course} - {year}</h6>
            </div>
           
        </>
    ) 
}


export default Greetings;