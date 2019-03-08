# Take a deep dive in the OBA libary

#### Demo

https://denniswegereef.github.io/project-1-1819/src

![](page.png?v=4&s=200)

## Concept

Take a deep dive in the OBA libary, to choose a book to start from. And slowly progressing based on certain keys (for example author, genre, age, publishyear, city) to find a matching book for it.

Than it shows 3 different suggestions based on different parameters with a certain random. Where you can choose there a book from and let you explore the whole OBA libary

Main goals:

- Discover how many items have a relation with each other.
- Just to have fun and explore how many items are there

## Technique

It is using 2 different API endpoints, 1 is the default [https://zoeken.oba.nl/](https://zoeken.oba.nl/) and the other one is the [autocomplete browser](https://autocomplete.aquabrowser.com/v1/oba/search?q=dennis&alpha=0.8&hl=true&p=oba). Both serve a different purpose to find the right content for the job.

Based on the book choosen it generates randomly new books to check out till hopefully a user finds a book that's interests him.

It has a cool recursion loop what triggers everytime with the same logic, kinda cool also headache worthy with only plain javascript :).

## To-do

- [ ] Choose a new book
- [ ] Reset begin book
- [ ] More animations
- [ ] Structure code again
- [ ] Responsive (not enough time :( )
- [ ] Translation
- [ ] Support for different formats other than books
- [ ] More user feedbac
- [ ] Reroll a book?
- [ ] Save your dive
- [ ] Unique screen for a single book to get more information
- [ ] Faster getting content somehow
- [ ] Fixing that glitching fish >:(
