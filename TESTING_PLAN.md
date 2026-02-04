## Plan: Set Up Testing for useMemoryGame

We’ll set up a test environment and add tests for the useMemoryGame hook.

### Steps
1. Install Jest and React Testing Library (if not already installed).
2. Create a new folder: `src/tests` (at the same level as `app`).
3. Add a test file: `src/tests/useMemoryGame.test.ts`.
4. Write tests for useMemoryGame covering:
   - Initial state
   - Flipping logic
   - Matching logic
   - Reset logic
   - Edge cases (e.g., flipping more than two cards)
5. Configure Jest (if needed) for TypeScript and React.

### Further Considerations
- Do you want code coverage reports?
- Should we add CI integration for tests?
- Should we add more hooks/components to the test suite later?