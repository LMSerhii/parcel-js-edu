console.log("1"),setTimeout((()=>{console.log("2")}),2e3),setTimeout((()=>{Promise.resolve().then((()=>{console.log("3")}))}),0),Promise.resolve().then((()=>{console.log("4")})),console.log("5");
//# sourceMappingURL=module_9.0c108b3a.js.map
