# Dev Stack

Developer name : Rumi Parvez
Published time : 11/9/2026
Age : 17

Description : My name is Rumi Parvez , i am student at Programming hero . i am student on B-14. it's an Assignment Project on the Course time.

## Project Name is : Dev Stack

Description : This is an technology exploral site the had created by the Rumi Parvez and used React , tailwindcss, typescript, daisyUI , Json, react tostyfy,html,css,javascript,vite,etc....technologys. we had follow a Responsive ui for create it and also now it's an 2 device responsive 1.desktop, 2.mobile device .

## Site Links : 
1. Netlify : https://dev-stack-rumiparvez-a5-ph-b-14.netlify.app/
2. Vercel : https://dev-stack-kappa.vercel.app/
3. MY own Host : https://dev-stack.openyhool.com/

## The key functionalitis on this site :

header stiky, technology details card , an function that can save your stack in sider an div on , each selection site will notify as like tostify, also in single deletion and remove all there will get an tostify toast. also thsi site know you whats you had added in your stack so that's you can get warning message for readding time the same card.

## Getting data :

For geting data we had used json and we follow this stracture for json data for each card :

```json
[
  {
    "id": "react",
    "name": "React",
    "category": "Frontend",
    "description": "A declarative, component-based JavaScript library for building modern user interfaces.",
    "icon": "https://icon.icepanel.io/Technology/svg/React.svg",
    "rating": 4.9,
    "difficulty": "Beginner-Friendly",
    "badge": "Popular"
  },
  {
    "id": "postgresql",
    "name": "PostgreSQL",
    "category": "Database",
    "description": "A powerful, open-source object-relational database system with proven reliability.",
    "icon": "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
    "rating": 4.9,
    "difficulty": "Intermediate",
    "badge": "Top SQL"
  }
]
```

## ALL the Question Answare for Assignment -5 b-14 PH :

### 1. What is JSX, and why is it used in React?

Ans: JSX is an as like Javascript + xml mixed syntax that's trough we can write code in react and react code support html + jsvascript so using JSX we cna use HTML code directly in our js/ts both in react app. so that's way creating UI using react we need to use this JSX/TSX code syntax.

### 2. What is the difference between props and state?

Ans: Props is a way for data transfer fromt parent component to child component. On the otehr hand State is Current component managed data trough the changing value The UI will also changed.

### 3. What does the `useState` hook do, and where did you use it in this project?

Ans: useState is a hook that can save the componets data also the fast react and update in UI.In this Dev Stack Project i had used it for  count the Stack added number. Also i used it for remember which stack added nor deleted.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

Ans: useEffect is a React hook. it's use for manage the side effect outer the componet also it's used for data loading from json data in local file or API link trough.Alltough we have alternative for fetching from json or outer json API. But main use is for data fetch and load.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

Ans: A unique key props is a serial number for each single itmes in .map for react . that's trough react can find the updated itmes and can live upadte for changed items also fast rendaring for it's used in .map .

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Ans: Conditional rendaring is true, false finder and acordign to the true false i mean the condition it can live react and update in UI. it's most common usefull for react for making functional site. in this Dev Stack project i had used it on so many times like --- for button, stack side ui, and for added or non added card for etc times i had used in this project.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Ans: We use props for sending data from parent component to child component. Actually we can directly send data from parent component. But from child component to parent component we can't send directly. if we need data for parent from child component we need to define atfrist in parent component then trough the function props we send it on child component .
