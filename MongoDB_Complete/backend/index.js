const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true   }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');

app.get("/",function(req,res){
    // res.send("chal rha hai");
    res.render("index");
});

app.listen(3000, function(){
    console.log("it running");
}) ;

