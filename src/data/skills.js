export const skillsData = [
  {
    category: "Mechanical Design & Prototyping",
    skills: [
      { name: "SolidWorks 3D CAD", level: "Advanced" },
      { name: "3D Printing & FDM Slicing (Cura)", level: "Advanced" },
      { name: "Design for Assembly (DFA)", level: "Intermediate" },
      { name: "Parametric Mechanism Modeling", level: "Advanced" },
      { name: "Chassis & Enclosure Fabrication", level: "Advanced" }
    ]
  },
  {
    category: "Embedded Systems & Electronics",
    skills: [
      { name: "ESP32 & ESP32-S3", level: "Advanced" },
      { name: "Arduino Microcontrollers", level: "Advanced" },
      { name: "Embedded C / C++", level: "Advanced" },
      { name: "FreeRTOS Dual-Core Tasks", level: "Intermediate" },
      { name: "I2C, SPI, UART Communication", level: "Advanced" },
      { name: "Power Rail Isolation & Star Grounding", level: "Advanced" }
    ]
  },
  {
    category: "Robotics & Sensors",
    skills: [
      { name: "TB6612FNG Motor Drivers", level: "Advanced" },
      { name: "PWM Motor Control & Ramping", level: "Advanced" },
      { name: "u-blox GNSS / GPS Telemetry", level: "Advanced" },
      { name: "Ultrasonic Sonar (HC-SR04)", level: "Advanced" },
      { name: "Thermal IR Array Sensing (AMG8833)", level: "Intermediate" },
      { name: "Non-Invasive CT Current Sensors", level: "Intermediate" }
    ]
  },
  {
    category: "Engineering Tools & Diagnostics",
    skills: [
      { name: "Digital Multimeter & Oscilloscope", level: "Intermediate" },
      { name: "Benchtop Power Supply Diagnostics", level: "Advanced" },
      { name: "Python 3 & Simulation (Webots)", level: "Intermediate" },
      { name: "Git & GitHub Version Control", level: "Intermediate" },
      { name: "SSD1306 OLED Telemetry HUDs", level: "Advanced" }
    ]
  }
];

export const cadGalleryData = [
  {
    id: "gear-slicing",
    title: "Parametric Spur Gear CAD & 3D Print Slicing",
    description: "SolidWorks involute gear modeling alongside multi-layer slicing toolpath simulation in Cura for FDM manufacturing.",
    image: "/assets/cad/cad_gear_preview.jpg",
    tags: ["SolidWorks", "Additive Manufacturing", "FDM Slicing"]
  },
  {
    id: "fastener-slicing",
    title: "Hexagonal Metric Fastener CAD & Support Generation",
    description: "Standardized metric hex-head bolt modeling in SolidWorks with tree support geometry evaluation for vertical print orientation.",
    image: "/assets/cad/cad_fastener_preview.jpg",
    tags: ["SolidWorks", "Fastener Design", "3D Printing"]
  },
  {
    id: "flanged-pipe",
    title: "Flanged Tee Pipe Junction – 3D CAD Modeling",
    description: "Parametric 3D SolidWorks assembly of a flanged hydraulic/pneumatic pipe junction with multi-axis flanged ports and bolt circles.",
    image: "/assets/cad/cad_pipe_fitting.jpg",
    tags: ["SolidWorks", "3D Modeling", "Fluid Components"]
  },
  {
    id: "flanged-pipe-drawing",
    title: "Flanged Tee Pipe Junction – 2D Engineering Drafting",
    description: "Technical drafting sheet featuring front elevation, plan view, and cross-section A-A with PCD 75 bolt hole patterns, fillet radii, and ISO dimensional tolerances.",
    image: "/assets/cad/cad_pipe_drawing.jpg",
    tags: ["2D Drafting", "GD&T", "Orthographic Projection", "Section Views"]
  }
];