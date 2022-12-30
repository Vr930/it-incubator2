function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
  }

  testLessOrEqual(10);

  function Dog (name) {
    this.myName = name;
    this.voice = function () {
        console.log('hay, my name is ' + this.myName)
    }
}
const bulDog = new Dog('buldog');
bulDog.voice()
/////////////////////////////////////////////////////////

const chainMaker = {
    current : [],
    getLength : function() {
       return this.current.length;
    },
    addLink : function(value) {
        if(value === undefined) {
            this.current.push(`( ${''} )`);
        }
        else if(this.current.push(`( ${value} )`)) {
        }
        return this
    },
    finishChain : function() {
      return this.current.join('~~')
    }
}
console.log(chainMaker.addLink(1).addLink().addLink(3).finishChain());

