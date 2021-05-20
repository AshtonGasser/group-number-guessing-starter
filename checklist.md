- [ ] 
- [ ] SERVER SETUP FILE STRUCTURE
    - [X] Make .gitignore file in root folder
    - [X] Make readme.md file in root folder (optional, but recommended)
        - [X] Make server folder in root folder
            - [X] Make server.js file in server folder
            - [X] Make modules folder
            - [X] Make public folder
                - [ ] Add favicon.ico file in public folder
                - [X] Make index.html in public folder
                    - [X] Link "./styles/style.css"
                    - [X] Source in "./vendors/jquery-3.6.0.js" above
                    - [X] Source in "./scripts/client.js" 
                - [X] Make scripts folder
                    - [X] Make client.js file here
                        - [X] Make sure to source in jQuery
                - [X] Make styles folder
                    - [X] Make style.css file here
                    - [ ] Source in bootstrap if you like
                - [X] Make vendors folder
                    - [X] Add jQuery.js file here


- [ ] LOGIC/TRACKING NEEDED
    - [ ] Generate a random number between 1 and 25
        - [ ] Done as a function
        - [ ] Done and stored on the server
    - [ ] Compare numbers sent from inputs to random number
        - [ ] All done on server
    - [ ] Total guesses tracked per game round
        - [ ] Stored on server
        - [ ] Reset after game is finished
    - [ ] Compare guesses against random number, return too low or too high


- [ ] HTML:
    - [X] Add input fields to match the number of people in your group. 
    - [ ] Add area to display: 
        - [ ] After submitting a round of guesses, retrieve all of the previous guesses (GET) and display them on the screen.
        - [ ] Let each user know whether their guess was correct, too low or too high.
        - [X] a submit guesses button (submits all guesses at the same time)
        - [ ] total guesses made indicator (think of this as rounds in a game)
        - [ ] if a guess is correct PROMINENTLY Display which player won (make 'em FEEL it)
        - [X] if there is a winner, a restart button that tells the server to select a new random number (POST)


- [ ] CSS: 
    - [ ] Add winner class to toggle when player wins. 


- [ ] Optional ideas for later:
    - [ ] Inputs for player names, to be displayed at the top of their game tracking area
    - [ ] Track total games won by each player