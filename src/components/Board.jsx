import React from "react";
import Card from "./Card";
import catan_pic from "../assets/catan.png"
import coup_pic from "../assets/coup.png"
import onuw_pic from "../assets/onuw.png"
import resistance_pic from "../assets/resistance.png"
import monopoly_pic from "../assets/monopoly.png"
import life_pic from "../assets/life.png"
import chess_pic from "../assets/chess.png"
import scrabble_pic from "../assets/scrabble.png"
import battleship_pic from "../assets/battleship.png"
import risk_pic from "../assets/risk.png"

const Board = () => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <Card game="Settlers of Catan" src={catan_pic} type="Strategy" />
                        <Card game='Coup' src={coup_pic} type="Social Deduction" />
                        <Card game='ONUW' src={onuw_pic} type="Social Deduction/Bluff" />
                    </tr>
                    <tr>
                        <Card game='The Resistance: Avalon' src={resistance_pic} type="Social Role-Playing Card-Based"/>
                        <Card game='Monopoly' src={monopoly_pic} type="Real-Estate"/>
                        <Card game='The Game of Life' src={life_pic} type="Parlour"/>
                    </tr>
                    <tr>
                        <Card game='Chess' src={chess_pic} type="Abstract Strategy"/>
                        <Card game='Scrabble' src={scrabble_pic} type="Board-and-Tile"/>
                        <Card game='Battleship' src={battleship_pic} type="Strategy Type Guessing"/>
                        <Card game='Risk' src={risk_pic} type="Strategy"/>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Board