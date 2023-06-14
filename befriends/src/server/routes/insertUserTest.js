import Model from '../../db/models/index.js';

Model.Userinfo.create({
    firstname: "Antonio",
    lastname: "Perez",
    username: "aperez",
    email: "aperez@bing.com",
    birthday: 9199515,
    location: "Austin, Tx",
    profile_pic: "profilepicturepicture",
    banner_pic: "bannerpictureurl",
})

Model.Userinfo.create({
    firstname: "Jackson",
    lastname: "Pollock",
    username: "jpollock",
    email: "jpollock@bing.com",
    birthday: 9199515,
    location: "Atlanta, Georgia",
    profile_pic: "profilepicturepicture",
    banner_pic: "bannerpictureurl",
})

Model.Userinfo.create({
    firstname: "Ismael",
    lastname: "Primera",
    username: "iprimera",
    email: "iprimera@bing.com",
    birthday: 9199515,
    location: "Atlanta, Georgia",
    profile_pic: "profilepicturepicture",
    banner_pic: "bannerpictureurl",
})

Model.Userinfo.create({
    firstname: "arturo",
    lastname: "sandoval",
    username: "asandoval",
    email: "asandoval@bing.com",
    birthday: 9199515,
    location: "Atlanta, Georgia",
    profile_pic: "profilepicturepicture",
    banner_pic: "bannerpictureurl",
})



// id serial PRIMARY KEY,
//   firstName varchar,
//   lastName varchar,
//   username varchar,
//   birthday bigint,
//   location varchar,
//   profile_pic varchar,
//   banner_pic varchar