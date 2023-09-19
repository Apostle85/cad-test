# Fullstack webapp with realization of displaying 3d cone
-------
### Tech-stack: Express.js, React, Three.js, Python
This fullstack webapp displays a 3d cone triangulated representation using 3 input parameters: cone height, radius and number of segments.
How it works:
1. Client gets inputs and sends it to the Server;
2. Server (Node.js) computes vertices and indices (via Python) for cone displaying and sends it back;
3. Client gets object data and displays a 3d model (using Three.js module).

![Снимок экрана 2023-09-19 в 13 44 06](https://github.com/Apostle85/cad-test/assets/80193004/6f53ae4d-8c68-4475-9690-77a6e38a60d2)
