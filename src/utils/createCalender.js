export const getNormDay = (date) => {
    let day = date.getDay()
    if(day === 0) day = 7;
    return day - 1
}

export const createCalendare = (year = new Date().getFullYear(), month = new Date().getMonth() + 1) => {
    let mon = month - 1
    let d = new Date(year, mon)
    let resalt = []
    
    while(d.getMonth() === mon){
        resalt.push({
            number: d.getDate(),
            day: getNormDay(d),
            id: d.getTime()
        })
        d.setDate(d.getDate() + 1)
    }
    while(resalt[resalt.length - 1].day !== 6){
        resalt.push({
            number: d.getDate(),
            day: getNormDay(d),
            status: 'def',
            id: d.getTime() + 25
        })
        d.setDate(d.getDate() + 1)
    }
    if(resalt[0].day !== 0){
        let firstDay = resalt[0].day
        let arr2 = []
        let d2 = new Date(year, mon - 1)
        while(d2.getMonth() === mon - 1){
            arr2.push({
                number: d2.getDate(),
                day: getNormDay(d2),
                status: 'def',
                id: d2.getTime() + 1
            })
    
            d2.setDate(d2.getDate() + 1)
        }
        arr2 = arr2.slice(arr2.length - firstDay, arr2.length)
        return arr2.concat(resalt)
    }
   
    return resalt;
}