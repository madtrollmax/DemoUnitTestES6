//use strict

export class Base{
	getRandom(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}