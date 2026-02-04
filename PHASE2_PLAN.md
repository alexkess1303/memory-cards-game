

## Plan: Phase 2 Implementation Roadmap

To implement the memory game logic cleanly and according to SOLID, we should proceed in clear, testable steps. Here’s a recommended order and what’s missing:

### Steps
1. **Refactor Card State for Pairs**
   - Change the card collection to contain pairs (two of each label), shuffle them, and update the state structure.
2. **Create useMemoryGame Hook**
   - Move all game logic (flipping, matching, state transitions) into a custom hook.
   - The hook should expose state, handlers, and any derived game info (e.g., moves, matches).
3. **Update GameBoard to Use the Hook**
   - Replace local state/handlers with those from the hook.
   - Ensure UI only handles rendering and user interaction.
4. **Implement Game Rules in the Hook**
   - Only allow two cards to be face up at a time (unless matched).
   - If two cards match, keep them face up; otherwise, flip them back after a delay.
   - Prevent flipping more than two cards at once.
5. **Add a “Reset” or “New Game” Button**
   - Allow the user to start a new game, resetting the board and state.
6. **Expose Additional Game State (Optional)**
   - Moves counter, matches found, game over state, etc.
   - Make the hook flexible for different board sizes if desired.

### Further Considerations
1. **Board Size**: Should the hook support variable sizes? (Recommend: make it configurable for future flexibility.)
2. **SOLID Principles**: Keep the hook focused on game logic, UI components on rendering.
3. **Testing**: The hook should be easily testable in isolation.
4. **Extensibility**: Design the hook so new rules or features can be added without major rewrites.

---

**Recommended Order:**  
1. Refactor card state for pairs and shuffling.  
2. Build the useMemoryGame hook with basic flipping/matching logic.  
3. Integrate the hook into GameBoard.  
4. Add reset/new game button.  
5. Add extra features (moves, matches, game over, board size config).

Would you like to start with the card state refactor and hook skeleton?

//======================================================//
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