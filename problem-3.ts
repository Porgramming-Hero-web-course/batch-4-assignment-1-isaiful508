{
    //
    const countWordOccurrences = (sentence: string, word: string): number => {

        const convertSentenceLowerCase = sentence.toLocaleLowerCase();
        const convertWordLowerCase = word.toLocaleLowerCase();

        const words = convertSentenceLowerCase.split(" ");

        const count = words.filter(word => word === convertWordLowerCase).length;

        return count;
    }
    const result = countWordOccurrences("I love typescript", "typescript");
     
    // console.log({result});

    //
}

