import inquirer from 'inquirer';
import * as fs from 'fs';


async function createfile(){
    const newfilename=await inquirer.prompt([
        {
            type:"input",
            name:"NewFileName",
            message:"Enter the name of the file",
        }
    ]);
    newfilename.NewFileName;

    fs.writeFile(newfilename.NewFileName,'utf8',(error)=>{
        if(error){
            console.error("File don't open");
        }
        else{
            addnewdata(newfilename.NewFileName);
        }
    })
}

async function addnewdata(FiNa:string){
    const writedata=await inquirer.prompt([
        {
            type:"input",
            name:"EnterData",
            messege:"Enter the new task",
        }
    ]);

    fs.writeFile(FiNa,writedata.EnterData,"utf8",(error)=>{
        if(error){
            console.error("File don't open");
        }
        else{
           console.log(`${writedata.EnterData}`);
        }
    });
}

async function Read(fl:string){
    fs.readFile(fl,"utf8",(error,data)=>{
        if(error){
            console.error("File don't open");
        }
        else{
            console.log(`${data}`);
        }
    })
    }

async function write(flname:string){
    const wrdata=await inquirer.prompt([
        {
            type:"input",
            name:"EnterData",
            messege:"Enter the new task",
        }
    ]);

    const dataToAppend = wrdata.EnterData + '\n';
    
    fs.appendFile(flname,dataToAppend,(error)=>{
        if(error){
            console.error("File dont open");
        }
        else {
            Read(flname);
        }
    })
}



async function openfile(filename:string){
    fs.readFile(filename,'utf8',(error,data)=>{
        if(error){
            console.error("Your file havent open");
        }
        else{
            console.log(`${data}`);
            test(data,filename);
        }
    })  
}

async function del(filname:string){
fs.unlink(filname,(error)=>{
    if(error){
        console.error("File don't open");
    }
    else{
        console.log(`${filname} is deleated`);
    }
});
const newfile=await inquirer.prompt([
    {
        type:"list",
        name:"NewFile",
        message:"Select the option",
        choices:["1.Do you want to create new file","2.Do you want to exist"],
    }
]);
switch(newfile.NewFile){
    case "1.Do you want to create new file":
       createfile();
        break;
    case "2.Do you want to exist":
        console.log("Thanks for using M.A.T TODO LIST");
        break;
}
}

async function test(a:string,fn:string){
  const str=  await inquirer.prompt([
        {
            type:"list",
            name:"filedata",
            message:"Select which task you have done so far",
            choices:a.split("\n"),
        }
    ]);
    const filecont=a;
    const newdata=filecont.replace(str.filedata,'');
    fs.writeFile(fn,newdata,'utf8',(err)=>{
        if(err){
            console.error("File dont open");
        }
        else{
            console.log(`\n${newdata}\n`);
             repete(fn,newdata);
        }
    });
   
    
}


async function repete(FilNam: string, updated: string) {
    const again = await inquirer.prompt([
      {
        type: "list",
        name: "Repete",
        message: "Select 1 to check the same list\nSelect 2 go back to the Day list\nSelect 3 to exit",
        choices: ["1", "2", "3"],
      }
    ]);
  
    switch (again.Repete) { // Access the user's choice using again.Repete
      case "1":
        test(updated, FilNam);
        break;
      case "2":
        day();
        break;
      case "3":
        console.log("Thank you for using M.A.T 'Todo App'\n");
        break;
    }
  }


async function day() {
const input=await inquirer.prompt([
    {
        type:"list",
        name:"Day",
        messege:"Select the day",
        choices:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    },
]);



switch (input.Day){
    case "Monday":
        openfile("Monday.txt");
        break;
    case "Tuesday":
        openfile("Tuesday.txt");
        break;
    case "Wednesday":
        openfile("Wednesday.txt");
        break;
    case "Thursday":
        openfile("Thursday.txt");
        break;
    case "Friday":
        openfile("Friday.txt");
        break;
    case "Saturday":
        openfile("Saturday.txt");
        break;
    case "Sunday":
        openfile("Sunday.txt");
    break;
default:
    console.log("Invalid input");

}

}

