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

export const buttons = [
    {label: 'all', categoryId: '0'},
    {label: 'Animations', categoryId: '1'},
    {label: 'Gaming', categoryId: '20'},
    {label: 'Autosmobiles', categoryId: '2'},
    {label: 'Music', categoryId: '10'},
    {label: 'Animals', categoryId: '15'},
    {label: 'Sports', categoryId: '17'},
    {label: 'Events', categoryId: '19'},
    {label: 'VideoBlogging', categoryId: '21'},
    {label: 'People', categoryId: '22'},
    {label: 'Comedy', categoryId: '23'},
    {label: 'Entertainment', categoryId: '24'},
    {label: 'Movies', categoryId: '35'},
    {label: 'Foreign', categoryId: '38'},
    {label: 'Thriller', categoryId: '41'},
    {label: 'News', categoryId: '25'},
    {label: 'Life Style', categoryId: '26'},
    {label: 'Education', categoryId: '27'},
    {label: 'Education', categoryId: '28'},
    {label: 'Nonprofits', categoryId: '29'},
    {label: 'New', categoryId: '25'},
  ];
