---
layout: home
---

<!-- <div class="home"> -->
<div class="profile__container">
    <div class="profile__content">
        <img class="profile--image" src="./assets/images/me.jpg">
        <a href="https://twitter.com/{{ site.twitter_username }}">
            <span class="icon icon--large">
                <svg class="icon" viewBox="0 0 16 16"><use xmlns:xlink="//www.w3.org/1999/xlink" xlink:href="./assets/images/sprites.svg#twitter"></use></svg>
            </span>
        </a>
        <a href="mailto:{{ site.email }}">
            <span class="icon icon--large">
                <svg class="icon" viewBox="0 0 16 16"><use xmlns:xlink="//www.w3.org/1999/xlink" xlink:href="./assets/images/sprites.svg#email"></use></svg>
            </span>
        </a>
        <a href="https://github.com/{{ site.github_username }}">
            <span class="icon icon--large">
                <svg class="icon" viewBox="0 0 16 16"><use xmlns:xlink="//www.w3.org/1999/xlink" xlink:href="./assets/images/sprites.svg#github"></use></svg>
            </span>
        </a>
    </div>
    <h1 class="text--title text--center">Adam Tew</h1>
</div>

<br />

I'm a programmer. Currently attending Utah State University while doing contract work on the side.

I was born in Salt Lake City, UT but spent most of my teenage years in Reno, NV.

I love to get away from work or school to do my own stuff, which usually includes time with family, coding personal projects, or researching code.
<br />
<br />

  <h1 class="page-heading">Posts</h1>

<div>
     <a href="#allposts">All posts</a>
     {% for category in site.categories %}
         <a href="#{{ category | first | remove:' ' }}"><strong>{{ category | first }}</strong></a> {% if forloop.last %}.{% else %}, {% endif %}
     {% endfor %}
</div>

<div>
 {% for category in site.categories %}
     <div class="catbloc" id="{{ category | first | remove:' ' }}">
         <h2>{{ category | first }}</h2>
         
         <ul>
            {% for posts in category %}
              {% for post in posts %}
                {% if post.url %}
                  <li>
                    <a href="{{ post.url }}">
                      <time>{{ post.date | date: "%-d %B %Y" }}</time>
                     {{ post.title }}
                   </a>
                 </li>
               {% endif %}
             {% endfor %}
           {% endfor %}
        </ul>
    </div>
{% endfor %}
</div>






  <ul id="allposts" class="post-list catbloc">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>
