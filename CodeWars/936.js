class tree {
   constructor(trunks){
      this.trunks = trunks;
      this.branches = trunks * 10;
      this.twigs = trunks * 100;
      this.leaves = trunks * 1000;
   }
   chopTrunk(n){
      this.trunks-n<=0?this.trunks=0:this.trunks-=n
      this.branches-n*10<=0?this.branches=0:this.branches-=n*10
      this.twigs-n*100<=0?this.twigs=0:this.twigs-=n*100
      this.leaves-n*1000<=0?this.leaves=0:this.leaves-=n*1000
   }
   chopBranch(n){
      this.branches-n*1<=0?this.branches=0:this.branches-=n*1
      this.twigs-n*10<=0?this.twigs=0:this.twigs-=n*10
      this.leaves-n*100<=0?this.leaves=0:this.leaves-=n*100
   }
   chopTwig(n){
      this.twigs-n*1<=0?this.twigs=0:this.twigs-=n*1
      this.leaves-n*10<=0?this.leaves=0:this.leaves-=n*10
   }
   chopLeaf(n){
      this.leaves-n*1<=0?this.leaves=0:this.leaves-=n*1
   }
   describe(){
      return `This tree has ${this.trunks} trunks, ${this.branches} branches, ${this.twigs} twigs and ${this.leaves} leaves.`
   }
}