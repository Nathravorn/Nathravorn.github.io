---
layout: post
title: "How to Link Between Blog Posts"
date: 2026-02-16
description: A demonstration of using Jekyll's post_url and link tags to create internal links
tags: jekyll tutorial
categories: tutorial
related_posts: false
toc:
  sidebar: right
---

## Introduction

This post demonstrates how to link to other blog posts and pages on your al-folio site without hardcoding URLs.

## Linking to Other Blog Posts

You can easily reference other blog posts using Jekyll's `post_url` tag. For example, in my previous post about the [Value-Weighted Transform]({% post_url 2026-02-08-vwt %}), I discussed the inspection paradox and how it relates to probability distributions.

The syntax is simple:

```markdown
[Link text]({% post_url YYYY-MM-DD-post-filename %})
```

**Key benefits:**

- No need to know the exact URL
- Jekyll validates the link at build time (you'll get an error if the post doesn't exist)
- Works even if you change your permalink structure
- Automatically generates the correct URL

## Linking to Other Pages

You can also link to other pages using the `link` tag:

```markdown
[About me]({% link _pages/about.md %})
```

This works for:

- Static pages in `_pages/`
- Project pages in `_projects/`
- Any other file in your site

## Why Not Hardcode URLs?

You might be tempted to write something like:

```markdown
[My post](/blog/2026/vwt/)
```

**Don't do this!** Here's why:

- URLs might change if you modify your permalink structure
- No validation - broken links won't cause build errors
- Harder to maintain as your site grows

## Best Practices

1. **For blog posts:** Use `{% post_url YYYY-MM-DD-filename %}` (no `.md` extension)
2. **For other pages:** Use `{% link path/to/file.md %}` (include `.md` extension)
3. **Always test locally** before deploying to ensure all links work

## Summary

Using Jekyll's built-in tags for internal linking makes your site more maintainable and catches broken links early. It's a small change that saves a lot of headaches down the road!

For more detailed information, check the [CUSTOMIZE.md](https://github.com/Nathravorn/Nathravorn.github.io/blob/main/CUSTOMIZE.md) documentation.
