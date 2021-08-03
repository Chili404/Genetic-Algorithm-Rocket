function DNA(genes) {
  if(genes) {
    this.genes = genes;
  }else {
    this.genes = [];
    for(var i = 0; i < liveTime; i++) {
      this.genes[i] = p5.Vector.random2D();
      this.genes[i].setMag(0.2);
    }
  }
  this.crossover = function(partner){
    var mid = floor(random(liveTime));
    var newGenes = [];
    for(var i = 0; i < liveTime; i++) {
      if(i > mid) {
        newGenes[i] = partner.genes[i];
      }else {
        newGenes[i] = this.genes[i];
      }
    }
    return new DNA(newGenes);
  }
  
  this.mutate = function(mutationrate) {
    for(var i = 0; i < liveTime; i++) {
      var r = random();
      if(r < mutationrate) {
        genes[i] = p5.Vector.random2D();
      }
    }
  }
}