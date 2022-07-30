function f(cards=[]) {
    const replaceMap={
        A: 1,
        J: 11,
        Q: 12,
        K: 13
    }
    const resCards=cards
        .reduce((result,card) => {
            const firstChar=card[0];
            const secondChar=card[1];
            const replaceChar=replaceMap[secondChar]
            const list=[
                ...result,
                replaceChar? firstChar+replaceChar:card
            ]
            return secondChar==='A'? [...list,firstChar+'14']:list
        },[])
        .sort((a,b) => {
            if(a[0]<b[0]) return -1
            if(a[0]>b[0]) return 1
            if(+a.slice(1)<+b.slice(1)) return -1
            return 1
        })
        .reduce((result,card,index,arr) => {
            if(result.length>=5) return result
            if(index>0&&arr[index-1]===card) return result
            if(result.length===0) return [card]
            if(result[0][0]!==card[0]) return [card]
            if(card.slice(1)-result[result.length-1].slice(1)!==1) return [card]
            return [...result,card]
        },[])
    return resCards.length===5
}

console.log(f(['SA','SJ','A3','SQ','SK']))
