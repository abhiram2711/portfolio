export const projects = [
  {
    id: "aerothermal-edge",
    title: "AeroThermal Edge",
    subtitle: "Thermal-Assisted Search & Rescue UAV Payload",
    status: "In Active R&D / Bench Prototype Validated",
    badge: "1st Prize – RIC 2026",
    teamNote: "Team: Vaddi Abhiram & Tangala Kumar Babu",
    summary: "Aerial sensory payload integrating long-wave infrared thermal sensing, visual detection, and active dual-axis tracking on an ESP32-S3 microcontroller for rapid survivor localization in disaster zones.",
    image: "/assets/projects/aerothermal_hardware.jpg",
    gallery: [
      "/assets/projects/aerothermal_hardware.jpg",
      "/assets/projects/aerothermal_sim_1.jpg"
    ],
    tags: ["ESP32-S3", "Thermal IR (AMG8833)", "Dual Servos", "FreeRTOS", "Webots / Python"],
    hardware: [
      "ESP32-S3 Dual-Core Xtensa LX7 @ 240MHz",
      "AMG8833 Thermal IR Grid Sensor (I2C)",
      "Dual Micro Servos for Pan-Tilt Gimbal Mount",
      "AEROTHERAMLEDGE_1V Custom Board Concept (60 x 62 mm)",
      "Dedicated 5V 3A Buck Converter with 470µF Filtering"
    ],
    software: [
      "Embedded C++ on ESP-IDF / FreeRTOS (Dual Core)",
      "Core 0: I2C Thermal Gradient Matrix Acquisition",
      "Core 1: Closed-Loop Gimbal Servos Kinematics",
      "Python 3 Webots Simulation Testbed with Vision Pipeline"
    ],
    problem: "In search-and-rescue operations following structural collapse or night disasters, optical cameras fail due to darkness and smoke. High-end commercial thermal UAVs cost tens of thousands of dollars, limiting widespread emergency deployment.",
    approach: "Designed an edge-compute thermal payload combining an ESP32-S3 with a thermal array sensor and dual-servo gimbal. Validated on benchtop testbeds and Python/Webots simulation before physical airborne integration.",
    role: "Lead electromechanical designer & firmware developer. Designed the 3D printed gimbal mount in SolidWorks, programmed the I2C sensor reading tasks, and built the benchtop telemetry stream.",
    challenges: [
      "Rapid servo panning drew 1.2A inductive spikes that caused ESP32-S3 logic brownouts. Resolved with dedicated 5V buck rail and star-grounding.",
      "Sensor read cycle latency caused PWM servo jitter. Solved by assigning dedicated RTOS tasks across Core 0 and Core 1."
    ],
    results: "[AIRBORNE FLIGHT TEST RESULTS: In Progress – Phase 2 Milestone]"
  },
  {
    id: "smart-rc-mark-2",
    title: "Smart RC Multi-Mode Robot – Mark 2",
    subtitle: "ESP32-Powered Differential Mobile Robotic Testbed",
    status: "Fully Operational & Validated",
    badge: "Operational Hardware",
    summary: "Upgraded 4-wheel mobile robotics platform featuring seamless state-machine transitions between Bluetooth Classic manual control and autonomous ultrasonic obstacle avoidance with real-time OLED telemetry.",
    image: "/assets/projects/robot_mk2_chassis.jpg",
    gallery: [
      "/assets/projects/robot_mk2_chassis.jpg"
    ],
    tags: ["ESP32", "Bluetooth SPP", "HC-SR04", "TB6612FNG", "OLED HUD", "PWM"],
    hardware: [
      "ESP32 NodeMCU (30-pin, 240MHz)",
      "TB6612FNG Dual MOSFET H-Bridge Driver",
      "HC-SR04 Ultrasonic Ranging Sensor",
      "0.96\" SSD1306 I2C OLED Display (0x3C)",
      "Dual DC Gearmotors with 4-Wheel Drive Chassis",
      "2S Li-Ion Power Pack with Step-Down LM2596 Regulator"
    ],
    software: [
      "Embedded C++ Finite State Machine (FSM)",
      "Bluetooth Classic Serial Port Profile (SPP @ 115200 baud)",
      "Non-blocking hardware timer loops (no delay() calls)",
      "Dynamic exponential PWM duty-cycle motor acceleration curve"
    ],
    problem: "Basic hobbyist robots suffer from severe motor start jerk, wheel slippage, single-mode limitations, and Bluetooth latency that leads to collisions during obstacle detection.",
    approach: "Implemented an industrial state-machine architecture on dual-core ESP32. Bluetooth event listening is isolated to App Core while ultrasonic ranging and motor PWM run on Pro Core with zero interrupt delay.",
    role: "Full hardware assembly, power circuit wiring, motor driver heatsinking, and C++ firmware architecture.",
    challenges: [
      "Bluetooth stack execution stalled single-threaded loops by 40-60ms. Resolved with dual-core task affinity.",
      "Acoustic reflections created erratic distance readings. Resolved with a 3-point rolling median filter in C++."
    ],
    results: "Validated 100% collision-free navigation at speeds up to [MEASURED SPEED] and instantaneous mode switching."
  },
  {
    id: "obstacle-avoidance-mark-1",
    title: "Autonomous Obstacle-Avoidance Robot – Mark 1",
    subtitle: "Arduino-Based Ground Vehicle with Power Rail Isolation",
    status: "Completed Prototype Baseline",
    badge: "Hardware Baseline",
    summary: "Foundational mobile robotics platform exploring sonar ranging logic, H-bridge motor driver debugging, and inductive noise filtering.",
    image: "/assets/projects/robot_mk1_chassis.jpg",
    gallery: [
      "/assets/projects/robot_mk1_chassis.jpg"
    ],
    tags: ["Arduino UNO", "HC-SR04", "TB6612FNG", "Power Isolation", "Star Grounding"],
    hardware: [
      "Arduino UNO (ATmega328P @ 16MHz)",
      "TB6612FNG Dual H-Bridge Driver",
      "HC-SR04 Ultrasonic Sonar Module",
      "11.1V 3S LiPo High-Current Motor Rail",
      "Regulated 5V Step-Down Logic Supply",
      "Differential 2WD Acrylic Chassis with Rear Caster"
    ],
    software: [
      "Arduino C++ Firmware",
      "Hardware Pulse Timing Routines",
      "Obstacle-Distance State Evaluation & Reverse Sweep"
    ],
    problem: "During initial motor reversals under a shared battery, inductive EMF kickback coupled into logic lines and crashed the microcontroller.",
    approach: "Completely separated the 11.1V motor supply from the 5V logic rail, added flyback protection diodes, and tied grounds at a single star-ground point.",
    role: "Chassis assembly, power distribution redesign, and navigational state programming.",
    challenges: [
      "Inductive motor kickback triggered brownout detector resets. Solved with isolated rails and star grounding.",
      "Deadlock traps in 90-degree corners. Solved by implementing an alternating pivot algorithm with randomized sweep angles."
    ],
    results: "Reliable autonomous navigation without a single microcontroller brownout lockup."
  },
  {
    id: "gokart-gps-telemetry",
    title: "Go-Kart GPS Telemetry & Lap Timing",
    subtitle: "Onboard Motorsport Lap Computer & Kinematic HUD",
    status: "Field Tested on Hardware",
    badge: "Kinematics & GPS",
    summary: "Self-contained motorsport telemetry computer calculating real-time speed, lap times, and sector splits via GPS vector cross-products without external track beacons.",
    image: "/assets/projects/gokart_gps_hardware.jpg",
    gallery: [
      "/assets/projects/gokart_gps_hardware.jpg",
      "/assets/projects/gokart_gps_top.jpg"
    ],
    tags: ["ESP32", "u-blox GPS", "OLED HUD", "Computational Geometry", "SoftAP Web Server"],
    hardware: [
      "ESP32 Dual-Core SoC",
      "u-blox NEO GNSS Receiver (NMEA UART @ 10Hz)",
      "0.96\" SSD1306 High-Contrast OLED HUD",
      "18650 Li-Ion Cell with 5V Boost Converter",
      "Custom 3D Printed Steering Wheel Clamp"
    ],
    software: [
      "Embedded C++ NMEA Sentence Parser",
      "Vector Cross-Product Gate Line Crossing Math",
      "Sub-millisecond Lap Timestamp Interpolation",
      "ESP32 SoftAP Web Server with JSON Telemetry API"
    ],
    problem: "Trackside optical lap transponders are expensive and require trackside power and beacon placement.",
    approach: "Used coordinate vector math on GPS points: true crossing of virtual gate line segment AB occurs when sign(CP1) != sign(CP2). Added speed and trajectory heading interlocks to eliminate false pit-lane triggers.",
    role: "System architect: derived coordinate geometry algorithms, designed steering bracket in SolidWorks, and coded the firmware and local web dashboard.",
    challenges: [
      "Idling in pit boxes adjacent to the finish line caused false laps. Solved with a heading dot-product interlock.",
      "Engine vibration loosened breadboard wires. Solved with a vibration-damping bracket and soldered protoboard."
    ],
    results: "Accurate lap detection and speed readouts matching track benchmarks within [TIMING ACCURACY]."
  },
  {
    id: "smart-electricity-monitor",
    title: "Smart Electricity Monitor – Embedded Fusion",
    subtitle: "Non-Invasive True RMS Energy Acquisition Node",
    status: "Hackathon Built Prototype",
    badge: "Prakalp 24-Hr Hackathon",
    summary: "Non-invasive AC power monitor engineered during the 24-hour Prakalp hardware hackathon to measure True RMS power and stream consumption diagnostics.",
    image: "/assets/projects/electricity_monitor.jpg",
    gallery: [
      "/assets/projects/electricity_monitor.jpg"
    ],
    tags: ["ESP32", "SCT-013-000 CT Sensor", "True RMS", "Signal Conditioning", "IoT"],
    hardware: [
      "ESP32 Microcontroller",
      "SCT-013-000 Split-Core Current Transformer",
      "Precision Midpoint DC Bias Resistor Network (1.65V)",
      "Decoupling & Low-Pass Filter Capacitors",
      "SSD1306 Local Display"
    ],
    software: [
      "Discrete True RMS Numerical Integration Algorithm",
      "High-Frequency ADC Sampling across 50Hz AC Cycles",
      "Wi-Fi MQTT Telemetry Payload Stream"
    ],
    problem: "Auditing energy consumption in industrial machine shops and campus labs usually requires hazardous and destructive wire cutting.",
    approach: "Clamped a non-invasive current transformer over the insulated AC line, conditioned the alternating signal with a 1.65V DC bias circuit, and computed True RMS in ESP32 firmware.",
    role: "Circuit design, breadboard prototyping, and discrete RMS sampling algorithm implementation.",
    challenges: [
      "ESP32 ADC non-linearity at signal rails. Tuned burden resistance to keep AC swing between 0.4V and 2.9V.",
      "Non-linear load distortions from switching power supplies. Implemented discrete cycle integration over 1000 samples."
    ],
    results: "Validated continuous real-time power monitoring with live local OLED feedback and cloud telemetry."
  },
  {
    id: "desk-companion-buddy",
    title: "Desk Companion \"Buddy\"",
    subtitle: "Interactive State-Machine Desktop Unit",
    status: "Fully Functional Prototype",
    badge: "Micro-Controller UI",
    summary: "Compact desktop companion running on ESP32 with an SSD1306 OLED and tactile navigation, featuring animated mood expressions, a clock, a Pomodoro timer, and an embedded reflex game.",
    image: "/assets/projects/desk_buddy_oled.jpg",
    gallery: [
      "/assets/projects/desk_buddy_oled.jpg"
    ],
    tags: ["ESP32", "SSD1306 OLED", "State Machine", "UI Animation", "Embedded C++"],
    hardware: [
      "ESP32 NodeMCU Board",
      "0.96\" Monochrome I2C OLED Display",
      "Tactile Push Button Navigation",
      "Micro-USB Power Interface"
    ],
    software: [
      "Embedded C++ State Machine",
      "Bitmapped Facial Expression Engine",
      "Timer Interrupt State Transitions",
      "Reaction-Time Microsecond Counter Game"
    ],
    problem: "Building intuitive, responsive embedded user interfaces with constrained memory and a single tactile input button.",
    approach: "Developed a debounced short-press / long-press state machine that cycles through four modes: animated mood faces, digital clock, Pomodoro focus interval, and reaction reflex game.",
    role: "Complete firmware development and graphics rendering logic.",
    challenges: [
      "Single-button input ambiguity. Implemented microsecond-timed press duration filtering to distinguish mode toggle from select.",
      "OLED frame-buffer memory footprint. Optimized drawing routines using 1-bit monochrome bitmap arrays."
    ],
    results: "Responsive 30fps screen refresh with instant tactile feedback."
  }
];