//import chai from 'chai';
import {Base} from './base';


let should = chai.should();

describe('testing base class', function(){
	describe('creating Base instance', function(){
		var obj=null;
		
		beforeEach(function(){
			obj=new Base();
		});

		it('instabce creating', function(){
			obj.should.be.a('object');
		});

		it('getRandom is exists', function(){
			obj.getRandom.should.not.be.undefined;
			obj.getRandom.should.be.a('function');
		});
	})
	it('check getRandom',function(){
		var a=(new Base()).getRandom(3,8);

		a.should.least(3);
		a.should.most(8);
	})
})