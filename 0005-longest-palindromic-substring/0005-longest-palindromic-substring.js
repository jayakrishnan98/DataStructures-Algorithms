var longestPalindrome = function(s) {
    if (!s) {
        return "";
    }

    function getPalindromeLength(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    let longestStart = 0;
    let longestEnd = 0;

    for (let center = 0; center < s.length; center++) {
        // Check for odd-length palindromes centered at `center`
        const oddPalindromeLength = getPalindromeLength(s, center, center);
        // Check for even-length palindromes centered between `center` and `center + 1`
        const evenPalindromeLength = getPalindromeLength(s, center, center + 1);
        const currentMaxLength = Math.max(oddPalindromeLength, evenPalindromeLength);

        if (currentMaxLength > longestEnd - longestStart) {
            longestStart = center - Math.floor((currentMaxLength - 1) / 2);
            longestEnd = center + Math.floor(currentMaxLength / 2);
        }
    }

    return s.substring(longestStart, longestEnd + 1);
};
