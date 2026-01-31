# Check Palindrome Filter Non Letters

## Problem Info

| | |
|---|---|
| **Platform** | HackerRank |
| **Language** | JavaScript (Node.js) |
| **Solved On** | 2026-01-31 |
| **Link** | [View Problem](https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/check-palindrome-filter-non-letters/problem?isFullScreen=true) |

## Problem Description

Given a string containing letters, digits, and symbols, determine if it reads the same forwards and backwards when considering only alphabetic characters (case-insensitive).

**Example**

Input

```
code = A1b2B!a

```

Output

```
1

```

Explanation

```
- Step 1: Extract only letters → ['A','b','B','a'] 
- Step 2: Convert to lowercase → ['a','b','b','a'] 
- Step 3: Compare sequence forward and backward: 'abba' == 'abba' → true

```

## Solution

See `solution.js` for the implementation.