//day();

async function editlist(){
    const input1=await inquirer.prompt([
        {
            type:"list",
            name:"Day",
            messege:"Select which list you want to edit",
            choices:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        },
    ]);
    
    
    
    switch (input1.Day){
        case "Monday":
            const mon=await inquirer.prompt([
                {
                    type:"list",
                    name:"ListHandeler",
                    messege:"Enter task",
                    choices:["1.To enter new task in exiting list","2.Delete the file"],
                }
            ]);
            if(mon.ListHandeler=="1.To enter new task"){
                //openfile("Monday.txt");
              await  write("Monday.txt");
            } 
            else{
                await del("Monday.txt");
            }
           
            break;

        case "Tuesday":
        const tue=await inquirer.prompt([
            {
                type:"list",
                name:"ListHandeler",
                messege:"Enter Task",
                choices:["1.To enter new task","2.To repace existing task"]
            }
        ]);
        if(tue.ListHandeler=="1.To enter new task"){
           
          await  write("Tuesday.txt");
        } 
        else{
            await del("Tuesday.txt");
        }
        break;


        case "Wednesday":
           // openfile("Wednesday.txt");
            const wed=await inquirer.prompt([
                {
                    type:"list",
                    name:"ListHandeler",
                    messege:"Enter Task",
                    choices:["1.To enter new task","2.To repace existing task"]
                }
            ]);
            if(wed.ListHandeler=="1.To enter new task"){
               
              await  write("Wednesday.txt");
            } 
            else{
                await del("Wednesday.txt");
            }
            break;


        case "Thursday":
         //   openfile("Thursday.txt");
         const thu=await inquirer.prompt([
            {
                type:"list",
                name:"ListHandeler",
                messege:"Enter Task",
                choices:["1.To enter new task","2.To repace existing task"]
            }
        ]);
        if(thu.ListHandeler=="1.To enter new task"){
           
          await  write("Thursday.txt");
        } 
        else{
            await del("Thursday.txt");
        }
            break;


        case "Friday":
          //  openfile("Friday.txt");
          const fri=await inquirer.prompt([
            {
                type:"list",
                name:"ListHandeler",
                messege:"Enter Task",
                choices:["1.To enter new task","2.To repace existing task"]
            }
        ]);
        if(fri.ListHandeler=="1.To enter new task"){
           
          await  write("Friday.txt");
        } 
        else{
            await del("Friday.txt");
        }

            break;


        case "Saturday":
           // openfile("Saturday.txt");
           const sat=await inquirer.prompt([
            {
                type:"list",
                name:"ListHandeler",
                messege:"Enter Task",
                choices:["1.To enter new task","2.To repace existing task"]
            }
        ]);
        if(sat.ListHandeler=="1.To enter new task"){
           
          await  write("Saturday.txt");
        } 
        else{
            await del("Saturday.txt");
        }
            break;


        case "Sunday":
           // openfile("Sunday.txt");
           const sun=await inquirer.prompt([
            {
                type:"list",
                name:"ListHandeler",
                messege:"Enter Task",
                choices:["1.To enter new task","2.To repace existing task"]
            }
        ]);
        if(sun.ListHandeler=="1.To enter new task"){
           
          await  write("Sunday.txt");
        } 
        else{
            await del("Sunday.txt");
        }

        break;
    default:
        console.log("Invalid input");
    
    }
}



async function main(){
    let slct=await inquirer.prompt([
        {
            type:"list",
            name:"Choice",
            messege:"Select what function you want to perform",
            choices:["1. Edit the existing list","2. Check what you have done so far"],

        }
    ]);

    switch(slct.Choice){
        case "1. Edit the existing list":
           // console.log("New function of edting");
           editlist();
            break;
        case "2. Check what you have done so far":
            day();
            break;
    }
}

main();