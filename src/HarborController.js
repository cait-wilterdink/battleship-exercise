"use strict";

define([ "jquery" ], function($) {

    function HarborController($harbor, boardSquareSize) {
        var t = this;

        t.$harbor = $harbor;
        t.boardSquareSize = boardSquareSize;

        t.$harbor.on('dblclick', '.ship', function(evt) {
            var $ship = $(evt.target);
            var ship = $ship.data('ship');
            ship.rotate();
            t.configureShip(ship, $ship);
        });

    }

    HarborController.prototype.configureShip = function(ship, $ship) {
        var width = this.boardSquareSize;
        var height = ship.getLength() * this.boardSquareSize;
        $ship.css({
            width: ship.isNorthSouth() ? width : height,
            height: ship.isNorthSouth() ? height : width
        })
            .data('ship', ship) // attach the ship object to the element
            .toggleClass('northSouth', ship.isNorthSouth())
            .toggleClass('eastWest', !ship.isNorthSouth());

    };

    HarborController.prototype.addShip = function(ship) {
        var $ship = $('<div class="ship"></div>');
        this.configureShip(ship, $ship);

        this.$harbor.append($ship);
    };

    return HarborController;
});
