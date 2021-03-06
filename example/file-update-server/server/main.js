const fs = require('fs');
const config = require('../runtime-config');
const app = require('br2k-was')(config)

app.replicate('POST','/plus', (req,res)=>{
	try{
	    let sum = Number(fs.readFileSync( __dirname+'/../state/sum','utf8'));
    	    ++sum;
	    const scvIndex = req.br2k.subject.index;
	    const scvID = req.br2k.subject.id;
            const reqIndex = req.br2k.entryIndex
    	    const log = `scvIndex: ${scvIndex}, scvId: ${scvID}, req-index: ${reqIndex}, sum: ${sum} \n`;
    	    fs.writeFileSync(SUM_PATH,String(sum));
            res.send(log);
	}catch(e){
            console.log(e);
             res.send('faile');
	}
});


app.onlyOnce('GET', '/user', (req, res) => {
    let sum = Number(fs.readFileSync(SUM_PATH,'utf8'));
	res.send('sum: '+sum);
});


app.listen(8888,()=>{
	console.log('service replication has started on port 8888')
})
  


/*
* Lite-version 
**/

// app.replicateReq('POST','/plus', (req,res)=>{
//     let sum = Number(fs.readFileSync(SUM_PATH,'utf8'));
//     ++sum;
//     const log = `[shop]=> client: ${req.body.client}, index: ${req.storedIndex}, sum: ${sum} \n`;
//     fs.writeFileSync(SUM_PATH,String(sum));
//     res.send(log);
// }).rollback((req)=>{
//     let sum = Number(fs.readFileSync(SUM_PATH,'utf8'));
//     --sum;
//     fs.writeFileSync(SUM_PATH,String(sum));
//     console.log("rollback completed");
// })

// app.req('GET','/read',(req,res)=>{
//     let sum = Number(fs.readFileSync('./sum','utf8'));
// 	res.send('sum: '+sum);
// })


