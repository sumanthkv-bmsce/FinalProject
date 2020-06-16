const express = require('express');
const path = require('path')
const hbs = require('hbs');
const User = require('../src/models/user')
const csedata = require('../src/models/cseData')
const ecedata = require('../src/models/eceData')
const civildata = require('../src/models/civilData')
const eeedata = require('../src/models/eeeData')
const isdata = require('../src/models/isData')
const mechdata = require('../src/models/mechData');
const biodata = require('../src/models/bioData')
const ficData = require('../src/models/fictionData')
const comicData = require('../src/models/comicsData')
const novelData = require('../src/models/novelsData')

const mongoose = require('mongoose');
require('./db/mongoose')

const app = express();
const pathPartials = path.join(__dirname,"..","/src/partials")

app.use(express.json())
app.set('view engine','hbs')

app.use(express.static(path.join(__dirname,'..','/public')))
app.set('views',path.join(__dirname,'..','/src/templates'))
hbs.registerPartials(pathPartials)
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('',(req,res)=> {
    res.render('index');
})

app.get('/login',(req,res)=> {
    res.render('login');
})


app.get('/signup',(req,res)=> {
    res.render('signup')  
})

app.post('/dem',(req,res)=> {
    
    const user = new User(req.body)
    user.save().then((user)=> {
        res.render('pic')
    }).catch((error)=> {
        // alert('Error '+error)
    })   
})

app.post('/check',(req,res)=> {

    User.find({
        pass:req.body.password
    }).countDocuments((error,cc)=> {
        if(cc>0) {
            res.render('pic')
        }
        else {
           res.send('alert("Not a valid input")')
        }
    })
})

app.post('/getPass',(req,res)=> {
    const email = req.body.vmail;
    
    User.findOne({
        cemail:email
    },(error,task)=> {
        if(task) {
           
            res.send(task.pass)
        }
        else {
            res.send("Not a verified Email")
        }
    })
})

app.post('/reset',(req,res)=> {

    const old = req.body.opass;
    const New = req.body.npass;
    const conf = req.body.cnpass;
    if(New.length<6 || conf.length<6) {
        res.send("Minimum character should be 6")
    }
    else {
        User.updateOne({
            pass:old,
            cpass:old
        },{
            $set: {
                pass:req.body.npass,
                cpass:req.body.npass
            }
        }).then((resu)=> {
            res.render('login')
        }).catch((error)=> {
            res.send(error+" ")
        })

    }
})

app.get("/fiction",(req,res)=> {
    res.render("fictionPage")
})

app.post('/getFiction',(req,res)=> {

    ficData.find({
        title:  req.body.nameHere
    },(error,user)=> {
        if(user.length==0) {
            return res.render("results",{
                error:"Error 404 Not found"
            })
        }

        title=[]
        author=[]
        pdf=[]
        amazon=[]

        user.forEach((val,index)=> {
            title.push(val["title"])
            author.push(val["author"])
            pdf.push(val["pdf"])
            amazon.push(val["amazon"])
        })


        res.render('results',{
            title:title,
            author:author,
            pdf:pdf,
            amazon:amazon
        })
    })
    
})

app.get('/comics',(req,res)=> {
    res.render('comicsPage')
})

app.post('/getAllComics',(req,res)=> {

    comicData.find({
        title:  req.body.nameHere
    },(error,user)=> {
        if(user.length==0) {
            return res.render("results",{
                error:"Error 404 Not found"
            })
        }

        title=[]
        author=[]
        pdf=[]
        amazon=[]

        user.forEach((val,index)=> {
            title.push(val["title"])
            author.push(val["author"])
            pdf.push(val["pdf"])
            amazon.push(val["amazon"])
        })


        res.render('results',{
            title:title,
            author:author,
            pdf:pdf,
            amazon:amazon
        })
    })
})

app.get('/novels',(req,res)=> {
    res.render('novels')
})

app.post('/getAllNovels',(req,res)=> {

    novelData.find({
        title:  req.body.nameHere
    },(error,user)=> {
        if(user.length==0) {
            return res.render("results",{
                error:"Error 404 Not found"
            })
        }

        title=[]
        author=[]
        pdf=[]
        amazon=[]

        user.forEach((val,index)=> {
            title.push(val["title"])
            author.push(val["author"])
            pdf.push(val["pdf"])
            amazon.push(val["amazon"])
        })


        res.render('results',{
            title:title,
            author:author,
            pdf:pdf,
            amazon:amazon
        })
    })
})



app.post('/getAll',(req,res)=> {

     csedata.find({
        title:  req.body.nameHere
    },(error,user)=> {

        
        
        if(user.length==0) {
            return res.render("results",{
                error:"Error 404 Not found"
            })
        }


        title=[]
        author=[]
        pdf=[]
        amazon=[]

        user.forEach((val,index)=> {
            title.push(val["title"])
            author.push(val["author"])
            pdf.push(val["pdf"])
            amazon.push(val["amazon"])
        })


        res.render('results',{
            title:title,
            author:author,
            pdf:pdf,
            amazon:amazon
        })
    })
})

