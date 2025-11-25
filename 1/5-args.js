


// console.log(process.argv);

// node .\5-args.js name=behzad family=bakhshayesh

// [
//   'C:\\nvm4w\\nodejs\\node.exe',                           =============>  node
//   'C:\\Users\\sedigh.b\\Desktop\\nnooddee\\5-args.js',     =============>      .\5-args.js
//   'name=behzad',                                           =============>   name=behzad
//   'family=bakhshayesh'                                     =============>   family=bakhshayesh
// ]

// =====================================================

// const args = process.argv.splice(2)
// const tuples = args.map((el) => el.split("="))
// const result = Object.fromEntries(tuples)
// console.log(result);   ============>  { name: 'behzad', family: 'bakhshayesh' }


// =====================================================

// const argv = require('minimist')(process.argv.slice(2));
// console.log(argv);

// =====================================================