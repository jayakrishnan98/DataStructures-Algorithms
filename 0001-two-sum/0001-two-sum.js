function twoSum(nums, target) {
    // define a map object
    let obj = new Map();
    for (let i = 0; i < nums.length; i++) {
        // storing the remaining value after subtracting from target value
        let rem = target - nums[i];
        if (obj.has(rem)) {
            return [obj.get(rem), i]
        }
        // saving in the map obj for further checking
        obj.set(nums[i], i);
    }
}