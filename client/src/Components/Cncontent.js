import React from "react";
import cn1 from "../Contentimages/cn2.png";
const Cncontent=()=>
    {
        return(
            <div>
                <h1>computer Network</h1>
                <ul>
              <li> <p><b>Computer Network</b> is a group of computers connected with each other through wires, optical fibres or optical links so that various devices can interact with each other through a network.</p></li>
              <li><p>The aim of the computer network is the sharing of resources among various devices.</p></li>
              <li><p>In the case of computer network technology, there are several types of networks that vary from simple to complex level.
              Components Of Computer Network:</p></li>
              <li>Computer Network Introduction</li>
                <li>Major components of a computer network are:</li>
            <li><b>NIC(National interface card) </b></li>
            <li>NIC is a device that helps the computer to communicate with another device. The network interface card contains the hardware addresses, the data-link layer protocol use this address to identify the system on the network so that it transfers the data to the correct destination.</li>
        
        <img src={cn1} alt=""/>
        <hr/>
        <hr/>
          <br/>
        <b>There are two types of NIC: wireless NIC and wired NIC.</b>

        <li>Wireless NIC: All the modern laptops use the wireless NIC. In Wireless NIC, a connection is made using the antenna that employs the radio wave technology.</li>
        <li>Wired NIC: Cables use the wired NIC to transfer the data over the medium.</li>

</ul>
        <h3>Hub</h3>
<p>Hub is a central device that splits the network connection into multiple devices. When computer requests for information from a computer, it sends the request to the Hub. Hub distributes this request to all the interconnected computers.</p>


        <h3>Switches</h3>
    <p>Switch is a networking device that groups all the devices over the network to transfer the data to another device. A switch is better than Hub as it does not broadcast the message over the network, i.e., it sends the message to the device for which it belongs to. Therefore, we can say that switch sends the message directly from source to the destination.</p>

    <h3>Cables and connectors</h3>
        <p>Cable is a transmission media that transmits the communication signals. There are three types of cables:</p>
        <ul>
        <li><b>Twisted pair cable:</b> It is a high-speed cable that transmits the data over 1Gbps or more.</li>
        <li> <b> Coaxial cable:</b> Coaxial cable resembles like a TV installation cable. Coaxial cable is more expensive than twisted pair cable, but it provides the high data transmission speed.</li>
       <li> <b>Fibre optic cable: </b>Fibre optic cable is a high-speed cable that transmits the data using light beams. It provides high data transmission speed as compared to other cables. It is more expensive as compared to other cables, so it is installed at the government level.</li>
    </ul>
<h3>Router</h3>
    <p>Router is a device that connects the LAN to the internet. The router is mainly used to connect the distinct networks or connect the internet to multiple computers.</p>

<h3>Modem</h3>
<p>
Modem connects the computer to the internet over the existing telephone line. A modem is not integrated with the computer motherboard. A modem is a separate part on the PC slot found on the motherboard.</p>
<ul>
<h3>Uses Of Computer Network</h3>
        <li><b>Resource sharing:</b> Resource sharing is the sharing of resources such as programs, printers, and data among the users on the network without the requirement of the physical location of the resource and user.</li>
        <li><b>Server-Client model:</b> Computer networking is used in the server-client model. A server is a central computer used to store the information and maintained by the system administrator. Clients are the machines used to access the information stored in the server remotely.</li>
    <li><b>Communication medium:</b> Computer network behaves as a communication medium among the users. For example, a company contains more than one computer has an email system which the employees use for daily communication.</li>
    <li><b>E-commerce:</b> Computer network is also important in businesses. We can do the business over the internet. For example, amazon.com is doing their business over the internet, i.e., they are doing their business over the internet.</li>


</ul>   

.......THE END......



            </div>
        )
    }

export default Cncontent