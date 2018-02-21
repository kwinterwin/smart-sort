class Sorter {

  constructor() {
  }

  add(element) {
    var length=this.length;
    this[length]=element;
   }
 
   at(index) {
     return this[index];
   }
 
   get length() {
       var count=0;
       for(var i=0; this[i]!=undefined; i++){
          count++;
       }
       return count;
   }
 
   toArray() {
    var arr=[];
    for(var i=0; i<this.length; i++){
           arr[i] = this[i];
       }
       return arr;
   }

  sort(indices) {
   for(var i=0;i<indices.length;i++){
           if (this[indices[i]]>=this[indices[i+1]])
           {
               var t=this[indices[i]];
               this[indices[i]]=this[indices[i+1]];
               this[indices[i+1]] =t;
           }
       }
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;