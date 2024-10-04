// num1=11
// num2=-93
// num3=44

// // let find min

// let min=num1

//  if(min>num2){
//     min=num2
//  }

// if(min>num3)
//  {
//      min=num3
//  }
//  console.log(min)


// let max=num1

//  if(max<num2)
//  {
//     max=num2
//  }
//  if(max<num3)
//  {
//     max=num3
//  }
//  console.log(max)


//  let mid;

//  if(num1>min && num1<max)
//  {
//      mid=num1
//  }
//  else if(num2>min && num2<max)
//     {
//          mid=num2
//     }
//  else if(num3>min && num3<max)
//         {
//              mid=num3
//         }
       
//         console.log("mid is  " + mid)
//         console.log("max is "+max)
//         console.log("min is  "+min)


//     //fix =z buzz


//     for(let i=1;i<=100;i++)
//     {
        
//          if(i%3==0 && i%5==0)
//          {
//             console.log(i+" fizz buzz    ")
//          }
//           else if(i%3==0 && i%5!=0) {
//             console.log(i+"    fizz")
//           }
//           else if(i%5==0)
//           {
//              console.log(i+"     buzz")
//           }



//     }



    let num1=60
    let num2=75
    let min;
    if(num1<num2)
    {
        min=num1
    }else{
        min=num2
    }

let hcf=1
    for(let i=1;i<=min;i++)
    {
        if(num1%i==0&& num2%i==0)
        {
              hcf=i
        }
    }
    console.log(hcf)