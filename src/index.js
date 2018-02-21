class Sorter {

  constructor() {}

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
    var arr = [];
    for(var i = 0; i<indices.length;i++){
       arr[i] = this[indices[i]];
    }

    for(var m = 0; m<arr.length;m++){
   
      for(var j=0;j<arr.length;j++){
      if(arr[j]>=arr[j+1]){
        var t = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = t;
      }
      }
    }

    for(var m = 0; m<indices.length;m++){
   
      for(var j=0;j<indices.length;j++){
      if(indices[j]>=indices[j+1]){
        var t = indices[j];
        indices[j] = indices[j+1];
        indices[j+1] = t;
      }
      }
    }

    for(var i = 0; i<indices.length;i++){
      this[indices[i]] = arr[i];
    }

  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;