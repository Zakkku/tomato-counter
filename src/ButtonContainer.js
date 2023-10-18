
export default function ButtonContainer({tomatoes, setTomatoes}) {
    
    
    
    return (
        <div className='buttons-container'>
        <div 
          className='button'
          onClick={() => setTomatoes(tomatoes - 1)}
          >
            -
        </div>
        <div 
        className='button'
        onClick={() => setTomatoes(tomatoes + 1)}
        >
          +
        </div>
      </div>
    )
}