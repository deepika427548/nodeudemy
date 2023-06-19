//modules
// const sayHi=(name)=>{
//     console.log(`hello there ${name}`)
// }

// sayHi('deepika')


//os module
// const os=require('os')//os is a built-in core module you dont need to install
// const user=os.userInfo();
// console.log(user);
// console.log(`the system Uptime is ${os.uptime} seconds`)

// const currentOs={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem()
// }

//console.log(currentOs);

//path module

// const path=require('path');
// console.log(path.sep)

// const{readFileSync,writeFileSync}=require('fs');

// const first=readFileSync('./content/text.txt','utf8');
// const second=readFileSync('./content/second.txt','utf8');
// console.log(first,second);

// writeFileSync('./content/result.txt',`here is the result ${first},${second}`)

//async fs module

// const {readFile,writeFile}=require('fs');
// readFile('./content/text.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return
//     }

// const first=result;
// readFile('./content/second.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }  
// const second=result;
// writeFile('./content/asyncresult.txt',`Here is the Result:${first},${second}`
// ,(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
// })
  
// })
// })


//http module

const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
        return
    }
if(req.url === '/about'){
    res.end('here is our history')
    return
}
res.end(`
<h1>oops</h1>
<p>we cant seem to find the page ur looking for </p>
<a href="/">back to home</a>`)
})

server.listen(5000)

 