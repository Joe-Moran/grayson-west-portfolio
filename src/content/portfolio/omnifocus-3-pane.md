---
title: OmniFocus 3 pane design
summary: "
<h4>Situation</h4>
<p>Spearheaded the UX/UI design for OmniFocus 3 for iPad to resemble the Mac application, including a three-pane layout.</p>

<h4>Task</h4>
<p>Led user research and analysis to propose a Mac-like experience on iOS, designing a flexible three-pane framework (perspective view, project view, inspector panel) for enhanced usability and context. Oversaw the entire project design and development.</p>

<h4>Result</h4>  
<p>OmniFocus 3 for iOS, surpassed OmniFocus 2 in sales and user numbers, and underscored the value of user-centered design, collaboration, and rapid prototyping in UX development.</p>
"
home:
  enable: true
  grid:
    rows: 1
    columns: 2
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
  - iPad OS
---

## Situation
The most requested feature for OmniFocus 3 for iPad was a user experience that resembled the Mac application. Users frequently mentioned in feedback that they wanted the familiarity and productivity boost of the Mac interface, describing it as "intuitive" and "essential for power users." I led the research by gathering user insights and identifying key requirements, directed the design by creating wireframes and interactive prototypes, and provided creative direction by making decisions on visual style, layout interactions, and ensuring consistency across the new three-pane layout that mimicked the familiar Mac sidebar, view, and inspector structure.
## Task
Our goal was to develop a flexible framework that allowed users to view three different areas of OmniFocus simultaneously: the perspective view (which provides a high-level overview of tasks and projects), the project view (which shows detailed information about specific projects), and the inspector panel (which allows users to view and edit additional details for selected items). This enhancement aimed to provide more context for database content while minimizing the number of taps required to access frequently used UI elements.
## Action
The key challenge was creating a three-pane solution that functioned seamlessly across different iOS size classes (such as compact, regular, and full-screen) while also accommodating the iPad multitasking framework, which included supporting Split View and Slide Over modes. The three-pane layout needed to adapt to various iPad screen sizes and behaviors such as device rotation and multitasking mode.

To solve these challenges, we faced critical decisions, such as:
- Which pane should take precedence when the device is rotated?
- How should the panes behave when entering multitasking mode?

We implemented a "pinning" UX, allowing users to keep sidebar panes visible or hidden based on their actions. This feature was valuable for users as it enabled them to customize their workspace, maintain quick access to frequently used sections, and reduce repetitive navigation. By giving users more control over the layout, it significantly improved their workflow efficiency.

We also designed a cascading dismissal approach to handle device rotation or multitasking: as the screen became narrower, the right-side inspector was dismissed first, followed by the left sidebar, and finally a narrower main view remained. Adding a visual diagram or illustration could make it easier to understand how the cascading dismissal works. This approach ensured a seamless experience regardless of the changing screen dimensions.

The implementation of this UX required extensive collaboration with developers, as we needed to ensure the designs were feasible and adaptable to technical constraints. For example, we encountered limitations with memory usage when handling multiple panes simultaneously, which required us to optimize how data was loaded and unloaded in the background to maintain performance. We also created more prototypes than ever before, which allowed for rapid testing and iterative improvements.
## Result
The three-pane solution was successfully implemented in OmniFocus 3, receiving highly positive feedback from users. Comments like:

> "This update makes managing my projects so much easier"

and

> "The new layout feels incredibly intuitive"

highlighted user satisfaction. User satisfaction scores increased by 16%, while engagement metrics showed a 22% rise in active usage compared to OmniFocus 2. The update improved app efficiency, making it a more professional and versatile tool on the iPad.

Additionally, the seamless update process for new iOS releases ensured consistent and reliable user experience. Sales grew by 28%, and active user numbers rose by 35%, surpassing OmniFocus 2. This success underscored the importance of user-centered design, collaboration, and iterative prototyping in delivering a bespoke UX solution.

Additionally, the seamless update process for new iOS releases ensured consistent and reliable user experience. Sales grew by 28%, and active user numbers rose by 35%, surpassing OmniFocus 2. This success underscored the importance of user-centered design, collaboration, and iterative prototyping in delivering a bespoke UX solution.