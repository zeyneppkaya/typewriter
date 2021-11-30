const sentence = "hello there from lighthouse labs.";

let i = 1000;
for (const char of sentence) {
    setTimeout(() => {
        process.stdout.write(char);
      }, i);
      i += 60;
};
setTimeout(() => {
    console.log("\n");
  }, i);
