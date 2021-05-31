# Recursion

1. Write a recursive function to determine whether all digits of the number are odd or not.

```
Input   Output

4211133     false

7791    true

5   true
```

2. Given an array of numbers. Write a recursive function to find its minimal positive
element. (if such element does not exist, return -1).

```
Input  Output

[56, -9, 87, -23, 0, -105, 55, 1] 0
[45, -9, 15, 5, -78] 5
[-5, -9, -111, -1000, -7] -1
```

3. Given an array of numbers which is almost sorted in ascending order. Find the index
where sorting order is violated.

```
Input Output

[2, 12, 15, 48, 64] -1
[-9, -4, -4, 3, 12, 4, 5] 5

```

4. Given an array. Write a recursive function that removes the first element and returns the
given array. (without using arr.shift())

```
Input Output

[6, 78, ‘n’, 0, 1] [78, ‘n’, 0, 1]

[5] []
[] []
```

5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
function that concats arrays).

```
Input Output
[1, [3, 4, [1, 2]], 10] [1, 3, 4, 1, 2, 10]

[14, [1, [[[3, []]], 1], 0]

[14, 1, 3, 1, 0]
```

6. Given an array and a number N. Write a recursive function that rotates an array N
places to the left. (Hint: to add element to the beginning use arr.unshift())

```
[‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’, ‘h’] 3 [‘d’, ‘e’, ‘f’, ‘g’, ‘h’, ‘a’, ‘b’, ‘c’]
[‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’, ‘h’] -2 [‘g’, ‘h’, ‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’]
```

7. Given a number. Write a function that calculates its sum of the digits and if that sum has
more than 1 digit find the sum of digits of that number. Repeat that process if needed
and return the result.

```
Input Output

14 5
29 2
999999999999 9
```

8. Implement merge sort


### Write a recursive function

* to find the sum of a given array.
* to find the factorial of a given natural N.

### Write a fib(int) function which returns n-th fibonacci number.

* try to understand the complexity of the recursion and write it down. In the end you will get the golden
ratio.
* try to optimize the recursion with caching results

### Add brackets between letters.

Given a string containing only English letters (uppercase and lowercase). Add opening and closing parentheses
according to the following pattern: "example" -> "(e (x (a (m) p) l) e)" (Added opening parentheses to the
middle, closing parentheses afterthe middle. In case the string length is even there must be 2 characters in the
brackets in the middle. ("card -> (c (ar) d" but not "(c (a () r) d)"). Example`

```
let s = "LItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAeocXO";
addBrackets(s); //
"L(I(t(B(e(o(F(L(c(S(G(B(O(F(Q(x(M(H(o(I)u)D)D)W)c)q)c)V)g)k)c)R)o)A)e)o)c
)X)O"
```

### Print sums of all subsets of a given set

* Given an array of integers, print sums of all subsets in it. Output sums can be printed in any order.
Hint: There are total 2^n subsets. For every element, we consider two choices.

```
Input : arr[] = {2, 3}
Output: 0 2 3 5
Input : arr[] = {2, 4, 5}
Output : 0 2 4 5 6 7 9 11
```

### Print all combinations offactors (Ways to factorize)
Write a program to print all the combinations of factors of given number n.

```
Input : 16
Output: 2 2 2 2
2 2 4
2 8
4 4
Input : 12
Output: 2 2 3
2 6
3 4
```