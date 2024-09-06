export const convertValue = (data) =>{
    if(data > 1000000){
        return Math.floor(data/1000000)+"M"
    }else if(data > 1000){
            return Math.floor(data/1000)+"K"
    }else{
        return data
    }
}

export const comaSeparated =  (coma) =>{
    if(coma >= 1000){
        const numStr = coma.toString();
        const formatted = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return formatted
    }else if(coma > 1000000){
        return Math.floor(coma/1000000)+"M"
    }else{
        return coma
    }
}

