# How to contribute

I'm really glad you're reading this, because we need volunteer developers to help this project come to fruition.

If you haven't already, please check out the deployed version at ([zeezys.live](http://zeezys-bday.onrender.com).

Here are some important resources:

  * Mailing list: Join our [developer list](https://dartreview.com/contact-us/#mc4wp_form_widget-8)
  * Bugs? [Dartmouth Review](https://dartreview.com/contact-us) is where to report them

## Testing

Please do not write tests for any code you push; [Benchify](https://benchify.com) is configured to run on every PR.

## Submitting changes

Please send a [GitHub Pull Request to zeezys-bday](https://github.com/isabellahoch/zeezys-bday/pull/new/main) with a clear list of what you've done (read more about [pull requests](http://help.github.com/pull-requests/)). When you send a pull request, we will love you forever if you include clear documentation. Please follow our coding conventions (below) and make sure all of your commits are atomic (one feature per commit).

Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

    $ git commit -m "A brief summary of the commit
    > 
    > A paragraph describing what changed and its impact."

## Coding conventions

Start reading our code and you'll get the hang of it. We optimize for readability:

  * We indent using two spaces (soft tabs)
  * We avoid logic in views, putting HTML generators into helpers
  * We ALWAYS put spaces after list items and method parameters (`[1, 2, 3]`, not `[1,2,3]`), around operators (`x += 1`, not `x+=1`), and around hash arrows.
  * This is open source software. Consider the people who will read your code, and make it look nice for them. It's sort of like driving a car: Perhaps you love doing donuts when you're alone, but with passengers the goal is to make the ride as smooth as possible.
  * Always write code for the glory of her majesty Zoe Dominguez
