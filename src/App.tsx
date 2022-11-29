import { Flex, useToast } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import JsonInput from "./components/JsonInput";
import TypeScriptOutput from "./components/TypescriptOutput";

function App() {
  const [interfaceResult, setInterfaceResult] = useState("");
  const toast = useToast();


  return (
    <Flex className="App" bg="#FFEFD6" minH="83vh">

      <JsonInput
        onSubmit={(x: string, y: string) => {
          try {
            const interfaceResult = jsonToTypescript(x, y);
            setInterfaceResult(interfaceResult);
          } catch (e: any) {
            setInterfaceResult("");
            toast({
              title: "Error",
              description: e.message,
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        }}
      />
      <TypeScriptOutput interfaceResult={interfaceResult} />
    </Flex>
  );
}

function jsonToTypescript(mainInterfaceName: string, input: string) {
  try {
    const parsedInput = JSON.parse(input);
    return jsonObjectToTypescriptInterface(mainInterfaceName, parsedInput);
  } catch (e: any) {
    throw new Error(`Invalid JSON: ${e.message}`);
  }
}

function jsonObjectToTypescriptInterface(
  interfaceName: string,
  json: Record<string, unknown>,
  fixedName?: string
): string {
  const interfaces = [] as string[];
  const rec = Object.entries(json).map(([key, val]) => {
    if (isRecord(val)) {
      return [key, val] as const;
    }
    return [key, primitiveValueToTypescriptType(val)] as const;
  });

  const str = `interface ${
    fixedName ? fixedName : toPascalCase(interfaceName)
  } {
        ${rec.reduce((_interface, [property, valType]) => {
          if (isRecord(valType)) {
            const nestedInterfaceName = `${toPascalCase(
              interfaceName
            )}${toPascalCase(property)}`;
            interfaces.push(
              jsonObjectToTypescriptInterface(
                property,
                valType,
                nestedInterfaceName
              )
            );
            return _interface + `${property}: ${nestedInterfaceName}\n`;
          }
          return _interface + `${property}: ${valType}\n`;
        }, "")}}\n`;

  console.log("str", str);
  console.log("interfaces", interfaces);

  return str + "\n" + interfaces.join("");
}

function isRecord(x: unknown): x is Record<string, unknown> {
  return x !== null && typeof x === "object" && !Array.isArray(x);
}

function primitiveValueToTypescriptType(val: unknown) {
  switch (typeof val) {
    case "number":
      return "number";
    case "string":
      return "string";
    case "boolean":
      return "boolean";
    case null:
      return "null";
    case undefined:
      return "undefined";
  }
}

function toPascalCase(name: string) {
  return name
    .split(" ")
    .reduce(
      (acc, cur) =>
        acc + cur.charAt(0).toUpperCase() + cur.slice(1).toLowerCase(),
      ""
    );
}

export default App;
export { jsonObjectToTypescriptInterface, jsonToTypescript };
