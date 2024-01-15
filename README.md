# Quiz Web App

Live: [https://quizsaga.netlify.app](https://quizsaga.netlify.app)

## About the Project

This project is a time-dependent quiz web application with a duration of 30 minutes, consisting of a total of 15 questions. Questions are fetched through the Open Trivia Database API [link to API](https://opentdb.com/api.php?amount=15). The app provides a result page after submission or completion of the time, allowing users to review both correct and incorrect answers. Additionally, a side panel displays a grid marking each question as visited, attempted, or under review.

## Approach

To ensure a smooth user experience, the project follows the following key approaches:

1. **Data Fetching:**
   - Questions are fetched from the Open Trivia Database API.
   - The correct and incorrect answers are initially stored in separate arrays, then concatenated and shuffled to provide a randomized set of options.

2. **User Interaction:**
   - User-selected options are tracked using the `allSelectedOptions` array, organized by question index.
   - Upon submission, the application calculates the percentage and displays both correct and incorrect answers on the result page.

## Tech Stack

The quiz web app is built using the following technologies:

- **ReactJS**
- **Tailwind CSS**
- **Redux**

