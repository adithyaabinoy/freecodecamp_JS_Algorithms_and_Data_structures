//Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.

function sliceArray(anim, beginSlice, endSlice) {
return anim.slice(beginSlice, endSlice)
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"]
let res = sliceArray(inputAnim, 1, 3);
console.log(res)