"use strict";

define("battleship", [ 'jquery', 'src/HarborController', 'src/BoardController' ],
    function($, HarborController, BoardController) {

    function App(container) {
        this.$container = container;

        this.$shipsBoard = $('#shipsBoard');
        var shipsBoardController = new BoardController(this.$shipsBoard);
        this.$shotsBoard = $('#shotsBoard');
        var shotsBoardController = new BoardController(this.$shotsBoard);

        this.$harbor = $('#harbor');
        var harborController = new HarborController(this.$harbor,
            shipsBoardController.getSquareSize());

        // Temporary: add five mock ships to the harbor. Replace this
        // with real ship models once they're available.
        $.each([ 2, 3, 3, 4, 5], function(i, len) {
            harborController.addShip({
                ns: true,
                getLength: function() {
                    return len;
                },
                isNorthSouth: function() {
                    return this.ns;
                },
                rotate: function() {
                    this.ns = !this.ns;
                }
            });
        });

    }

    return App;
});