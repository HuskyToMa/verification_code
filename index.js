const a = function (){

    let s = { v: '123' };

    let b = { ...s };
    return b;

}

window.a = a;