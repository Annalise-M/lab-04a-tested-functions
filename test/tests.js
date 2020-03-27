const test = QUnit.test;

function addition(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y)   {
    return x % y;
}

/*
    In: 5, 3
    Out: 2
*/


test('subtract function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 5;
    const y = 3;
    const expected = 2;

    //Act 
    // Call the function you're testing and set the result to a const
    const difference = subtract(x,y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(difference, expected);

});

/*
    In: 4, 3
    Out: 12
*/
functions multiply() {
    return 12;
}

test('multiply function', function(assert) {
    const x = 4;
    const y = 3;
    const expected = 12;

    const difference = multiply(x,y);

    assert.equal(result, expected);

});


/*
    In: 6, 2
    Out: 3
*/

test('divide function', function(assert) {
    const x = 6
    const y = 2
    const expected = 3

    const difference = divide(x,y);

    assert.equal(difference, expected);

});

/*
    In: 3, 7
    Out: 0
*/

test('divide function', function(assert) {
    const x = 3
    const y = 7
    const expected = 0

    const difference = divide(x,y);

    assert.equal(difference, expected);

});

