
import React from "react";
import {Link, useLocation} from "react-router-dom";

function signup(){
    return(<div class="container">
    <form action="signup.html" method="post" id="signup">
        <h1>Sign Up &nbsp;&nbsp;&nbsp;<a href="file:///C:/Users/Administrator/Documents/T4s%20Frontend/HTML.html">T4s</a></h1>
<div class="field">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your fullname" />
            <small></small>
        </div>
        <div class="field">
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" placeholder="Enter your email address" />
            <small></small>
        </div>
        <div class="field">
            <label for="phone">Phone:</label>
            <input type="text" id="phone" name="phone" placeholder="254717758527" />
            <small></small>
        </div>
        <div class="field">
            <label for="physical_address">Physical Address:</label>
            <input type="text" id="physical_address" name="physical_address" placeholder="Apartment/Estate, County" />
            <small></small>
        </div>
        <div class="field">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" />
            <small></small>
        </div>
        <div class="field">
            <button type="submit" class="full">Sign up</button>
        </div>
    </form>
</div>
        )
    
}

export default signup;
