<!-- prettier-ignore-start -->

Copyright © Written by [Yariv Gilad](https://yarivgilad.com) 
<hr>

### Restate your statements!!
-------------------------------->

1. Create a new `<Books>` component

2. Refactor the `<App>` component
   move anything related to the counting books into the `<Books>` component
   it should have its own state, along with its UI and the updating function.

3. Create similar components to count `customrs` and `employees`.    
   (See the goal solution--screenshot.jpg in the project root)    
   Think 💡 -> instead of creating `<Customers>` and `<Employees>` components with duplicated code, it's better to create a `<Counter>` component and instantiateit to count books, customers, employees or any other data you will add later. Use props to the `<Counter>` component to make it dynamic & generic. <- 💡

   When you're done, the `<App>` component should have no state at all. Instead – it will contain component instances of your choosing where each one of them will manage their own state internally.

### Bonus tasks :)

---
4. Modify the bookstore headline    
   from `_ ^ _ Stateful Bookstore _ ^ _`    
   to `<<<< Stateful Bookstore >>>>`

5. Modify the `<TopBar>` component    
   Make sure we can see its name in _`React-dev-tools`_ tab

               
```
             ,-._
           _.-'  '--.
         .'      _  -`\_
        / .----.`_.'----'
        ;/     `
       /_;

    ._      ._      ._      ._
_.-._)`\_.-._)`\_.-._)`\_.-._)`\_.-._
```

Enjoy yourselves :)    
[Yariv](https://www.linkedin.com/in/yarivgilad/)    

<br>
<!-- prettier-ignore-end -->
