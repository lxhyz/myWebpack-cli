let express = require('express');
let app = express();

app.get('/users',(req,res)=>{
    res.json({
        username:'李白',
        age:'27'
    })
})

app.listen(4000,() => {console.log('mock server is runing ar port 4000')
})