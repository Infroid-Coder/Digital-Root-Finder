function dtlrt(){

    //variables

    let num = document.getElementById("num").value;
    let otpt = document.getElementById("otpt");

    console.log()

        // outputting an alert when no input is given

        if(num == "" | num == null){
            otpt.innerHTML = "Please input a number";
        }
        
        //alert if input is higher than 100
        
        if(Number(num) >= 100){
            otpt.innerHTML = "Please input a number less than 100";
        }


    // loop

    for(let i = 0; i < 2; i++){
            if(num.length != 1 && Number(num) <= 100 && num != "" && num != null){
            //finding the digital root

            // adding the 1st and the 2nd number

            let cnum = Number(num.toString().charAt(0)) + Number(num.toString().charAt(1));
            otpt.innerHTML = cnum;

            // adding again if the answer has more than 2 digits

            if(cnum.toString().length != 1){
                let nnum = Number(cnum.toString().charAt(0)) + Number(cnum.toString().charAt(1))
                otpt.innerHTML = nnum
            }

        }   else {

            //  breaking the loop if the length of the input is less than 2 digits

            break;
        }
    }
}