import {decimalToBinary, binaryToDecimal} from './converter/Converter';

describe('convert from decimal to binary', () => {

  test('calculate even decimal to binary ', () => {
    expect(decimalToBinary(2)).toEqual('10');
  })

  test('calculate odd decimal to binary ', () => {
    expect(decimalToBinary(5)).toEqual('101');
  })

})


describe('convert from binary to decimal', () =>{
  test('convert even binary to decimal', () => {
    expect(binaryToDecimal('100000')).toEqual(32);
  })

  test('convert odd binary to decimal', () => {
    expect(binaryToDecimal('100001')).toEqual(33);
  })
})