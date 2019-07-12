if(process.argv[2] == undefined || process.argv[3] == undefined || process.argv[4] == undefined || process.argv[5] == undefined || process.argv[6] == undefined ){
    console.log("Error! You didn't put in any user arguments.")
    }
const home = ["Mansion", "Apartment", "Shack", "House" , "train station"];
function getHome(){
    home.push(process.argv[2])
    let randNumber = (Math.floor(Math.random()*home.length));
    return home[randNumber];
    
}


function getChildrenCount(){
   let randNum = (Math.floor(Math.random()*100))
    if (randNum <= 50) {
        return randNum
    } else {
        return process.argv[3]
    }
}

const cars = ["lambo", "BMW", "Bike", "mini van", "nissan"];
function getCar(){
   cars.push(process.argv[4]);
    let randCar = (Math.floor(Math.random()*cars.length));
    return cars[randCar];
}

const jobs = ["professional basketball player", "construction worker", "stripper", "hitman", "pilot"];
function getJob(){
    jobs.push(process.argv[5]);
    let randJob = (Math.floor(Math.random()*jobs.length));
    return jobs[randJob];
}

const spouses = ["Jennifer Lopez", "nobody", "Mia Khalifa", "Queen Latifah", "Caitlyn Jenner"];
function getSpouse(){
    spouses.push(process.argv[6]);
    let spouse = (Math.floor(Math.random()*spouses.length));
    return spouses[spouse];
}
function mash(){
    return "You will live in a " + getHome() + ", drive a " + getCar() + ",  you will have " + getChildrenCount() + " kids" + ", you work as a " + getJob() + ", and you are married to " + getSpouse();
}
console.log(mash());

