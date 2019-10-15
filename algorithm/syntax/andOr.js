var a1 = function () {
    console.log("a1");
    return true;
}

var a2 = function () {
    console.log("a2");
    return false;
}

var a3 = function () {
    console.log("a3");
    return true;
}

var a4 = function () {
    console.log("a4");
    return false;
}


var abc = function (s) {
    // console.log(s);
    // const canUseLoyalty = false;
    // let canRedeemReward = true && canUseLoyalty;
    // console.log("canRedeemReward:",canRedeemReward);

    // if(a1() & a2()) console.log("print >>");
    // if(a1() | a2()) console.log("print >>");
    // if(a2() & a1()) console.log("print >>");
    if (a2() && a1()) console.log("print >>");
    // if(a1() & a2()) console.log("print >>");

}