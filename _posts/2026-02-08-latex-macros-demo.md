---
layout: post
title: LaTeX Macros in Blog Posts
date: 2026-02-08 10:00:00
description: Demonstration of using custom LaTeX shortcuts in blog posts
tags: math formatting
categories: sample-posts
mathjax_macros:
  R: "\\mathbb{R}"
  N: "\\mathbb{N}"
  Z: "\\mathbb{Z}"
  C: "\\mathbb{C}"
  norm: ["\\left\\lVert #1 \\right\\rVert", 1]
  abs: ["\\left| #1 \\right|", 1]
  inner: ["\\left\\langle #1, #2 \\right\\rangle", 2]
related_posts: false
---

This post demonstrates how to use custom LaTeX macros (shortcuts) in blog posts. By defining macros in the frontmatter, you can create reusable LaTeX commands that work throughout the entire post.

## How It Works

In the frontmatter of this post, we defined several macros:

```yaml
mathjax_macros:
  R: "\\mathbb{R}"
  N: "\\mathbb{N}"
  Z: "\\mathbb{Z}"
  C: "\\mathbb{C}"
  norm: ["\\left\\lVert #1 \\right\\rVert", 1]
  abs: ["\\left| #1 \\right|", 1]
  inner: ["\\left\\langle #1, #2 \\right\\rangle", 2]
```

## Simple Macros

Now we can use these shortcuts throughout the post! For example:

- The set of real numbers: $\R$
- The set of natural numbers: $\N$
- The set of integers: $\Z$
- The set of complex numbers: $\C$

We can use them in display mode as well:

$$
f: \R \to \R
$$

$$
\text{Let } x \in \R^n \text{ where } n \in \N
$$

## Macros with Arguments

We also defined macros that take arguments:

- Norm: $\norm{x}$ instead of writing `\left\lVert x \right\rVert`
- Absolute value: $\abs{x}$ instead of `\left| x \right|`
- Inner product: $\inner{x}{y}$ instead of `\left\langle x, y \right\rangle`

Here's a more complex example combining multiple macros:

$$
\norm{x + y} \leq \norm{x} + \norm{y} \quad \forall x, y \in \R^n
$$

$$
\abs{\inner{x}{y}} \leq \norm{x} \cdot \norm{y}
$$

## Benefits

Using LaTeX macros provides several advantages:

1. **Consistency**: Ensures uniform notation throughout your post
2. **Readability**: Makes your LaTeX source code much easier to read and write
3. **Maintainability**: If you need to change notation, you only update the macro definition
4. **Efficiency**: Less typing for commonly used expressions

## Syntax Reference

### Simple Macros

For simple text replacements:

```yaml
macroName: "LaTeX code"
```

Example: `R: "\\mathbb{R}"` creates a `\R` macro that expands to `\mathbb{R}`.

**Important**: You must escape backslashes in YAML, so use `\\` instead of `\`.

### Macros with Arguments

For macros that take arguments:

```yaml
macroName: ["LaTeX code with #1, #2, etc.", number_of_args]
```

Example: `norm: ["\\left\\lVert #1 \\right\\rVert", 1]` creates a `\norm{x}` macro where `#1` is replaced by the argument.

For multiple arguments:
```yaml
inner: ["\\left\\langle #1, #2 \\right\\rangle", 2]
```

This creates `\inner{x}{y}` where `#1` is `x` and `#2` is `y`.

## Advanced Example

Here's a more sophisticated use case - defining a probability macro:

```yaml
mathjax_macros:
  Pr: "\\mathbb{P}"
  E: "\\mathbb{E}"
  Var: "\\text{Var}"
  Cov: "\\text{Cov}"
```

Then you could write:

$$
\Var(X) = \E[X^2] - (\E[X])^2
$$

## Try It Yourself!

To use LaTeX macros in your own blog posts:

1. Add a `mathjax_macros:` section in your post's frontmatter
2. Define your macros using the syntax shown above
3. Use them anywhere in your post with `$\macroName$` or `$$\macroName$$`

The macros are scoped to each individual post, so different posts can have different macro definitions without conflicts.
