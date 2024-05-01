"use client"

import React from 'react'
import styled from '@emotion/styled'

const DropDown = styled.div`


.select {
    position: relative;
    width: 100px;
    margin-top: 30px;
  }
  
  .select svg {
    position: absolute;
    right: 12px;
    top: calc(50% - 3px);
    width: 10px;
    height: 6px;
    stroke-width: 2px;
    stroke: #9098A9;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    pointer-events: none;
  }
  
  .select select {
    -webkit-appearance: none;
    padding: 7px 40px 7px 12px;
    width: 100%;
    border: 1px solid #E8EAED;
    border-radius: 5px;
    background: white;
    box-shadow: 0 1px 3px -2px #9098A9;
    cursor: pointer;
    font-family: inherit;
    font-size: 16px;
    transition: all 150ms ease;
  }
  
  .select select:required:invalid {
    color: #5A667F;
  }
  
  .select select option {
    color: #223254;
  }
  
  .select select option[value=""][disabled] {
    display: none;
  }
  
  .select select:focus {
    outline: none;
    border-color: #0077FF;
    box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
  }
  
  .select select:hover + svg {
    stroke: #0077FF;
  }

  /* Custom arrow down SVG */
  .arrow-down {
    position: absolute;
    right: 12px;
    top: calc(50% - 3px);
    width: 10px;
    height: 10px;
    fill: none;
    stroke: #9098A9;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
    pointer-events: none;
  }

`


function Dropdown() {
  return (
   <DropDown>
        <div class="select">
  <select id="slct" required>
    <option value="" disabled selected>Select your Size</option>
    <option value="#">XS</option>
    <option value="#">S</option>
    <option value="#">M</option>
    <option value="#">L</option>
    <option value="#">XL</option>
    <option value="#">XXL</option>
    <option value="#">XXL</option>
  </select>
  <svg class="arrow-down" viewBox="0 0 10 6">
    <polyline points="1 1 5 5 9 1"/>
  </svg>
</div>

   </DropDown>
  )
}

export default Dropdown
