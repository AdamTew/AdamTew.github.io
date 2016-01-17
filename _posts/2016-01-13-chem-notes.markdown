---
layout: post
title: USU - MATH 1210 - In Class Notes
category: math1210
---

_notes_

- still no syllabus
- published on canvas
- quiz next wednesday (January 20th)
- homework due the week after next

> "We have more minute"

## 2.1 Rates of Change & tangent tocurves:

- average rate of change
- instantaneous rate of change

__Example:__ a barrel of maple syrup is trapped at $$t = 0$$. The total amount of $$f(t)$$ of syrup poured out at time $$t$$

$$\frac{t(min)}{f(t)gal.}$$

~~~

t     2       4      6
--------------------
f(t) 35.83  54.03  68.11
        `-------`
            |   `-------`
            |       `14.08/2 = 7.70
            `18.2/2 = 7.90 gal/min
~~~

~~~

t     3.8       4      4.2
--------------------
f(t) 35.83  54.03  68.11
        `-------`
            |   `-------`
            |       `14.08/2 = 7.8 
            `18.2/2 = 7.8 gal/min
~~~

~~~

t     3.98       4      4.02
--------------------
f(t) 35.83     54.03    68.11
        `-------`
            |   `--------`
            |       `14.08/2 = 7.04 
            `18.2/2 = 9.10 gal/min
~~~

time interval is $$\delta t$$

when $$\delta t \rightarrow 0$$

average rate of change $$\rightarrow$$ instantaeneous

> The slope of a secant line is the average rate of change (change in y over change in x)

> average rate of change = slope of secant line = $$\frac{f(x_2)-f(x_1)}{x_2-x_1} = \frac{\delta y}{\delta x}$$

- $$\delta x = h$$

> Instanteneous rate of change = slope of tangent line

1. $$\frac{\delta y}{\deltax} = \frac{f(x_1 + h) - f(x_1)}{h}$$
2. slope of tangent is limit
    + lim $$h \rightarrow 0$$
    + $$\frac{f(x_1 + h) - f(x_1)}{h}$$
