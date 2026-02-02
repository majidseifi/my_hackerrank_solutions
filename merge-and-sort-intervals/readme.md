# Merge And Sort Intervals

## Problem Info

| | |
|---|---|
| **Platform** | HackerRank |
| **Language** | JavaScript (Node.js) |
| **Solved On** | 2026-02-02 |
| **Link** | [View Problem](https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/merge-and-sort-intervals/problem?isFullScreen=true) |

## Problem Description

Given an array of intervals [startTime, endTime], merge all overlapping intervals and return a sorted array of non-overlapping intervals.

**Example**

Input

```
intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]

```

Output

```
[[1, 6], [8, 10], [15, 18]]

```

Explanation

```
- Step 1: Sort intervals by start time (already sorted). 
- Step 2: Initialize merged list with first interval [1,3]. 
- Step 3: Compare [2,6] with last merged [1,3]. They overlap (2 ≤ 3), so merge into [1,6]. Step 4: Compare [8,10] with last merged [1,6]. No overlap (8 > 6), append [8,10]. 
- Step 5: Compare [15,18] with last merged [8,10]. No overlap (15 > 10), append [15,18]. 

Result: [[1,6],[8,10],[15,18]].

```

## Solution

See `solution.js` for the implementation.
