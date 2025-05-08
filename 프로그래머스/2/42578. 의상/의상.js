function solution(clothes) {
    const clothesHash = new Map();
    clothes.forEach(([name, type]) => {
        if(clothesHash.has(type)){
            clothesHash.set(type, clothesHash.get(type) + 1);
        }
        else{
            clothesHash.set(type, 1);
        }
    })
    let result = 1;
    clothesHash.forEach((count) => {
        result *= (count + 1);
    });
    return result-1
}