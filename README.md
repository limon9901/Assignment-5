Project name is :Dev Stack
This is a Technology stack dashboard where I see how many technologies my add learn skill. 
Technology use:
React.js
Tailwind CSS
TypeScript 
React-Toastify 
JSON (for technology data)
Vite (build tool)

Technology Stack Dashboard project 3 feature
Users can add the technologies they are learning to their stack.
Keep track of the technologies you are learning.
Users can remove any technology from their tech stack at any time.

<!-- questions and Anwser -->
What is JSX, and why is it used in React?
ans:JSX is a syntax that lets us write HTML-like code inside JavaScript. It is used in React to create UI easily.
What is the difference between props and state?
ans:Props are used to pass data from parent to child, while state is used to manage data inside a component.
What does the useState hook do, and where did you use it in this project?
ans:The useState hook is used to create and manage state in a React component. I used it to manage the selected technologies in this project.
What does the useEffect hook do, and why did you need it to load the JSON data?
ans:The useEffect hook is used to run code after rendering. But in this project, I used the use() hook to load the JSON data.
Why does every item in a .map() list need a unique key prop?
ans:Every item needs a unique key so React can identify each item and update the list efficiently.
What is conditional rendering? Show one place you used it (example: the empty stack message).
ans:Conditional rendering means showing different content based on a condition. I used it to show an empty stack message when no technology is selected.
How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
ans:We use props to pass data from parent to child. To send data from child to parent, we keep the state in the parent and pass a function to the child through props. When the child updates it, the parent state is updated.