# Check Non Identical String Rotation

## Problem Info

| | |
|---|---|
| **Platform** | HackerRank |
| **Language** | JavaScript (Node.js) |
| **Solved On** | 2026-02-03 |
| **Link** | [View Problem](https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/check-non-identical-string-rotation/problem?isFullScreen=true) |

## Problem Description

Given two strings s1 and s2, return 1 if s2 is a rotation of s1 but not identical to s1, otherwise return 0. 

**Example**

Input:

```
s1 = abcde
s2 = cdeab

```

Output:

```
True

```

Explanation:

```
- s2 ('cdeab') is a non-trivial rotation of s1 ('abcde'). 
- If you rotate 'abcde' left by 2 positions, you get 'cdeab'. 
- Since s2 is not equal to s1 and is a rotation, the output is true.

```

## Solution

See `solution.js` for the implementation.
