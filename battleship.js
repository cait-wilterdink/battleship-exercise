/* Copyright (C) 2012, Conductor, Inc. All rights reserved */

"use strict";

define("battleship", [ 'jquery' ], function() {

    var rows = 16;
    var cols = 16;

    function App(container) {
        this.$container = container;
        this.$board = $('<div class="board"></div>').appendTo(container);
        this.redrawBoard();
    }

    App.prototype.redrawBoard = function() {
        this.placeBoxesAndLines();

    };

    App.prototype.placeBoxesAndLines = function() {
        this.$board.find('.gridLine.vertical').remove();
        this.$board.find('.gridLine.horizontal').remove();

        var boardW = this.$board.width();
        var boardH = this.$board.width();

        var lineX = 0;
        do {
            lineX += boardW/cols;
            $('<div class="gridLine vertical"></div>').css({ left: lineX }).appendTo(this.$board);
        } while (lineX < boardW);

        var lineY = 0;
        do {
            lineY += boardH/rows;
            $('<div class="gridLine horizontal"></div>').css({ top: lineY }).appendTo(this.$board);
        } while (lineY < boardH);

        for (var col = 0; col < rows; col++) {
            for (var row = 0; row < cols; row++) {
                var gridBox = $('<div class="gridBox"></div>')
                    .css({
                        width: boardW / cols - 2,
                        height: boardH / rows - 2,
                        left: col * (boardW / cols) + 1,
                        top: row * (boardH / rows) + 1
                    })
                    .attr('row', row)
                    .attr('col', col)
                    .appendTo(this.$board);
            }
        }

    };


    return App;

});