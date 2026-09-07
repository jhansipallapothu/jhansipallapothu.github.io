export const profile = {
  name: 'Jhansi Sreeja Pallapothu',
  title: 'Embedded Systems & Firmware Engineer',
  location: 'Chennai, TN',
  email: 'pjhansisreeja477@gmail.com',
  phone: '+91 8125414564',
  linkedin: '#', // TODO: add your LinkedIn profile URL
  github: '#', // TODO: add your GitHub profile URL
  tagline:
    'I build real-time embedded systems for automotive platforms — from RTOS integration on PowerPC MCUs to full-stack diagnostic tooling that keeps vehicles on the road.',
}

export const experience = [
  {
    role: 'Embedded Engineer II',
    company: 'Boson Motors',
    period: 'Aug 2024 – Present',
    bullets: [
      'RTOS Debugging Infrastructure: Implemented trace tools integration to support FreeRTOS on MPC5775B for the integration and testing of FreeRTOS into VCU firmware.',
      'MBD & Control Systems: Implemented PID controllers using ETAS ASCET and Stateflow; conducted technical seminars for senior developers on Model-Based Development methodologies.',
      'Testing & QA: Performed comprehensive unit testing for VCU firmware and achieved 98% code coverage. Built validation utilities compatible with IXXAT, PEAK, and CANdapter.',
      'HIL Testing Interface: Developed a custom technician-facing GUI via UART to monitor Hardware-in-the-Loop (HIL) testing data, bridging raw firmware output to actionable diagnostic visuals.',
      'VCU Unified Diagnostic Suite: Architected and developed a full-stack GUI utility using Python (PyQt5) and python-can, streamlining VCU flashing, configuration, and Quality Check (QC) workflows.',
      'Communication Validation: Designed a CAN-to-CAN bridge utility to detect data loss and validate telematics integrity across multiple vehicle buses.',
      'Feature Prototyping: Developed a Proof-of-Concept (POC) for Vehicle Cruise Mode on Arduino, which served as the logic baseline for final production firmware implementation.',
    ],
  },
]

export const skills = [
  {
    category: 'Embedded & RTOS',
    items: [
      'FreeRTOS',
      'Real-Time Scheduling',
      'MPC5775B (PowerPC)',
      'STM32 (Cortex-M)',
      'Test Automation & Unit Testing',
      'Static Code Analysis',
    ],
  },
  {
    category: 'Systems & Build',
    items: ['GNU Make', 'Makefiles', 'Memory Allocation', 'Win32 API', 'UDP Socket Programming'],
  },
  {
    category: 'Automotive & Protocols',
    items: [
      'CAN (Diagnostics/Logging)',
      'UART',
      'SPI',
      'I2C',
      'HIL Testing',
      'MBD (Ansys SCADE, ETAS ASCET)',
    ],
  },
  {
    category: 'Development Tooling',
    items: [
      'Python (PyQt5, python-can)',
      'Embedded C',
      'C++',
      'Static Code Analysis',
      'Ceedling',
      'IXXAT',
      'PEAK-System',
    ],
  },
]

export const projects = [
  {
    name: 'Service-Bot',
    subtitle: 'Self-Directed',
    description:
      'Designed and developed a multi-mode (manual, autonomous, service) embedded service robot leveraging IoT principles, integrating DC motor control, ultrasonic-based obstacle detection, Bluetooth-enabled voice/text command processing, and multimedia feedback (LCD + audio), demonstrating robust real-time system behavior and team-based execution.',
  },
  {
    name: 'Optical Character Recognition for Telugu Script',
    subtitle: 'Research Project',
    description:
      'Developed a Convolutional Neural Network (CNN) using TensorFlow/Python for handwritten character recognition, achieving 92% accuracy. Implemented custom data preprocessing and augmentation pipelines to handle script-specific complexities.',
  },
]

export const education = {
  school: 'Sagi Rama Krishnam Raju Engineering College (JNTUK)',
  degree: 'Bachelor of Technology in Electronics & Communication Engineering',
  period: '2021 – 2025',
  cgpa: '8.97',
  coursework: 'Computer Architecture (Nand to Tetris), Real-Time Operating Systems, VLSI RTL-to-GDS',
}

export const achievements = [
  {
    title: 'Ownership',
    description:
      'Solely responsible for the VCU Diagnostic Suite, now a standard tool for company technicians.',
  },
  {
    title: 'Mentorship',
    description:
      'Mentored 15+ students in embedded system integration during a national-level hackathon by ACE @SRKR.',
  },
]
