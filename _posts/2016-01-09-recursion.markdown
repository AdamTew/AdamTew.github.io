---
title: Recursion
layout: post
---

> the repeated application of a recursive procedure or definition.

Recursion is capable of being extremely powerful, while also being extremely simple. At the same time, you can break stuff, cause unexpected behavior, or increase the [complexity](http://www.adamtew.com/2016/01/04/How-To-Big-O.html) by oodles of noodles if you don't follow some simple rules.

## The Base Case(s)

The first thing to understand when building a recursive function is that somehow, sometime, __the function needs to stop__. The cause of this stop should be intentional and should __always be possible__. If you never hit a _base case_, then you'll never stop, meaning you'll run forever. This is bad. This is why we start with the base case.

Sometimes there will be more than one base case. Say you want something to run until it finds a certain outcome. However, if that something doesn't exist, you only want to run the function 10,000 or so times. This would give us two separate base cases.

`if(x == target)return target;`

and 

`if(count >= 10000)return 'data not found';`

The way recursion works is by using a function that repeatedly calls itself until it hits a base case. Each time the function calls itself it puts another instance of the function on the call stack, which requires more memory. This happens until you run out of memory and the application throws a stack overflow error.

> A call stack is a data structure used by the program to store information about the active subroutines (like functions in C++ or methods in Java) in a program. - from [here](http://www.programmerinterview.com/index.php/recursion/explanation-of-recursion/)

## Always return

Something else to keep in mind is that your function should __always return something__. 

Everytime a function calls itself, it sits there and waits for what was returned to come back up. If nothing comes back up, then the previous function can't use the data that was collected.

> This isn't something to be concerned with if your function doesn't return anything. For example, your recursive call was just changing settings on every element of a tree.

Just rememeber to `return` if you need access to the data later.

Example:

`return x * factorial(x - 1);`

## Who's recursing?

When using recursion, it's good to remember to take the smallest operation you can and then repeat it. It's easy to make the mistake of trying to have the recursive function do _too much_ work. Sometimes, it's better to have a helper function do the recursion for you, which return the required data.

## Examples

~~~

// c++
// inorder traversal to print the content of a tree

// public function called by a user
string toString()
{
    if(!isEmpty())return toString(root, "\t");
    return "There is nothing for you here, \nonly death...\n\n";
}

// private / protected helper function
string toString(Node * node, string indent)
{
    stringstream ss;
    if(node == nullptr)return " ";      // base case
    ss << toString(node->left, indent + "\t");
    ss << indent << node->element << endl;
    ss << toString(node->right, indent + "\t");
    return ss.str();
}
~~~

~~~

// c++
// Delete a tree 

// public function called from a user
void makeEmpty()
{
    makeEmpty( root );
}

// private / protected function that gets called internally
// This is the helper function that actually does the recursion
void makeEmpty(Node * node)
{
    if(node != nullptr)             // base case
    {
        makeEmpty(node->left);
        delete node;
        makeEmpty(node->right);
    }
}

~~~