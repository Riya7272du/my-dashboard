Ques 1)Your approach to building the dashboard.

Ans) The dashboard was developed using a modular, user-centric approach with React.js to ensure scalability, usability, and responsiveness.

1. Component-Based Architecture
   The UI was divided into reusable components:
   Sidebar: For navigation across key sections.
   ProgressBar: Dynamically tracks and displays user progress.
   InputForm: Handles user input, file uploads, and validation.
   This modular approach improves code organization, reusability, and scalability.

2. Styling and Layout
   A clean, responsive design was implemented using:
   CSS Flexbox for component alignment.
   Media Queries for adaptability across desktop, tablet, and mobile devices.
   Gradient backgrounds, hover effects, and user-friendly input styling to enhance visual appeal.

3. Input Validation and Interactivity
   Numeric fields use regular expressions to restrict input.  
   File uploads include drag-and-drop styling and placeholders for clarity.
   React hooks (useState) manage state and enable dynamic updates, like progress tracking and conditional rendering of form components.

4. Responsive Design
   The layout adapts for smaller screens by:
   Collapsing the sidebar.
   Stacking input forms vertically.
   Adjusting the progress bar orientation for compact views.

5. Scalability
   The component-based structure ensures new features or changes (e.g., steps in the progress bar or form fields) require minimal effort.

This approach delivers a clean, responsive, and maintainable dashboard optimized for a seamless user experience.

Ques 2)The challenges faced and how you resolved them.
Ans) Challenges Faced and Solutions
a. Responsive Design
Challenge: Adjusting the layout for smaller screens, particularly for complex components like input forms and progress bars.
Solution: Used flexbox and media queries to dynamically resize and reposition components, ensuring proper alignment and readability on all devices.

b. Input Validation
Challenge: Ensuring only numeric values are allowed for fields like "Contract Value" and "Claim Value".
Solution: Added regular expressions in input handlers to validate user input and prevent non-numeric entries.

c. File Uploads
Challenge: Creating an intuitive UI for uploading documents while providing fallback options for users to type statements.
Solution: Designed a user-friendly drag-and-drop upload box with appropriate labels and visual indicators.

d. Progress Bar State Management
Challenge: Dynamically updating the progress bar based on the current step of the process.
Solution: Passed the current step as a prop to the ProgressBar component, which highlights completed steps dynamically.

Ques 3)Any assumptions you made.
Ans)
Assumptions Made:-
The progress steps in the progress bar are predefined and follow a linear order (e.g., Preliminary → Your Details → KYC, etc.).
The file size limit for uploads is assumed to be 2MB with the format restricted to PDF.
The place and language selection dropdown options were predefined (e.g., specific cities and languages).
Validation focuses on basic requirements, such as allowing only numeric values where applicable.
