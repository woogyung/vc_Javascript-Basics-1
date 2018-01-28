describe('6. 배열에서 두번째로 큰 숫자 찾기 (lib/secondLargestNumber.js)', function () {
    it('주어진 배열에서 두번째로 큰 숫자를 찾아서, 반환하여야 한다.', function () {
        expect(secondLargestNumber([1,2,3,4,5])).to.equal(4);
        expect(secondLargestNumber([100, 98, 3, 39, 0, -10, 200])).to.equal(100);
        expect(secondLargestNumber([23, 11, 39483, -2937, 833])).to.equal(833);
        expect(secondLargestNumber([774, -29383, 2, 10, -22])).to.equal(10);
        expect(secondLargestNumber([10, 10, 10, 11])).to.equal(10);
    });
});
