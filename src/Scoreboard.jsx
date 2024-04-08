import { useState } from 'react'
import './Scoreboard.css'

function Scoreboard(props) {
    const [teams, setTeams] = useState([
        { name: 'Team 1', score: 0 },
        { name: 'Team 2', score: 0 }
    ])
    
    const incrementScore = (index) => {
        const newTeams = [...teams]
        newTeams[index].score++
        setTeams(newTeams)
    }
    
    const decrementScore = (index) => {
        const newTeams = [...teams]
        newTeams[index].score--
        setTeams(newTeams)
    }
    
    const addTeam = () => {
        const newTeams = [...teams, { name: `Team ${teams.length + 1}`, score: 0 }]
        setTeams(newTeams)
    }
    
    const resetScores = () => {
        const newTeams = teams.map(team => {
        return { ...team, score: 0 }
        })
        setTeams(newTeams)
    }

    const setTeamName = (index, name) => {
        const newTeams = [...teams]
        newTeams[index].name = name
        setTeams(newTeams)
    }

    const deleteTeam = (index) => {
        const newTeams = [...teams]
        newTeams.splice(index, 1)
        setTeams(newTeams)
    }


    return (
        <div className="scoreboard">
            <h2>{props.name}</h2>
            <button onClick={addTeam}>Add Team</button>
            <button onClick={resetScores}>Reset Scores</button>
            <br></br>
            {teams.map((team, index) => (
                <div key={index} className="team">
                    <input
                        value={team.name}
                        onChange={(e) => setTeamName(index, e.target.value)}
                    />
                    <div className="score">{team.score}</div>
                    <button onClick={() => incrementScore(index)}>+</button>
                    <button onClick={() => decrementScore(index)}>-</button>
                    <button onClick={() => deleteTeam(index)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Scoreboard;