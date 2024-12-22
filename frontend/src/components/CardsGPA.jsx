import img1 from '../vector/img1.png';
const CardsGPA = () => {
    
    return (
        <>
            <div className="border-solid border-2 border-black rounded-sm flex items-center">
                <div className="w-1/2">
                    <h6 className="text-center ">Current GPA :</h6>
                    <h6 className="text-center">1.45</h6>
                </div>
                <div className="w-1/2">
                    <img className="h-36 w-auto max-h-40" src={img1}></img>
                </div>
                
            </div> 
        </>
    )
}

export default CardsGPA;