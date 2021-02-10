import { getFruit } from './3-async-await';

export const makeSmoothieFaster = async() => {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');

    const smoothie = await Promise.all([a, b])

    return smoothie;
}

//Testing placeholders - Feel free to expand 
makeSmoothieFaster().then(data=>console.log(data))

export const fruitRace = async() => {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');

    const winner = await Promise.race([a, b])

    return winner;
}

// fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)
