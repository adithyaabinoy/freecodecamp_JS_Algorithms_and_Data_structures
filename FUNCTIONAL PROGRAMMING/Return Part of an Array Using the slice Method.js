function sliceArray(anim, beginSlice, endSlice) {
return anim.slice(beginSlice, endSlice)
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"]
let res = sliceArray(inputAnim, 1, 3);
console.log(res)