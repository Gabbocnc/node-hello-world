console.log('hello node js');
console.log(process);

console.log(process.env.ADMIN_PIN);


if (process.argv[2]=='admin' && process.env.ADMIN_PIN==666){
    console.log('Welcome Admin');
}else{
    console.log('Access restricted');
    
}