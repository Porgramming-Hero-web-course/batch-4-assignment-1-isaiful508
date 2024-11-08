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

    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

    // console.log({result});

//
}