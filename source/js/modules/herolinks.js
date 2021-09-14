window.addEventListener('load', function() {



    let menu = document.querySelectorAll('.hero__links');
    for (let i = 0; i < menu.length; i++) {
        // МЕню в лукбуке
        (function() {
            const target = menu[i].querySelector(".target");
            const links = menu[i].querySelectorAll(".hero__links-item");

            window.addEventListener("load", function() {
                for (let i = 0; i < links.length; i++) {
                    if (links[i].classList.contains('current')) {

                        const width = links[i].getBoundingClientRect().width;
                        // const height = links[i].getBoundingClientRect().height;
                        const left = links[i].getBoundingClientRect().left + window.pageXOffset;


                        target.style.width = `${width}px`;
                        // target.style.height = `${height}px`;
                        target.style.left = `${left}px`;

                        target.style.transform = "none";
                        target.style.opacity = '1';
                    }
                }
            })

            function mouseenterFunc() {
                if (!this.classList.contains("active")) {

                    for (let i = 0; i < links.length; i++) {
                        if (links[i].classList.contains("active")) {
                            links[i].classList.remove("active");
                        }

                        // links[i].style.opacity = "0.25";
                    }

                    this.classList.add("active");

                    // this.style.opacity = "1";

                    const width = this.getBoundingClientRect().width;
                    // const height = this.getBoundingClientRect().height;
                    const left = this.getBoundingClientRect().left + window.pageXOffset;


                    target.style.width = `${width}px`;
                    // target.style.height = `${height}px`;
                    target.style.left = `${left}px`;

                    target.style.transform = "none";
                    target.style.opacity = '1';
                } else {
                    target.style.opacity = '1';
                }
            }

            function mouseleaveFunc() {
                let currentFlag = false;

                for (let i = 0; i < links.length; i++) {

                    if (links[i].classList.contains('current')) {

                        currentFlag = true;

                    }
                }
                if (currentFlag) {
                    let current = menu[i].querySelector(".hero__links-item.current");
                    const width = current.getBoundingClientRect().width;
                    // const height = current.getBoundingClientRect().height;
                    const left = current.getBoundingClientRect().left + window.pageXOffset;


                    target.style.width = `${width}px`;
                    // target.style.height = `${height}px`;
                    target.style.left = `${left}px`;

                    target.style.transform = "none";
                    target.style.opacity = '1';
                } else {

                    // target.style.left = `0px`;

                    // target.style.transform = "translateX(-100%)";
                    target.style.opacity = '0';

                }

            }

            for (let i = 0; i < links.length; i++) {

                links[i].addEventListener("mouseenter", mouseenterFunc);
            }
            let container = menu[i];
            if (container) {
                container.addEventListener("mouseleave", mouseleaveFunc);
            }



            function resizeFunc() {
                const active = document.querySelector(".hero__links-item.current");

                if (active) {
                    console.log('update')
                    const width = active.getBoundingClientRect().width;
                    // const height = active.getBoundingClientRect().height;
                    const left = active.getBoundingClientRect().left + window.pageXOffset;
                    // const top = active.getBoundingClientRect().top + window.pageYOffset + 6;

                    target.style.width = `${width}px`;
                    // target.style.height = `${height}px`;
                    target.style.left = `${left}px`;
                    // target.style.top = `${top}px`;

                }
            }

            window.addEventListener("resize", resizeFunc);

        })();
    }



    let menu2 = document.querySelectorAll('.header__nav-bottom');
    for (let i = 0; i < menu2.length; i++) {
        // МЕню в лукбуке
        (function() {
            const target = menu2[i].querySelector(".target");
            const links = menu2[i].querySelectorAll(".header__nav-bottom li");

            window.addEventListener("load", function() {
                for (let i = 0; i < links.length; i++) {
                    if (links[i].classList.contains('current')) {

                        console.log('Есть текущая ссылка + ' + links[i])
                        const width = links[i].getBoundingClientRect().width;
                        // const height = links[i].getBoundingClientRect().height;
                        const left = links[i].getBoundingClientRect().left + window.pageXOffset;


                        target.style.width = `${width}px`;
                        // target.style.height = `${height}px`;
                        target.style.left = `${left}px`;

                        target.style.transform = "none";
                        target.style.opacity = '1';
                    }
                }
            })


            function mouseenterFunc() {
                if (!this.classList.contains("active")) {

                    for (let i = 0; i < links.length; i++) {
                        if (links[i].classList.contains("active")) {
                            links[i].classList.remove("active");
                        }

                        // links[i].style.opacity = "0.25";
                    }

                    this.classList.add("active");

                    // this.style.opacity = "1";

                    const width = this.getBoundingClientRect().width;
                    // const height = this.getBoundingClientRect().height;
                    const left = this.getBoundingClientRect().left + window.pageXOffset;


                    target.style.width = `${width}px`;
                    // target.style.height = `${height}px`;
                    target.style.left = `${left}px`;

                    target.style.transform = "none";
                    target.style.opacity = '1';
                } else {
                    target.style.opacity = '1';
                }
            }

            function mouseleaveFunc() {
                let currentFlag = false;

                for (let i = 0; i < links.length; i++) {

                    if (links[i].classList.contains('current')) {

                        currentFlag = true;

                    }
                }
                if (currentFlag) {
                    let current = menu2[i].querySelector(".header__nav-bottom li.current");
                    const width = current.getBoundingClientRect().width;
                    // const height = current.getBoundingClientRect().height;
                    const left = current.getBoundingClientRect().left + window.pageXOffset;


                    target.style.width = `${width}px`;
                    // target.style.height = `${height}px`;
                    target.style.left = `${left}px`;

                    target.style.transform = "none";
                    target.style.opacity = '1';
                } else {

                    // target.style.left = `0px`;

                    // target.style.transform = "translateX(-100%)";
                    target.style.opacity = '0';

                }

            }

            for (let i = 0; i < links.length; i++) {

                links[i].addEventListener("mouseenter", mouseenterFunc);
            }
            let container = menu2[i];
            if (container) {
                container.addEventListener("mouseleave", mouseleaveFunc);
            }



            function resizeFunc() {
                const active = document.querySelector(".header__nav-bottom li.current");

                if (active) {
                    const width = active.getBoundingClientRect().width;
                    // const height = active.getBoundingClientRect().height;
                    const left = active.getBoundingClientRect().left + window.pageXOffset;
                    // const top = active.getBoundingClientRect().top + window.pageYOffset + 6;

                    target.style.width = `${width}px`;
                    // target.style.height = `${height}px`;
                    target.style.left = `${left}px`;
                    // target.style.top = `${top}px`;

                }
            }

            window.addEventListener("resize", resizeFunc);

        })();
    }

})