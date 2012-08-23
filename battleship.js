"use strict";

define("battleship", [ 'jquery', 'src/BoardController' ], function($, BoardController) {

    function App(container) {
        this.$container = container;
        this.$shipsBoard = $('#shipsBoard')
            .appendTo(container);
        this.shipsBoardController = new BoardController(this.$shipsBoard);
        this.$shotsBoard = $('#shotsBoard')
            .appendTo(container);
        this.shotsBoardController = new BoardController(this.$shotsBoard);
    }

    return App;

});