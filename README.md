## Common Questions & My Answers

### 1. Difference between getElementById, getElementsByClassName, and querySelector?
Ans =
Basically, they all help us to find elements from HTML, but they work differently:
getElementById: It's very specific and fast. It only finds one element because IDs must be unique in a page.
getElementsByClassName: This one returns a collection of all elements that has the same class name. You can't use it directly like a single element; you might need a loop.
querySelector: This is very powerful. You can use any CSS selector (like .class or #id or div > p). It only returns the first match it finds.
querySelectorAll: Same as querySelector, but it gives you a list of all matching elements.

### 2. How to create and insert a new element into the DOM?
Ans =
To add a new element, I usually follow these 3 steps:
1. Create: First, use document.createElement('div') (or any tag).
2. Set Content: Then, add some text or HTML using .innerText or .innerHTML.
3. Insert: Finally, find a parent element and use .appendChild() to put the new element inside it.

### 3. What is Event Bubbling?
Ans =
Event Bubbling is a way how events move. When you click an element (like a button), the click event doesn't just stop there. It "bubbles up" to its parent, then the grandparent, and goes all the way up to the window object. 

### 4. What is Event Delegation?
Ans =

This is a very cool technique. Instead of adding an event listener to many child elements, we add only one listener to their common Parent. 
### Why it's useful:
Ans =
It saves memory.
If we add new items to the list later, we don't need to add new listeners. The parent will handle it automatically using event.target.

### 5. Difference between preventDefault() and stopPropagation() methods?
Ans =
preventDefault(): This stops the browser's default action. For example, it stops a link from going to another page or a form from refreshing.
stopPropagation(): This stops the Event Bubbling. It tells the event not to go up to the parent elements.