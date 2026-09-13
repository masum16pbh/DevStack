# Dev Stack

The Dev Stack is a technology geathring whear one can select one or more technologies based on his/her requirements. Each technology card contain that technology logo, using space, short description and difficultly to get a visual identificatin and overall idea. One can select and de-select the items as he/she want. He/Her selected technologies are shown in a stack on right side in Desktop and butom in Mobile.

## Technologies
- React
- TypeScript
- Vite
- Tailwind CSS
- React Icons
- React Toast
- JavaScript / JSX
- HTML5
- CSS
- JSON — for technology data
- Git & GitHub — for version control
- Netlify -for deploy in web

## Featues
- Scrollable side bar for selected items stack 
- Can not select one item multiple time
- Show toast for add and delete items

## How to you use
copy the rep  
cd DevStack  
npm run dev  

  
or
[DevStack](https://buildyourideas.netlify.app/) to use the app from web  




## Question and Answer
1. What is JSX, and why is it used in React?
Ans : JSX is a syntex where we can write Html and css like code inside JavaScript or TypoScript
2. What is the difference between props and state?
Ans : Props carry data from coponent to component, stete menage data inside component and change over time
3. What does the `useState` hook do, and where did you use it in this project?
Ans : `useState` give a variable to hold data and a function to set data in this variable. Saveral time I used it in my project.
  6. What does the `useEffect` hook do, and why did you need it to load the JSON data?
Ans : To menage outside effect of the continear. No, I don't  it to load JSON data.
  7. Why does every item in a `.map()` list need a unique `key` prop?
Ans : Yes
  9. What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans : The html and css will change based on condition. I use it in `add item to stack` button, `remove` button, `Remove all` button
  11. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans : Data flow from patent to child through `props ` . Normally child can not send data to parents to solve this declered a state in top or its parents and modify it in chide component. Thus communicaton complite , It has a name called `state UP`

## Md Masum Billah
keahabpur, Jashore

