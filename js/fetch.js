//exporterar data till alla kakor
export async function getData() {
    let data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=cake');
    let datajson = data.json();
    return datajson;
}
//exporterar data för mackor
export async function getData2() {
    let data2 = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=sandwich');
    let datajson2 = data2.json();
    return datajson2;
}

