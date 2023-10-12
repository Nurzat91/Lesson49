for (let i: number = 0; i < 8; i++) {
    let results:string = '';

    for (let j: number = 0; j < 8; j++) {
        const count: boolean = (i + j) % 2 === 0;

        if (count) {
            results += '  ';
        } else {
            results += '██';
        }
    }
    console.log(results);
}
