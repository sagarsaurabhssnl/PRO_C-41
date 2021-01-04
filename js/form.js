class Form {
    constructor() {
        var inputName = "";
        this.input = createInput(inputName, 'text');
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.reset = createButton('Reset OR Reload');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(displayWidth / 2 - 300, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(displayWidth / 2 - 100, displayHeight / 2);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(590, 500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(200, 560);
        this.reset.style('width', '100px');
        this.reset.style('height', '50px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            if (this.input.value() !== "") {
                this.input.hide();
                this.button.hide();
                player.name = this.input.value();
                playerCount += 1;
                player.index = playerCount;
                player.update();
                player.updateCount(playerCount);
                this.greeting.html("Hello " + player.name)
                this.greeting.position(400, 250);
                this.greeting.style('color', 'white');
                this.greeting.style('font-size', '100px');
            } else if (this.input.value() === "") {
                alert("Name cannot be empty");
            }
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            Player.rankUpdate(0);
            window.location.reload(false);
        });

    }
}