# Phase 2: Memory Game Logic & SOLID Design

## Plan
To implement a memory cards game with pairs and matching logic, we’ll refactor the game state and logic into a dedicated hook or function, keeping UI and rules separate for SOLID compliance.

### Steps
1. Refactor card state to support pairs (e.g., two cards for each label, shuffled).
2. Create a custom hook (e.g., `useMemoryGame`) to encapsulate all game logic:
   - Card flipping, matching, and state transitions.
   - Expose state and handlers for the UI.
3. In the hook, implement rules:
   - Only allow two cards to be face up at a time (unless matched).
   - If two cards match, keep them face up; otherwise, flip them back after a delay.
   - Prevent flipping more than two cards at once.
4. Update GameBoard to use the hook, passing state and handlers to Card components.
5. Ensure the hook is reusable and testable, adhering to SOLID (especially Single Responsibility and Open/Closed principles).

### Further Considerations
- Should the hook support variable board sizes or only 3x4?
- Do you want to add a “reset” or “new game” button?
- Should the hook expose additional game state (e.g., moves, matches, game over)?

---
This plan will guide the next phase of implementation, focusing on game rules and maintainable architecture.