

export default function TomatoBox({tomatoes}) {
    
    const tomatoImages = [];
  
    for (let i = 0; i < tomatoes; i++) {
      tomatoImages.push('🍅');
    };
  
    const tomatoString = tomatoImages.join('');
  
    let displayText;
  if (tomatoes === 0) {
    displayText = 'No tomatoes yet';
  } else if (tomatoes === -1) {
    displayText = `${tomatoes} tomato!!`;
  } else if (tomatoes < -1) {
    displayText =`${tomatoes} tomatoes!!`;
  }
    else if (tomatoes % 4 === 0) {
      displayText = (
        <h4>
          <span>{tomatoString}</span>
          <br />
          <span>Time to take a long break! You earned it!</span>
        </h4>
      );
  } else {
    displayText = tomatoString;
  }
  
    
    
    return (
        
        
        
        <div className='tomato-box'>
          <h2>
          {displayText}
          </h2>
        </div>
    )
}