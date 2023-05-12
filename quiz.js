//Write an asynchronous function that accepts a message string and a delay time in milliseconds.
//The function should log the message to the console after the specified delay time.
function learn(text){
        console.log("q1",text);
    }
    learn("I am a student.")
function delayed(message, delayTime) {
    setTimeout(function() {
      console.log("q1",message);
    }, delayTime);
  }
  delayed("Open to work.", 4000);


//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID.
// Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.

function getUserData() {
    return new Promise((resolve, reject) => {
      const userData = {
        userId: id};
      resolve(userData);

    reject('Could not get user data for id ');
    });
  }
async function fetchUserData() {
  for (let i = 0; i < ids.length; i++) {
    const userData = await getUserData(ids[i]);
    console.log(userData);
  }
}

fetchUserData();
const ids = [23,45,42,556,12,84];
getUserData(ids)


//You have an asynchronous function performTask() that returns a Promise.
//The Promise resolves if the task is successful and rejects if there's an error.
//Write a function that calls performTask() and logs a custom success message if the task is successful,
//and a custom error message if there's an error.
let taskCompletion=true
let performTask=new Promise((resolve,reject)=>{
    if (taskCompletion=true){
        resolve("Task was successfully!")
    }
    else{
        reject("Error occurred")
    }
})
console.log("q3",performTask);