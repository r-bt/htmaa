<script>
  import Avatar from "/src/components/Avatar.svelte";
  import Info from '/src/components//Info.svelte';
  import Warning from '/src/components/Warning.svelte';
  import Future from '/src/components/Future.svelte';
</script>

<Avatar />

<div class="container">
  <div class="sidebar">
    <img alt="Richard Beattie" src="bio.jpg" />
  </div>
  <div class="content">
    <h2>How to Make Almost Anything</h2>
    <p>Hi, I'm Richard. I'm a sophomore studying 6-2 (computer science and electrical engineering) at MIT. I love building things, my background is primarly software focused but since coming to MIT I've been exploring making physical things. I've spent this semester basically living out of Metropolis one of the MIT makerspaces and am always trying to learn new making skills</p>
    <!-- <p>Some past projects which may be interesting:</p>
    <ul>
      <li><a href="http://web.mit.edu/2.00b/www/portfolios/student_portfolio.html?s=rbeattie&a=toober">2.00b Music Toober</a></li>
      <li><a href="https://prepsheets.com">Prepsheets.com - A webapp for my parent's cafés</a></li>
      <li>An attempt at a giant pinball machine</li>
      <li>2.00b Mayhem ball game – Think fetch but for kids instead of dogs</li>
    </ul> -->
    <ul>
      <li>
        <a href="./final-project">Final Project</a>
      </li>
      <li>
        <a href="./week1">Week 01 | Computer Aided Design</a>
      </li>
      <li>
        <a href="./week2">Week 02 | Computer Controlled Cutting</a>
      </li>
      <li>
        <a href="./week3">Week 03 | Electronics production</a>
      </li>
      <li>
        <a href="./week4">Week 04 | 3D Printing and scanning</a>
      </li>
      <li>
        <a href="./week5">Week 05 | Electronics Design</a>
      </li>
      <li>
        <a href="./week6">Week 06 | Computer Controlled Machining</a>
      </li>
      <li>
        <a href="./week7">Week 07 | Embded Programming</a>
      </li>
      <li>
        <a href="./week8">Week 08 | Molding and Casting</a>
      </li>
      <li>
        <a href="./week9">Week 09 | Input devices</a>
      </li>
      <li>
        <a href="./week10">Week 10 | Output devices</a>
      </li>
      <li>
        <a href="./week11">Week 11 | Networking and Communication</a>
      </li>
      <li>
        <a href="./week12">Week 12 | Application programming</a>
      </li>
      <li>
        <a href="./week13">Week 13 | Machine Building</a>
      </li>
      <li>
        <a href="./week14">Week 13 | Wildcard Week</a>
      </li>
    </ul>

    There's way too much cool things to do everything in one week so I have a <a href="./to-come-back-to">list</a> of things I want to do in the future.
    
    <h3>What's with the colored boxes?</h3>
    
    <div id="color-explanation">
      <Info>
        <b>Info:</b> For general info I think is important
      </Info>
      <Warning>
        <b>Warning:</b> For warnings, dangerous things I did, or when I'm calling out mistakes I made
      </Warning>
      <Future>
        <b>Orange:</b> For when I go back to old writings with new knowledge / updates / etc. It's always future Richard talking in these
      </Future>
    </div>
  </div>
</div>


<style>
  div.container {
      padding: 4rem;
      display: flex;
  }
  div.sidebar {
      flex: 1;
  }

  div.sidebar > img {
    width: 100%;
  }

  div.content {
    flex: 4 0 0;
    padding: 0 2rem;
  }

  div.content > h2 {
    margin-top: 0;
   }

   div#color-explanation {
    max-width: 600px;
   }
</style>
