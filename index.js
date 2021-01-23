class Polygon{
    constructor(integers){
        this.integers = integers
    }

   get countSides(){
       return this.integers.length 
   }

   get perimeter(){
       return this.integers.reduce((sum, i) => sum + i)
   }
}

class Triangle extends Polygon{
    get isValid(){
       const [a,b,c] = this.integers
       if(a + b <= c || a + c <= b || b + c <= a){
           return false
       } else {
           return true
       }
    }
}

class Square extends Polygon{
    get isValid(){
        const [a,b,c,d] = this.integers
        if(a === b && b === c && c === d){
            return true 
        } else {
            return false
        }
    }

    get area(){
        return this.integers[0] ** 2
    }
}