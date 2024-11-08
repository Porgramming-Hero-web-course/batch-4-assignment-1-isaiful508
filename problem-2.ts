{
    //    
    const removeDuplicates = (numbers: number[]): number[] => {

        const newArray: number[] = [];

        for (let num of numbers) {
            if (typeof num === "number" && !newArray.includes(num)) {
                newArray.push(num);
            }
        }
        return newArray;
    }


//
}