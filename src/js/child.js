import {Base} from './base.js';

export function getRandomItem(array) {
    if (array.length == 0) throw 'Array length must be more then zero.';
    
    return array[(new Base()).getRandom(0, array.length - 1)];
}