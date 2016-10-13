# Clipboardjs
Simple way to copy to clipboard with Javascript. 
### How TO
Following an example of how to use.
Let's say that we need to copy to clipboard the content of an ID selector after
we press a button, and we want to achieve this with Jquery.

```html
<script src="clipboard.js"></script>
<script type="text/javascript">
$("#button").click(function(){
    copyToClipboard(id);
    //after this you can paste with CTRL + V
});
//probably in new versions of jQuery - NOT TESTED
$("#button").bind('click',function(){
    copyToClipboard(id);
    //after this you can paste with CTRL + V wherever you need
});
</script>
```

License
----
MIT

**Coding is FuN**


