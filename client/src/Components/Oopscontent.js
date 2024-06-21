import React from "react";
import oops1 from '../Contentimages/oop1.png';
import oops2 from '../Contentimages/oop2.png';
import oops3 from '../Contentimages/oop3.png';


const Oopscontent=()=>
    {
        return(
            <div>
                <h1>oops</h1>
                <h2>Java and Object Oriented Programming:
                </h2>
                <img src={oops1} alt="oops" style={{ display: 'block', margin: 'auto' }}/>
                <h4>Object</h4>

            <p>Any entity that has state and behavior is known as an object. For example, a chair, pen, table, keyboard, bike, etc. It can be physical or logical.</p>
            <img src={oops2} alt="oops" style={{ display: 'block', margin: 'auto' }}/>

            <p>An Object can be defined as an instance of a class. An object contains an address and takes up some space in memory. Objects can communicate without knowing the details of each other's data or code. The only necessary thing is the type of message accepted and the type of response returned by the objects.</p>

            <p><b>Example:</b> A dog is an object because it has states like color, name, breed, etc. as well as behaviors like wagging the tail, barking, eating, etc.</p>
    <h4> Class</h4>
    <p>Collection of objects is called class. It is a logical entity.</p>
<p>A class can also be defined as a blueprint from which you can create an individual object. Class doesn't consume any space.</p>
    <h4>Inheritance</h4>
    <p>When one object acquires all the properties and behaviors of a parent object, it is known as inheritance. It provides code reusability. It is used to achieve runtime polymorphism.</p>
     
        <h4> Polymorphism</h4>

        <p>If one task is performed in different ways, it is known as polymorphism. For example: to convince the customer differently, to draw something, for example, shape, triangle, rectangle, etc.</p>

        <p>In Java, we use method overloading and method overriding to achieve polymorphism.</p>

        <p>Another example can be to speak something; for example, a cat speaks meow, dog barks woof, etc.</p>

    <h4>Abstraction</h4>
    <p>Hiding internal details and showing functionality is known as abstraction. For example phone call, we don't know the internal processing.</p>


    <p>In Java, we use abstract class and interface to achieve abstraction.</p>

   <h4>Encapsulation</h4> 
   <img src={oops3} alt="oops" style={{ display: 'block', margin: 'auto' }}/>

    <p>Binding (or wrapping) code and data together into a single unit are known as encapsulation. For example, a capsule, it is wrapped with different medicines.</p>

    <p>A java class is the example of encapsulation. Java bean is the fully encapsulated class because all the data members are private here.... etc</p>
            </div>
        )
    }
export default Oopscontent