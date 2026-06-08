// function workout()
// {
//     return new Promise((resolve,reject)=>{
//         console.log("workout started");

//         setTimeout(()=>{
//             resolve("workout completed");
//         },2000);
//     });
// }

// workout().then(res=>{console.log(res);});

// async function start()
// {
//     let result= await workout();
//     console.log(result);
// }

//workout '
function workout()
{
    return new Promise((resolve,reject)=>
        {
        console.log("Workout started");

        let energy=true;

        setTimeout(()=>
            {
            if (energy)
            {
                console.log("completed");;
            }
            else
                {
                console.log("Too tired , workout failed");
            }
            } , 2000 );
        });
}
workout().then(res=>{console.log(res);})
.catch(error=>{console.log(error);});