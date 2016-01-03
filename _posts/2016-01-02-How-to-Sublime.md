---
title: How To Sublime
layout: post
---

# How to sublime

Sublime is awesome. As a text editor. When trying to debug code, I generally tend to use an IDE with break points (anything IntelliJ, CLion, PyCharm, etc). However, when it comes to just editing text, I haven't found anything that can rival Sublime (note, I haven't tried [Atom](https://atom.io/) yet, but it feels like it was built with a lot of the same ideas in mind).

# 1 Multiple Cursors

I cannot express how useful multiple cursors is. When altering multiple instances of the same (or similar) content, this comes in quite handy. just highlight some text and hit __⌘ + d__. Sublime will select the next instance of the given text with a new cursor. This can be repeated until there are no instances on the page. Often times I'll use this approach as a quick search for additional references to a given variable, changing things like single quotes `'` to double quotes `"`, parethesis `(` to braces `{`, or underscores `_` ro dashes `-`.

Another method is with searching. You can toggle the search bar (⌘ + f), type in a search term, and hit find all (option + r). This will instantly grab all of the instances of a given term and create cursors. I generally use this when I want to delete every instance of a term, or modify it slightly.

The third method, that I've started using more recently is with ⌘ + shift + l. It will take all of the highlighted text and break every line into its own cursor. I generally use this when I don't have a common reference point. Say you want to put tags around 20 different pieces of text. Because text is very similar, there's not really anything to ⌘ + d or search. So, I'll just highlight the whole block of variables, hit ⌘ + shift + l, and away we go.

Pretty nifty.

# 2 vim integration

Even though PyCharm, CLion, and Visual Studio have their perks, I've never found anything with as good vim integration as sublime. All you need to do to enable it is change `vintage mode` in the user preference to enabled, and then away you go.

Once vintage mode is enabled, you get a command mode (entered via `esc`) where you can run most of the traditional vi(m) commands

### basic navigation

- `h` `j` `k` `l`

### Insertion

- `a` and `⇧ a` 
- `i` and `⇧i` 
- `⇧ o` and `o`

### Jumping around the page

- `⇧ h` `⇧ m` `⇧ l`

### advanced navigation

- `e` `f` `b`
- `$` `^`

### highlighting / copying

- `v` `y` `d` `p`

# 3 plugins for everything

Need syntax highlighting for... Any language? Gotcha covered - `⇧⌘p` brings up a list of things you can do. 

# 4 Projects

Project are extremely useful if you have, well, lots of projects that you're working on. I do a lot of contract work / school / personal fun projects, so it's good for me.

The way it works:

Project > add folder to project

# 5 ⌘ + p (ctrl + p)

This one is at the bottom of the list because I don't use it that often. I know lots of people that do, but I have this weird mental thing about knowing where every file is (I tend to use it a lot more on bigger projects where I don't want to navigate through piles of directories)



