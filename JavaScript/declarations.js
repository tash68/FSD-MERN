function testdeclaration(){
    if(true){
        var x=19;
        let y=68;
        console.log("inside if block"); // scope - inside if block
        console.log(x);
        console.log(y);
    }
    console.log("outside the if block");
    console.log(x);
    console.log(y);

}
testdeclaration();