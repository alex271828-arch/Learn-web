"""A simple command-line Nim game.

Players take turns removing objects from piles. The player who takes the
last object wins.
"""

from typing import List


def get_initial_piles() -> List[int]:
    """Prompt user for initial pile sizes and return them as a list of ints."""
    while True:
        raw = input("Enter pile sizes separated by spaces: ")
        try:
            piles = [int(x) for x in raw.strip().split()]
            if not piles:
                raise ValueError("No piles provided")
            if any(n <= 0 for n in piles):
                raise ValueError("Pile sizes must be positive")
            return piles
        except ValueError as exc:
            print(f"Invalid input: {exc}")


def display_piles(piles: List[int]) -> None:
    """Display current piles with indices."""
    for idx, count in enumerate(piles, start=1):
        print(f"Pile {idx}: {count}")


def get_move(player: int, piles: List[int]) -> None:
    """Prompt `player` for a move and apply it to `piles`."""
    while True:
        try:
            choice = int(input(f"Player {player}, choose a pile (1-{len(piles)}): "))
            if choice < 1 or choice > len(piles):
                raise ValueError("Invalid pile number")
            if piles[choice - 1] == 0:
                raise ValueError("Selected pile is empty")
            remove = int(input("How many to remove: "))
            if remove <= 0 or remove > piles[choice - 1]:
                raise ValueError("Invalid remove amount")
            piles[choice - 1] -= remove
            return
        except ValueError as exc:
            print(f"Invalid move: {exc}")


def game_over(piles: List[int]) -> bool:
    """Return True if all piles are empty."""
    return all(n == 0 for n in piles)


def main() -> None:
    """Run the Nim game."""
    piles = get_initial_piles()
    player = 1
    while not game_over(piles):
        display_piles(piles)
        get_move(player, piles)
        if game_over(piles):
            print(f"Player {player} wins!")
            break
        player = 2 if player == 1 else 1


if __name__ == "__main__":
    main()
