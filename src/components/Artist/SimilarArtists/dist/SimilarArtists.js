"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Artist_styles_1 = require("../../../shared/styles/Artist.styles");
var SimilarArtists = function (_a) {
    var artists = _a.artists;
    console.log(artists);
    return (react_1["default"].createElement(Artist_styles_1.ArtistContainer, null, artists &&
        artists.map(function (_a) {
            var mbid = _a.mbid, image = _a.image, name = _a.name;
            return image &&
                image.map(function (img) {
                    return img.size === 'large' && (react_1["default"].createElement(Artist_styles_1.ImageContainer, { key: mbid },
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/artist/" + name },
                            react_1["default"].createElement(Artist_styles_1.ArtistImage, { src: img['#text'], key: img['#text'] }),
                            react_1["default"].createElement(Artist_styles_1.ArtistName, null, name))));
                });
        })));
};
exports["default"] = SimilarArtists;
