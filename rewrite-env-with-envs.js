var fileName = process.argv[2];
if (!fileName) {
    throw "No filename/module given!";
}

var prefix = process.argv[3] || '';

var env = require(fileName);

env.values.forEach(function (entry) {
    if (entry.value.startsWith('$'+ prefix)) {
        entry.value = process.env[entry.value.substring(1)];
    }
});


// write directly to stdout - console.log might be changed?
process.stdout.write(JSON.stringify(env, null, 2));
