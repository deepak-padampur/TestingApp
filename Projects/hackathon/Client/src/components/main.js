import React, { Component } from 'react';
import Form from "./form";

import {
  Button,
  Container,
  Icon,
  Image,
  Header,
  Grid,
  Loader,
  
} from "semantic-ui-react";

class Main extends Component {
  render() {
    return (
      <main>
       
     
        <section className="intro">
            <h2>About Us</h2>
            <div>
             <h3 style={{color:"white", marginLeft  :"5px"} } > Best way to sell something- Dont sell anything Earn the awareness respect 
               and trust of the those who might buy.   </h3>
             </div>
        </section>

        <div>
             <div className="services">
                <div className="service-one">
                <p className="service-icon"><Icon name="shipping fast"/></p>
                <p className="service-title">Fast Delievry</p>
                <p>uspendisse quam lectus, tristique dapibus sapien et, tempus suscipit nisl.</p>
                </div>
                <div className="service-two">
                <p className="service-icon"><Icon name="food"/></p>
                <p className="service-title">Organic Food </p>
                <p>Nulla eu metus faucibus, vehicula tortor quis, venenatis odio. Nullam purus mauris, feugiat in odio vitae, posuere volutpat libero. Sed et convallis libero.</p>
            
                </div>
                <div className="service-three">
                <p className="service-icon"><Icon name="line graph"/></p>
                <p className="service-title">Economic Development</p>
                <p>Ut ornare vitae enim a rhoncus. Nullam aliquet tristique scelerisque. Sed volutpat dictum risus ac laoreet. Suspendisse id lorem in enim sollicitudin varius.</p>
              
          </div>
        </div>

            </div>


        
        <div className="gallery">
         <div className="gallery-item-one"></div>
         <div className="gallery-item-two"></div>
         <div className="gallery-item-three"></div>
         <div className="gallery-item-four"></div>
         <div className="gallery-item-five"></div>
         <div className="gallery-item-six"></div>
         
        </div>

        <section>
            <h2>Our Mission</h2>
            <div style={{color:"white"}} >
              <p>Integer sit amet venenatis erat. Cras elementum tortor odio, sit amet euismod nunc cursus ut. Donec sollicitudin orci sed enim volutpat, volutpat rutrum magna semper. Fusce leo lacus, pulvinar sit amet dignissim in, consectetur eget nulla. Etiam ac turpis augue. Sed tincidunt pulvinar tincidunt. Integer ac blandit magna. Nulla dapibus convallis luctus. </p>
              <p>Ut elementum urna sit amet elit egestas hendrerit. Vivamus quis sem fringilla, tincidunt nisi non, congue libero. Etiam cursus nulla quis sapien varius, eget accumsan augue mattis. Cras accumsan sapien nulla, eu eleifend odio tempus sit amet. Suspendisse gravida hendrerit sapien, ut molestie mi pellentesque eget. Aliquam eleifend velit vel libero elementum, vitae consectetur nisl sollicitudin. Suspendisse volutpat fringilla vehicula.</p>
              </div>
        </section>


        <section>
            <h2>Contact Us</h2>
            <Form />
          
        </section>

       
      </main>
    );
  }
}

export default Main;
