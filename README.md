**Used tools:**

- Next.js - for creating the app
- TypeScript - for making the project more maintainable and early catch the errors
- React-aria-components - for creating accessible UI components
- Zustand - for state management
- React-hook-form - for managing the form logic
- Valibot - lightweight form validator (replacement for zod)
- Tailwind - for easily style elements without worrying about the class names
- Embla carousel - for creating carousel on mobile screen

**Decisions:**

1. Used Zustand library for state management rather than RTK or MobX. Because of the ability to set up stores easily with less boilerplate code
2. Used global modal store to control modal visibility. It allows to have modal's visibility states and modal itself in any part of the project
3. Wrote an form wrapper component to isolate the form logic from the UI
4. Used eslint for linting
