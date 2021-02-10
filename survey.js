const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let name;
let activity;
let music;
let food;
let meal;
let sport;
let Power;





  rl.question('What is your name? ', (answer) => {
    name = answer;
    console.log(`Thank you for your valuable feedback: ${answer}`);
  
  

    rl.question('What is an activity you like doing? ', (answer) => {
      activity = answer;
      console.log(`Thank you for your valuable feedback: ${answer}`);
    
    

      rl.question('What do you listen to while doing that? ', (answer) => {
        music = answer;
        console.log(`Thank you for your valuable feedback: ${answer}`);
      
      

        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
          food = answer;
          console.log(`Thank you for your valuable feedback: ${answer}`);
        
        

          rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
            meal = answer;
            console.log(`Thank you for your valuable feedback: ${answer}`);
          
          

            rl.question('Which sport is your absolute favourite? ', (answer) => {
              sport = answer;
              console.log(`Thank you for your valuable feedback: ${answer}`);
            
            

              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
                Power = answer;
                console.log(`Thank you for your valuable feedback: ${answer}`);
              
                process.stdout.write(`${name} likes listening to ${music} and ${activity}, eating ${food} for ${meal}, favorit spport is : ${sport} , and is great at ${Power}.\n`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
  
  

