const fs = require("fs");
const express = require('express');
const router = express.Router();

const controller = {
    getTime: (req, res) => {
        const time = req.params.Time; // Captura o valor do parâmetro :Time
        res.send(`O valor do parâmetro Time é: ${time}`);
    }
};

const partidas = [
    { Id: 1, partida: 'Gremio X Inter' },
    { Id: 2, partida: 'Flamengo X Vasco' },
    { Id: 3, partida: 'Inter X Avai' },
    { Id: 4, partida: 'Flamengo X Gremio' },
    { Id: 5, partida: 'Real Madrid X Gremio' },
    { Id: 6, partida: 'Barcelona X Inter' },
]

const times = ['Gremio', 'Inter', 'Flamengo', 'Vasco', 'Avai', 'Real Madrid', 'Barcelona']


const listPartidas = async (req, res) => {
    res.json(partidas)
}


const getTime = async (req, res) => {
    try {
        const time_user = String(req.params.Time).toLowerCase(); // Normaliza para minúsculas
        // Filtra todas as partidas que contêm o time procurado
        const partidasEncontradas = partidas.filter(p => 
            p.partida.toLowerCase().includes(time_user)
        );

        if (partidasEncontradas.length === 0) {
            return res.status(204).json({ message: 'Partida não encontrada' });
        }

        res.status(200).json({ partidas: partidasEncontradas });

        return partidasEncontradas;
    } catch (error) {
        console.error('Erro ao processar a requisição:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

// const getTime = async (req, res) => {

//     const time_user = String(req.params.Time);
//     const partida = partidas.filter(p => p.partida == time_user);
//     console.log(partida)

//     if (!partida) {
//         return res.status(404).json({ message: 'Partida não encontrada' });
//     }

//     const procura_times = times.filter(item => partida.partida.includes(item))
//     res.status(200).json({procura_times})

//     return procura_times;
// };


module.exports = {
    listPartidas, getTime, router
}