function twoSum(nums, target) {
    let obj = new Map();
    for (let i = 0; i < nums.length; i++) {
        let rem = target - nums[i];
        if (obj.has(rem)) {
            return [obj.get(rem), i]
        }
        obj.set(nums[i], i);
    }
}