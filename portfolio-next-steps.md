# Action Plan: Portfolio Prep for Figma Designer Advocate

This document outlines the concrete steps required to adapt your portfolio ([`index.html`](index.html)) for the **Figma Designer Advocate** role. The focus is on **flattening your Information Architecture (IA)** to remove click barriers, **reframing your copy** from an internal design systems manager to an external community advocate, and **filling key multimedia and developer-relations gaps**.

---

## Phase 1: Information Architecture Refactoring (Flattening the IA)
*Objective: Eliminate click barriers, tabs, and carousels so hiring managers see your highest-value work immediately during a 30-second skim.*

### 1. De-Carousel Speaking & Community Events
*   **File:** [`pages/speaking-community.html`](pages/speaking-community.html)
*   **The Issue:** Your speaking engagements (such as your IBM Design Festival handoff talk to 3,000+ designers and your client workshop for Nationwide) are hidden behind a tab switcher and a 7-slide nested javascript carousel.
*   **Action Items:**
    *   [ ] Remove the tab structure separating "Guest lecturing" and "Talks & events."
    *   [ ] Abolish the `talks-carousel` structure.
    *   [ ] Re-structure the page to stack your engagements vertically as independent, high-impact sections. Recommended layout sequence:
        1.  **IBM Design Festival (3,000+ Designers):** Lead with your largest, most impressive audience.
        2.  **IBM Client AI Workshop (Nationwide Design Team):** Proves customer enablement/GTM alignment.
        3.  **Guest Lecturing (6 Years at University of Reading):** Establishes your long-term commitment to education.
        4.  **Scaling AI Internally / Merged PR:** Establishes your hands-on code and dev-alignment fluency.
        5.  **Carbon Migration & Co-Design Workshop:** Proves group facilitation and alignment strategy.
        6.  **Hursley Americas Summit & Design Shares:** Shows ongoing community and client engagement.

### 2. De-Tab Community Contributions & Carbon Upstream Gaps
*   **File:** [`pages/community-contributions.html`](pages/community-contributions.html)
*   **The Issue:** Five major design systems achievements (Button Guidance, Full Page Errors, Tag Overflow, Grid Influencers) are hidden behind six successive tab buttons. Skimmers will only see the "Product Gallery" default tab.
*   **Action Items:**
    *   [ ] Remove the `nav-pills` tab system.
    *   [ ] Convert the page into a unified, naturally scrolling vertical document.
    *   [ ] Sequence the sections with bold headers:
        1.  **The Product Gallery:** (Your internal Figma-style Community platform).
        2.  **Grid Influencers:** (Direct upstream contribution to core Carbon).
        3.  **Button Usage Guidance:** (Standardizing pattern placement across products).
        4.  **Full Page Error States:** (Solving dark-mode and accessibility gaps).
        5.  **Tag Overflow Patterns:** (Solving localized truncation inconsistencies).
    *   [ ] Add a mini sticky table of contents (TOC) on the left-hand rail for quick navigation, but keep the full content scrollable on a single page.

### 3. Expose the Technical Variables Layer in Figma Kit
*   **File:** [`pages/figma-kit.html`](pages/figma-kit.html)
*   **Action Items:**
    *   [ ] Remove the tab panels separating "The challenge," "How we built it," and "The result."
    *   [ ] Display the variable mapping, token architecture, and your asset tracker as a prominent scrollable column. This is your core technical proof; it must not be hidden.

---

## Phase 2: Copywriting & Strategic Reframing
*Objective: Shift your narrative from a heads-down "internal builder" to an outward-facing "community champion and developer relations advocate."*

### 1. Update Homepage Hero Copy
*   **File:** [`index.html`](index.html:533)
*   **Current:** *"I think in systems. I teach in stories. That's how design actually spreads."*
*   **Framing Adjustments:**
    *   [ ] Reframe your title from "Design Systems Leader" to **"Designer Advocate & Design Systems Specialist."**
    *   [ ] Update your subhead to explicitly call out **developer enablement, community stewardship, and platform mastery**:
        > *"I build systems, I empower creators, and I bridge design and code. Seven years of design systems enablement, developer-relations advocacy, and community education at IBM."*

