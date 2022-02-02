# Mine Sweeper

## Tech stack

-   JS
-   React

## Usability

![App](/ss/app.png)
In this game your goal is to uncover all empty cells, which don't contain a bomb inside of it.
Once you step on a bomb- the game is over.

#### Let's dive in.

![Board](/ss/board.png)
This is where the magic happens. Click on a cell to uncover what's beneath it, or right click to put a flag in it.  
There are several types of cells:  
![Cells](/ss/cells.png)
Cells with numbers inside of them indicate the amount of bomb adjacent to that particular cell. i.e In this example the bottom left cell has 1 adjacent bomb to it, while the mid-top cell has 2. Moreover, empty cells have 0 adjacent bombs (and are cleared automatically).

-   NOTE: You can not click on a flagged cell.  
    ![Difficulty](/ss/difficulty.png)
    In this control panel you can manage the amount of bombs that will be hidden between the cells on the board.  
    Easy - 5 bombs  
    Normal - 10 bombs  
    Hard - 25 bombs  
    Which will be indicated by our info container:  
    ![Info](/ss/info.png)
    And the score will be indicated above the board by:
    ![Score](/ss/score.png)
    Finally, if you step on a bomb you will lose the game
    ![Lose](/ss/lose.png)
    And if you clear all safe cells you will win
    ![Win](/ss/win.png)

# Good luck !
