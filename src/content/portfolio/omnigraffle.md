---
title: OmniFocus 3 for Mac 3 pane design
summary: "
<h4>Situation</h4>
<p>Users frequently requested a Mac-like experience for OmniFocus 3 on iPad. As the lead, I was tasked with designing a three-pane layout mimicking Mac software.</p>

<h4>Task</h4>
<p>Develop a flexible framework allowing users to view three areas of OmniFocus simultaneously (perspective view, project view, inspector panel), enhancing user experience and reducing taps.
</p>

<h4>Result</h4>  
<p>The three-pane solution was successfully implemented, receiving positive user feedback. It improved efficiency and professional use on iPads. OmniFocus 3 for iOS saw increased sales and active users, surpassing its predecessor and demonstrating the value of user-centered design and collaboration.
</p>
"
home:
  enable: true
  grid:
    rows: 1
    columns: 1
preview:
  enable: true
  grid:
    rows: 1
    columns: 1
screenshot: # An image representing the UI example of the product. Used in preview cards
  image: '../../assets/content/casestudies/2020-03-27.png'
  altText: ''
background: '../../assets/content/backgrounds/1.jpg' # The background image used for preview cards
icon: '../../assets/content/SVGs/1.svg'
platforms:
  - Mac OS
---

## Situation
The most commonly requested feature for the latest version of OmniFocus 3 for iPad was a user experience that resembled that of a Mac application. I took the lead in researching, designing, and creatively directing the UX and UI of the three-pane layout, which mimicked the sidebar, view, and inspector layout typically found on Mac software.
## Task
Develop a flexible framework that enables users to view up to three different areas of OmniFocus at the same time. This included the perspective view, project view, and inspector panel. Our goal was to enhance the user experience by providing more context to the database content and reducing the number of taps required to access commonly used UI elements.
### Rising Action
The main challenges for this project involved making the three-pane solution functional across a variety of iOS size classes, and ensuring that any solution we designed would be flexible enough to work within the multitasking framework that exists on iOS.

One of the biggest challenges we faced was determining the appropriate dimensions for the panes to accommodate the three screen sizes of the various models of iPad. We also faced some questions, such as: 
- When all three panes are visible and the device is rotated, which pane takes precedence? 
- When all three panes are visible and the user enters multitasking mode, what pane takes precedence?

The implementation of a pinning UX to keep sidebar panes visible or hidden based on user actions was a crucial part of the experience. At the same time, addressing pane behavior during device rotation and multitasking mode was challenging but crucial. The team ultimately decided on a cascading dismissal approach as the screen got narrower. This involved first dismissing the right-side inspectors, then the left sidebar, and finally narrowing the outline based on screen width.
### Falling Action
My team and I worked closely with the developers on this UX solution. Since it was customized to our needs, we had to collaborate often to ensure that our solutions were technically feasible. Additionally, we had to create more prototypes than we had in the past, which allowed us to test and evaluate our ideas more quickly.
## Conclusion
The implementation of the three-pane solution in OmniFocus 3 was a success and received positive feedback from users. The update improved the tool's efficiency and allowed customers to use their iPads for more professional work. The app updates to new iOS releases were seamless. As a result, OmniFocus 3 for iOS experienced an increase in sales and active user numbers, surpassing even OmniFocus 2 for iOS. This achievement demonstrated the importance of user-centered design, collaboration, and rapid prototyping in developing a bespoke UX solution.