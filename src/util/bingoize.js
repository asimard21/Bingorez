

/* function to create a bingo string with a number 
   for example : 13 will become b13 */
export const bingoize = (number) => {
    
    let bingoizedNumber = '';

    if (number < 16) {
        bingoizedNumber = `B ${number}`;
    } else if (number < 31) {
        bingoizedNumber = `I ${number}`
    } else if (number < 46) {
        bingoizedNumber = `N ${number}`
    } else if (number < 61) {
        bingoizedNumber = `G ${number}`
    } else {
        bingoizedNumber = `O ${number}`
    }

    return bingoizedNumber
}


/* A function that create a bingo Line */
const createBingoLine = (min, max) => {
    const bingoLine = []
    while(bingoLine.length < 5) {
        let tempNum = Math.floor(Math.random()*(max-min) + min)
        if (!bingoLine.includes(tempNum)) {
            bingoLine.push(tempNum)
        } else {
            continue;
        }
    }
    return bingoLine
}


/* A function that generate a bingoCard array */

export const generateBingoCard = () => {
    let bingoCardArray = []
    const bline = createBingoLine(1,15);
    const iline = createBingoLine(16,30);
    const nline = createBingoLine(31,45);
    nline[2]='Free';
    const gline = createBingoLine(46,60);
    const oline = createBingoLine(61,75);
    bingoCardArray = ['B',...bline,'I',...iline,'N', ...nline,'G', ...gline,'O', ...oline]
    return bingoCardArray
    
}

/* A function that display a grid of bing0 number */
export const displayGrid = (numberArray, onClick=null) => {
    return numberArray.map( num => {
        if (typeof num === 'string') {
            if (num==='Free') {
                return <p className='bingo-letter free' key={num}>{num}</p>
            } else {
                return <p className='bingo-letter' id={num} key={num}>{num}</p>
            }
        } else {
            if (onClick) {
                return <p className='bingo-number clickable' onClick={onClick} id={num} key={num}>{num}</p>
            } else {
                return <p className='bingo-number' id={num} key={num}>{num}</p>
            }
            
        }
    })
}
