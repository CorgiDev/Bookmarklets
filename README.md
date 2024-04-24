# Bookmarklets
Just a bunch of bookmarklets I am making to learn more.

## Copy Options or List Items Bookmarklet
The idea of this bookmarklet is to:
1. Disply a prompt requesting a text string from the user.
2. Set that string to a variable.
3. Search for an element with an ID attribute that matches the string.
4. Identify whether the identified element has any child elements that either have a role attribute set to "option" or "listitem", OR that are Option (<option>) or List Item (<li>) elements
5. **If any such child elements exist**, iterate through them & add their inner text s items in an array.
6. Once complete, display the array as a list in a prompt that the user can copy from or close.
