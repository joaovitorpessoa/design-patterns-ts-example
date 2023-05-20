var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
const DESIGN_PATTERNS = {
  factory: "./creational/factory",
};
function cliHelper() {
  console.log("Please provide a command");
  console.log("Usage: npm start <name-of-design-pattern>");
  console.log();
  console.log("List of design patterns:");
  Object.keys(DESIGN_PATTERNS).forEach((designPatternName) =>
    console.log(`- ${designPatternName}`)
  );
}
function runner(designPatternName) {
  return __awaiter(this, void 0, void 0, function* () {
    if (!DESIGN_PATTERNS[designPatternName]) {
      console.log(`Design pattern "${designPatternName}" not implemented yet`);
      return;
    }
    yield Promise.resolve(`${DESIGN_PATTERNS[designPatternName]}`).then((s) =>
      __importStar(require(s))
    );
  });
}
function main(args) {
  if (!args.length) {
    cliHelper();
    return;
  }
  const designPatternSelected = args[0];
  runner(designPatternSelected);
}
main(process.argv.slice(2));
// main(["factory"]);
