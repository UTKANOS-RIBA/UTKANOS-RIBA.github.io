<svelte:head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello my name is...</title>
    <link rel="stylesheet" href="style_hello.css">
</svelte:head>

<header>
    <div class="container">
        <div class="navig">
            <nav>
                <div class="point-of-nav">
                    <p class="nav-text">About me</p>
                    <p class="nav-text">About me</p>
                    <p class="nav-text">About me</p>
                    <p class="nav-text-main"><a href="#about" style="color: rgb(255, 106, 0)">About me</a></p>
                </div>
                <div class="point-of-nav">
                    <p class="nav-text">My skills</p>
                    <p class="nav-text">My skills</p>
                    <p class="nav-text">My skills</p>
                    <p class="nav-text-main"><a href="#skills" style="color: rgb(255, 106, 0)">My skills</a></p>
                </div>
                <div class="point-of-nav">
                    <p class="nav-text">Contacts</p>
                    <p class="nav-text">Contacts</p>
                    <p class="nav-text">Contacts</p>
                    <p class="nav-text-main"><a href="#contacts" style="color: rgb(255, 106, 0)">Contacts</a></p>
                </div>
            </nav>
        </div>
        <div class="lines">
            <hr class="short">
            <hr class="short">
            <hr class="short">
            <hr class="short">
            <hr class="short">
            <hr class="short">
            <hr class="short">
            <hr class="short">
            <hr class="long">
        </div>
        <div class="box">
            <div class="hello-text">
                <h1 class="hello">Hello!<br>My name is</h1>
                <h1 id="name">Artem</h1>
            </div>
        </div>
    </div>
</header>
<main>
    <div class="container">
        <h1 class="hello" id="hello-orange"><a id="about">And I'm a Front-end developer</a></h1>
        <div class="about-me">
            <p>I am a first year student of Innopolis University<br>
                In my courses I am studying how to make awesome web-sites<br>
                I will be happy to make some web-sites for you</p>
            <p id="free">FOR FREE!!!</p>
        </div>
    </div>
    <div id="main-skills">
        <div class="skills">
            <h1 class="hello" id="my-skills"><a id="skills">My skills</a></h1>
            <div class="list">
                <ul>
                    <li class="skill">HTML</li>
                    <li class="skill">CSS</li>
                    <li class="skill">JavaScript</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="surprise">
        <h2 class="last">I have something for you...</h2>
        <h3 class="last">Press the button below...</h3>
        <button id="smth-button" onclick="window.location.href='comic_page'">Something</button>
    </div>
</main>
<footer id="contacts">
    <a href="https://github.com/UTKANOS-RIBA" id="gh-link"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github logo" width="50"></a>
    <a href="https://t.me/artem_volkonitin" id="tg-link"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt="telegram logo" width="50"></a>
    <a href="mailto:a.volkonitin@innopolis.university" id="email"><img src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png" alt="email" width="50"></a>
</footer>
