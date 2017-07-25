var classNames = require('./');
var describe = require('mocha').describe;
var should = require('should');

var emptyString = '';

describe('classnames-bem', function () {
  it('should return empty string when there is no arguments passed.', function () {
    classNames().should.equal(emptyString);
  });

  it('should return empty string when the base class is passed as an object.', function () {
    classNames({}).should.equal(emptyString);
  });

  it('should return empty string when the base class is passed as an array.', function () {
    classNames([]).should.equal(emptyString);
  });

  it('should return empty string when the base class is passed as a number.', function () {
    classNames(0).should.equal(emptyString);
  });

  it('should return empty string when the base class is passed as a boolean.', function () {
    classNames(true).should.equal(emptyString);
    classNames(false).should.equal(emptyString);
  });

  it('should return empty string when the base class is passed as a undefined, null, NaN.', function () {
    classNames(undefined).should.equal(emptyString);
    classNames(null).should.equal(emptyString);
    classNames(NaN).should.equal(emptyString);
  });

  it('should return empty string when the base class is passed as an empty string.', function () {
    classNames('').should.equal(emptyString);
  });

  it('should return the passed base class name only.', function () {
    var result = 'button';
    classNames('button').should.equal(result);
  });

  it('should return the passed single modifier.', function () {
    var result = 'button button--white';
    classNames('button', 'white').should.equal(result);
  });

  it('should return the passed multiple modifiers.', function () {
    var result = 'button button--white button--disabled';
    classNames('button', 'white', 'disabled').should.equal(result);
  });

  it('should return the passed multiple modifiers as an array.', function () {
    var result = 'button button--white button--disabled';
    classNames('button', [
      'white',
      'disabled'
    ]).should.equal(result);
  });

  it('should return the passed multiple modifiers as an object.', function () {
    var result = 'button button--white button--disabled';
    classNames('button', {
      'white': true,
      'disabled': true
    }).should.equal(result);
  });

  it('should return the passed multiple modifiers depending on the object values.', function () {
    var result = 'button button--white';
    classNames('button', {
      'white': true,
      'disabled': false
    }).should.equal(result);
  });

  it('should return the passed mix multiple modifiers.', function () {
    var result = 'button button--active button--bg-blue button--white';
    classNames('button', [
      'active',
      'bg-blue'
    ], {
      'white': true,
      'disabled': false
    }).should.equal(result);
  });

  it('should return the passed mix multiple modifiers.', function () {
    var result = 'button button--disabled button--active button--bg-red button--show-icon';
    classNames('button', 'disabled', [
      'active',
      'bg-red'
    ], {
      'show-icon': true
    }).should.equal(result);
  });

  it('should return the passed multiple modifiers ignoring undefined, null, NaN.', function () {
    var result = 'button';
    classNames('button', [
      undefined,
      null,
      NaN
    ]).should.equal(result);
  });
});