app.post('/getAllEce',(req,res)=> {

    ecedata.find({
       title: req.body.nameHere
   },(error,user)=> {
       
       if(user.length==0) {
           return res.render("results",{
               error:"Error 404 Not found"
           })
       }


       title=[]
       author=[]
       pdf=[]
       amazon=[]

       user.forEach((val,index)=> {
           title.push(val["title"])
           author.push(val["author"])
           pdf.push(val["pdf"])
           amazon.push(val["amazon"])
       })


       res.render('results',{
           title:title,
           author:author,
           pdf:pdf,
           amazon:amazon
       })
   })
})

app.post('/getAllCivil',(req,res)=> {
    civildata.find({
       title: req.body.nameHere
   },(error,user)=> {
       if(user.length==0) {
           return res.render("results",{
               error:"Error 404 Not found"
           })
       }
       title=[]
       author=[]
       pdf=[]
       amazon=[]

       user.forEach((val,index)=> {
           title.push(val["title"])
           author.push(val["author"])
           pdf.push(val["pdf"])
           amazon.push(val["amazon"])
       })


       res.render('results',{
           title:title,
           author:author,
           pdf:pdf,
           amazon:amazon
       })
   })
})

app.post('/getAllIS',(req,res)=> {

    isdata.find({
       title: req.body.nameHere
   },(error,user)=> {
       
       if(user.length==0) {
           return res.render("results",{
               error:"Error 404 Not found"
           })
       }
       title=[]
       author=[]
       pdf=[]
       amazon=[]

       user.forEach((val,index)=> {
           title.push(val["title"])
           author.push(val["author"])
           pdf.push(val["pdf"])
           amazon.push(val["amazon"])
       })


       res.render('results',{
           title:title,
           author:author,
           pdf:pdf,
           amazon:amazon
       })
   })
})


app.post('/getAllEEE',(req,res)=> {

    eeedata.find({
       title: req.body.nameHere
   },(error,user)=> {
       
       if(user.length==0) {
           return res.render("results",{
               error:"Error 404 Not found"
           })
       }


       title=[]
       author=[]
       pdf=[]
       amazon=[]

       user.forEach((val,index)=> {
           title.push(val["title"])
           author.push(val["author"])
           pdf.push(val["pdf"])
           amazon.push(val["amazon"])
       })


       res.render('results',{
           title:title,
           author:author,
           pdf:pdf,
           amazon:amazon
       })
   })
})

app.post('/getAllMech',(req,res)=> {

    mechdata.find({
       title: req.body.nameHere
   },(error,user)=> {
       
       if(user.length==0) {
           return res.render("results",{
               error:"Error 404 Not found"
           })
       }
       title=[]
       author=[]
       pdf=[]
       amazon=[]

       user.forEach((val,index)=> {
           title.push(val["title"])
           author.push(val["author"])
           pdf.push(val["pdf"])
           amazon.push(val["amazon"])
       })


       res.render('results',{
           title:title,
           author:author,
           pdf:pdf,
           amazon:amazon
       })
   })
})

app.post('/getAllBio',(req,res)=> {

    biodata.find({
       title: req.body.nameHere
   },(error,user)=> {
       
    console.log(user)
       if(user.length==0) {
           return res.render("results",{
               error:"Error 404 Not found"
           })
       }
       title=[]
       author=[]
       pdf=[]
       amazon=[]

       user.forEach((val,index)=> {
           title.push(val["title"])
           author.push(val["author"])
           pdf.push(val["pdf"])
           amazon.push(val["amazon"])
       })


       res.render('results',{
           title:title,
           author:author,
           pdf:pdf,
           amazon:amazon
       })
   })
})


app.get('/registeration',(req,res)=> {
    res.render('registeration')
})

app.get('/forgot',(req,res)=> {
    res.render("forgot")
})

app.get('/pic',(req,res)=> {
    res.render('pic');
})

app.get('/aboutus',(req,res)=> {
    res.render('aboutus')
})

app.get('/pic/leagues',(req,res)=> {
    res.render('leagues')
})

app.get('/pic/csefile',(req,res)=> {
    res.render('csefile')
})

app.get('/pic/ecefile',(req,res)=> {
    res.render('ecefile');
})

app.get('/pic/mech',(req,res)=> {
    res.render('mech');
})

app.get('/pic/eee',(req,res)=> {
    res.render('eee');
})

app.get('/pic/biotech',(req,res)=> {
    res.render('biotech');
})

app.get('/pic/medical',(req,res)=> {
    res.render('medical');
})

app.get('/pic/ISfile',(req,res)=> {
    res.render('ISfile');
})

app.get('/pic/civil',(req,res)=> {
    res.render('civil');
})

app.get('/commonhtml',(req,res)=> {
    res.render('commonhtml');
})


app.listen(3000,()=> {
    console.log("Server started")
})