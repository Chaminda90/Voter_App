const Hapi = require('@hapi/hapi');
const mysql = require('mysql');
const con = mysql.createConnection({
    host: "34.80.165.62",
    port: "3306",
    user: "voterbdmysql",
    password: "asd@123",
    database: "voter_db",
    //--
    //host: "127.0.0.1",
    //port: "3306",
    //user: "root",
    //password: "root",
    //database: "voter_db",
    //--
    insecureAuth : true
 });

const init = async ()=> {
const server = Hapi.server({
port: 8080,
host: '0.0.0.0'
});

server.route({
method: 'GET',
path: '/',
handler: (request, h) => {
return "Online Voter Registration - California, USA";
}
});

server.route({
method: 'GET',
path: '/name',
handler: async (request, h) => {
const uid = request.params.name;
const results = await getVoterByName(name);
return results;
}
});

server.route({
method: 'GET',
path: '/address',
handler: async (request, h) => {
const uid = request.params.address;
const results = await getListByAddress(address);
return results;
}
});

server.route({
method: 'POST',
path: '/',
handler: async (request, h) => {
const email = request.payload.amount;
const name = request.payload.name;
user = {};
user['address'] = address;
user['name'] = name;
const results = await getRegisterVoters(list);
return results;
}
});

server.route({
method: 'GET',
path: '/user',
handler: async (request, h) => {
const results = await getList();
return results;
}
});

//--
server.route({
    method: 'GET',
    path: '/{id}',
    handler: async (request, h) => {
    const uid = request.params.id;
    const results = await getUserById(uid);
    return results;
    }
    });
    
    function getUserById(uid) {
    return new Promise((resolve, reject) => {
    con.query('SELECT * FROM user WHERE id = ' + uid, [], function (error,
    results) {
    if (error) {
    return reject(error)
    }
    console.log(results);
    return resolve(results);
    })
    })
    }
    
//--


await server.start();
console.log('Server is running in %s', server.info.uri);
};

function getList() {
return new Promise((resolve, reject) => {
con.query('SELECT * FROM list', [], function (error, results) {
if (error) {
return reject(error)
}
console.log(results);
return resolve(results);
})
})
}

function getVoterByName() {
return new Promise((resolve, reject) => {
con.query('SELECT * FROM user WHERE name = ', [], function (error,
results) {
if (error) {
return reject(error)
}
console.log(results);
return resolve(results);
})
})
}

function getCreateVoters(list) {
return new Promise((resolve, reject) => {
con.query('INSERT INTO user ( name, amount) VALUES ("' + user.name +'","' +
stock.amount + '")', [], function (error, results) {
if (error) {
return reject(error)
}
console.log(results);
return resolve(results);
})
})
}

process.on('unhandledRejection', (err) => {
console.error("Unhandled Error", err);
process.exit(1);
});
init();





