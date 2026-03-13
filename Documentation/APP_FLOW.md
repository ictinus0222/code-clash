# Application Flow Documentation

## 1. Entry Points

### Primary Entry Points

- **Direct URL**
  - Users open the CodeClash landing page directly via link.

- **Social Media Links**
  - Users arrive through Instagram, LinkedIn, WhatsApp, or event promotions.

- **Event Posters / QR Codes**
  - Physical posters redirect users to the landing page.

### Secondary Entry Points

- **Shared Links**
  - Students share the landing page with friends.

---

# 2. Core User Flows

## Flow 1: Event Discovery

**Goal:**  
User understands what CodeClash 2026 is.

**Entry Point:**  
Landing page

### Happy Path

1. **Page: Hero Section**

Elements:

- Animated text logo **CodeClash**
- Event highlights
- Two CTA buttons
  - Register Now
  - View Rounds

User Actions:

- Reads event information
- Clicks **View Rounds** or scrolls

System Response:

- Smooth scroll to **Rounds Section**

Success State:

User understands the event and continues exploring.

---

## Flow 2: Understanding Event Rounds

**Goal:**  
User learns about the competition structure.

**Entry Point:**  
Rounds Section

### Happy Path

1. **Page Section: The Rounds**

Displayed Elements:

- Round 1 Card
- Round 2 Card

---

### Round 1 — MCQ Bits

Content includes:

- Short description
- Buzzer round mention
- Icon or visual indicator

User Action:

- Reads description

System Response:

- Static content display

---

### Round 2 — UI Clone Wars

Content includes:

- Description explaining challenge
- Replicate a website with creative improvements

User Action:

- Reads details

System Response:

- Static content display

---

### Exit Points

User may:

- Continue scrolling
- Click **Register Now**

---

## Flow 3: Reading Rules

**Goal:**  
User understands event guidelines.

**Entry Point:**  
Rules Section

### Happy Path

1. **Page Section: Rules**

Displayed Elements:

- List of rules
- Eligibility
- Participation guidelines
- Judging overview

User Action:

- Reads rules

System Response:

- Static content display

Success State:

User understands the event requirements.

---

## Flow 4: Registration

**Goal:**  
User registers for the event.

**Entry Point:**  
Register Now Button

### Happy Path

1. **User clicks Register Now**

Trigger:

- Open external registration form.

System Action:

- Redirect to registration link.

Success State:

User lands on the external form to complete registration.

---

# 3. Navigation Map
```text
Landing Page
│
├── Hero Section
│ ├── Event Title
│ ├── Event Highlights
│ ├── Register Now Button
│ └── View Rounds Button
│
├── Rounds Section
│ ├── Round 1: MCQ Bits
│ │ └── Includes Buzzer Round
│ │
│ └── Round 2: UI Clone Wars
│ └── Website replication challenge
│
├── Your Challenge Section
│ ├── Reference Website Screenshot
│ └── Challenge Description
│
├── Rules Section
│ ├── Eligibility
│ ├── Participation Guidelines
│ ├── Round Instructions
│ └── Judging Criteria
│
└── Footer
├── Event Information
├── Contact Details
├── Social Links
└── Register Now Button
```

---

# 4. Screen Inventory

## Screen: Landing Page

**Route:** `/`

**Access:** Public

**Purpose:**  
Provide information about CodeClash and allow users to register.

### Key Elements

- Hero Section
- Rounds Section
- Rules Section
- Footer

### Actions Available

- Register Now → External registration form
- View Rounds → Scroll to rounds section

### State Variants

- Default page state
- Mobile responsive layout

---

# 5. Interaction Patterns

## Pattern: CTA Button

Trigger:

User clicks **Register Now**

Behavior:

- Opens external registration form.

---

## Pattern: Smooth Scroll Navigation

Trigger:

User clicks **View Rounds**

Behavior:

- Smooth scroll animation to rounds section.

---

# 6. Decision Points

### Decision: User Registration
```text
IF user clicks Register Now
THEN open external registration form
ELSE continue browsing the page
```

---

# 7. Error Handling

### Broken Registration Link

Display:

- Error message page or fallback message.

Action:

- Provide contact email or retry option.

---

### Network Error

Display:

- Browser error.

Recovery:

- User refreshes page.

---

# 8. Responsive Behavior

## Mobile

- Vertical layout
- Stacked sections
- Full width buttons
- Larger tap targets

## Desktop

- Wider layout
- Possible card-based round display
- More spacing between sections

---

# 9. Animation & Transitions

## Page Animations

Hero Section:

- Animated **CodeClash** text logo.

Scroll Effects:

- Smooth section transitions.

---

## Micro Interactions

Buttons:

- Hover effect
- Slight scale animation

Round Cards:

- Hover highlight effect
---

# 10. Intro Loading Experience

## Flow: Application Startup

**Goal:**  
Create a strong first impression with an animated intro before the user sees the landing page.

### Step 1: Loading Screen

When the user opens the website:

Displayed Elements:

- Full-screen loading screen
- Animated **CodeClash logo**
- Dark developer-themed background
- Subtle animation effects

Animation Ideas:

- Logo typing effect (CODE → CLASH)
- Glitch animation
- Neon glow animation
- Rotating loading indicator

Duration:

- 2–3 seconds maximum

Success State:

Transition to main landing page.

---

# 11. Hero Section Animation Experience

## Animated Hero Entrance

When the loading screen finishes:

### Entrance Animation

Elements appear sequentially:

1. Background animation fades in
2. Animated **CodeClash logo text**
3. Event stats slide in
4. CTA buttons appear
5. Floating decorative elements appear

Example Elements:

- Floating particles
- Code snippets moving slowly
- Gradient waves
- Neon grid patterns

---

# 12. Background Animation System

## Global Background Animation

The website background should feel **dynamic and interactive**.

### Possible Effects

- Floating particles
- Animated gradient mesh
- Subtle code rain
- Glowing lines or grid
- Moving abstract shapes

### Behavior

- Slow movement
- Non-distracting
- Runs continuously across sections

---

# 13. Micro‑Interactions

## Button Interaction

Hover:

- Glow effect
- Slight scale increase

Click:

- Ripple effect
- Button compress animation

---

## Round Cards

Hover State:

- Card lifts slightly
- Glow border
- Shadow increase

---

# 14. Scroll Animations

As the user scrolls down:

### Rounds Section

- Cards fade in from bottom
- Slight stagger animation

### Rules Section

- Each rule appears with fade animation

### Footer

- Smooth fade-in