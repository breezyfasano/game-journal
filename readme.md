# Game Journal

The purpose of this app is to catalog journal entries respective to each game currently being played.

## Project Notes
- Need React Router
  - Manage going from main library screen to journal entries for a given game
- Need Redux
  - To manage states of games, i.e the state as an array of objects
  ```json
  {
      {
        "title": "Stardew Valley",
        "image": "/imgs/games/stardew-valley.jpg",
        "description": "Description of game here"
      },
      {
        "title": "Persona 5",
        "image": "/imgs/games/persona-5.jpg",
        "description": "Description of game here"
      }
  }
  ```

  ## What I need to find out:
  - How do I manage state as an array of objects (games)?
  - How do I manage the journal entries for each game?
  - How do I implement search functionality?