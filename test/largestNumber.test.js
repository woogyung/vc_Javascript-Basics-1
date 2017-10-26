describe('5. 가장 큰 숫자 찾기 (lib/largestNumber.js)', function () {
    it('주어진 배열이 텅 비었을 경우엔 null값을 리턴한다.', function () {
        expect(largestNumber([])).to.equal(null);
    });

    it('주어진 배열에 한개의 숫자만 들어있을 경우, 가장 큰 숫자는 그 숫자이다.', function () {
        expect(largestNumber([1])).to.equal(1);
        expect(largestNumber([29])).to.equal(29);
        expect(largestNumber([392])).to.equal(392);
        expect(largestNumber([993])).to.equal(993);
        expect(largestNumber([9])).to.equal(9);
    });

    it('주어진 배열에서 가장 큰 숫자를 찾아서, 리턴하여야 한다.', function () {
        expect(largestNumber([1,2,3,4,5])).to.equal(5);
        expect(largestNumber([100, 98, 3, 39, 0, -10, 200])).to.equal(200);
        expect(largestNumber([23, 11, 39483, -2937, 833])).to.equal(39483);
        expect(largestNumber([774, -29383, 2, 10, -22])).to.equal(774);
        expect(largestNumber([10, 10, 10, 11])).to.equal(11);
    });
});
