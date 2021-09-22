require('../src/db/mongoose'); 
const User = require('../src/models/user'); 

// 60f6f6999a063311e4ba7af3
// User.findByIdAndUpdate('60f6f6999a063311e4ba7af3', {age: 0}).then((user)=>{
//   console.log(user)
//   return User.countDocuments({age:1})
// }).then((result)=>{
//   console.log(result)
// }).catch((e)=>{
//   console.log(e)
// })

const updateAgeAndCount = async(id, age)=> {
    const user = await User.findByIdAndUpdate(id,{age}); 
    const count = await User.countDocuments({age})
    return count 
}

updateAgeAndCount('60f6f6999a063311e4ba7af3', 0).then((count)=>{
  console.log(count)
}).catch((e)=>{
  console.log(e)
})

