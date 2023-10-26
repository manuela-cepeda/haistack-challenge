# Haistack Frontend Challenge

Coding challenge presented to candidates interviewing for a role at [Haistack.AI](https://www.linkedin.com/company/haistack/).

_#findyourneedle_

# Challenge Description

You need to create a simple CRUD application for managing a list of items. The application should use React, TypeScript, React Router, Prettier for code formatting, the Material-UI library for components, Redux for state management, and fake API calls to return static data. Additionally, create a custom Material-UI component and organize it into a separate folder.

Requirements:
1. Create a new React project using the Create React App or a similar tool.

2. Implement a navigation system using React Router. The application should have the following routes:

- / (Home page): Display a list of items.
- /add: Display a form for adding a new item.
- /edit/:id Display a form for editing an existing item. The :id parameter should correspond to the item's unique identifier.

3. Implement a data model for the items. Each item should have the following properties:

- id (unique identifier)
- name (string)
- description (string)

4. Set up Redux for state management in your project. Create reducers and actions for managing the list of items.

5. Simulate API calls using asynchronous JavaScript functions to fetch and manipulate data. Create functions to simulate the following API calls:

- getItems: Simulate fetching a list of items from a server. Use a delay to mimic a network request.
- addItem(item): Simulate adding a new item to the server.
- updateItem(item): Simulate updating an existing item on the server.
- deleteItem(id): Simulate deleting an item from the server.

6. On the Home page (/), use the getItems API call to fetch and display the list of items. Manage the list of items in your Redux store.

7. On the Home page, provide buttons or links for each item to edit or delete it. Clicking the "Edit" button should navigate to the edit page (/edit/:id), and clicking the "Delete" button should remove the item using the deleteItem API call and update the Redux store.

8. On the Add page (/add), provide a form for users to add a new item. Upon form submission, use the addItem API call to add the new item to the server and update the Redux store.

9. On the Edit page (/edit/:id), use the updateItem API call to edit an existing item. After saving the changes, use Redux to update the item in the store and redirect users back to the Home page.

10. Use TypeScript for type checking and ensure that the item properties are properly typed.

11. Apply Prettier for code formatting to maintain a consistent code style throughout the project.

12. Style the application using CSS or a CSS framework of your choice to make it visually appealing.

13. Use Material-UI components to enhance the user interface. You can use Material-UI components for buttons, forms, and any other UI elements you find suitable.

14. Create a custom Material-UI component and organize it into a separate folder within the project. This component should be related to the CRUD functionality and enhance the application's user interface.

15. Commit your changes with meaningful messages and push them to the repository.

16. Create a Pull Request (PR) to submit your work. In the PR description, provide details about your implementation, including any challenges you faced and how you addressed them.

17. Make multiple commits to your branch to show your progress. This will be greatly appreciated in the evaluation.

18. Provide clear instructions on how to run the project, including any required dependencies and setup steps.

# Nice-to-have items that would add some extra to the challenge

Code Organization: Maintain a clean and organized project structure with a clear separation of concerns, grouping related components and files together.

Consistent Naming: Use consistent and meaningful variable and function names. Follow a naming convention, such as camelCase or PascalCase, and avoid abbreviations that aren't immediately obvious.

Modular Components: Break down your application into smaller, reusable components that encapsulate specific functionality. This promotes code reusability and maintainability.

DRY (Don't Repeat Yourself): Avoid code duplication. If you find yourself repeating similar logic in multiple places, refactor it into a reusable function or component.

Error Handling: Implement proper error handling to gracefully handle unexpected situations. Use try-catch blocks where appropriate and provide informative error messages.

Linter and Formatter: Use a linter (e.g., ESLint) and code formatting (e.g., Prettier) to ensure consistent code style and catch potential issues.

Code Comments and Commit Messages: Write clear and meaningful commit messages for your Git commits, and include comments in your code when necessary to explain your thought process.

Unit Tests: If you have experience with testing, consider writing unit tests for critical components or functions. Well-tested code is a sign of quality.

Responsive Design: Make sure your application is responsive and looks good on various screen sizes, including mobile devices and larger screens.

Redux Best Practices: Follow best practices when working with Redux, such as using selectors for accessing state and keeping actions and reducers structured.

Clean Git History: Keep your Git commit history clean by squashing or reordering commits if necessary to present a well-structured history.

Search and Filter Functionality: Implement a search bar and filtering options on the Home page to allow users to search for items or filter items based on specific criteria. For example, users could search by item name or apply filters to narrow down the list based on specific attributes.

Pagination with Material-UI Table: If you are using Material-UI Table, demonstrate the correct usage of pagination features provided by Material-UI Table for large data sets. Allow users to navigate through different pages of items.

Sorting with Material-UI Table: Utilize Material-UI Table's built-in sorting capabilities to enable users to sort the table columns in ascending or descending order. This can improve data organization and user experience.

Custom Table Columns: Allow users to customize which columns are displayed in the Material-UI Table. Provide options for users to show or hide specific columns based on their preferences.

Table Header Styling: Pay attention to styling and enhancing the table header in Material-UI Table to make it clear which columns are sortable, and use appropriate icons or indicators for sorting order.
