---
layout: post
title: Data Structures
category: computerscience
---

> a data structure is a particular way of organizing data in a computer so that it can be used efficiently

Data structures are at the core of everything computer scientists do. Understanding how to store, manipulate, sift, move, restructure, or whatever, data is essential when working with programs. Because every data structure operates a little differently, it's important to know when to use what. A simple example in javascript is knowing when to use an array (list of variables) vs an object (key-value pair). Both are collections (data structures) but they operate in very different ways. Knowing what your options are and how they work can save you some headaches down the road.

## Linked List

A linked list is the most basic data structure you'll come across in computer science. Under the hood, this is what your simple collections are made out of in most conventional languages.

The way it works is with pointers. Essentially, you take an object and point its `next` variables at another object of the same type. These objects are called __nodes__ and they can contain any type of data. if you wanted a list of `int`s. your node would look something like this:

~~~
class node 
{
  // the data
  int myNumber;

  // pointer to the next node
  node  *next;

  // constructor
  node( int value, node *next)
    : myNUmber{ value }, next{ next } { }
};
~~~

> a node doesn't have to be a class, it could be a `struct`

You would then point `next` to another `node` object and there you have it, a linked list. Granted, you'll rarely, if ever, see a linked list built like that. You'll normally have another actual linked list class that can perform operations such as `find()`, `delete()`, `add()` and so forth.

*Note: You can have a linked list of any data type, including ones that you've made*

### Doubly Linked List

Most nodes in a linked list just have a pointer to their child. However, sometimes it's more convenient to have a pointer back up to a parent node. A doubly linked list is a linked list where each node has a pointer to both it's parent and child.

### Circular Linked List

Usually, a linked list has a head and a tail. This makes it really easy to code things like traversals and deletes. Sometimes, though, it would be nice to go from the tail to the head. A __circular linked list__ does just that. It has a pointer from tail to head. 

_Usually, a cirular linked list will be a doubly linked list_

## Trees

Trees come in many different forms. Among the most common are the __binary search tree__, __AVL tree__, and the __b+ tree__. Though the specifics are different, the basic form of a tree is a _root_ with pointers to two or more children. Each child also has pointers for two or more children. 

### Binary Search Tree

Binary search trees (BST) are among the simplest trees to write. Each node in a BST can have one or two children (left and right). What gives the tree its name is the [binary search algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm). The tree is always in order. In its traditional form, the value of the left child is less than the value of the node, and the right child is greater. This makes it so that if you print the nodes with an [inorder traversal](https://en.wikipedia.org/wiki/Tree_traversal) you'll see all the values in ascending order. This design makes it extremely easy to perform basic operations like `find()`, `insert()`, and `delete()`. However, the complexity will differ depending on how *balanced* the tree is.

### AVL Tree

An AVL tree (named after it's creators, Georgy Adelson-Velsky and Evgenii Landis') has the same properties as a BST with some added optimizations. Since the complexity of keeping a tree perfectly balanced all the time would be far too expensive, the AVL tree uses various rotations whenever nodes are inserted or deleted to keep it *mostly* balanced. This, combined with the fact that it's sorted, gives it a surprising [O(logn)](http://www.adamtew.com/2016/01/04/How-To-Big-O.html) complexity for any of the standard `find()`, `insert()`, and `delete()` operations.

### B+ Tree

The B+ tree veers from tradition a little bit. All data is stored in the leaves (nodes with no children). Every other node acts as a pointer to get to the leaves. B+ trees are also architected in a such a way that all of the leaves are at the same depth. 

B+ trees are generally used to house larger data types. The reason you might do this is if I/O is an issue and you want to maintain a conservative height to avoid storing data remotely.