# Find Smallest Missing Positive Integer

## Problem Info

| | |
|---|---|
| **Platform** | HackerRank |
| **Language** | JavaScript (Node.js) |
| **Solved On** | 2026-02-03 |
| **Link** | [View Problem](https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/find-smallest-missing-positive-integer/problem?isFullScreen=true) |

## Problem Description

Given an unsorted array of integers, find the smallest positive integer not present in the array in O(n) time and O(1) extra space.

**Example**

Input

```
orderNumbers = [3, 4, -1, 1]

```

Output

```
2

```

Explanation

```
We want the smallest positive missing integer.

Start with [3, 4, -1, 1]
- i=0: value 3 ⇒ swap with index 2 ⇒ [-1, 4, 3, 1]
- i=0: value -1 is out of range ⇒ move on
- i=1: value 4 ⇒ swap with index 3 ⇒ [-1, 1, 3, 4]
- i=1: value 1 ⇒ swap with index 0 ⇒ [1, -1, 3, 4]
- now 1 at index 0, 3 at 2, 4 at 3; -1 remains at index 1

Scan from index 0:
index 0 has 1 (correct), index 1 has -1 (not 2) ⇒ missing positive is 2

```

## Solution

See `solution.js` for the implementation.
