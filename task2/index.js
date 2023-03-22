function manageSpeed(speed){
    
    //declaration of the constant speed and constat demerit  in kms
    const driverSpeedLimit=70;
    const demerit=5

    if (speed<driverSpeedLimit){
        return 'ok'
    }
    //declaring the demerit points
    // calculating the total number of demerits
    const demeritPoints= Math.floor((speed-driverSpeedLimit)/demerit);
    if(demeritPoints=>12){
        console.log('Licence Suspended')
    }else{
        console.log("Points:" +demeritPoints)
    }



}




