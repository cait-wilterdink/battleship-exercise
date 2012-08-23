"use strict";

define([ "jquery" ], function($) {

    var rows = 16;
    var cols = 16;

    function BoardController($board) {
        this.$board = $board;
        this.redraw();
    }

    BoardController.prototype.redraw = function() {
        this.placeBoxesAndLines();
    };

    BoardController.prototype.placeBoxesAndLines = function() {
        this.$board.find('.gridLine.vertical').remove();
        this.$board.find('.gridLine.horizontal').remove();

        var boardW = this.$board.width();
        var boardH = this.$board.width();

        var lineX = boardW/cols;
        while (lineX < boardW) {
            $('<div class="gridLine vertical"></div>').css({ left: lineX }).appendTo(this.$board);
            lineX += boardW/cols;
        }

        var lineY = boardH/rows;
        while (lineY < boardH) {
            $('<div class="gridLine horizontal"></div>').css({ top: lineY }).appendTo(this.$board);
            lineY += boardH/rows;
        }

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

    BoardController.prototype.getElement = function() {
        return this.$element;
    };


    return BoardController;
});