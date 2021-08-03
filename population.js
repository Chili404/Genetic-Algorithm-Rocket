function Population() {
  this.rockets = [];
  this.popsize = 20;
  this.mutationrate = 0.01;
  this.totalFitness = 0;
  for(var i = 0; i < this.popsize; i++) {
    this.rockets[i] = new Rocket();  
  }
  
  this.run = function() {
    //console.log(this.rockets);
    for(var i = 0; i < this.popsize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
    
  }
  
  this.evaluate = function() {
    var totalFit = 0;
    for(var i = 0; i < this.popsize; i++) {
      this.rockets[i].calcFitness();
      
      /*if(this.rockets[i].fitness > maxFitness) {
        maxFitness = this.rockets.fitness;
      }*/
      totalFit += this.rockets[i].fitness;
    }
    
    for(var j = 0; j < this.popsize; j++) {
      this.rockets[j].fitness = this.rockets[j].fitness / totalFit
      
    }
    createP(totalFit);
  }
  
  this.selection = function() {
    var matingPool = [];
    
    for(var k = 0; k < this.popsize; k++) {
      var parentA = this.acceptReject().dna;
      var parentB = this.acceptReject().dna;
      
      var childDNA = parentA.crossover(parentB);
      childDNA.mutate(this.mutationRate);

      matingPool[k] = new Rocket(childDNA);

    }
    this.rockets = matingPool;
  }
    
  this.acceptReject = function() {
    var n = random();
    var index = 0;
    while(n > 0) {
      n -= this.rockets[index].fitness;
      index++;
    }
    index--;
    return this.rockets[index];
  }
}