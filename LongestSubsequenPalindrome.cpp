// QUESTION ONE
// Find palindrome Daily Interview Pro
// Hi, here's your problem today. This problem was recently asked by Twitter:
// A palindrome is a sequence of characters that reads the same backwards and forwards.
// Given a string, s, find the longest palindromic substring in s.

#include<bits/stdc++.h>
using namespace std;

// every sequential element of palindrome in sequence string input equals p(i , i) = 1 at index ([0][1])

// utility function compare for max of two integers
int max(int x, int y) { return (x > y) ? : y } 
// find max and length of max for palindromic subsequence in xtring input sequence
// Find Longest Palindrone flp
flp(char* seq, int i, int j)
{
	// if s is one char long
	if (i == j)
		return 1;
	// if there are only two char and both match
	if (seq[i] == seq[j] && i + 1 == j)
		return 2;
	// if first char and last char match
	if (seq[i] == seq[j])
		return flp(seq, i + 1, j - 1) + 2;
	// if first char and last char Do Not match
		return max( flp(seq, i, j - 1), flp(seq, i+ 1, j) );
}
int main()
{
	char seq[] = "madam";
	int n = strlen(seq);
	cout << "The length of the LPS is "
		<< flp(seq, 0, n - 1);
	return 0;
}
// QESTION TWO & THREE
// From my phone interview today for a blockchain developer position
// When is a Binary Tree a Heap?
// 
// // Answer:
//
// Which is fastest: Selection Sort, Quicksort or Merge Sort? Order
//
// // Answer:
