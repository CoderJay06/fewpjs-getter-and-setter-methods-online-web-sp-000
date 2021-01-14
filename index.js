// Add your Circle class here

class Circle {
   constructor(radius) {
      this.radius = radius;
   }

   get diameter() {
      // Diameter = radius • 2
      return this.radius * 2;
   }

   get circumference() {
      // Circumference = π • diameter
      return Math.PI * this.diameter
   }

   get area() {
      // Area = π • radius2
      return Math.PI * (this.radius ** 2)
   }

   set diameter(newDiameter) {
      if (newDiameter > 0) {
         this.radius = newDiameter / 2;
      } else {
         throw new Error("Diameter cannot be less than 0");
      }
   }

   set circumference(newCircumference) {
      if (newCircumference > 0) {
         this.radius = (newCircumference / 2) / Math.PI;
      } else {
         throw new Error("Circumference cannot be less than 0");
      }
   }

   set area(newArea) {
      if (newArea> 0) {
         this.radius = Math.sqrt(newArea);
      } else {
         throw new Error("Area cannot be less than 0");
      }
   }
}