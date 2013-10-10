KonamiCode
==========

A small Javascript API for sticking a Konami code on your own website. Up Up Down Down Left Right Left Right A B.

### Requirements

The API records user key presses with the JQuery keydown event, so the API requires that you have JQuery included on your site.

### Using the API

Add the file to your website by including it in a script tag:

```html
<script src="konami.js"></script>
```

And you can call the function with your very own callback!

```javascript
konami(function () {
   alert("You have just activated the Konami Code");
});
```