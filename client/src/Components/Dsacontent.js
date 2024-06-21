import React from 'react';
import arr from '../Contentimages/array.png';
import linked from '../Contentimages/linkedlist.png';
import stack from '../Contentimages/stack.png';
import que from '../Contentimages/queue.png';
import bt from '../Contentimages/binarytree.png';
import bst from "../Contentimages/binarysearchtree.png";
const Dsacontent = () => {
  return (
    <div>
      <h1>Data Structures and Algorithms (DSA)</h1>
      <p>
        DSA refers to the study of methods for organizing and storing data and
        the design of procedures (algorithms) for solving problems, which
        operate on these data structures.
      </p>
      <h2>How to learn DSA?</h2>
      <ol>
        <li>Learn at least one programming language (We leave this to your choice.)</li>
        <li>Learn Data Structures</li>
        <li>Learn Algorithms</li>
        <li>Learn about Time and Space complexities</li>
        <li>Practice Problems on DSA</li>
      </ol>
      <p>
        Here comes the most important and the most awaited stage of the roadmap for learning data structure and algorithm – the stage where you start learning about DSA. The topic of DSA consists of two parts:
      </p>
      <ul>
        <li>Data Structures</li>
        <li>Algorithms</li>
      </ul>
      
      
      <h3> Data Structures topics: </h3>
    <h4>1. Array:</h4>
    <p>An array is a collection of data items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array). </p>
    <img src={arr} alt=""/>
    <div>
    <h3>2. Linked Lists: </h3>
    <p>Like arrays, Linked List is a linear data structure. Unlike arrays, linked list elements are not stored at a contiguous location; the elements are linked using pointers.</p>
    <img src={linked} alt="linkedlist"   style={{ display: 'block', margin: 'auto' }}/></div>
    <div>
    <h3>3. Stack:</h3>
    <p>Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). In stack, all insertion and deletion are permitted at only one end of the list.</p>
    <img src={stack} alt="stack image" style={{ display: 'block', margin: 'auto' }}/>
    <h4>stack operation</h4>
    <ul>
        <li><b>push() : </b>When this operation is performed, an element is inserted into the stack.</li>
        <li><b>pop()  : </b> When this operation is performed, an element is removed from the top of the stack and is returned.</li>
        <li><b>top() : </b>This operation will return the last inserted element that is at the top without removing it.  </li>
        <li><b>size() : </b> This operation will return the size of the stack i.e. the total number of elements present in the stack.</li>
       <li><b> isEmpty():</b>  This operation indicates whether the stack is empty or not.</li>
    </ul>
    </div>
    <div>
    <h3>4. Queue:</h3>
    <p>Like Stack, Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). In the queue, items are inserted at one end and deleted from the other end. A good example of the queue is any queue of consumers for a resource where the consumer that came first is served first. The difference between stacks and queues is in removing. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added. </p>
    <img src={que} alt="queue image" style={{ display: 'block', margin: 'auto' }}/>
    <h4>queue operation</h4>
    <ul>
        <li><b>Enqueue() : </b>  Adds (or stores) an element to the end of the queue.</li>
        <li><b>Dequeue() : </b> Removal of elements from the queue.</li>
        <li><b>Peek() or front() : </b> Acquires the data element available at the front node of the queue without deleting it. </li>
        <li><b>rear():  </b>This operation returns the element at the rear end without removing it. </li>
       <li><b>isFull(): </b>  Validates if the queue is full.</li>
       <li><b>isNull(): </b>  Checks if the queue is empty.</li>

    </ul>
    </div>
    <div>
    <h3>5. Binary Tree:</h3>
        <p>Unlike Arrays, Linked Lists, Stack and queues, which are linear data structures, trees are hierarchical data structures. A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. It is implemented mainly using Links. 

      A Binary Tree is represented by a pointer to the topmost node in the tree. If the tree is empty, then the value of root is NULL. A Binary Tree node contains the following parts. </p>
    <ol>
    <li> Data</li>
    <li>Pointer to left child</li> 
    <li> Pointer to the right child</li>
    </ol>
    <div className="image-container">
    <img src={bt} alt="binary tree" style={{ display: 'block', margin: 'auto' }} />

    </div>
    <div>
    <h3>6. Binary Search Tree:</h3>
    <p>A Binary Search Tree is a Binary Tree following the additional properties: </p>

    <li>The left part of the root node contains keys less than the root node key.</li>  
    <li>The right part of the root node contains keys greater than the root node key.</li>
    <li>There is no duplicate key present in the binary tree.</li>
    <li>A Binary tree having the following properties is known as Binary search tree (BST).</li>
    <img src={bst} alt="binary serach tree" style={{ display: 'block', margin: 'auto' }} />


    </div>

    </div>


      
    </div>
  );
};



export default Dsacontent;

