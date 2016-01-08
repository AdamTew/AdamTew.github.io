---
layout: post
title: How to Big O
---

## Basics

Big O is a way to reason about the complexity of algorithms in computer science. There are many other methods, but big O is the most common that I've seen. Big O observes the theoretical limits of a given algorithm and generally ignores constants (because they're generally not relevant in the big picture)

## Complexities

These are The basic run time complexities you'll see with big O:

$$f(n)$$

|---
|Big O|Complexity|
|---|---|
|O(1)		|Constant|
|O(logn)	|slightly less than doubles|
|O(n)		|doubles|
|O(nlogn)	|slightly more than doubles|
|O(n^2)	|quadruples|
|---
|O(n^n)	|Something really bad|
|O(n!)		|Something even worse

Each one is a theoretical limit of how long an algorithm will take to complete.

## Examples

Take a traditional `for` loop 

~~~

for(int i = 0; i < n; i++) {
  cout << "you've reached " << i << endl;
}

~~~

The loop will iterate `n` times, which is directly correlated to the size of the data set it's analyzing. The constant `cout << "you've reached " << i << endl;` is less important the larger the data set. Because big O is a measure of the theoretical limit, the constant is ignored entirely, and the complexity we are concerned with becomes O(n) - which is read "order n".

<br />

---

<br />

Let's observe a nested `for` loop

~~~

for (int i = 0; i < n; i++) {
  for (int j = 0; j < n; j++) {
    cout << "You've reached " << (i + j) << endl;
  }
}

~~~

Here we see that a given data set will be iterated `n` times for every item in the data set. This gives us a complexity of O(n^2), which, as you can imagine, is __far worse__ than the previous O(n) example and should be avoided unless absolutely necessary.

## Analyzing Recursion

Big O gives us some really helpful insights on recursion. One big help is this theorem

Assume T(n)=aT(n/b)+O(n^k) is the time for the function.
if a > b ^ k, the complexity is O(n^(log(ba))
if a = b ^ k, the complexity is O((n^k) logn)
if a < b ^ k, the complexity is O(n ^ k)

Some rules to define are:

`a` is the number of recursive calls we make within a function  
`b` is the number of pieces we divide the problem into  
`k` is the power of n work we do inside each call

So, in lay mans terms:

~~~

void readCount(int count) 
{
  if(count <= 0)return;
	
  // the amount of work we did never made it to n, so k is 0
  cout << count << endl;			

  // we make one recursive call, so a = 1
  // divides the work by 2, so b = 2
  return readCount(count / 2); 
}

~~~

With the above example we end up with 

- a = 1
- b = 2
- k = 0

`1 = 2^0 = O((n^0) logn)`

So the complexity of our recursive call comes out to be `O(logn)`

### Another example

~~~

void readStars(int stars)
{
  if(stars <= 0) return;
	
  for(int i = 0; i < stars; i++) count << " * "; // k = 1
	
  return readStars(stars / 2) // a = 1, b = 2
}

~~~

- a = 1
- b = 2
- k = 1

`1 < 2^1 = O(n^1)`

This gives us a complexity of `O(n)`

## Therefore

We can see that simple changes to our code can dramatically affect the run-time complexity. So it makes sense to be mindful of where we put loops, how often we iterate entire datasets, and especially how much we process during any recursion. 