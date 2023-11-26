console.log("1"),setTimeout((function(){console.log("2")}),2e3),setTimeout((function(){Promise.resolve().then((function(){console.log("3")}))}),0),Promise.resolve().then((function(){console.log("4")})),console.log("5");
//# sourceMappingURL=module_9.ca175625.js.map
