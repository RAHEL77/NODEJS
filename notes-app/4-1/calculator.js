const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "add",
  builder: {
    a: {
      demandOptions: true,
      type: "integer",
    },
    b: {
      demandOptions: true,
      type: "integer",
    },
  },
  handler(argv) {
    console.log(argv.a + argv.b);
  },
});

//sub
yargs.command({
  command: "sub",
  describe: "subtract",
  builder: {
    a: {
      demandOptions: true,
      type: "integer",
    },
    b: {
      type: "integer",
      demandOptions: true,
    },
  },
  handler(argv) {
    console.log(argv.a - argv.b);
  },
});

//muliply
yargs.command({
  command: "mult",
  describe: "multiply",
  builder: {
    a: {
      demandOptions: true,
      type: "integer",
    },
    b: {
      demandOptions: true,
      type: "integer",
    },
  },
  handler(argv) {
    console.log(argv.a * argv.b);
  },
});

//power
yargs.command({
  command: "pow",
  describe: "power",
  builder: {
    a: {
      demandOptions: true,
      type: "integer",
    },
    p: {
      demandOptions: true,
      type: "integer",
    },
  },
  handler(argv) {
    console.log(Math.pow(argv.a, argv.p));
  },
});
console.log(yargs.argv);
yargs.parse();
