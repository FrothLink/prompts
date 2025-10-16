document.addEventListener('DOMContentLoaded', function() {
    const output = document.querySelector('.output');

    //putting this out here so it can be set in multiple functions
    let response = '';
    let typeSpeed = 0;

    const genre = ["sci-fi", "fantasy"]
    const Scharacter = ["mechanic", "shapeshifter", "pilot", "robot", "pirate", "bounty hunter", "merchant", "crafts(wo)man", "factory worker", "service worker", "mech pilot", "storyteller", "artist", "writer", "filmmaker", "scientist", "student", "musician", "detective"]
    const Fcharacter = ["wizard", "dragon", "shapeshifter", "cook", "peasant", "ruler", "pirate", "merchant", "crafts(wo)man", "storyteller", "magical creature", "aristocrat", "knight", "soldier", "scholar", "spy", "performer", "sailor", "witch", "messenger", "explorer", "bandit", "farmer"]
    const Splaces = ["on a space station", "in a city", "near a black hole", "on a colony ship", "in a remote area", "in a cafe", "in a library", "in a prison", "in a market", "in an enormous trash heap", "in a strange shop", "on an unexplored planet", "at a spaceport", "in a small town", "in a barren wasteland"]
    const Fplaces = ["in a city", "beneath a mountain", "in a forest", "in a dungeon", "far out in the wilderness", "on an ocean", "beneath an ocean", "in a prison", "in a beast's lair", "on a battlefield", "in a strange shop", "in a tavern", "in a castle", "at a port", "in a small town", "journeying in a caravan", "on top of a mountain", "in a cave"]
    //Modifiers
    const Charmod = ["greedy", "tired", "hungry", "lost", "frustrated", "angry", "depressed", "stressed", "scared", "anxious", "overwhelmed", "hunted", "haunted", "excited", "daydreaming", "explosive", "stranded", "betrayed", "forgotten", "caring", "ignorant", "aloof", "foolish", "badly injured"]
    const SPmod = ["that has seen better days", "overrun by killer robots", "where it has begun to rain", "enduring a power outage", "about to explode", "filled with soft music", "with a comforting atmosphere", "under occupation by the new galactic empire", "under siege", "full of rats", "that is strangely damp", "that hasn't been cleaned properly in years"]
    const FPmod = ["full of rats", "so dilapidated it's barely recognizeable", "under a mysterious spell", "under the rule of an evil wizard", "filled with soft music", "covered by a dense blanket of fog", "covered in snow", "on fire", "warped by an unknown darkness", "piled high with refuse", "dusted with sand"]

    //"randomize" based on the day
    const today = new Date()
    let dayNum = (today.getFullYear() + (today.getMonth() + 1) + today.getDate() + (today.getDay() + 1))
    let genreRan = genre[(today.getFullYear() + (today.getMonth() + 1) + today.getDate() * (today.getDay() + 1)) % genre.length]
    let ScharRan = Scharacter[dayNum % Scharacter.length]
    let FcharRan = Fcharacter[dayNum % Fcharacter.length]
    let SplaceRan = Splaces[dayNum % Splaces.length]
    let FPlaceRan = Fplaces[dayNum % Fplaces.length]
    let CharModRan = Charmod[dayNum % Charmod.length]
    let SPmodRan = SPmod[dayNum % SPmod.length]
    let FPmodRan = FPmod[dayNum % FPmod.length]


    function makeElement() {
        // Create a new div element for the response
        const responseOutput = document.createElement('div');
        responseOutput.classList.add('response-line');
        output.appendChild(responseOutput); // Append response to output
        animateTypeOut(responseOutput, response); // Trigger typing animation for response
    }

    function makeBlank(){
        response = " "
        makeElement()
    }

    function animateTypeOut(element, text) {
        element.innerHTML = ''; // Clear existing text
        let i = 0;

        function type() {
            if (i < text.length) {
                let currentChar = text.charAt(i);
                if (currentChar === '<') {
                    const endTagIndex = text.indexOf('>', i);
                    if (endTagIndex !== -1) {
                        element.innerHTML += text.substring(i, endTagIndex + 1);
                        i = endTagIndex + 1;
                    }
                } else {
                    element.innerHTML += currentChar;
                    i++;
                }
                setTimeout(type, typeSpeed);//adjust typing speed here
            }
        }

        type();
    }

    function Prompt()
    {
        if(genreRan == "sci-fi"){
                response = "A " + genreRan + " story about a " + CharModRan + " " + ScharRan + " " + SplaceRan + " " + SPmodRan
            }
            else if(genreRan == "fantasy"){
                response = "A " + genreRan + " story about a " + CharModRan + " " + FcharRan + " " + FPlaceRan + " " + FPmodRan
            }
        makeElement()
    }
    Prompt()

    function AddDate(){
        const wkday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        const mo = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

        makeBlank()
        makeBlank()
        makeBlank()

        response = wkday[today.getDay()] + " " + mo[today.getMonth()] + " " + today.getDate().toString() + ", " + today.getFullYear().toString()
        makeElement()
    }
    AddDate()
});