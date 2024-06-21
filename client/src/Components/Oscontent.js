import React from "react";
import os2 from '../Contentimages/os2.png';
import os3 from '../Contentimages/os3.png';
const Oscontent=()=>
    {
        return (
            <div>
                <h1>hello</h1>

                <h3>OPERATING SYSTEMS</h3>
                <p>An Operating System can be defined as an interface between user and hardware. It is responsible for the execution of all the processes, Resource Allocation, CPU management, File Management and many other tasks.</p>
         
           <p>The purpose of an operating system is to provide an environment in which a user can execute programs in convenient and efficient manner.</p> 

            <h3>Structure of a Computer System  </h3>
   <ul> Computer System consists of:

        <li>Users (people who are using the computer)</li>
        <li>Application Programs (Compilers, Databases, Games, Video player, Browsers, etc.)</li>
        <li>System Programs (Shells, Editors, Compilers, etc.)</li>
        <li>Operating System ( A special program which acts as an interface between user and hardware )
        Hardware ( CPU, Disks, Memory, etc)</li>
</ul>
<img src={os2} alt="structure of os" style={{ display: 'block', margin: 'auto' }}/>

<h3>What does an Operating system do?</h3>
<ol>
        <li>Process Management</li> 
        <li>Process Synchronization</li> 
        <li>Memory Management</li> 
        <li>CPU Scheduling</li> 
        <li>File Management</li> 
     <li>Security</li> 
</ol>
<p>
        An operating system is concerned with the allocation of resources and services, such as memory, processors, devices, and information. The operating system correspondingly includes programs to manage these resources, such as a traffic controller, a scheduler, a memory management module, I/O programs, and a file system.
       </p> 
       <p>This Operating System tutorial will cover all the basic to advance operating system concepts like System Structure, CPU Scheduling, Deadlock, file and disk management, and many more.</p>
         
<h2>Process States</h2>
<h4>state diagram</h4>
<img src={os3} alt="process states" style={{ display: 'block', margin: 'auto' }} />
    <p>The process, from its creation to completion, passes through various states. The minimum number of states is five.

The names of the states are not standardized although the process may be in one of the following states during execution.
</p>
<h3> 1. New</h3>1. New
<p>A program which is going to be picked up by the OS into the main memory is called a new process.
Video Player is loading.Pause</p>


<h3>2. Ready</h3>
<p>Whenever a process is created, it directly enters in the ready state, in which, it waits for the CPU to be assigned. The OS picks the new processes from the secondary memory and put all of them in the main memory.

The processes which are ready for the execution and reside in the main memory are called ready state processes. There can be many processes present in the ready state.</p>
<h3>3. Running</h3>
<p>One of the processes from the ready state will be chosen by the OS depending upon the scheduling algorithm. Hence, if we have only one CPU in our system, the number of running processes for a particular time will always be one. If we have n processors in the system then we can have n processes running simultaneously.</p>
<h3>4. Block or wait</h3>
<p>From the Running state, a process can make the transition to the block or wait state depending upon the scheduling algorithm or the intrinsic behavior of the process.

When a process waits for a certain resource to be assigned or for the input from the user then the OS move this process to the block or wait state and assigns the CPU to the other processes.</p>

<h3>5. Completion or termination</h3>
<p>When a process finishes its execution, it comes in the termination state. All the context of the process (Process Control Block) will also be deleted the process will be terminated by the Operating system.</p>




            </div>
        )
    }
export default Oscontent