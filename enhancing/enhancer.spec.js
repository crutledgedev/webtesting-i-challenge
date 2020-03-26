const enhancer = require('./enhancer.js');
// test away!




it('repair', () => {
    expect(enhancer.repair({
        name: 'Chungus',
        durability:  85,
        enhancement: 20
    })).toEqual({
        name: 'Chungus',
        durability:  100,
        enhancement: 20
    });
})

it('succeed', () => {
    expect(enhancer.succeed({
        name: 'Chungus',
        durability:  100,
        enhancement: 10
    }))
    .toEqual({
        name: 'Chungus',
        durability:  100,
        enhancement: 11
    });
    

})


it('fail', () => {
    expect(enhancer.fail({
        name: 'Chungus',
        durability:  15,
        enhancement: 17
    }))
    .toEqual({
        name: 'Chungus',
        durability:  15,
        enhancement: 16
    });
    

})

describe("ehancer.js", () => {
    describe(".repair()", () => {
        it("increase durability to 100", function(){
            expect(enhancer.repair({
                name: 'Chungus',
                durability:  85,
                enhancement: 20
            })).toEqual({
                name: 'Chungus',
                durability:  100,
                enhancement: 20
            });
        })
    })
})