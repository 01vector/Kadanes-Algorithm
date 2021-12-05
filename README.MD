In CS, algorithm for a solving the maximum sum subarray problem plays an important part. This problem is the task of finding continuous subarray with a largest sum in a general array. Current problem exists in a CV (Computer Vision). For example, similar algorithms are used by programmers when they are trying to detect the brightest area in an image.

Dynamic programming is the most rational and efficient path for a solving the current problem. 
A dynamic programming is a method of a writing code that means a dividing problem into smaller parts and merging them into a result.
But a task must have a suitable structure and can be divided. 

One of algorithms of the dynamic programming is the Kadane's algorithm.

Joseph "Jay" Born Kadane (born January 10, 1941) is the Leonard J. Savage University Professor of Statistics, Emeritus in the Department of Statistics and Social and Decision Sciences at Carnegie Mellon University. Kadane is one of the early proponents of Bayesian statistics, particularly the subjective Bayesian philosophy (source is Wikipedia).

The Kadane’s algorithm has a linear complexity O(n).

The Kadane’s algorithm pseudocode:
… maxSum = current …
	1.	current = arr[i] + arr[i + 1],
	2.	if (current < 0) current = 0,
	3.	if (current > maxSum) maxSum = current,
	4.	return to a first step.