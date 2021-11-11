import car from './Assets/car.jpg'
import surf from './Assets/surf.jpg'
import mountain from './Assets/mountain.jpg'

const randImagesArr = [
    car,surf,mountain
]

export const getRandArrIndex = (arr)=>{
    const maxIndex = arr.length-1;
    const minIndex = 0;
    return Math.floor(Math.random() * (maxIndex - minIndex + 1) + minIndex);
}

export const getRandImage = () => {

    const randIndex = getRandArrIndex(randImagesArr);
    return randImagesArr[randIndex];
}