---
title: Hearsee
summary: "<h4>Situation</h4>
<p>Hearsee Mobility's assistive navigational tool aids visually impaired users in traversing indoor spaces, marking a milestone in improving accessibility.</p>

<h4>Task</h4>
<p>Lead the redesign of the web application, incorporating user insight to develop an intuitive interface that prioritized user access to functionality.</p>
  
<h4>Result</h4>  
<p>Despite the project pause due to funding constraints, internal user testing prompted positive initial feedback.</p>
"
featured: true
preview:
  enable: true
  grid:
    enable: true
    rows: 4
    columns: 5
screenshot:
  image: '../../assets/content/Hearsee 1 1.png'
  altText: 'A picture'
background: '../../assets/content/organicbuildingscoloralt 1.jpeg'
platforms:
  - iOS
  - Android
  - web
  - IOT
---

## Situation

Hearsee Mobility is a non-profit organization that has developed an assistive navigational tool to help visually impaired individuals easily navigate indoor spaces. Most indoor spaces in America lack digital navigation aids for the visually impaired, but Hearsee's solution utilizes RFID tags and a web app to create navigatable indoor routes. This system is read by specialized white cane hardware and a mobile app, allowing users to receive information from RFID tags placed around a building through their cane, which is connected to the app. The web application enables the uploading of building floor plans and the placement of digital tags, as well as facilitating the placement of RFID tags and an indoor navigation network. Hearsee's innovative solution has the potential to significantly increase accessibility in indoor spaces, transforming the lives and experiences of visually impaired individuals.

## Task

I was brought onto the project to take charge of a web application project's product design, UX design, and overall design strategy. The project made some progress on mobile applications for Android and iOS, but the development of the web application had stalled. My role was to lead the design and product strategy for the web application, which was a crucial part of the project that had yet to gain traction.

When I joined the project, the web application was still in its early stages, and no development had been applied to it yet. Although some design groundwork had been laid, the existing designs felt restrictive to the developers and limited them to predetermined implementation paths. In addition, several potential features still needed to be in the conceptual stages, untouched by design or development. When these potential elements were discussed, they often clashed with the existing designs, causing significant friction and hampering productive discussions among the design and development teams.

To address these challenges, I undertook a series of proactive measures:

1. I revisited the current web application design and re-evaluated design decisions. I collaborated with the development team to align the UX design with technical feasibility, all while ensuring flexibility for our development team.
2. I worked with the team to integrate the design and development perspectives for the untouched features, conceptualizing them as feasible and in harmony with the product's broader design strategy.
3. I fostered open and seamless communication among team members, dissolving existing friction and promoting collaboration, ultimately meeting Hearsee Mobility's expectations.

### Rising Action

After working with the developers to better conceptually flush out features, I advocated for a step back, suggesting we start a new one with low-fidelity wireframes and implementation. We were challenged by the fact that our web application's user base was primarily limited to the client and the facility manager based at our company, providing a restricted perspective for our designs. I aimed to gain a broader understanding of the general facility manager user base, so I researched their day-to-day operations and responsibilities extensively.

Our architectural assumptions needed to be more substantially anchored in user research. We focused on facility managers, the primary users placing destinations, locations, and routes for publishing to the web app. This group's technical skills and roles contrasted, ranging from novice computer users to tech-savvy individuals and those entrenched in facility management to those relatively new to the field.

As I delved into the facility manager's role, I discovered their vital and multifaceted contributions to an organization's built environment. Their wide range of responsibilities, from managing systems to strategic planning, is balanced against various challenges. These challenges include enforcing ADA compliance, mastering Hearsee's technology on top of many existing software systems, managing fluctuating internal and external communications, and consistently interpreting space terminologies amidst various other tasks, all while driving operational excellence in their facilities.