### 2. Reframe Figma Kit around "Enablement & Training"
*   **File:** [`pages/figma-kit.html`](pages/figma-kit.html:279)
*   **Framing Adjustments:**
    *   [ ] Shift focus from the technical *delivery* of the kit to how you **advocated and enabled its adoption**.
    *   [ ] Explicitly detail *how* you drove the 165% adoption growth. Write about:
        *   Creating written migration documentation and Figma user guides.
        *   Hosting weekly virtual office hours and Figma training workshops.
        *   Gathering community feedback to iterate on component slots and auto-layout schemas.

### 3. Reframe Handoff Case Study as "DevRel and Figma Dev Mode"
*   **File:** [`pages/developer-handoff-process.html`](pages/developer-handoff-process.html:495)
*   **Framing Adjustments:**
    *   [ ] Reframe this as a **Developer Relations (DevRel)** and designer alignment case study.
    *   [ ] Connect your findings directly to modern Figma workflows: Explain how your research on developer frustration validates why tools like **Figma Dev Mode, Figma Code Connect, and Variables** are essential to modern enterprise delivery.

### 4. Reframe the Radiology AI Patent
*   **File:** [`pages/ai-patent.html`](pages/ai-patent.html:329)
*   **Framing Adjustments:**
    *   [ ] Position yourself as an **AI systems design pioneer**. Reframe the radiology context:
        > *"Designing with AI: Establishing UX Mental Models and Systems-Thinking for Human-AI Workflows."*
    *   [ ] Highlight your deep system-level understanding of AI logic. This gives you ultimate credibility when discussing Figma’s AI-assisted prototyping and automated layouts with advanced design teams.

---

## Phase 3: Creating New Assets & Mitigating Gaps
*Objective: Build concrete proof for the areas not currently documented in your work history.*

### 1. Record a 2-Minute Screencast (Video Fluency)
*   **The Gap:** Figma advocates are content creators who must be comfortable explaining complex design tools on camera or through recorded video walk-throughs.
*   **Action Items:**
    *   [ ] Select a highly specific technical Figma topic (e.g., *“How to Map Carbon Design Tokens to Figma Variables in Under 120 Seconds”* or *“Using Slots and Component Properties to Minimize Library Bloat”*).
    *   [ ] Record a 2-minute Loom/Vimeo screencast of your screen and your camera. Keep it energetic, clear, and highly practical.
    *   [ ] Embed this video directly on your homepage or inside the [`pages/figma-kit.html`](pages/figma-kit.html) case study.

### 2. Highlight Go-to-Market (GTM) & Sales Partnership
*   **The Gap:** Figma DAs work closely with GTM and Customer Experience teams to help enterprise accounts adopt Figma.
*   **Action Items:**
    *   [ ] Under your **Nationwide Client AI Workshop** section, explicitly outline how you partnered with accounts and client leaders:
        > *"Collaborated with client success teams to deliver high-value co-design workshops, helping critical enterprise customers unlock systems capability and adopt modern design-to-code practices."*

### 3. Add a "Community Artifacts & Resources" Section
*   **The Gap:** Showing that you active contribute to the broader public community.
*   **Action Items:**
    *   [ ] Add a section on your homepage showing external open-source contributions. 
    *   [ ] If you have published templates, variables playgrounds, or UI assets to the **Figma Community**, link to them with click-through counts.

---

## Phase 4: Verification & Final Polish
*Objective: Ensure all technical, accessibility, and visual details are perfect before hitting "submit."*

*   [ ] **Clean Slug Mapping:** Ensure all `href` links in [`index.html`](index.html) and your sibling case studies resolve cleanly to your lowercase, hyphenated filenames.
*   [ ] **Accessibility Audit:** Check color contrast across all portfolio screens (specifically dark-mode/light-mode toggles in Full Page Errors). Ensure all interactive `nav-pill` buttons have descriptive aria-labels.
*   [ ] **Responsive Check:** Test the flattened, vertical scroll views on mobile layouts to ensure smooth scrolling and readable font scaling on smaller screens.
