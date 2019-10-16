name = 'BOB'
name = name.toLowerCase();
console.log(name);


//gets the element and waits for a click to start the function 'play'
document.getElementById('play-btn').addEventListener('click', play)
//gets the element and waits for a click to start the function 'prize'
document.getElementById('purchase-btn').addEventListener('click', prize)
//
document.getElementById('highPrize').addEventListener('click', hPrize)
//
document.getElementById('medPrize').addEventListener('click', mPrize)




function play(){
    //dice of the player
    let playDie= Math.floor(Math.random()*6)+1;
    console.log(playDie)
    //dice of the house
    let houseDie= Math.floor(Math.random()*6)+1;
    console.log(houseDie)
    //image to display the number of the house dice
    if (houseDie==1){
      document.getElementById('house-die').src="images/1.png"
    } else if (houseDie==2){
        document.getElementById('house-die').src="images/2.png"
    } else if (houseDie==3){
    document.getElementById('house-die').src="images/3.png"
    }
    if (houseDie==4){
    document.getElementById('house-die').src="images/4.png"
    }
    if (houseDie==5){
    document.getElementById('house-die').src="images/5.png"
    }
    if (houseDie==6){
    document.getElementById('house-die').src="images/6.png"
    }
    //image to display the number of the player die
    if (playDie==1){
    document.getElementById('player-die').src="images/1.png"
    } else if (playDie==2){
        document.getElementById('player-die').src="images/2.png"
    } else if (playDie==3){
    document.getElementById('player-die').src="images/3.png"
    }
    if (playDie==4){
    document.getElementById('player-die').src="images/4.png"
    }
    if (playDie==5){
    document.getElementById('player-die').src="images/5.png"
    }
    if (playDie==6){
    document.getElementById('player-die').src="images/6.png"
    } 
    //adding/subtracting the bet into the funds
    if(playDie>houseDie){
        //adding the bet into the funds
        let betEl=Number(document.getElementById('bet-input').value)
        let fundsEl=document.getElementById('funds').innerHTML
        fundsEl=Number(fundsEl)
        let total= fundsEl+betEl;
        document.getElementById('funds').innerHTML=total
        console.log("fundsEl:", fundsEl)
    }  
    if (playDie<houseDie){
        //subtracting the bet from the funds
        let betEl=Number(document.getElementById('bet-input').value)
        let fundsEl=document.getElementById('funds').innerHTML
        String(fundsEl)
        let total=fundsEl-betEl;
        document.getElementById('funds').innerHTML=total
    }
}

//if button is clicked start the function prize
function prize(){
    //Grabs and Strings the the ID playFunds
    let playFundsEl=document.getElementById('funds').innerHTML
    let numPlayFundsEl= String(playFundsEl)
    //checks if playFunds is less than or equal to 1000, gives a sock and subtracts 1000
    if(numPlayFundsEl<=1000){
        document.getElementById('loot').innerHTML+='<image src="images/socks.png">'
        let total=numPlayFundsEl-1000
        document.getElementById('funds').innerHTML=total
        //checks if the playFunds is between 5000 and 1000 then gives a random item and subtracts 1000 
    } else if (numPlayFundsEl>1000&&numPlayFundsEl<5000){
        //gives a random number
        let randPrize=Math.random();
        //less than .33 gives a bike
        if(randPrize<=.33){
            document.getElementById('loot').innerHTML+='<image src="images/bike.jpg">'
            let total=numPlayFundsEl-1000
            document.getElementById('funds').innerHTML=total
            //less than .66 gives a ring
        } else if(randPrize<=.66){
            document.getElementById('loot').innerHTML+='<image src="images/ring.png">'
            let total=numPlayFundsEl-1000
            document.getElementById('funds').innerHTML=total
            //gives a trip
        } else {
            document.getElementById('loot').innerHTML+='<image src="images/trip.jpg">'
            let total=numPlayFundsEl-1000
            document.getElementById('funds').innerHTML=total
        }
        //if it is greater than 5000 than give a high prize and subtract 5000
    } else {
        //randomize that prize
        let highPrize=Math.random()
        //less than .25 give motorcycle
        if (highPrize<=.25){
        document.getElementById('loot').innerHTML+='<image src="images/motorcycle.jpg">'
        let total=numPlayFundsEl-5000
        document.getElementById('funds').innerHTML=total
        //less than .5 gives a house
        } else if (highPrize<=.5){
            document.getElementById('loot').innerHTML+='<image src="images/house.png">'
            let total=numPlayFundsEl-5000
            document.getElementById('funds').innerHTML=total
        //less than .75 gives a boat
        } else if (highPrize<=.75){
            document.getElementById('loot').innerHTML+='<image src="images/boat.png">'
            let total=numPlayFundsEl-5000
            document.getElementById('funds').innerHTML=total
        //gives a car
        } else {
            document.getElementById('loot').innerHTML+='<image src="images/car.png">'
            let total=numPlayFundsEl-5000
            document.getElementById('funds').innerHTML=total
        }
    }
   
}

function mPrize(){
    let  randPrize=Math.random()
      //Grabs and Strings the the ID funds
      let playFundsEl=document.getElementById('funds').innerHTML
      let numPlayFundsEl= String(playFundsEl)
      //if randPrize is less than .66 give socks and subtract 1000
        if(randPrize<=.66){
            document.getElementById('loot').innerHTML+='<image src="images/socks.png">'
            let total=numPlayFundsEl-1000
            document.getElementById('funds').innerHTML=total
        //if randPrize is less than .77 give bike and subtract 1000
        } else if(randPrize<=.77){
            document.getElementById('loot').innerHTML+='<image src="images/bike.jpg">'
            let total=numPlayFundsEl-1000
            document.getElementById('funds').innerHTML=total
        //if randPrize is less than .88 give socks and subtract 1000
        } else if(randPrize<=.88){
            document.getElementById('loot').innerHTML+='<image src="images/ring.png">'
            let total=numPlayFundsEl-1000
            document.getElementById('funds').innerHTML=total
        //if randPrize is less than .99 give socks and subtract 1000
        } else if(randPrize<=.99){
            document.getElementById('loot').innerHTML+='<image src="images/trip.jpg">'
            let total=numPlayFundsEl-1000
            document.getElementById('funds').innerHTML=total
        }
}

function hPrize(){
    let highPrize=Math.random()
     //Grabs and Strings the the ID funds
     let playFundsEl=document.getElementById('funds').innerHTML
     let numPlayFundsEl= String(playFundsEl)
           //if randPrize is less than .66 give socks and subtract 5000
   if( highPrize<=.66){
       document.getElementById('loot').innerHTML+='<image src="images/socks.png">'
       let total=numPlayFundsEl-5000
       document.getElementById('funds').innerHTML=total
        //if randPrize is less than .66 give house and subtract 5000
   } else if( highPrize<=.77){
       document.getElementById('loot').innerHTML+='<image src="images/house.png">'
       let total=numPlayFundsEl-5000
       document.getElementById('funds').innerHTML=total
        //if randPrize is less than .66 give boat and subtract 5000
   } else if( highPrize<=.88){
       document.getElementById('loot').innerHTML+='<image src="images/boat.png">'
       let total=numPlayFundsEl-5000
       document.getElementById('funds').innerHTML=total
        //if randPrize is less than .99 give car and subtract 5000
   } else if( highPrize<=.99){
       document.getElementById('loot').innerHTML+='<image src="images/car.png">'
       let total=numPlayFundsEl-5000
       document.getElementById('funds').innerHTML=total
   }
}