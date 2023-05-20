const DESIGN_PATTERNS = {
  factory: "./creational/factory",
};

function main(args: string[]) {
  if (!args.length) {
    cliHelper();
    return;
  }

  const designPatternSelected = args[0];
  runner(designPatternSelected);
}

function cliHelper() {
  console.log("Please provide a command");
  console.log("Usage: npm start <name-of-design-pattern>");
  console.log();
  console.log("List of design patterns:");
  Object.keys(DESIGN_PATTERNS).forEach((designPatternName) =>
    console.log(`- ${designPatternName}`)
  );
}

async function runner(designPatternName: string) {
  if (!DESIGN_PATTERNS[designPatternName]) {
    console.log(`Design pattern "${designPatternName}" not implemented yet`);
    return;
  }

  await import(DESIGN_PATTERNS[designPatternName]);
}

main(process.argv.slice(2));
// main(["factory"]);