Drawing on this, I crafted several personas representing our different users. They were designed to embody various aspects of real-world facility managers to shape our design strategy better and ensure we create an accessible and user-friendly experience. These personas encapsulated different roles, goals, expertise, and challenges that mirrored those of actual facility managers. Through these personas and archetypes, we aimed to align our design process more closely with the users' needs and perspectives, setting the stage for meaningful product evolution.

### Climax

RFID tags were represented as Nodes, Waypoints, and Hazard tags on the Hearsee mapping interface. Nodes placed every 10 feet were for navigation; waypoints provided information about a particular spot, such as someone's office; and hazard tags marked obstructions or dangers. These tags would then be linked together to create the navigation routes.

As I delved deeply into the project, I discerned the need for significant redesign and rethinking. The web application was initially designed with a mobile-centric approach, proving counterproductive given its primary use on desktop platforms. Critical functionality was obscured behind menus and a floating action button (FAB), negatively impacting user experience. To rectify this, I performed a comprehensive audit of the existing designs. I collaborated closely with the development team to modernize the app, suggesting an updated and simplified approach. This envisioned approach prioritized user access to functionality directly from the mapping interface and a redesigned application interface to streamline the user journey.

For instance, instead of having users change levels outside the mapping interface, I maintained level controls on the mapping interface. Nodes, Waypoints, and Hazard tags were listed in a secondary place to ease item selection and editing. Similarly, to avoid covering other mapping elements and causing cognitive overload, the editing functionality was moved to an inspector placed to the right of the mapping interface. This adjustment made it easier for facility managers to perform quick edits and increased the overall user experience.

Additionally, I proposed eliminating the mobile-centric FAB button to simplify the creation of Nodes, Waypoints, and Hazard tags. Instead, these tools were included in a toolbar under the application header and above the mapping interface, providing a more intuitive user interface and enhancing the application's usability.

### Falling Action

While a large portion of my task involved reworking existing designs to boost their efficiency, I also had the opportunity to work on two exciting new features, namely, "Tour Mode" and "Z-Linking."

Tour Mode aimed to empower visually impaired users with exploratory freedom akin to sighted individuals. Imagine walking into a museum and wanting to explore freely - that's the experience we aimed to recreate with this feature. It functioned with Waypoint tags and provided users with three levels of informational details: Name (low fidelity), Details (medium fidelity), and Comprehensive Details (high fidelity). The feature enabled users to be notified of nearby tags, select the one they're interested in, and then travel to it to receive further information. My role was primarily focused on designing this feature's display within the Node inspector.

The second feature, Z-Link, solved the unique challenge of connecting nodes between multiple floors. Each tag on the map corresponded to a location on an invisible grid in the backend, but we came up with a grid on the z-axis to facilitate the linking of nodes between different floors. Z-Link addresses this by connecting a selected node on the mapping interface with other nodes above or below on the z-axis. When a node is selected, the Z-Link dropdown menus become active in the interface, displaying the most probable connections and a few alternatives. This feature was instrumental in adding a depth dimension to the navigation system, allowing for multi-floor navigation.

## Result (Conclusion)

Unfortunately, the client had to halt the project's development due to funding constraints. Still, we gleaned valuable insights and gained positive initial feedback from our work thus far. Notably, our internal user testing with our facilities manager returned encouraging results, indicating that our design and interaction adjustments were moving in the right direction.

A significant takeaway from this project was the distinct value of working with low-fidelity wireframes during the early stages of design and through implementation. Dealing with a project replete with unknowns, the low-fidelity wireframes offered the flexibility necessary for rapid iterations and adjustments made on the fly, proving immensely beneficial for the team and the client.

This approach fostered a collaborative environment, enabling the entire product team to address problems and brainstorm solutions in a high-level, low-overhead manner. It also encouraged active idea contributions from the development team, broadening our collective perspective.

While it's unfortunate that the project had to pause, the learnings have been invaluable, and the use of low-fidelity wireframes will undeniably be a design approach we will continue to harness.
