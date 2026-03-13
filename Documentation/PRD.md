# Product Requirements Document (PRD)

## 1. Product Overview

- **Project Title:** CodeClash 2026 Event Landing Page  
- **Version:** 1.0  
- **Last Updated:** March 2026  
- **Owner:** CodeClash Organizing Team  

### Description
CodeClash 2026 is a flagship coding and design competition featuring **500+ participants**, **₹50,000+ prize pool**, and a **2‑day event** consisting of multiple competitive rounds.

The landing page will serve as the **primary promotional and information hub** for the event and will drive participants to **register through an external registration form**.

The page should be **visually engaging, modern, and developer‑themed**, highlighting the competition rounds and motivating students to register.

---

# 2. Problem Statement

Students often struggle to find **clear and engaging information about technical competitions**. Event information is often scattered across posters, social media, and forms.

The CodeClash landing page aims to:

- Present **all event details in a single clear interface**
- **Explain the competition format and rounds**
- Provide **an easy way for students to register**
- Create **excitement around the event**

---

# 3. Goals & Objectives

## Business Goals

- Achieve **500+ event registrations**
- Increase **event visibility among college students**
- Clearly communicate **rules and competition format**

## User Goals

Participants should be able to:

- Understand what **CodeClash is**
- Learn how the **rounds work**
- Quickly **register for the competition**
- Find **rules and important event information**

---

# 4. Success Metrics

- **Registrations:** 500+ participants  
- **Conversion Rate:** ≥ 20% landing page → registration clicks  
- **Average Time on Page:** ≥ 1.5 minutes  
- **Bounce Rate:** < 50%

---

# 5. Target Users & Personas

## Primary Persona: Competitive Developer

**Demographics**

- Age: 18–24  
- College students  
- Computer science / tech background  

**Pain Points**

- Difficulty finding **good tech competitions**
- Lack of **clear event details**
- Confusing event rules

**Goals**

- Participate in coding/design competitions
- Win prizes
- Build portfolio & experience

**Technical Proficiency**

Intermediate to advanced developers.

---

## Secondary Persona: Curious Tech Student

**Demographics**

- Age: 17–23  
- Early-stage programmers or designers  

**Pain Points**

- Unsure if competitions are beginner-friendly
- Lack of clarity about competition structure

**Goals**

- Try competitive events
- Learn by participating

**Technical Proficiency**

Beginner to intermediate.

---

# 6. Features & Requirements

## Must‑Have Features (P0)

### 1. Hero Section

**Description**

Top section introducing the event.

**Elements**

- Animated **CodeClash logo text**
- Event description
- Event highlights
- Prize pool display
- CTA buttons

**User Story**

As a student, I want to quickly understand what CodeClash is so that I can decide whether to participate.

**Acceptance Criteria**

- Animated text logo: **“CodeClash”**
- Event stats displayed:
  - 500+ Participants
  - ₹50k+ Prize Pool
  - 2 Day Event
- Two buttons:
  - **Register Now**
  - **View Rounds**

**Success Metric**

High CTA click-through rate.

---

### 2. Rounds Section

**Description**

Explains the two competition rounds.

**User Story**

As a participant, I want to understand the event structure so that I can prepare.

**Acceptance Criteria**

Display **two rounds**:

#### Round 1 — MCQ Bits

- Multiple choice questions
- Includes **Buzzer Round**

#### Round 2 — UI Clone Wars

Participants receive a **reference website**.

Task:

- Replicate the website
- Add **creative improvements**
- Demonstrate **design and development skills**

Each round card must include:

- Title
- Short description
- Visual indicator/icon

---

### 3. Your Challenge Section

**Description**

Displays a high-quality screenshot of the reference website participants need to clone.

**User Story**

As a participant, I want to see the target UI so that I know what I'll be building in Round 2.

**Acceptance Criteria**

- A large, clear screenshot of the target website.
- Description elaborating on the goal (recreate, enhance, impress).
- Styled with the futuristic/glassmorphic design system.

---

### 4. Rules Section

**Description**

Displays the rules participants must follow.

**User Story**

As a participant, I want to read the rules so that I understand event guidelines.

**Acceptance Criteria**

Rules section must include:

- Eligibility
- Team rules (if applicable)
- Round instructions
- Submission expectations
- Judging criteria overview

---

### 4. Registration CTA

**Description**

Directs users to external registration.

**User Story**

As a student, I want to register easily so that I can participate.

**Acceptance Criteria**

- Clicking **Register Now** opens **external registration form**
- Button visible in:
  - Hero section
  - Footer

---

### 5. Footer Section

**Description**

Provides additional event information.

**Acceptance Criteria**

Footer contains:

- Event name
- Organizer information
- Contact info
- Social links (if applicable)
- Secondary **Register button**

---

# 7. Explicitly OUT OF SCOPE

To avoid scope creep, the following are **not included**:

- User accounts
- Built‑in registration system
- Payment processing
- Participant dashboard
- Live leaderboard
- Backend admin panel
- Real-time quiz system

---

# 8. User Scenarios

## Scenario 1: Student discovers event

**Context**

Student sees CodeClash poster or social media post.

**Steps**

1. Student opens landing page
2. Reads hero section
3. Scrolls to rounds section
4. Reads rules
5. Clicks **Register Now**

**Expected Outcome**

User reaches external registration form.

---

## Scenario 2: Student wants to understand rounds

**Steps**

1. User scrolls to **Rounds section**
2. Reads **MCQ Bits**
3. Reads **UI Clone Wars**

**Outcome**

User understands competition format.

---

# 9. Dependencies & Constraints

## Technical Constraints

- Must be **mobile responsive**
- Must load **under 2 seconds**
- Should support modern browsers

## Business Constraints

- Limited development time (competition environment)
- Must focus on **visual impact**

## External Dependencies

- External registration form
- Event branding assets
- Event logo

---

# 10. Timeline & Milestones

**MVP:**

Landing page with:

- Hero
- Rounds
- Rules
- Registration CTA
- Footer

**Completion Target:** Competition submission deadline.

---

# 11. Risks & Assumptions

## Risks

- Too much animation could hurt performance
- Unclear event rules could confuse users

## Assumptions

- Students will access primarily from **Laptops / PCs**
- Registration will occur via **external form**

---

# 12. Non‑Functional Requirements

## Performance

- Page load < **2 seconds**
- Smooth animations

## Security

- No sensitive data stored on page

## Accessibility

- Readable typography
- Accessible buttons

## Scalability

- Static page able to handle **thousands of visitors**