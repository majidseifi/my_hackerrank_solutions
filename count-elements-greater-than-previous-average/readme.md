# Count Elements Greater Than Previous Average

## Problem Info

| | |
|---|---|
| **Platform** | HackerRank |
| **Language** | JavaScript (Node.js) |
| **Solved On** | 2026-01-29 |
| **Link** | [View Problem](https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/count-elements-greater-than-previous-average/problem) |

## Problem Description

Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.

**Example**

Input

```
responseTimes = [100, 200, 150,300]

```

Output

```
2

```

Explanation

```
- Day 0: 100 (no previous days, skip) 
- Day 1: 200 > average(100) = 100 → count = 1 
- Day 2: 150 vs average(100, 200) = 150 → not greater → count = 1 
- Day 3: 300 > average(100, 200, 150) = 150 → count = 2 Return 2.

```

## Solution

See `solution.js` for the implementation.
