import React from 'react';

class FixedElement extends React.Component {
    render() {
        return `
        <picture class="fixed-element">
          <source srcset="super-large-image" media="(min-width: 1440px)">
          <source srcset="large-image" media="(min-width: 1025px) and (max-width:1439px)">
          <source srcset="medium-image" media="(min-width:768px) and (max-width:1024px)">
          <source srcset="small-image.jpg" media="(max-width:767px)">
          <img src="default-image.jpg" tabindex="0" alt="">
        </picture>
        `
    }
}

export default FixedElement;


{/* <picture class="gallery--picture">
  <source srcset="super-large-image" media="(min-width: 1440px)">
  <source srcset="large-image" media="(min-width: 1025px) and (max-width:1439px)">
  <source srcset="medium-image" media="(min-width:768px) and (max-width:1024px)">
  <source srcset="small-image.jpg" media="(max-width:767px)">
  <img src="default-image.jpg" tabindex="0" alt="">
</picture> */}